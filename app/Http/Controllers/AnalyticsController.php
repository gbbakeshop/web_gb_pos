<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnalyticsController extends Controller
{
    public function index(Request $request)
    {

        $year = $request->year;
        $periodic = $request->periodic;
        $data = [];
        switch ($periodic) {
            case 'daily':
                $data  = Sales::whereYear('created_at', $year)
                    ->groupBy(DB::raw('DATE(created_at)')) // Group by date only
                    ->selectRaw('DATE(created_at) as data, COUNT(*) as count, SUM(total) as total') // Calculate total sales amount
                    ->orderBy('data')
                    ->get();
                break;
            case 'weekly':
                $data = Sales::whereYear('created_at', $year)
                    ->groupBy(DB::raw('WEEK(created_at)')) // Group by week number
                    ->selectRaw('WEEK(created_at) as data, COUNT(*) as count, SUM(total) as total') // Calculate total sales amount
                    ->orderBy('data')
                    ->get();
                break;
            case 'monthly':
                $data = Sales::whereYear('created_at', $year)
                    ->groupBy(DB::raw('MONTH(created_at)')) // Group by month
                    ->selectRaw('MONTH(created_at) as data, COUNT(*) as count, SUM(total) as total') // Calculate total sales amount
                    ->orderBy('data')
                    ->get();

                break;
            case 'quarterly':

                $data = Sales::whereYear('created_at', $year)
                    ->groupBy(DB::raw('YEAR(created_at)'), DB::raw('QUARTER(created_at)'))
                    ->selectRaw('QUARTER(created_at) as data, COUNT(*) as count, SUM(total) as total')
                    ->orderBy('data')
                    ->get();
                break;
        }

        return response()->json([
            'status' => 'success',
            'data' => $data,
        ], 200);
    }
}
