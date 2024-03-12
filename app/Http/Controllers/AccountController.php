<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function index()
    {
        $accounts = User::where('role', '<>', 'admin')->get();

        return response()->json([
            'status' => 'status',
            'data' => $accounts
        ]);
    }

    public function store(Request $request)
    {

        $request->validate([
            'email' => 'required|unique:users',
            'name' => 'required',
            'password' => 'required',
            'role' => 'required',
            'contact' => 'required',
        ]);
        User::create([
            'email' => $request->email,
            'name' => $request->name,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'contact' => $request->contact,
            'status' => $request->status,
        ]);
        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }
    public function update(Request $request, $id)
    {

        User::where('id', $id)->update($request->validate([
            'email' => 'required',
            'name' => 'required',
            'role' => 'required',
            'contact' => 'required',
            'status' => 'required',
        ]));
        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }

    public function change_account_password(Request $request, $id)
    {

        User::where('id', $id)->update([
            'password' => Hash::make($request->password),
        ]);
        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }

    public function destroy($id)
    {
        User::where('id', $id)->delete();
        return response()->json([
            'status' => 'success',
            'data' => $this->index()->original['data']
        ], 200);
    }
}
