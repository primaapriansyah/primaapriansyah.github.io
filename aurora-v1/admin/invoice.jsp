<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

   <title>Auction</title>

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
		<section class="invoice">
          <!-- title row -->
          <div class="row">
            <div class="col-xs-12">
              <h3 class="page-header">
                <i class="fa fa-globe"></i> Waterbe, Inc.
                <p class="pull-right f12">Date: 2/10/2014</p>
              </h3>
            </div><!-- /.col -->
          </div>
          <!-- info row -->
          <div class="row invoice-info">
            <div class="col-sm-4 invoice-col">
              <b>Invoice #007612</b><br>
              <br>
              <b>Auction ID:</b> 4F3S8J<br>
              <b>Payment Due:</b> 2/22/2014<br>
			  <b>Payment Status:</b> Bidder Belum Bayar<br>
            </div><!-- /.col -->
			<div class="col-sm-4 invoice-col">
              From
              <address>
                <strong>Waterbe</strong><br>
                Jalan Jend. Sudirman<br>
                Gd. Sampoerna Strategic, Jakarta Selatan<br>
                Phone: (804) 123-5432<br>
                Email: info@waterbe.com
              </address>
            </div><!-- /.col -->
            <div class="col-sm-4 invoice-col">
              To
              <address>
                <strong>Dena sa</strong><br>
                Cempaka Putih<br>
                Sunter 1, Jakarta Utara<br>
                Phone: (555) 539-1037<br>
                Email: dena@example.com
              </address>
            </div><!-- /.col -->
          </div><!-- /.row -->
			<hr>
          <!-- Table row -->
          <div class="row">
            <div class="col-xs-12 table-responsive">
				<h4>Hi Dena sa</h4>
				<p>We send your Invoice to remember your payment. Stay great and more valuable. See you in your next auction!</p>
				<table class="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Auction Name</th>
                    <th>Amount Payment</th>
                    <th>Weight</th>
                    <th>Shipping</th>
                    <th>Total Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kapal Tanker Pertamina</td>
                    <td>$265.24</td>
                    <td>221 Kg</td>
                    <td>$10.34</td>
                    <td>$265.24</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.col -->
          </div><!-- /.row -->
		<br>	<hr>
          <div class="row">
            <!-- accepted payments column -->
            <div class="col-xs-6">
				<p class="f15 pinvoice"><b>Payment Methods (Rekening Bersama Waterbe)</b></p>
				<div class="row">
					<div class="col-md-3">
						<ul class="nav" style="margin-top:10px;">
							<li class="RekList" style="font-weight:bold;">Bank BCA</li>
							<li class="RekList">3276627272</li>
						</ul>
					</div>
					<div class="col-md-3">
						<ul class="nav" style="margin-top:10px;">
							<li class="RekList" style="font-weight:bold;">Bank Mandiri</li>
							<li class="RekList">3276627272</li>
						</ul>
					</div>
					<div class="col-md-3">
						<ul class="nav" style="margin-top:10px;">
							<li class="RekList" style="font-weight:bold;">Bank BNI</li>
							<li class="RekList">3276627272</li>
						</ul>
					</div>
					<div class="col-md-3">
						<ul class="nav" style="margin-top:10px;">
							<li class="RekList" style="font-weight:bold;">Bank BRI</li>
							<li class="RekList">3276627272</li>
						</ul>
					</div>
				</div>
              <p class="text-muted well well-sm no-shadow" style="margin-top: 10px;">
                Pembayaran dilakukan dengan mengunakan Rekening bersama Waterbe agar lebih aman bagi penjual dan pembeli. 
				
              </p>
            </div><!-- /.col -->
            <div class="col-xs-6">
              <p class="f15 pinvoice"><b>Amount Due 2/22/2014</b></p>
              <div class="table-responsive">
                <table class="table">
                  <tbody><tr>
                    <th style="width:50%">Amount Auction:</th>
                    <td>$250.30</td>
                  </tr>
                  <tr>
                    <th>Donation (9.3%)</th>
                    <td>$10.34</td>
                  </tr>
                  <tr>
                    <th>Shipping:</th>
                    <td>$5.80</td>
                  </tr>
                  <tr>
                    <th>Total:</th>
                    <td>$265.24</td>
                  </tr>
                </tbody></table>
              </div>
            </div><!-- /.col -->
          </div><!-- /.row -->

          <!-- this row will not appear when printing -->
          <div class="row no-print">
            <div class="col-xs-12">
              <a href="invoice-print.html" target="_blank" class="btn btn-default"><i class="fa fa-print"></i> Print</a>
              <button class="btn btn-success pull-right"><i class="fa fa-credit-card"></i> Send Payment</button>
              <button class="btn btn-primary pull-right" style="margin-right: 5px;"><i class="fa fa-download"></i> Generate PDF</button>
            </div>
          </div>
        </section>
	</div>
	
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
