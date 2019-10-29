@section('content')
@extends('admin.layouts.master')

@section('title', 'admin')

   <div class="content-wrapper" >

  <!-- Content Header (Page header) -->
  <section class="content-header">

            <div class="box-header with-border">
              <h3 class="box-title">List categories</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <tr>
                  <a class="btn btn-primary" href="/admin/categories/add_categories">Add categories +</a>
                  <br/>
                  <br/>
                  <br/>
    <th style="width: 10px">#</th>
    <th>Name</th>
    
    <th>Action</th>
  </tr>
      
 <tbody>
            @foreach ($categories as $categories)
              <tr>
                <td>{{$categories->id}}</td>
                <td>{{$categories->name}}</td>
                
                <td>
                  <a href="/admin/categories/edit_categories/{{$categories->id}}" class="btn btn-primary">Edit</a>
                  
                </td>
                <td>
                  <a href="/admin/categories/delete_categories/{{$categories->id}}" class="btn btn-warning">Delete</a>
                  
                </td>
              </tr>
            @endforeach
          </tbody>
 
 
 </table>
</div>
</section>
</div>
@endsection
