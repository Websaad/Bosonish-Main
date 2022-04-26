<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Resources\GeneralResourceCollection;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;


class RolesController extends Controller
{
    public function fetch(Request $request){

        $searchAbles = ['name','display_name','description'];
        $length = $request->input('length');
        $orderBy = $request->input('sortBy'); //Index
        $dir = ($request->input('sortDesc') == 'true') ? 'DESC' : 'ASC';
        $searchValue = $request->input('search');

        $query = Role::orderBy($orderBy, $dir);

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

    public function all()
    {
        $roles = Role::query()->select(['id as value','display_name as label'])->get();
        return response()->json($roles);

    }

    // Roles Store to DB
    public function store(Request $request)
    {
        if($request->id){
            $this->validate($request, [
                'display_name' => 'required',
                'description' => 'required',
            ]);
        }else{
            $this->validate($request, [
                'name' => 'required|unique:roles',
                'display_name' => 'required',
                'description' => 'required',
            ]);
        }

        $data = $request->id ? Role::findOrFail($request->id) : new Role;
        if(!$request->id){
            $data->name         = $request->name;
        }
        $data->display_name = $request->display_name;
        $data->description  = $request->description;
        $data->save();

        return response()->json([
                'success'   =>  1,
                'message'   =>  ($request->id) ? 'Role has been updated' : 'Role has been created.',
        ]);
    }

    // Delete Roles from DB
    public function destroy(Request $request)
    {
        try {
            $role = Role::findOrFail($request->id);
            $role->users()->sync([]); // Delete relationship data
            $role->permissions()->sync([]); // Delete relationship data
            $role->forceDelete(); // Now force delete will work regardless of whether the pivot table has cascading delete
            $success = 'Role has been deleted.';
            return response()->json([
                'success' => 1,
                'message' => $success
            ]);
        } catch (ModelNotFoundException $ex) {
            if ($ex instanceof ModelNotFoundException) {
                return response()->json([
                    'success' => 0,
                    'message' => 'Something went Wrong'
                ]);
            }
        }
    }


    public function assign(Request $request)
    {
        $user = User::findOrFail($request->id);
        $user->syncRoles($request->roles);
        return response()->json([
            'success'   =>  1,
            'message'   =>  'Role has been assigned.',
        ]);
    }

}
