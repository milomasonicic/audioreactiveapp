<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Mail\MailToAll;
use App\Mail\Subscribed;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SubscriberController extends Controller
{
    //

    public function index() {
        return Inertia::render("Subscribers", [
            'subscribers' => Subscriber::all(),
        ]);

    }


    public function store(Request $request) {

        $sub = Subscriber::create([
            'email'=> $request->email
        ]);

        $id = $sub->id;
        Mail::to($request->email)->send(new Subscribed($id));

        return to_route('subscribers.index');
    }

    public function delete($id) {

        $subscriber = Subscriber::findOrFail($id);
        $subscriber -> delete();

       return view ('goodbye');

    }

    public function sendMailToSubscribers(Request $request) {
       // dd($request);
        $subscribers = Subscriber::all();

        foreach ($subscribers as $subscriber) {
            Mail::to($subscriber->email)->send(new MailToAll($request->content, $request->subject));
        } 
        
    }

    
 
}
