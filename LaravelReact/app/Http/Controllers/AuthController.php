<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Facades\Hash;
use App\Models\LoginUser;

class AuthController extends Controller
{
 public function login(Request $request)
{
    $requestData = $request->all();
    // dd($requestData);

    // $validator = Validator::make($requestData, [
    //     'email' => 'email|required',
    //     'password' => 'required'
    // ]);

    // if ($validator->fails()) {
    //     return response()->json([
    //         'errors' => $validator->errors()
            
    //     ], 422);
    // }

    $emailColumnName = 'email';
    $passwordColumnName = 'password';

    $hashedPassword = md5($requestData['password']);

    $user = LoginUser::where($emailColumnName, $requestData['email'])
        ->where($passwordColumnName, $hashedPassword)
        ->first();

    if (!$user) {
        return response()->json(["success" =>false, "message" => "Wrong Email or password!"], 401);
    }

    return response([
        'user' => $user,
        'success' => 'true',
        'message' => 'Login successful'
    ], 200);
}
}
