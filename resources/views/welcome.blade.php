@extends('layouts.app')

@section('content')
        <div class="position-ref _container">
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
                    <div class="col s12 m6">
                        <material-calendar :model.sync="globals.today"></material-calendar>  
                        {{-- USE VUE COMPONENT IN WHOLE APP --}}
                        
                    </div>
                    <div class="col s12 m6">
                        <users></users>
                    </div>


                </div>

                @include('partials.instructions')
                
            </div>
        </div>
@stop