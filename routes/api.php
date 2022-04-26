<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\OAuthController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\Settings\ActivityController;
use App\Http\Controllers\Settings\NotificationsController;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\PermissionController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\RolesController;
use App\Http\Controllers\Settings\SearchController;
use App\Http\Controllers\Settings\OptionsController;
use App\Http\Controllers\Settings\TwoFactorAuthenticationController;
use App\Http\Controllers\Settings\UserController as SettingsUserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('session_s', function () {
    Session::put('usman', 'ibram');
    Session::save();

    return Session::all();
});
Route::get('session_t', function () {

    return Session::all();
});



Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', [LoginController::class, 'logout']);
    Route::get('user', [UserController::class, 'current']);
    // Two Factor Authentication Routes
    Route::get('2fa', [TwoFactorAuthenticationController::class, 'getUserTwoFactorCode']);
    Route::post('2fa/enable', [TwoFactorAuthenticationController::class, 'enable']);
    Route::post('2fa/disable', [TwoFactorAuthenticationController::class, 'disable']);
    Route::post('2fa/generate', [TwoFactorAuthenticationController::class, 'generate']);
    Route::post('2fa/regenerate', [TwoFactorAuthenticationController::class, 'regenerate']);
    Route::post('2fa/verify', [TwoFactorAuthenticationController::class, 'verify']);

    Route::get('notifications',[NotificationsController::class,'unread']);
    Route::prefix('settings')->group(function () {

        Route::patch('profile', [ProfileController::class, 'update']);
        Route::patch('password', [PasswordController::class, 'update']);

        // Notification Routes
        Route::get('notifications', [NotificationsController::class, 'fetch']);
        Route::post('notifications/read', [NotificationsController::class, 'markAsRead']);
        Route::post('notifications/unread', [NotificationsController::class, 'markAsUnRead']);

        // Roles Routes
        Route::get('roles', [RolesController::class, 'fetch']);
        Route::post('roles/store', [RolesController::class, 'store']);
        Route::delete('roles/{id}/delete', [RolesController::class, 'destroy']);
        Route::get('roles/all', [RolesController::class, 'all']);
        Route::post('roles/assign', [RolesController::class, 'assign']);

        // Roles Routes
        Route::get('users', [SettingsUserController::class, 'fetch']);
        Route::post('users/store', [SettingsUserController::class, 'store']);
        Route::delete('users/{id}/delete', [SettingsUserController::class, 'destroy']);
        Route::post('users/archive', [SettingsUserController::class, 'archive']);

        // Permission Routes
        Route::get('permissions', [PermissionController::class, 'fetch']);
        Route::post('permissions/store', [PermissionController::class, 'store']);
        Route::post('permissions/{id}/delete', [PermissionController::class, 'destroy']);
        Route::get('permissions/getUserPermissions', [PermissionController::class, 'getUserPermissions']);
        Route::get('permissions/groupwise', [PermissionController::class, 'groupwise']);
        Route::post('permissions/assign', [PermissionController::class, 'assign']);
        Route::get('role_permissions', [PermissionController::class, 'getUserPermissions']);

        // Admin Options Routes
        Route::get('options', [OptionsController::class, 'index']);
        Route::post('options/store', [OptionsController::class, 'store']);
        Route::post('options/{id}', [OptionsController::class, 'show']);
        Route::get('options/{id}/delete', [OptionsController::class, 'destroy']);

        // Activity Log Routes
        Route::get('activities', [ActivityController::class, 'fetch']);
        Route::get('activity/{id}', [ActivityController::class, 'show']);

    });
    // Global Search
    Route::get('search', [SearchController::class, 'index']);
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', [LoginController::class, 'login']);
    Route::post('register', [RegisterController::class, 'register']);

    Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail']);
    Route::post('password/reset', [ResetPasswordController::class, 'reset']);

    Route::post('email/verify/{user}', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::post('email/resend', [VerificationController::class, 'resend']);

    Route::post('oauth/{driver}', [OAuthController::class, 'redirect']);
    Route::get('oauth/{driver}/callback', [OAuthController::class, 'handleCallback'])->name('oauth.callback');
});
