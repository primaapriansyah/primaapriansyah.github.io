<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

   <title> User</title>

    <!-- Bootstrap Core CSS -->
	<link href="../css/bootstrap.min.css" rel="stylesheet">
	<link href="../css/admin/jquery.dataTables.css" rel="stylesheet">
	<link href="../css/admin/metisMenu.min.css" rel="stylesheet">
	<link href="../css/admin/dataTables.bootstrap.css" rel="stylesheet">
	<link href="../css/admin/dataTables.responsive.css" rel="stylesheet">
	<link href="../css/admin/sb-admin-2.css" rel="stylesheet">
	
	<link href="../css/admin/timeline.css" rel="stylesheet">
	
	<link href="../css/font-awesome.css" rel="stylesheet">
	<link href="../css/style_admin.css" rel="stylesheet">
</head>

<body>
	<div id="wrapper">
        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Admin</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Read All Messages</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-messages -->
                </li>
                <!-- /.dropdown -->
                
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-comment fa-fw"></i> New Comment
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span class="pull-right text-muted small">12 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-envelope fa-fw"></i> Message Sent
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-tasks fa-fw"></i> New Task
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Alerts</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-alerts -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <a href="index.html">Dashboard</a>
                        </li>
                        <li>
                            <a href="tables.html"> Customer</a>
                        </li>
                        <li>
                            <a href="forms.html"> Auction</a>
                        </li>
						<li>
                            <a href="forms.html"> Payment</a>
                        </li>
						<li>
                            <a href="forms.html"> Feedback</a>
                        </li>
						<li>
                            <a href="forms.html"> Modul</a>
                        </li>
						<li>
                            <a href="forms.html"> Menu</a>
                        </li>
						<li>
                            <a href="forms.html"> UI</a>
                        </li>
						<li>
                            <a href="forms.html">Report</a>
                        </li>
					</ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>
		
		<div id="page-wrapper" style="min-height: 363px;">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header"> Customer</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
			
			
			<div class="row">
				<div class="col-sm-12">
					<div class="dataTable_wrapper">
					<table class="table table-striped table-bordered table-hover" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
						<thead>
							<tr role="row">
								<th class="sorting" tabindex="0" aria-controls="dataTables-example">Nama</th>
								<th class="sorting text-center" tabindex="0" aria-controls="dataTables-example">Total Auction</th>
								<th class="sorting" tabindex="0" aria-controls="dataTables-example">Total Bid</th>
								<th class="sorting" tabindex="0" aria-controls="dataTables-example">Total Donate</th>
								<th class="sorting" tabindex="0" aria-controls="dataTables-example">Amount Donate</th>
								<th class="sorting" tabindex="0" aria-controls="dataTables-example">Total Transaction</th>
								<th class="sorting" tabindex="0" aria-controls="dataTables-example">Amount Transaction</th>
								<th class="sorting" tabindex="0" aria-controls="dataTables-example">Status</th>
								<th class="sorting" tabindex="0" aria-controls="dataTables-example">Created Date</th>
								<th class="sorting" tabindex="0" aria-controls="dataTables-example">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1"><a href="view_manage_cust.jsp">Gecko</a></td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Active</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a href="#" type="button" data-toggle="modal" data-target="#block" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Ronaldo</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Terdaftar</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Guseres</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Block</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Active User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Gecko</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Active</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Gecko</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Active</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Gecko</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Active</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Ronaldo</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Terdaftar</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Guseres</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Block</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Active User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Gecko</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Active</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Gecko</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Active</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Gecko</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Active</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Ronaldo</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Terdaftar</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Guseres</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Block</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Active User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Gecko</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Active</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
							<tr class="gradeA odd" role="row">
								<td class="sorting_1">Gecko</td>
								<td>89</td>
								<td>176</td>
								<td>18</td>
								<td>79.000.000</td>
								<td>89</td>
								<td>123.000.000</td>
								<td>Active</td>
								<td>23 September 2015</td>
								<td>
									<p>
										<a type="button" class="btn btn-danger btn-xs">Block User</a>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					</div>
				</div>
			</div>
	</div>
		
	<div class="modal fade" id="block" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			<h4 class="modal-title">Block Customer</h4>
		  </div>
		  <div class="modal-body">
			<p>Apakah anda yakin ingin melakukan Block Customer ini?&hellip;</p>
		  </div>
		  <div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			<button type="button" class="btn btn-primary">Yes!</button>
		  </div>
		</div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
		
	</div>

    <!-- jQuery Bootstrap-->
	<script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
	<script src="../js/admin/jquery.dataTables.js"></script>
	<script src="../js/admin/dataTables.bootstrap.js"></script>
	<!-- Metis Menu Plugin JavaScript -->
	<script src="../js/admin/metisMenu.min.js"></script>
	
	<script src="../js/admin/raphael-min.js"></script>
	
    <!-- Custom Theme JavaScript -->
	<script src="../js/admin/sb-admin-2.js"></script>
	
   <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
                pagingType: "simple_numbers",
				select: true,
				responsive: true,
				searching: true,
				ordering:  true
        });
    });
    </script>
	
</body>

</html>
