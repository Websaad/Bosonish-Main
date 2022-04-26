<?php

use App\Http\Controllers\PropertyImportController;
use App\Models\User;
use App\Notifications\TwoFactorAuthNotification;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test_notification', function () {
    $data = [
        'body' => 'Two factor authentication is enabled for your account. Please login to your account and verify your account.',
        'type' => config('constants.NOTIFICATION_TYPES.READ_ONLY')
    ];
    User::find(1)->notify(new TwoFactorAuthNotification($data));
});

Route::get('/import',[PropertyImportController::class,'index'])->name('import');
Route::get('/compare',[PropertyImportController::class,'compare'])->name('compare');


