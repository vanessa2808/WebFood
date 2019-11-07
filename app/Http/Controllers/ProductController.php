<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller {  
   public function __construct()
    {
         $this->middleware('auth'); 
         //$this->middleware('auth', ['except' => array('get_edit')]);   
    }
    public function get_add(){
      return view('admin.products.add_products');
    }
  
  public function post_add(Request $request) {
        $name = $request->name;
        $price = $request->price;
        $description = $request->description;
        $created_at = date('Y-m-d h:i:s');
        $image = 'default.png';
        if ($request->hasfile('image')){
          $file = $request->image; 
          $image = $file->getClientOriginalName();
          $file->move('admin/uploads/products', $image);
        }

        DB::insert('INSERT INTO products (name, image,description, price, created_at) values (?, ?, ?, ?, ?)', [$name, $image, $description, $price, $created_at]);
        return redirect('admin/products/list_products');
        }
  public function get_edit($id) {
     $products = DB::table('products')->find($id);
    // dd($products);
      return view('admin/products/edit_products', ['products'=>$products]);
  }
  public function post_edit($id, Request $request ) {
       $products = DB::table('products')->find($id);
        $name = $request->name;
       // dd($name);
        $price = $request->price;
        $description = $request->description;
        $updated_at = date('Y-m-d h:i:s');
        $image = $products->image;
        if ($request->hasfile('image')){
            $file = $request->image; 
            $image = $file->getClientOriginalName();
            $file->move('admin/uploads/products', $image);
        }
        DB::update('UPDATE products SET name = ?, image = ?, description = ?, price = ?, updated_at = ? where id = ?', [$name, $image, $description, $price, $updated_at, $id]);
        return redirect('admin/products/list_products');
  }
  public function delete_products($id) {
     DB::table('products')->where('id', $id)->delete();
     return redirect()->route('list_products');
  
  }
  public function list_products() {
    $products = DB::table('products')->get();
      return view('admin/products/list_products', ['products'=>$products]);
  }
 public function index()
      {
        $projects = Project::where('is_completed', false)
                            ->orderBy('created_at', 'desc')
                            ->withCount(['tasks' => function ($query) {
                              $query->where('is_completed', false);
                            }])
                            ->get();

        return $projects->toJson();
      }
      public function index()
      {
        $products = Product::where('is_completed', false)
                            ->orderBy('created_at', 'desc')
                            ->withCount(['tasks' => function ($query) {
                              $query->where('is_completed', false);
                            }])
                            ->get();

        return $products->toJson();
      }

      public function store(Request $request)
      {
        $validatedData = $request->validate([
          'name' => 'required',
          'description' => 'required',
          'image' => 'required',
          'price' => 'required',
        ]);

        $products = products::create([
          'name' => $validatedData['name'],
          'description' => $validatedData['description'],
          'image' => $validatedData['image'],
          'price' => $validatedData['price'],
          
        ]);

        return response()->json('Project created!');
      }

      public function show($id)
      {
        $products = Product::with(['tasks' => function ($query) {
          $query->where('is_completed', false);
        }])->find($id);

        return $products->toJson();
      }

      public function markAsCompleted(Product $products)
      {
        $products->is_completed = true;
        $products->update();

        return response()->json('products updated!');
      }
    }
  }
