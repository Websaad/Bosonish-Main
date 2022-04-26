<?php

namespace App\Imports;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToArray;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class PropertyImport implements ToCollection, WithChunkReading, WithBatchInserts,ShouldQueue
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        Log::info($collection->toArray());
        Log::info('Next chunk --------------------------------------------------');
        $collection = [];

    }

    public function batchSize(): int
    {
        return 1000;
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}
