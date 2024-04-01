<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    //

    public function index()
    {
        return Inertia::render('Users/Index', [
          'users' => User::all(),
        ]);
    }

    //

    public function store(Request $request)
    {
        User::create($request->validate([
          //'' => ['required', 'max:50'],
          'name' => ['required', 'max:50'],
          'email' => ['required', 'max:50', 'email'],
        ]));

        return to_route('users.index');
    }
}
