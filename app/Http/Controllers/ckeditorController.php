<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class CkeditorController extends Controller
{
/**
* success response method.
*
* @return \Illuminate\Http\Response
*/
public function index()
{
return view(‘ckeditor’);
}

public function upload(Request $request)
{
    if($request->hasFile('upload')) {
        $originName = $request->file('upload')->getClientOriginalName();
        $fileName = pathinfo($originName, PATHINFO_FILENAME);
        $extension = $request->file('upload')->getClientOriginalExtension();
        $fileName = $fileName.'_'.time().'.'.$extension;
    
        $request->file('upload')->move(public_path('images'), $fileName);

        $CKEditorFuncNum = $request->input('CKEditorFuncNum');
        $url = asset('images/'.$fileName); 
        $msg = 'Image uploaded successfully'; 
        $response = "&lt;script&gt;window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')&lt;/script&gt;";
           
        @header('Content-type: text/html; charset=utf-8'); 
        echo $response;
    }
}}