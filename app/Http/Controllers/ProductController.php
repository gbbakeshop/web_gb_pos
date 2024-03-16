<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {

        $products = Product::get();
        return response()->json([
            'status' => 'status',
            'data' => $products
        ]);
    }

    public function show($id)
    {

        $products = Product::where('barcode', '=', $id)->first();
        return response()->json([
            'status' => $products == null ? 'Not Found!' : 'success',
            'data' => $products
        ]);
    }
    public function store(Request $request)
    {

        if (env('APP_ENV') == 'production') {
            Product::create($request->validate([
                'barcode' => 'required|unique:products',
                'description' => 'required',
                'quantity' => 'required',
                'price' => 'required',
            ]));
        }

        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }

    public function update(Request $request, $id)
    {

        Product::where('id', $id)->update($request->validate([
            'barcode' => 'required',
            'description' => 'required',
            'quantity' => 'required',
            'price' => 'required',
        ]));
        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }

    public function destroy($id)
    {
        Product::where('id', $id)->delete();
        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }
}
