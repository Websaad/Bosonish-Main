<?php

namespace App\Http\Traits;

use BaconQrCode\Renderer\Color\Rgb;
use BaconQrCode\Renderer\Image\SvgImageBackEnd;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\RendererStyle\Fill;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;
use Illuminate\Support\Str;
use PragmaRX\Google2FA\Google2FA;
use Illuminate\Support\Collection;

trait TwoFactorAuthenticatable
{
    /**
     * Determine if two-factor authentication has been enabled.
     *
     * @return bool
     */
    public function hasEnabledTwoFactorAuthentication()
    {
        return !is_null($this->two_factor_secret);
    }

    /**
     * Get the user's two factor authentication recovery codes.
     *
     * @return array
     */
    public function recoveryCodes()
    {
        return json_decode(decrypt($this->two_factor_recovery_codes), true);
    }

    /**
     * Replace the given recovery code with a new one in the user's stored codes.
     *
     * @param  string  $code
     * @return void
     */
    public function replaceRecoveryCode($code)
    {
        $this->forceFill([
            'two_factor_recovery_codes' => encrypt(str_replace(
                $code,
                $this->generate(),
                decrypt($this->two_factor_recovery_codes)
            )),
        ])->save();
    }

    /**
     * Regenerate users recovery codes in database.
     *
     * @param  string  $code
     * @return void
     */
    public function regenerateRecoveryCode()
    {
        $this->forceFill([
            'two_factor_recovery_codes' => encrypt(json_encode(Collection::times(8, function () {
                return $this->generate();
            })->all())),
        ])->save();
    }


    /**
     * Get the QR code SVG of the user's two factor authentication QR code URL.
     *
     * @return string
     */
    public function twoFactorQrCodeSvg()
    {
        $svg = (new Writer(
            new ImageRenderer(
                new RendererStyle(192, 0, null, null, Fill::uniformColor(new Rgb(255, 255, 255), new Rgb(45, 55, 72))),
                new SvgImageBackEnd
            )
        ))->writeString($this->twoFactorQrCodeUrl());

        return trim(substr($svg, strpos($svg, "\n") + 1));
    }

    /**
     * Get the two factor authentication QR code URL.
     *
     * @return string
     */
    public function twoFactorQrCodeUrl()
    {
        $google2fa = new Google2FA();
        return $google2fa->getQRCodeUrl(
            config('app.name'),
            $this->email,
            decrypt($this->two_factor_secret)
        );
    }

    /**
     * Generate a new recovery code.
     *
     * @return string
     */
    public function generate()
    {
        return Str::random(10).'-'.Str::random(10);
    }

    /**
     * Enable two factor authentication for the user.
     *
     * @param  mixed  $user
     * @return void
     */
    public function generateTwoFactorAuthentication()
    {
        $google2fa = new Google2FA();
        $this->forceFill([
            'two_factor_secret' => encrypt($google2fa->generateSecretKey()),
            'two_factor_recovery_codes' => encrypt(json_encode(Collection::times(8, function () {
                return $this->generate();
            })->all())),
        ])->save();
    }

    /**
     * Enable two factor authentication for the user.
     *
     * @param  mixed  $user
     * @return void
     */
    public function enableTwoFactorAuthentication()
    {
        $this->forceFill([
            'two_factor_enabled' => true,
        ])->save();
    }

    /**
     * Enable two factor authentication for the user.
     *
     * @param  mixed  $user
     * @return void
     */
    public function disableTwoFactorAuthentication()
    {
        $this->forceFill([
            'two_factor_secret' => null,
            'two_factor_recovery_codes' => null,
            'two_factor_enabled' => false,
        ])->save();
    }
}
