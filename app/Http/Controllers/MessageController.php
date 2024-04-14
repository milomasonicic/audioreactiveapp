<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Message;
use Illuminate\Http\Request;


class MessageController extends Controller
{
    //

    public function index() {

      $messages = Message::orderBy('created_at', 'desc')->get(); 
 
      return Inertia::render('Message', [
        'messages' => $messages
      ]);
    }
    //

    public function store(Request $request) {
       Message::create([
        'name' => $request->name,
        'email' => $request->email,
        'content' => $request->content,
        'status'=> false
       ]);

       return to_route('contact');
    }

    public function delete($id) {

      $message = Message::findOrFail($id);
      $message -> delete();


  }

  //PROVJERITI OVO
  public function show($id) { 

    $message = Message::findOrfail($id);

    $message->status = true;
    $message->save();   

    return Inertia::render('MessageSingle',  [
      'message' => $message
    ] );

  }

  public function updateStatusToTrue(Request $request, $id) {

    $message = Message::findOrfail($id);

    $message->status = true;
    $message->save();   
    
    return response()->noContent();
  }
   
}

