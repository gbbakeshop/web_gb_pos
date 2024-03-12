<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\User;
use Illuminate\Http\Request;

class AccountDetailsController extends Controller
{
    public function index(Request $request)
    {
        $query = Sales::where('cashier_id', $request->cashier_id);

        // Add search date filter if provided
        if ($request->search !== null) {
            if ($request->has('search')) {
                $query->whereDate('created_at', $request->search);
            }
        }

        // Add year filter if provided
        if ($request->has('year')) {
            $query->whereYear('created_at', $request->year);
        }

        $distinctDates = $query
            ->selectRaw('DATE(created_at) as distinct_date')
            ->distinct()
            ->pluck('distinct_date');

        $dailySales = [];
        $account = User::where('id', $request->cashier_id)->first();
        foreach ($distinctDates as $i => $date) {
            $salesForDate = Sales::where('cashier_id', $request->cashier_id)
                ->whereDate('created_at', $date)
                ->get();

            // Calculate the total sum for the sales of the current date
            $totalSum = $salesForDate->sum('total');

            $dailySales[$i] = [
                'date' => $date,
                'account' => $account,
                'total_sum' => $totalSum,
            ];
        }

        return response()->json([
            'status' => 'success',
            'data' => $dailySales,
        ], 200);
    }
}
