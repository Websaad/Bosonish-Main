<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            [
                'name' => 'dashboard',
                'display_name' => 'Dashboard',
                'description' => 'Allow Dashboard View',
                'group' => 'Dashboard',
            ],
            [
                'name' => 'settings',
                'display_name' => 'Settings',
                'description' => 'Allow Setting Tab',
                'group' => 'Settings',
            ],
            [
                'name' => 'manage-roles',
                'display_name' => 'Manage Roles',
                'description' => 'Allow Manage Role Menu item and Page',
                'group' => 'Settings',
            ],
            [
                'name' => 'manage-permissions',
                'display_name' => 'Manage Permissions',
                'description' => 'Allow Manage Permission Menu item and Page',
                'group' => 'Settings',
            ],
            [
                'name' => 'assign-permission',
                'display_name' => 'Assign Permission',
                'description' => 'Allow Assign Permission Page and Button',
                'group' => 'Settings',
            ],
            [
                'name' => 'manage-profile',
                'display_name' => 'Manage Profile',
                'description' => 'Allow Profile Page',
                'group' => 'Settings',
            ],
            [
                'name' => 'manage-users',
                'display_name' => 'Manage Users',
                'description' => 'Assign different permissions to users',
                'group' => 'Settings',
            ],
            [
                'name' => 'manage-options',
                'display_name' => 'Manage Options',
                'description' => 'Manage Options',
                'group' => 'Settings',
            ],
        ];
        Permission::insert($permissions);
    }
}
