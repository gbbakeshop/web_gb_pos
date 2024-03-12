<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AccountDetailsController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SalesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('products', ProductController::class);
Route::apiResource('sales', SalesController::class);
Route::apiResource('accounts', AccountController::class);
Route::apiResource('change_account_password', AccountController::class);
Route::post('/change_account_password/{id}', [AccountController::class, 'change_account_password']);
Route::apiResource('analytics', AnalyticsController::class);
Route::apiResource('account_details', AccountDetailsController::class);

