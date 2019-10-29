
@section('content')
@extends('admin.layouts.master')

@section('title', 'admin')

   <div class="content-wrapper" >
  <!-- Content Header (Page header) -->
  <section class="content-header">
            <div class="box-header with-border">
              <h3 class="box-title">List users</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <tr>
                  <a class="btn btn-primary" href="/admin/users/add_users">Add users +</a>
                  <br/>
                  <br/>
                  <br/>
    <th style="width: 10px">#</th>
    <th>Role</th>
    <th>Username</th>
    <th>email</th>
    <th>Avatar</th>
    <th>Action</th>
  </tr>
   <tbody>
            @foreach ($users as $users)
              <tr>
                <td>{{$users->id}}</td>
                <td>{{$users->role}}</td>
                <td>{{$users->name}}</td>
                <td>{{$users->email}}</td>
                <td><img src="admin/uploads/users/{{$users->avatar}}"  width="100px"></td>
                <td>
                  <a href="/admin/users/edit_users/{{$users->id}}" class="btn btn-primary">Edit</a>
                  
                </td>
                <td>
                  <a href="/admin/users/delete_users/{{$users->id}}" class="btn btn-warning">Delete</a>
                  
                </td>
              </tr>
            @endforeach
          </tbody>
</table>
</div>
</section>
</div>
@endsection
