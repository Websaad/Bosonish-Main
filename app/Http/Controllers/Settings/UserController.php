<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Resources\GeneralResourceCollection;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function fetch(Request $request){

        $searchAbles = ['name','email'];
        $length = $request->input('length');
        $orderBy = $request->input('sortBy'); //Index
        $dir = ($request->input('sortDesc') == 'true') ? 'DESC' : 'ASC';
        $searchValue = $request->input('search');

        $query = User::query()->with(['roles'])->orderBy($orderBy, $dir);

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

    // Roles Store to DB
    public function store(Request $request)
    {
        $data = $request->id ? User::query()->findOrFail($request->id) : new User;

        if($request->id){
            $this->validate($request, [
                'name' => 'required',
                'email' => 'required|unique:users,email,'.$data->id,
            ]);
        }else{
            $this->validate($request, [
                'name' => 'required',
                'email' => 'required|unique:users',
                'password' => 'required',
            ]);
        }


        if($request->password){
            $data->password = bcrypt($request->password);
        }
        $data->name = $request->name;
        $data->email  = $request->email;
        $data->save();

        return response()->json([
            'success'   =>  1,
            'message'   =>  ($request->id) ? 'User has been updated' : 'User has been created.',
        ]);
    }

    // Delete Roles from DB
    public function destroy($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->roles()->sync([]); // Delete relationship data
            $user->permissions()->sync([]); // Delete relationship data
            $user->forceDelete(); // Now force delete will work regardless of whether the pivot table has cascading delete
            $success = 'User has been deleted.';
            return response()->json([
                'success' => 1,
                'message' => $success
            ]);
        } catch (ModelNotFoundException $ex) {
            return response()->json([
                'success' => 0,
                'message' => 'Something went Wrong'
            ]);
        }
    }

    // Delete Roles from DB
    public function archive(Request $request)
    {
        try {
            $user = User::whereIn('id',$request->ids)->delete();
            $success = 'Users has been archived.';
            return response()->json([
                'success' => 1,
                'message' => $success
            ]);
        } catch (ModelNotFoundException $ex) {
            return response()->json([
                'success' => 0,
                'message' => 'Something went Wrong'
            ]);
        }
    }
}
