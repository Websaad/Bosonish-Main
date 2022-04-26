<?php

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use PragmaRX\Google2FA\Google2FA;

class TwoFactorLoginRequest extends FormRequest
{
    /**
     * The user attempting the two factor challenge.
     *
     * @var mixed
     */
    protected $challengedUser;

    /**
     * Indicates if the user wished to be remembered after login.
     *
     * @var bool
     */
    protected $remember;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'code' => 'nullable|string',
            'recovery_code' => 'nullable|string',
        ];
    }

    /**
     * Determine if the request has a valid two factor code.
     *
     * @return bool
     */
    public function hasValidCode()
    {
        $google2fa = new Google2FA();

        return $this->code && $google2fa->verifyKey(
            decrypt($this->challengedUser()->two_factor_secret),
            $this->code
        );
    }

    /**
     * Get the valid recovery code if one exists on the request.
     *
     * @return string|null
     */
    public function validRecoveryCode()
    {
        if (! $this->recovery_code) {
            return;
        }

        return collect($this->challengedUser()->recoveryCodes())->first(function ($code) {
            return hash_equals($this->recovery_code, $code) ? $code : null;
        });
    }

    /**
     * Get the user that is attempting the two factor challenge.
     *
     * @return mixed
     */
    public function challengedUser()
    {
        if ($this->challengedUser) {
            return $this->challengedUser;
        }

        return $this->challengedUser = auth()->user();
    }
}
