@extends('layouts.app')

@section('content')
        <div class="position-ref container">
            @if (Route::has('login'))
                <div class="top-right links">
                    <a href="{{ url('/login') }}">Login</a>
                    <a href="{{ url('/register') }}">Register</a>
                </div>
            @endif

            <div class="content">
                <div class="center">
                    <div class="title m-b-md">
                        Laravue 5.3
                    </div>
                </div>

                <div class="row">
                    <div class="col m6 s12">
                        <material-calendar :model.sync="state.today"></material-calendar>  
                        {{-- USE VUE COMPONENT IN WHOLE APP --}}
                        
                    </div>
                    <div class="col m6 s12">
                        <users></users>
                    </div>
                </div>

                @include('partials.instructions')
                
            </div>
        </div>
@stop