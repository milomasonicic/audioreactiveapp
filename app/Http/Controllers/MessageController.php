<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Message;
use Illuminate\Http\Request;


class MessageController extends Controller
{
    //

    public function index() {

      return Inertia::render('Message', [
        'messages' => Message::all()
      ]);
    }
    //

    public function store(Request $request) {
       Message::create([
        'name' => $request->name,
        'email' => $request->email,
        'content' => $request->content,
       ]);

       return to_route('dashboard');
    }

    public function delete($id) {

      $message = Message::findOrFail($id);
      $message -> deleted = true;
      $message -> save();
      
     return to_route ('mmessages');

  }

  

   /* public function show(Message $message)
    {
        return Inertia::render('Message', [
          'message' => $message
        ]);
    }*/
}
