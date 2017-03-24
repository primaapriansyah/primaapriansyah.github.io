<!DOCTYPE html>
<!-- saved from url=(0051)http://getbootstrap.com/examples/navbar-static-top/ -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="http://getbootstrap.com/favicon.ico">

    <title>Static Top Navbar Example for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
	<link href="../css/fileinput.css" rel="stylesheet">
	
    <!-- Custom styles for this template -->
    <link href="../css/modify.css" rel="stylesheet">
	<link href="../css/style.css" rel="stylesheet">
	<link href="../css/font-awesome.css" rel="stylesheet">
	
	
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	<style type="text/css">
		.bs-example{
			margin: 20px;
		}
	</style>
</head>

<body>
    <nav class="navbar navbar-default navbar-style" role="navigation">     
    <div class="container">
        <div class="collapse navbar-collapse" id="centerednav">
			<form class="form-inline navbar-form" role="form" id="yourformID-form" action="" method="post" style="margin-left:15px;">
				<a class="navbar-brand" href="#" style="padding-right:20px;">Logo</a>	
					<div class="input-group">
						<!--<span class="input-group-addon dropdown mega-dropdown"><i class="fa fa-male">Category</i></span>-->
						<a href="#" class="dropdown-toggle input-group-addon dropdown mega-dropdown search-style" data-toggle="dropdown">Category</a>
						<ul class="dropdown-menu mega-dropdown-menu row">
							<li class="col-sm-4">
								<ul>
									<li><h4><a href="#" class="header-megamenu">Property</a></h4></li>
									<li><a href="#">Building</a></li>
									<li><a href="#">Factory & Office</a></li>
									<li><a href="#">Land</a></li>
									<li><a href="#">House</a></li>
									<li><a href="#">Apartement</a></li>
									<li><a href="#">Warehouse</a></li>
									<li><a href="#">Other</a></li>
									<li class="divider"></li>
								</ul>
							</li>
							<li class="col-sm-4">
								<ul>
									<li><h4><a href="#" class="header-megamenu">Transportation</a></h4></li>
									<li><a href="#">Car or Bus</a></li>
									<li><a href="#">Motorcycle</a></li>
									<li><a href="#">Truck</a></li>
									<li><a href="#">Aircraft</a></li>
									<li><a href="#">Ship</a></li>
									<li><a href="#">Forklift</a></li>
									<li><a href="#">Others</a></li>
									<li class="divider"></li>
								</ul>
							</li>
							<li class="col-sm-4">
								<ul>
									<li><h4><a href="#" class="header-megamenu">Scrap Items</a></h4></li>
									<li><a href="#">Scrap Production</a></li>
									<li><a href="#">Scrap Non Production</a></li>
									<li><a href="#">Others</a></li>							
									<li class="divider"></li>
									<li><h4><a href="#" class="header-megamenu">Machineries</a></h4></li>
									<li class="divider"></li>
									<li><h4><a href="#" class="header-megamenu">Electronic</a></h4></li>
									<li class="divider"></li>
									<li><h4><a href="#" class="header-megamenu">Others</a></h4></li>
									<li class="divider"></li>                            
								</ul>
							</li>
						</ul>
						
						
						<div class="form-group form-style">
							<input size="50" maxlength="50" class="form-control input-sm" name="q" type="text">          
						</div>
						<div class="form-group form-style">
							<select class="form-control input-sm" name="category">
								<option value="">All Location</option>
								<option value="0">select1</option>
								<option value="1">select2</option>
								<option value="2">select3</option>
							</select>           
						</div>
						<button type="submit" class="btn btn-default search-style">Search</button>
					</div>
					<!-- Notification -->
					<ul class="nav navbar-nav nav-tab">
            <!-- Messages: style can be found in dropdown.less-->
              <li class="dropdown messages-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="glyphicon glyphicon-envelope" style="font-size:20px;"></i>
                  <span class="label label-success">1</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 1 messages</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu">
                      <li><!-- start message -->
                        <a href="#">
                          <div class="pull-left">
                            <img src="../img/avatar5.png" class="img-circle" alt="User Image"/>
                          </div>
                          <h4>
                            Support Team
                            <small><i class="glyphicon glyphicon-file"></i> 5 mins</small>
                          </h4>
                          <p>Message from Bidders</p>
                        </a>
                      </li><!-- end message -->
                    </ul>
                  </li>
                  <li class="footer"><a href="#">See All Messages</a></li>
                </ul>
              </li>
			  
			  
			  <!-- Notifications: style can be found in dropdown.less -->
              <li class="dropdown notifications-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="glyphicon glyphicon-bell" style="font-size:20px;"></i>
                  <span class="label label-warning">10</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 10 notifications</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu">
                      <li>
                        <a href="#">
                          <i class="glyphicon glyphicon-file"></i> 5 new members joined today
                        </a>
                      </li>
                </ul>
				<li class="footer"><a href="#">View all</a></li>
				</ul>
			  </li>
			  </li>
			  
			  <!-- User Account: style can be found in dropdown.less -->
              <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="../img/avatar5.png" class="user-image" alt="User Image"/>
                  <span class="hidden-xs">Dena Sucianandika</span>
                </a>
                <ul class="dropdown-menu">
                  <!-- User image -->
                  <li class="user-header">
                    <img src="../img/avatar5.png" class="img-circle" alt="User Image" />
                    <p>
                      Dena Sucianandika
                      <small>Account Member PT Pertamina since May. 2015</small>
                    </p>
                  </li>
                  <!-- Menu Footer-->
                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="#" class="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div class="pull-right">
                      <a href="#" class="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
			</ul>
		  <!-- End of Notification -->
		</form>
			
			
        </div><!--/.nav-collapse -->
    </div> 
    </nav><!--/.navigation -->
	
  
  	<!-- /.container -->
    <div class="container-fluid">
		<div class="row">
			<!-- SideLeft Menu -->
			<div class="col-sm-2 col-md-2 SideLeft-style">
			<div class="panel-group" id="accordion">
					<div class="panel panel-default panel-custom">
						<div class="panel-heading">
							<h4 class="panel-title font-sidebar">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
								<i class="fa fa-user fa-lg fa-space"></i>Account
								</a>
							</h4>
						</div>
						<div id="collapseOne" class="panel-collapse collapse in">
							<div class="panel-body">
								<table class="table table-font">
									<tr>
										<td>
											<span class="fa fa-user fa-space"></span>
											<a href="#">Profile Information</a>
										</td>
									</tr>
									<tr>
										<td>
											<a href="../icon/phone"><i class="fa fa-phone fa-space"></i> Contact</a>
										</td>
									</tr>
									<tr>
										<td>
											<span class="fa fa-heart fa-space"></span>
											<a href="#">Interest</a>
										</td>
									</tr>
									<tr>
										<td>
											<span class="fa fa-lock fa-space"></span>
											<a href="#">Security</a>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				
				<div class="panel panel-default panel-custom">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
							<i class="fa fa-cart-plus fa-lg fa-space"></i>My Bid
							</a>
						</h4>
					</div>
					<div id="collapseTwo" class="panel-collapse collapse">
						<div class="panel-body">
							<table class="table table-font">
								<tr>
									<td>
										<span class="fa fa-cart-arrow-down fa-space"></span>
										<a href="#">All Bid</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="fa fa-line-chart fa-space"></span>
										<a href="#">Priority Bid</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="fa fa-sort-amount-desc fa-space"></span>
										<a href="#">Loss Opportunity Bid</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="fa fa-thumbs-up fa-space"></span>
										<a href="#">Recomendation Bid</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="fa fa-check-square fa-space"></span>
										<a href="#">Winning Bid</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="fa fa-times-circle fa-space"></span>
										<a href="#">Lost in Bid</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				
				<div class="panel panel-default panel-custom">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
							<i class="fa fa-legal fa-lg fa-space"></i>My Auction
							</a>
						</h4>
					</div>
					<div id="collapseThree" class="panel-collapse collapse">
						<div class="panel-body">
							<table class="table table-font">
								<tr>
									<td>
										<i class="fa fa-cart-plus fa-lg fa-space"></i>
										<a href="#">Create Auction</a>
									</td>
								</tr>
								<tr>
									<td>
										<i class="fa fa-server fa-lg fa-space"></i>
										<a href="#">List Auction</a>
									</td>
								</tr>
								<tr>
									<td>
										<i class="fa fa-clock-o fa-lg fa-space"></i>
										<a href="#">Extending Auction</a>
									</td>
								</tr>
								<tr>
									<td>
										<i class="fa fa-close fa-lg fa-space"></i>
										<a href="#">Closing Auction</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				
				<div class="panel panel-default panel-custom">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
								<i class="fa fa-list fa-lg fa-space"></i>My Watch List
							</a>
						</h4>
					</div>
					<div id="collapseFour" class="panel-collapse collapse">
						<div class="panel-body">
							<table class="table table-font">
								<tr>
									<td>
										<span class="glyphicon glyphicon-usd fa-space"></span><a href="#">All Watch List</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="glyphicon glyphicon-user fa-space"></span><a href="#">Favorite Watch List</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				
				<div class="panel panel-default panel-custom">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
								<i class="fa fa-money fa-lg fa-space"></i>Payment Info
							</a>
						</h4>
					</div>
					<div id="collapseFive" class="panel-collapse collapse">
						<div class="panel-body">
							<table class="table table-font">
								<tr>
									<td>
										<span class="glyphicon glyphicon-usd fa-space"></span><a href="#">Sales</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="glyphicon glyphicon-user fa-space"></span><a href="#">Customers</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="glyphicon glyphicon-tasks fa-space"></span><a href="#">Products</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="glyphicon glyphicon-shopping-cart fa-space"></span><a href="#">Shopping Cart</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div class="panel panel-default panel-custom">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
								<i class="fa fa-buysellads fa-lg fa-space"></i>Advertising
							</a>
						</h4>
					</div>
					<div id="collapseSix" class="panel-collapse collapse">
						<div class="panel-body">
							<table class="table table-font">
								<tr>
									<td>
										<span class="glyphicon glyphicon-usd fa-space"></span><a href="#">Create Advertising</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="glyphicon glyphicon-user fa-space"></span><a href="#">List of Advertising</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div><!-- End of SideLeft Menu -->
			
			<!-- SideRight Content -->
		<div class="col-sm-10 col-md-10">
			<div class="row">
				<h3 class="hot-auction-label"><span>Recomendation Bid</span></h3>
				<div class="col-md-12">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">Recomendation Bid</h3>
                </div><!-- /.box-header -->
                <div class="box-body table-responsive no-padding">
                  <table class="table table-hover">
                    <tbody><tr>
                      <th>ID Auction</th>
                      <th>Auction Name</th>
                      <th>Seller</th>
					  <th>Location</th>
					  <th>Duration</th>
					  <th><td><a href="#"><button type="button" class="btn btn-primary btn-sm" style="width:100%;">Add to Watch List</button></a></td></th>
                    </tr>
                    <tr>
                      <td><a href="detail_tomjer.html">132671</a></td>
                      <td>Kapal Tanker Pertamina</td>
					  <td>PT Pertamina Persero</td>
					  <td>Blok Cepu</td>
					  <td>15.000.000.000</td>
					  <td>1 Unit</td>
					  <td>15.000.000.000</td>
					  <td>11 April 2015 - 22 April 2015</td>
                    </tr>
                  </tbody>
				  </table>
                </div><!-- /.box-body -->
              </div><!-- /.box -->
			  <div class="box-tools">
                    <ul class="pagination pagination-sm no-margin pull-right" style="margin:0px !important;">
                      <li><a href="#"><<</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">>></a></li>
                    </ul>
                  </div>
            </div>
			</div> <!-- End of Row -->
