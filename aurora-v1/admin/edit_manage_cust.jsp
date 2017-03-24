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
				<!-- SideRight Content -->
				<div class="col-md-9" role="main">
					<div class="bs-docs-section bidaktif_SideRight">
						<div class="row content-profile akunsaya_pp">
							<form class="form-horizontal">
								<h5 class="bs-callout bs-callout-warning bs-callout-custom">Profile Information</h5>
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Nama Lengkap</label>
									<div class="col-sm-8">
									  <input type="email" class="form-control" id="NamaLengkap" placeholder="Dena Sucianandika" >
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Email</label>
									<div class="col-sm-8">
									  <input type="email" class="form-control" id="Email" placeholder="dena.sucianandika@gmail.com" >
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Username</label>
									<div class="col-sm-8">
									  <input type="email" class="form-control" id="Username" placeholder="Username" >
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Tanggal Lahir</label>
									<div class="col-sm-8">
										<input id="date-picker-2" type="text" placeholder="08/16/1990" class="date-picker form-control" />
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Jenis Kelamin</label>
									<div class="col-sm-8">
										<label class="checkbox-inline">
											<input type="checkbox" id="pria" value="option1">Pria
										</label>
										<label class="checkbox-inline">
											<input type="checkbox" id="wanita" value="option1">Wanita
										</label>
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Alamat Lengkap</label>
									<div class="col-sm-8">
									  <textarea class="form-control" rows="3" placeholder="Jl. Medan Merdeka Timur 1A, Jakarta 10110"></textarea>
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Kota</label>
									<div class="col-sm-8">
									  <input type="text" class="form-control" id="Kota" placeholder="Username" >
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Provinsi</label>
									<div class="col-sm-8">
									  <input type="text" class="form-control" id="Provinsi" placeholder="Username" >
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Kode Pos</label>
									<div class="col-sm-8">
									  <input type="text" class="form-control" id="KodePos" placeholder="Username" >
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">No Handphone 1</label>
									<div class="col-sm-8">
									  <input type="text" class="form-control" id="hp1" placeholder="0218828273" >
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">No Handphone 2</label>
									<div class="col-sm-8">
									  <input type="text" class="form-control" id="hp2" placeholder="081288339944" >
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Nama Bank</label>
									<div class="col-sm-8">
									  <input type="text" class="form-control" id="BankName" placeholder="Bank Mandiri" >
									</div>
								</div>
								
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-3 control-label control-label-custom">Nomor Rekening</label>
									<div class="col-sm-8">
									  <input type="email" class="form-control" id="Norek" placeholder="Nomor Rekening" >
									</div>
								</div>
								
								<div class="form-actions well">
									<a href="#" class="btn btn-primary save">Save</a>
									<a href="#" class="btn btn-default">Cancel</a>
								</div>
							</form>
								
						</div>
					</div> 
				</div>
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
