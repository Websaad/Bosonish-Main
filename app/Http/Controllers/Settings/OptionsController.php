<?php

namespace App\Http\Controllers\Settings;

use App\Http\Resources\GeneralResourceCollection;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Option;

class OptionsController extends Controller
{

    public function index( Request $request ){

        $searchAbles = ['key','value'];
        $length = $request->input('length');
        $orderBy = $request->input('sortBy'); //Index
        $dir = ($request->input('sortDesc') == 'true') ? 'DESC' : 'ASC';
        $searchValue = $request->input('search');

        $query = Option::orderBy($orderBy, $dir);

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

    public function show($id){

        $data = Option::findOrFail($id);
        return response()->json($data);
    }

    public function destroy($id){

        $data = Option::findOrFail($id);
        $data->delete();

    }

    public function store(Request $request){

        $this->validate($request, [
            'key' => 'required',
            'value' => 'required',
        ]);
        $opt = Option::set($request->key,$request->value);
        return response()->json([
            'success' => 1,
            'data'    => $opt,
            'message' => 'Option Updated Successfully'
        ]);
    }
}
