<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        User::create([
            'name' => 'Boson Studio',
            'email' => 'admin@bosonstudio.com',
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
        ])->roles()->attach(1);

        User::create([
            'name' => 'Admin',
            'email' => 'client@bosonstudio.com',
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
        ])->roles()->attach(2);

        User::factory()->times(100)->create();
    }
}
