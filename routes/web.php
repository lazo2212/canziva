<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('index');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/product/cbd', function () {
    return Inertia::render('Product/CBD');
})->name('product.CBD');

Route::get('/product/balance', function () {
    return Inertia::render('Product/Balance');
})->name('product.balance');

Route::get('/product/cbg', function () {
    return Inertia::render('Product/CBG');
})->name('product.CBG');


// ********************************************************************************************************************
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
