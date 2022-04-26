<?php

namespace App\Models;

use App\Http\Traits\ActivityConfig;
use Laratrust\Models\LaratrustRole;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Role extends LaratrustRole implements Searchable
{
    use LogsActivity;
    use ActivityConfig;
    protected $subjectColumn = 'description';
    protected $logName = 'Role';

    protected $appends = [
        'subject_column'
    ];

    protected $fillable = [
        'name', 'display_name', 'description'
    ];

    public function getSearchResult(): SearchResult
    {
        $url = "/settings/roles";

        return new \Spatie\Searchable\SearchResult(
            $this,
            $this->display_name,
            $url,
        );
    }
}
