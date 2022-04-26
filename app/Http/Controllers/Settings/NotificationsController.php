<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Resources\GeneralResourceCollection;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    public function fetch(Request $request){

        $searchAbles = ['name','display_name','description'];
        $length = $request->input('length');
        $orderBy = $request->input('sortBy'); //Index
        $dir = ($request->input('sortDesc') == 'true') ? 'DESC' : 'ASC';
        $searchValue = $request->input('search');

        $query = auth()->user()->notifications();
        $data = $query->paginate($length);

        return new GeneralResourceCollection($data);

    }

    public function unread(){

        return response()->json([
            'success' => true,
            'data' => auth()->user()->unreadNotifications
        ]);
    }

    public function markAsRead(Request $request){

        $notificaiton = auth()->user()->unreadNotifications;
        if(is_array($request->ids)){
            $notificaiton = $notificaiton->whereIn('id',$request->ids);
        }else{
            $notificaiton = $notificaiton->find($request->ids);
        }
        // dd($notificaiton);
        $notificaiton->markAsRead();

        return response()->json([
            'success' => true,
            'message' => 'Marked as Read'
        ]);
    }

    public function markAsUnRead(Request $request){

        $notificaiton = auth()->user()->notifications;
        if(is_array($request->ids)){
            $notificaiton = $notificaiton->whereIn('id',$request->ids);
        }else{
            $notificaiton = $notificaiton->find($request->ids);
        }
        $notificaiton->markAsUnRead();

        return response()->json([
            'success' => true,
            'message' => 'Marked as Unread'
        ]);
    }

}
