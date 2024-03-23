<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/about', function () {
    return Inertia::render('Aboutus');
})->middleware(['auth', 'verified'])->name('about');

Route::get('/colorfulbars', function () {
    return Inertia::render('ColorfulBars');
})->middleware(['auth', 'verified'])->name('colorfulbars');

Route::get('/audioanalizer', function () {
    return Inertia::render('Audioanalizer');
})->middleware(['auth', 'verified'])->name('audioanalizer');

Route::get('/audioanalizer2', function () {
    return Inertia::render('Audioanalizer2');
})->middleware(['auth', 'verified'])->name('audioanalizer2');

Route::get('/audioanalizer3', function () {
    return Inertia::render('Audioanalizer3');
})->middleware(['auth', 'verified'])->name('audioanalizer3');

Route::get('/numbers', function () {
    return Inertia::render('Numbers');
})->middleware(['auth', 'verified'])->name('numbers');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
