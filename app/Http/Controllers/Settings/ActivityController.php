<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Resources\GeneralResourceCollection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;

class ActivityController extends Controller
{
    public function fetch(Request $request)
    {
        $searchAbles = ['log_name','event','created_at'];

        $length = $request->input('length');
        $orderBy = $request->input('sortBy'); //Index
        $dir = ($request->input('sortDesc') == 'true') ? 'DESC' : 'ASC';
        $searchValue = $request->input('search');

        $query = Activity::query()->with(['causer','subject'])->orderBy($orderBy, $dir);

        if ($searchValue) {
            $query->where(function($query) use ($searchValue,$searchAbles) {
                foreach($searchAbles as $c){
                    $query->orWhere($c, 'like', '%' . $searchValue . '%');
                }
            });
        }
        $data = $query->paginate($length);

        return new GeneralResourceCollection($data);
    }

    public function show($id)
    {
        try {
            $activity = Activity::query()->with(['causer'])->findOrFail($id);
            return response()->json($activity);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Activity not found'], 404);
        }
    }
}
