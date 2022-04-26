<?php

namespace App\Http\Controllers;

use App\Imports\PropertyImport;
use App\Models\TaxOwner;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class PropertyImportController extends Controller
{
    public function index(){
        // $imports = Excel::toArray(new PropertyImport(),public_path('/importables/test.csv'));
        // $imports = Excel::toCollection(new PropertyImport(),public_path('/importables/warren.csv'));
        Excel::queueImport(new PropertyImport(),public_path('/importables/hsdgahdjasd.csv'));
        dd(1);


        //dd($imports->toArray());
        // (new UsersImport)->import('users.csv', null, \Maatwebsite\Excel\Excel::CSV);

        // Excel::import(new UsersImport, 'users.xlsx');
    }


    public function compare(){



        $db_colums = TaxOwner::$colums;
        $excel_colums = TaxOwner::$excel_colums;

        

        sort($db_colums);
        sort($excel_colums);

        $diff = array_diff($db_colums, $excel_colums);

        // dd(count(TaxOwner::$excel_colums));
        return $diff;
    }
}
