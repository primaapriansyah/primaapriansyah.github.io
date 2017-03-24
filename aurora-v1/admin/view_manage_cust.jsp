<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

   <title>Admin Waterbe</title>

    <!-- Bootstrap Core CSS -->
	<link href="../css/bootstrap.min.css" rel="stylesheet">
	<link href="../css/admin/metisMenu.css" rel="stylesheet">
	
	<link href="../css/admin/dataTables.bootstrap.css" rel="stylesheet">
	<link href="../css/admin/dataTables.responsive.css" rel="stylesheet">
	
	<link href="../css/admin/timeline.css" rel="stylesheet">
	<link href="../css/admin/sb-admin-2.css" rel="stylesheet">
	
	<link href="../css/admin/morris.css" rel="stylesheet">
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
		
		<div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="page-header">Gecko</h2>
                </div>
                <!-- /.col-lg-12 -->
            </div>
			
            <!-- /.row -->
            <div class="row">
				<h5>Informasi Profil</h5>
				<table class="table table-user-information">
					<tbody>
						<tr>
							<td class="col-md-3">Tipe User</td>
							<td>Individu</td>
						</tr>
						<tr>
							<td class="col-md-3">Nama Lengkap</td>
							<td>Dena Sucianandika</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>dena.sucianandika@gmail.com</td>
						</tr>
						<tr>
							<td>Username</td>
							<td>dena176</td>
						</tr>
						<tr>
							<td class="col-md-3">Tanggal lahir</td>
							<td>25 Desember 1990</td>
						</tr>
						<tr>
							<td class="col-md-3">Jenis Kelamin</td>
							<td>Laki-laki</td>
						</tr>
						<tr>
							<td></td>
							<td><a href="#" type="button" data-toggle="modal" data-target="#myModal" class="btn btn-primary btn-xs"><i class="fa fa-key fa-space"></i>Ubah Password</a></td>
						</tr>
					</tbody>
				</table>	
				<!-- Modal Change Password -->
				<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div class="modal-dialog" role="document">
					<div class="modal-content">
					  <div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">Ubah Password</h4>
					  </div>
					  <div class="modal-body">
						<form class="form-horizontal">
						  <div class="form-group">
							<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Username</label>
							<div class="col-sm-8">
							  <input type="email" class="form-control" id="inputEmail3" placeholder="admin@pertamina.com" readonly>
							</div>
						  </div>
						  <div class="form-group">
							<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Password Lama</label>
							<div class="col-sm-8">
							  <input type="password" class="form-control" id="inputEmail3" placeholder="Password Lama">
							</div>
						  </div>
						  <div class="form-group">
							<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Password Baru</label>
							<div class="col-sm-8">
							  <input type="password" class="form-control" id="inputEmail3" placeholder="Password Baru">
							</div>
						  </div>
						  <div class="form-group">
							<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Konfirmasi Password Baru</label>
							<div class="col-sm-8">
							  <input type="password" class="form-control" id="inputEmail3" placeholder="Konfirmasi Password Baru">
							</div>
						  </div>
						</form>
					  </div>
					  <div class="modal-footer">
						<button type="button" class="btn btn-primary">Save changes</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					  </div>
					</div>
				  </div>
				</div>
				<!-- End of Modal Change Password -->
				<hr>
				<h5>Informasi Kontak</h5>
				<table class="table table-user-information">
					<tbody>
						<tr>
							<td class="col-md-3">Alamat Lengkap</td>
							<td>Jl. Medan Merdeka Timur 1A, Jakarta 10110 </td>
						</tr>
						<tr>
							<td class="col-md-3">Kota</td>
							<td>Jakarta</td>
						</tr>
						<tr>
							<td class="col-md-3">Provinsi</td>
							<td>DKI Jakarta</td>
						</tr>
						<tr>
							<td>Kode Pos</td>
							<td>17550</td>
						</tr>
						<tr>
							<td>No Telepon</td>
							<td>500500</td>
						</tr>
						<tr>
							<td>Nomor Handphone 1</td>
							<td>08129988828</td>
						</tr>
						<tr>
							<td>Nomor Handphone 2</td>
							<td>08129988821</td>
						</tr>
					</tbody>
				</table>
				<hr>
				<h5>Rekening</h5>
				<table class="table table-user-information">
					<tbody>
					  <tr>
						<td class="col-md-3">Nama Bank</td>
						<td>Bank BCA</td>
					  </tr>
					  <tr>
						<td class="col-md-3">Nomor Rekening</td>
						<td>885072121</td>
					  </tr>
					</tbody>
				</table>
				<hr>
				<h5>Ketertarikan Pelelangan</h5>
				<table class="table table-user-information">
					<tbody>
					  <tr>
						<td class="col-md-3">Kategori</td>
						<td>Elektronik</td>
					  </tr>
					</tbody>
				</table>
				
				<h5>Other Info</h5>
				<table class="table table-user-information">
					<tbody>
						<tr>
							<td class="col-md-3">Total Auction</td>
							<td>89</td>
						</tr>
						<tr>
							<td class="col-md-3">Total Bid</td>
							<td>176</td>
						</tr>
						<tr>
							<td>Total Donate</td>
							<td>18</td>
						</tr>
						<tr>
							<td>Amount Donate</td>
							<td>79.000.000</td>
						</tr>
						<tr>
							<td class="col-md-3">Total Transaction</td>
							<td>89</td>
						</tr>
						<tr>
							<td class="col-md-3">Amount Transaction</td>
							<td>123.000.000</td>
						</tr>
					</tbody>
				</table>	
				
				<a href="#" class="btn btn-danger btn-sm feedback-btn">Block User</a>
				<a href="#" class="btn btn-success btn-sm feedback-btn">Kontak User by email</a>
				<a href="edit_manage_cust.jsp" class="btn btn-primary btn-sm feedback-btn">Edit Customer</a>
			</div>
		</div>
	</div>

    <!-- jQuery Bootstrap-->
	<script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
	
	<!-- Metis Menu Plugin JavaScript -->
	<script src="../js/admin/metisMenu.min.js"></script>
	
	<script src="../js/admin/jquery.dataTables.js"></script>
	<script src="../js/admin/dataTables.bootstrap.js"></script>
	
	<script src="../js/admin/raphael-min.js"></script>
	<script src="../js/admin/morris.js"></script>
	<script src="../js/admin/morris-data.js"></script>
	
    <!-- Custom Theme JavaScript -->
	<script src="../js/admin/sb-admin-2.js"></script>
	
	<!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
                responsive: true
        });
    });
    </script>
	
	<script>
	$(document).ready(function() {
	new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});
});
	</script>
	
</body>

</html>
