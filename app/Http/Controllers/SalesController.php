<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Sales;
use App\Models\SalesItem;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    public function index(Request $request)
    {
        $perPage = 10;
        $query = Sales::with('sales_item')->orderBy('created_at', 'desc');

        // Add search functionality
        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where('receipt_id', 'like', "%$searchTerm%");
        }

        $sales = $query->paginate($perPage);
        $salesData = [];

        foreach ($sales as $sale) {
            $saleData = $sale->toArray();
            $items = [];

            foreach ($sale->sales_item as $item) {
                $product = Product::find($item['product_id']);

                if ($product) {
                    $items[] = [
                        'id' => $item['id'],
                        'product_id' => $item['product_id'],
                        'quantity' => $item['quantity'],
                        'price' => $item['price'],
                        'product' => $product->toArray(),
                        'created_at' => $item['created_at'],
                        'updated_at' => $item['updated_at'],
                    ];
                }
            }

            $saleData['sales_item'] = $items;
            $salesData[] = $saleData;
        }

        return response()->json([
            'data' => $salesData,
            'next_page_url' => $sales->nextPageUrl()
        ], 200);
    }


    public function store(Request $request)
    {
        $sales = Sales::create($request->payment);
        foreach ($request->cart as $value) {
            // $product = Product::findOrFail($value['id']);
            // $product->update([
            //     'quantity' => $product->quantity - $value['quantity']
            // ]);
            SalesItem::create([
                'sales_id' => $sales->id,
                'product_id' => $value['id'],
                'quantity' => $value['quantity'],
                'price' => $value['price'],
            ]);
        }

        return response()->json([
            'status' => 'success',
        ], 200);
    }

    
}
