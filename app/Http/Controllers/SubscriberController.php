<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
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

        Subscriber::create([
            'email'=> $request->email
        ]);

    

        Mail::to('bobamas106@gmail.com')->send(new Subscribed([
       ]));

        return to_route('subscribers.index');
    }

    
 
}
