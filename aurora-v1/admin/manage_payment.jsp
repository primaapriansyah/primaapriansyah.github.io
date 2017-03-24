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
		<div class="row">
			<div class="col-lg-12">
				<h3 class="page-header">Payment Monitoring</h3>
			</div>
			<!-- /.col-lg-12 -->
		</div>
		
		<div class="row">
			<div class="row" style="margin-bottom:30px;margin-left:-3px;">
				<div class="col-md-4" style="padding-right:0;padding-left: 3px;">
					<input type="text" class="form-control form-control_custom test-both" id="namaPerusahaan" placeholder="Auction Name / No.Invoice">
				</div>
				<div class="col-md-3" style="padding-right:0;padding-left: 3px;">
					<select class="form-control form-control_custom" style="font-size:13px;">
						<option>Sort By</option>
						<option>Bidder Belum Bayar</option>
						<option>Verifikasi Pembayaran</option>
						<option>Transaksi Selesai</option>
						<option>Transaksi Terkirim</option>
						<option>Dalam Pengiriman</option>
						<option>Closer Deadline</option>
						<option>Outdate</option>
						<option>Waiting</option>
					</select>
				</div>
				<div class="col-md-1" style="padding-right:0;padding-left: 3px;">
					<button type="button" class="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-sm" style="background-color: #ffffff;border-radius:0;">Cari</button>
				</div>
			</div>
					
			<div class="table-responsive tablefont">
				<table class="table table-striped table-bordered table-hover f12">
					<thead>
						<tr>
							<th class="text-center">No</th>
							<th class="text-center">Invoice Number</th>
							<th class="text-center">Auction Name</th>
							<th class="text-center">Status Transaction</th>
							<th class="text-center">Amount Transaction</th>
							<th class="text-center">Created Date</th>
							<th class="text-center">Deadline</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</td>
							<td><a href="invoice.jsp">INV/20150909/XV/IX/17258675</a></td>
							<td>Kapal Tanker Pertamina Lokasi Ujung Berung</td>
							<td>Bidder belum bayar</td>
							<td>25.230.000.000</td>
							<td><cite>13 April 2015 [08:30:27 Wib]</cite></td>
							<td>Closer Deadline</td>
						</tr>
						<tr>
							<th scope="row">1</td>
							<td><a href="#">INV/20150909/XV/IX/17258675</a></td>
							<td>Kapal Tanker Pertamina Lokasi Ujung Berung</td>
							<td>Bidder belum bayar</td>
							<td>25.230.000.000</td>
							<td><cite>13 April 2015 [08:30:27 Wib]</cite></td>
							<td>Outdate</td>
						</tr>
						<tr>
							<th scope="row">1</td>
							<td><a href="#">INV/20150909/XV/IX/17258675</a></td>
							<td>Kapal Tanker Pertamina Lokasi Ujung Berung</td>
							<td>Verifikasi pembayaran</td>
							<td>25.230.000.000</td>
							<td><cite>13 April 2015 [08:30:27 Wib]</cite></td>
							<td>Waiting</td>
						</tr>
						<tr>
							<th scope="row">1</td>
							<td><a href="#">INV/20150909/XV/IX/17258675</a></td>
							<td>Kapal Tanker Pertamina Lokasi Ujung Berung</td>
							<td>Transaksi selesai</td>
							<td>25.230.000.000</td>
							<td><cite>13 April 2015 [08:30:27 Wib]</cite></td>
							<td>Closed</td>
						</tr>
						<tr>
							<th scope="row">1</td>
							<td><a href="#">INV/20150909/XV/IX/17258675</a></td>
							<td>Kapal Tanker Pertamina Lokasi Ujung Berung</td>
							<td>Transaksi Terkirim</td>
							<td>25.230.000.000</td>
							<td><cite>13 April 2015 [08:30:27 Wib]</cite></td>
							<td>Waiting</td>
						</tr>
						<tr>
							<th scope="row">1</td>
							<td><a href="#">INV/20150909/XV/IX/17258675</a></td>
							<td>Kapal Tanker Pertamina Lokasi Ujung Berung</td>
							<td>Dalam Pengiriman</td>
							<td>25.230.000.000</td>
							<td><cite>13 April 2015 [08:30:27 Wib]</cite></td>
							<td>Waiting</td>
						</tr>
					</tbody>
				</table>
				<small class="pull-left">Auction List&nbsp;<b>1 - 30</b>&nbsp;from&nbsp;<b>340.226</b></small>
			</div> <!-- End of Container Content -->
	
			<ul class="pagination pagination-sm" style="float:right;">
				<li><a href="#" aria-label="Previous"><span aria-hidden="false">Previous</span></a></li>
				<li><a href="#">1</a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
				<li><a href="#">4</a></li>
				<li><a href="#">5</a></li>
				<li><a href="#" aria-label="Next"><span aria-hidden="true">Next</span></a></li>
			</ul>		
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
	
	<div class="modal fade" id="promote" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			<h4 class="modal-title">Promote Auction</h4>
		  </div>
		  <div class="modal-body">
			<p>Apakah anda yakin ingin mempromosikan Lelang ini?&hellip;</p>
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
