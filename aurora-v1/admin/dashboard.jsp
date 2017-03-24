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
                            <a href="dashboard.jsp">Dashboard</a>
                        </li>
                        <li>
                            <a href="manage_cust.jsp"> Customer</a>
                        </li>
                        <li>
                            <a href="manage_auction.jsp"> Auction</a>
                        </li>
						<li>
                            <a href="manage_payment.jsp"> Payment</a>
                        </li>
						<li>
                            <a href="manage_feedback.jsp"> Feedback</a>
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
                    <h1 class="page-header">Dashboard</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-comments fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">26</div>
                                    <div>Total Customer</div>
                                </div>
                            </div>
                        </div>
                        <a href="manage_cust.jsp">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-green">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-tasks fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">12</div>
                                    <div>Total Auction</div>
                                </div>
                            </div>
                        </div>
                        <a href="manage_auction.jsp">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-yellow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-shopping-cart fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">124</div>
                                    <div>Total Bid</div>
                                </div>
                            </div>
                        </div>
                        <a href="manage_auction.jsp">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-red">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-support fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">13</div>
                                    <div>Total Transaction</div>
                                </div>
                            </div>
                        </div>
                        <a href="manage_payment.jsp">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
			<br><br>
			
			
			<div class="row">
				<!-- Auction Graph -->
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">Auction Monitoring</h3>
					</div>
					<div class="panel-body">
						<div id="graph"></div>
					</div>
					<div class="panel-footer"></div>
				</div>
				<!-- End of Auction Graph -->
			</div>
			<div class="row">
				<!-- Transaction Graph -->
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">Transaction Monitoring</h3>
					</div>
					<div class="panel-body">
						<div id="hero-area" class="graph"></div>
					</div>
					<div class="panel-footer"></div>
				</div>
				<!-- End of Transaction -->
			</div>
			
		
	</div>

    <!-- jQuery Bootstrap-->
	<script src="../js/jquery.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/admin/raphael-min.js"></script>
	
	<!-- Metis Menu Plugin JavaScript -->
	<script src="../js/admin/morris.js"></script>
    <!-- Custom Theme JavaScript -->
	<script src="../js/admin/sb-admin-2.js"></script>
	
	<script>
		var week_data = [
		  {"period": "2016 W27", "Auction": 3407, "Bid": 7660, "donate":400},
		  {"period": "2016 W26", "Auction": 3351, "Bid": 7629, "donate":800},
		  {"period": "2016 W25", "Auction": 3269, "Bid": 6618, "donate":320},
		  {"period": "2016 W24", "Auction": 3246, "Bid": 8661, "donate":490},
		  {"period": "2016 W23", "Auction": 3257, "Bid": 5667, "donate":900},
		  {"period": "2016 W22", "Auction": 3248, "Bid": 4627, "donate":667},
		  {"period": "2016 W21", "Auction": 3171, "Bid": 1660, "donate":500},
		  {"period": "2016 W20", "Auction": 3171, "Bid": 1676, "donate":1400},
		  {"period": "2016 W19", "Auction": 3201, "Bid": 8656, "donate":1200},
		  {"period": "2016 W18", "Auction": 3215, "Bid": 8622, "donate":1700},
		  {"period": "2016 W17", "Auction": 3148, "Bid": 8632, "donate":1400},
		  {"period": "2016 W16", "Auction": 3155, "Bid": 5681, "donate":1290},
		  {"period": "2016 W15", "Auction": 3190, "Bid": 3667, "donate":400},
		  {"period": "2016 W14", "Auction": 3226, "Bid": 3620, "donate":400},
		  {"period": "2016 W13", "Auction": 3245, "Bid": null, "donate": null},
		  {"period": "2016 W12", "Auction": 3289, "Bid": null, "donate": null},
		  {"period": "2016 W11", "Auction": 3263, "Bid": null, "donate": null},
		  {"period": "2016 W10", "Auction": 3189, "Bid": null, "donate": null},
		  {"period": "2016 W09", "Auction": 3079, "Bid": null, "donate": null},
		  {"period": "2016 W08", "Auction": 3085, "Bid": null, "donate": null},
		  {"period": "2016 W07", "Auction": 3055, "Bid": null, "donate": null},
		  {"period": "2016 W06", "Auction": 3063, "Bid": null, "donate": null},
		  {"period": "2016 W05", "Auction": 2943, "Bid": null, "donate": null},
		  {"period": "2016 W04", "Auction": 2806, "Bid": null, "donate": null},
		  {"period": "2016 W03", "Auction": 2674, "Bid": null, "donate": null},
		  {"period": "2016 W02", "Auction": 1702, "Bid": null, "donate": null},
		  {"period": "2016 W01", "Auction": 1732, "Bid": null, "donate": null}
		];
		Morris.Line({
		  element: 'graph',
		  data: week_data,
		  xkey: 'period',
		  ykeys: ['Auction', 'Bid', 'donate'],
		  labels: ['Auction', 'Bid', 'Donation']
		});
	</script>
	
	<script>
		Morris.Area({
		element: 'hero-area',
		data: [
		  {period: '2015-12', Transaction: 2666000000, Donation: 2647000},
		  {period: '2016-01', Transaction: 27780000, Donation: 2441000},
		  {period: '2016-02', Transaction: 49120000, Donation: 2501000},
		  {period: '2016-03', Transaction: 37600007, Donation: 5689000},
		  {period: '2016-04', Transaction: 68100000, Donation: 2293000},
		  {period: '2016-05', Transaction: 277800000, Donation: 24410000},
		  {period: '2016-06', Transaction: 491000002, Donation: 2501000},
		  {period: '2016-07', Transaction: 37670000, Donation: 5689000},
		  {period: '2016-08', Transaction: 68100000, Donation: 229300},
		  {period: '2016-09', Transaction: 2778000000, Donation: 24410000},
		  {period: '2016-10', Transaction: 491200000, Donation: 25010000},
		  {period: '2016-11', Transaction: 3767000000, Donation: 5689000},
		  {period: '2016-12', Transaction: 6810000000, Donation: 229300}
		],
		xkey: 'period',
		ykeys: ['Transaction', 'Donation'],
		labels: ['Transaction', 'Donation'],
		hideHover: 'auto',
		ymin: 'auto',
		ymax: 'auto'
	  });
	</script>
	
	
</body>

</html>
