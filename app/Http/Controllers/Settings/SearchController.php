<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;
use Spatie\Searchable\Search;

class SearchController extends Controller
{
    public function index(Request $request){

        if($request->q == null) return response()->json([]);

        $searchResults = (new Search())
                    ->registerModel(Role::class,['display_name','description'])
                    ->registerModel(Permission::class, ['display_name','description'])
                    ->search($request->q);

        return response()->json($searchResults);
    }
}
