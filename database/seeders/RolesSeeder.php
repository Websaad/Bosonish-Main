<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $roles = [
            [
                'name' => 'super_admin',
                'display_name' => 'Super Admin',
                'description' => 'super admin role',
            ],
            [
                'name' => 'admin',
                'display_name' => 'Admin',
                'description' => 'admin role',
            ],
            [
                'name' => 'customer',
                'display_name' => 'Customer',
                'description' => 'customer role',
            ],
        ];
        Role::insert($roles);
        Role::find(1)->syncPermissions([
            'dashboard','settings','manage-roles','manage-permissions','assign-permission','manage-profile','manage-users',
            'manage-options',
        ]);
        Role::find(2)->syncPermissions([
            'dashboard','settings','manage-roles','manage-permissions','assign-permission','manage-profile','manage-users',
        ]);

    }
}
