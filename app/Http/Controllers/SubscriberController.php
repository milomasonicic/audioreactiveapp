<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Subscriber;
use Illuminate\Http\Request;

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


        return to_route('subscribers.index');
    }

    
 
}
