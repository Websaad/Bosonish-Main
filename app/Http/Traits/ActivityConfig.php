<?php

namespace App\Http\Traits;

use Spatie\Activitylog\LogOptions;

trait ActivityConfig
{
    // protected $targetColumn = 'id';
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
                ->logExcept([ 'updated_at','created_at','deleted_at'])
                ->useLogName($this->logName)
                ->logFillable()
                ->logOnlyDirty();
        // return LogOptions::defaults()->useLogName($this->logName())->logOnlyDirty(['*']);
    }

    public function getSubjectColumnAttribute(){
        return $this->subjectColumn ?? "id";
    }

}
