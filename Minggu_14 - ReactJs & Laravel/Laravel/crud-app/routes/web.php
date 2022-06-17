<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post("create-student","StudentController@createStudent");

Route::get("students", "StudentController@studentsListing");

Route::get("student/{id}", "StudentController@studentDetail");

Route::delete("student/{id}", "StudentController@studentDelete");