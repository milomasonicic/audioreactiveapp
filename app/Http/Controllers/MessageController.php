<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Message;
use Illuminate\Http\Request;


class MessageController extends Controller
{
    //

   public function index()
    {
        return Inertia::render('Message', [
          'messages' => Message::all(),
        ]);
    }

    //

   public function store(Request $request)
    {
        /*dd($request);
        Message::create($request->validate([
        
          'name' => ['required', 'max:50'],
          'email' => ['required', 'max:50', 'email'],
        ]));*/

        Message::create([
            'name' => $request->name,
            'email' => $request->email,
            'content' => "content",
        ]);

        return to_route('m');
    }

   /* public function show(Message $message)
    {
        return Inertia::render('Message', [
          'message' => $message
        ]);
    }*/
}
