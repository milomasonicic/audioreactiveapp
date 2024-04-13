<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubscriberController;

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

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

//mesages
Route::get('/m', [MessageController::class, 'index'])->name('mmessages');
Route::post('/mdelete', [MessageController::class, 'delete'])->name('messages.delete');
Route::post('/mstore', [MessageController::class, 'store'])->name('message.store');

//subscribes
Route::get('/subscribers', [SubscriberController::class, 'index'])->name('subscribers.index');
Route::post('/subscriberstore', [SubscriberController::class, 'store'])->name('subscribers.store');
Route::post('/subscriberMail', [SubscriberController::class, 'sendMailToSubscribers'])->name('subscribers.sendMail');

Route::get('/about', function () {
    return Inertia::render('Aboutus');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/colorfulbars', function () {
    return Inertia::render('ColorfulBars');
})->name('colorfulbars');

Route::get('/audioanalizer', function () {
    return Inertia::render('Audioanalizer');
})->name('audioanalizer');

Route::get('/audioanalizer2', function () {
    return Inertia::render('Audioanalizer2');
})->name('audioanalizer2');

Route::get('/audioanalizer3', function () {
    return Inertia::render('Audioanalizer3');
})->name('audioanalizer3');

Route::get('/numbers', function () {
    return Inertia::render('Numbers');
})->name('numbers');


/*Route::get('/admin', function () {
    return Inertia::render('Admin');
})->name('admin');*/

Route::get('/messages', function () {
    return Inertia::render('Admin');
})->name('messages');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//->middleware(['auth', 'verified'])

require __DIR__.'/auth.php';
