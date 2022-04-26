<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Resources\GeneralResourceCollection;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PermissionController extends Controller
{

    public function fetch(Request $request)
    {
        $searchAbles = ['name','display_name','description'];
        $length = $request->input('length');
        $orderBy = $request->input('sortBy'); //Index
        $dir = ($request->input('sortDesc') == 'true') ? 'DESC' : 'ASC';
        $searchValue = $request->input('search');

        $query = Permission::orderBy($orderBy, $dir);

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
        if($request->id){
            $this->validate($request, [
                'display_name' => 'required',
                'description' => 'required',
            ]);
        }else{
            $this->validate($request, [
                'name' => 'required|unique:permissions',
                'display_name' => 'required',
                'description' => 'required',
            ]);
        }

        $data = $request->id ? Permission::findOrFail($request->id) : new Permission;
        if(!$request->id){
            $data->name         = $request->name;
        }
        $data->display_name = $request->display_name;
        $data->description  = $request->description;
        $data->group  = $request->group;
        $data->save();

        return response()->json([
                'success'   =>  1,
                'message'   =>  ($request->id) ? 'Permission has been updated' : 'Permission has been created.',
        ]);
    }


    // Permission Delete from DB
    public function destroy(Request $request)
    {
        $id = $request->id;
        try {
            $permission = Permission::findOrFail($id);
            DB::table("permission_role")->where('permission_id', $id)->delete();
            $permission->delete();
            return response()->json([
                'success' => 1,
                'message' => "The Permission <strong>$permission->name</strong> has successfully been deleted."
            ]);

        } catch (ModelNotFoundException $ex) {
            if ($ex instanceof ModelNotFoundException) {
                return response()->json([
                    'success' => 0,
                    'message' => "something Went wrong!"
                ]);
            }
        }
    }

    public function groupwise(Request $request)
    {
        // dd(1);
        $permissions = Permission::query()->get()->groupBy('group');
        $role_permissions = Role::find($request->role)->permissions->pluck('id')->toArray();
        return response()->json([
            'success' => 1,
            'message' => 'Permissions Updated',
            'data'    => [
                'permissions' => $permissions,
                'role_permissions' => $role_permissions
            ]
        ]);
    }

    public function assign(Request $request)
    {
        $role = Role::findOrFail($request->role);
        $role->syncPermissions($request->permissions);
        return response()->json([
            'success' => 1,
            'message' => 'Permissions Updated',
        ]);
    }

    public function getUserPermissions()
    {
        // auth()->user()->syncRoles(['super-admin','manager']);
        $roles = auth()->user()->roles;

        return response()->json([
            'permissions' => auth()->user()->allPermissions()->pluck('name')->toArray(),
            'roles' => $roles->pluck('name')->toArray()
        ]);
    }

}
