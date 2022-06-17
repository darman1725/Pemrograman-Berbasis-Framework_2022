<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('create-student', 'App\Http\Controllers\StudentController@createStudent');
Route::get('students', 'App\Http\Controllers\StudentController@studentsListing');
Route::get('student/{id}', 'App\Http\Controllers\StudentController@studentDetail');
Route::delete('student/{id}', 'App\Http\Controllers\StudentController@studentDelete');
