<?php

namespace App\Models;

use Laratrust\Models\LaratrustPermission;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Permission extends LaratrustPermission implements Searchable
{
    protected $fillable = [
        'name', 'display_name', 'description'
    ];

    public function getSearchResult(): SearchResult
    {
        $url = "/settings/permissions";

        return new \Spatie\Searchable\SearchResult(
            $this,
            $this->display_name,
            $url
        );
    }
}