</div> <!-- End of Container Content -->
	
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- J styles for this template -->
	<script src="../js/jquery.min.js"></script>
    <script src="../js/fileinput.min.js" type="text/javascript"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/bootstrap-datepicker.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../js/ie10-viewport-bug-workaround.js"></script>
	<script src="../js/bootstrap-datepicker.js"></script>
	
	
	<script>
		var nowTemp = new Date();
		var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
		 
		var checkin = $('#dpd1').datepicker({
		  onRender: function(date) {
			return date.valueOf() < now.valueOf() ? 'disabled' : '';
		  }
		}).on('changeDate', function(ev) {
		  if (ev.date.valueOf() > checkout.date.valueOf()) {
			var newDate = new Date(ev.date)
			newDate.setDate(newDate.getDate() + 1);
			checkout.setValue(newDate);
		  }
		  checkin.hide();
		  $('#dpd2')[0].focus();
		}).data('datepicker');
		var checkout = $('#dpd2').datepicker({
		  onRender: function(date) {
			return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
		  }
		}).on('changeDate', function(ev) {
		  checkout.hide();
		}).data('datepicker');
	</script>
	
	<script>
	$("#input-dim-1").fileinput({
		uploadUrl: "localhost/aurora/WebContent/img/",
		allowedFileExtensions: ["jpg", "png", "gif"],
		minImageWidth: 50,
		minImageHeight: 50
	});
</script>
	

</body>
</html>