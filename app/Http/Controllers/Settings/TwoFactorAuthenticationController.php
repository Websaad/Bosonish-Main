<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\TwoFactorLoginRequest;
use App\Notifications\TwoFactorAuthNotification;
use Illuminate\Http\Request;

class TwoFactorAuthenticationController extends Controller
{
    /**
     * Get Two Factor QR Code for the Authenticated User.
     *
     * @param  mixed  $request
     * @return svg
     */
    public function getUserTwoFactorCode()
    {

        if(auth()->user()->hasEnabledTwoFactorAuthentication()){
            return response()->json([
                'qrCode' => auth()->user()->twoFactorQrCodeSvg(),
                'recoveryCodes' => auth()->user()->recoveryCodes(),
                'two_factor_enabled' => true,
            ]);
        }else{
            return response()->json([
                'qrCode' => '',
                'recoveryCodes' => [],
                'two_factor_enabled' => false,
            ]);
        }
    }
    /**
     * Generate two factor Secruity Keys for authenticated user.
     *
     * @param  mixed  $request
     * @return svg
     */
    public function generate(Request $request)
    {
        auth()->user()->generateTwoFactorAuthentication();
        return response()->json([
            'qrCode' => auth()->user()->twoFactorQrCodeSvg(),
            'recoveryCodes' => auth()->user()->recoveryCodes(),
        ]);
    }

    /**
     * Enable two factor authentication for the user.
     *
     * @param  mixed  $request
     * @return json
     */
    public function enable(Request $request)
    {
        auth()->user()->enableTwoFactorAuthentication();
        auth()->user()->notify(new TwoFactorAuthNotification());
        return response(
            [
                'success' => true,
                'message' => 'Two factor authentication enabled.',
                'user' => auth()->user(),
            ],
            200
        );
    }

    /**
     * Disable two factor authentication for the user.
     *
     * @param  mixed  $request
     * @return void
     */
    public function disable(Request $request)
    {
        auth()->user()->disableTwoFactorAuthentication();
        return response([
            'success' => true,
            'message' => 'Two factor authentication disabled.',
            'qrCode' => '',
            'recoveryCodes' => [],
            'two_factor_enabled' => false,
        ], 200);
    }


    /**
     * Regenerate Recovery Codes For The Authenticated User.
     *
     * @param  mixed  $request
     * @return void
     */
    public function regenerate(Request $request)
    {
        auth()->user()->regenerateRecoveryCode();
        return response([
            'success' => true,
            'message' => 'Recovery codes regenerated.',
            'recoveryCodes' => auth()->user()->recoveryCodes(),
        ], 200);
    }

    /**
     * Verify Recovery Codes For The Authenticated User.
     *
     * @param  mixed  $request
     * @return void
     */
    public function verify(TwoFactorLoginRequest $request)
    {
        if ($code = $request->validRecoveryCode()) {
            auth()->user()->replaceRecoveryCode($code);
        } elseif (! $request->hasValidCode()) {
            return response([
                'success' => false,
                'message' => 'Invalid code.',
            ], 422);
        }

        return response([
            'success' => true,
            'message' => 'Two Factor Authentication verified.',
        ], 200);
    }


}
