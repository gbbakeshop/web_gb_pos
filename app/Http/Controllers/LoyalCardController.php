<?php

namespace App\Http\Controllers;

use App\Models\LoyalCard;
use Illuminate\Http\Request;

class LoyalCardController extends Controller
{
    public function index()
    {

        $products = LoyalCard::get();
        return response()->json([
            'status' => 'status',
            'data' => $products
        ]);
    }

    public function show($id)
    {

        $products = LoyalCard::where('barcode','=',$id)->first();
        return response()->json([
            'status' => $products == null? 'Not Found!':'success',
            'data' => $products
        ]);
        
    }
    public function store(Request $request)
    {

        LoyalCard::create($request->validate([
            'fullname' => 'required|unique:loyal_cards',
            'barcode' => 'required',
            'pincode' => 'required',
            'discount' => 'required',
        ]));
        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }

    public function update(Request $request, $id)
    {
        
        LoyalCard::where('id', $id)->update($request->validate([
            'fullname' => 'required',
            'pincode' => 'required',
            'discount' => 'required',
        ]));
        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }

    public function destroy($id)
    {
        LoyalCard::where('id', $id)->delete();
        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }
}
