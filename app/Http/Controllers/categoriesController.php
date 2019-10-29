<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
class categoriesController extends Controller
{
     public function get_addcategories(){
      return view('admin.categories.add_categories');
    }
  
  public function post_addcategories(Request $request) {
        $name = $request->name;
       
        $created_at = date('Y-m-d h:i:s');
        

        DB::insert('INSERT INTO categories (name, created_at) values (?, ?)', [$name, $created_at]);
        return redirect('admin/categories/list_categories');
        }
         public function list_categories() {
    $categories = DB::table('categories')->get();
      return view('admin/categories/list_categories', ['categories'=>$categories]);
  }
}
