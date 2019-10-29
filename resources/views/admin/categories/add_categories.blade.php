@section('content')
@extends('admin.layouts.master')




@section('title', 'admin')



   <div class="content-wrapper" >
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>Add categories</h1>
   <form  action="admin/categories/add_categories" method="POST" enctype="multipart/form-data">
    @csrf
    
        <div class="form-group">
          <label for="exampleInputEmail1">categories Name: </label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Enter categories"  name="name">
          
        </div>
        
        
       
        <!-- radio -->
          
          <button type="submit" class="btn btn-primary" name="add_categories">add categories</button>
  
      <!-- /.box-body -->


    </form>
</section>
</div>


     
  @endsection

  