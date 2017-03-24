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
		<!-- Logo -->
		<div class="navbar-header style-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand navbar-style" href="#"><img src="../img/kompascom.png" alt="HTML5 Icon" style="width:130px;"></a>
        </div>
		
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<!-- Mega Manu Category -->   
				<ul class="nav category-inline">
					<li class="dropdown">
						<a href="#" class="dropdown-toggle megamenu-style" data-toggle="dropdown" style="font-size:15px !important;">Kategori<b class="caret"></b></a>   
						<ul class="dropdown-menu mega-menu dropdown-style">
							<div class="row">
								<div class="col-sm-4">
									<li class="mega-menu-column">
									<ul>
										<li class="nav-header">Property</li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Building</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Factory & Office</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Land</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">House</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Apartement</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Warehouse</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Other</a></li>
										<li class="divider"></li>
									</ul>
									</li>    
								</div>
			
								<div class="col-sm-4">
									<li class="mega-menu-column">
									<ul>
									<li class="nav-header">Transportation</li>
										<li class="sub-category"><a href="#" class="megamenu-style">Car or Bus</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Motorcycle</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Truck</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Aircraft</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Ship</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Forklift</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Others</a></li>
										<li class="divider"></li>
									</ul>
									</li> 
								</div>
								
								<div class="col-sm-4">
									<li class="mega-menu-column">
									<ul>                            
									<li class="nav-header">Scrap Items</li>
										<li class="sub-category"><a href="#" class="megamenu-style">Scrap Production</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Scrap Non Production</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Others</a></li>	
										<li class="divider"></li>
									</ul>
									</li> 
								</div>
							</div>
							<br>
							<div class="row">
								<div class="col-sm-4">
									<li class="mega-menu-column">
									<ul>                            
									<li class="nav-header"><a href="#" class="list-nochild">Machineries</a></li>
									</ul>
									</li> 
								</div>
								
								<div class="col-sm-4">
									<li class="mega-menu-column">
									<ul>                            
									<li class="nav-header"><a href="#" class="list-nochild">Electronic</a></li>
									</ul>
									</li>
								</div>
								
								<div class="col-sm-4">
									<li class="mega-menu-column">
									<ul>                            
									<li class="nav-header"><a href="#" class="list-nochild">Others</a></li>
									</ul>
									</li>
								</div>
							</div>
							
							<div class="row-fluid">
								<div class="col-sm-12 all-Category">
									<small><b><a class="color" href="#">Semua Kategori</a></b></small>
								</div>
							</div>
						</ul>
					</li>
				</ul>
		
			<!-- Form Searching -->
			<form class="form-inline navbar-form" role="form" id="yourformID-form" action="" method="post">	
				<div class="input-group">
					<div class="form-group form-style spaceformheader">
						<input size="50" maxlength="50" class="form-control" name="q" type="text">          
					</div>
					<div class="form-group form-style spaceformheader">
						<select class="form-control" name="category">
							<option value="">All Location</option>
							<option value="0">select1</option>
							<option value="1">select2</option>
							<option value="2">select3</option>
						</select>           
					</div>
					<button type="submit" class="btn btn-primary search-style">Search</button>
				</div>
			</form>
		
			<!-- Notif -->
			<div class="pull-right style-header-notif">	
				<ul class="nav navbar-nav nav-tab ">
					<!-- Messages: style can be found in dropdown.less-->
					<li class="dropdown messages-menu list-notif">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="fa fa-envelope-o notif"></i>
							<span class="label label-success">1</span>
						</a>
						<ul class="dropdown-menu margindropdown">
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
										</h4>
										<p><small style="color:#999999;">5 mins</small></p>
									</a>
								  </li><!-- end message -->
								</ul>
								<li class="footer"><a href="#">See All Messages</a></li>
							</li>
						</ul>
					</li><!--/.end of message -->
				  
					<!-- Notifications: style can be found in dropdown.less -->
					<li class="dropdown notifications-menu list-notif">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="fa fa-bell-o notif"></i>
							<span class="label label-warning">10</span>
						</a>
						<ul class="dropdown-menu margindropdown">
							<li class="header">You have 10 notifications</li>
							<li>
								<!-- inner menu: contains the actual data -->
								<ul class="menu">
									<li>
									<a href="#" class="colornotif">
										<i class="fa fa-bullhorn"></i> 5 new members joined today <br>
										<small style="margin-left:25px; color:#999999;">5 mins</small>
									</a>
									</li>
								</ul>
								<li class="footer"><a href="#">See All Notification </a></li>
							</li>
						</ul>
					</li><!--/.end of notification -->
					
					<li class="dropdown user user-menu list-notif">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<img src="../img/avatar5.png" class="user-image" alt="User Image"/>
							<span class="hidden-xs">Dena Sucianandika</span>
						</a>
						<ul class="dropdown-menu notifdash">
							<li><a href="#">Dashboard</a></li>
							<li><a href="#">Account</a></li>
							<li><a href="#">My Bid</a></li>
							<li><a href="#">My Auction</a></li>
							<li><a href="#">My WatchList</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#">Logout</a></li>
						  </ul>
					</li>
				</ul>
			</div>
		</div>
    </div>
</nav><!--/.navigation -->

  
  	<!-- /.container -->
    <div class="container-fluid">
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-10">
				<div class="row">
					<!-- Breadcrumb -->
					<ol class="breadcrumb breadcrumb-style">
					  <li><a href="#">Halaman Utama</a><span class="breadcrumb-divider"><i class="icon-chevron-right-alt muted"></i></span></li>
					  <li><a href="#">Property</a></li>
					  <li><a href="#">House</a></li>
					   <li class="active">Detail House</li>
					</ol><!-- End Breadcrumb -->
				</div>
			</div>
			<div class="col-md-1"></div>
		</div>
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-10">
				<!-- SideLeft Menu -->
				<div class="col-md-3 leftMenu_bl">
				<div class="panel-group" id="accordion">
				<div class="panel panel-default panel-custom panelLeft_style">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
								<i class="fa fa-money fa-lg fa-space"></i>Dashboard
							</a>
						</h4>
					</div>
					<div id="collapseOne" class="panel-collapse collapse">
						
					</div>
				</div>
				
				<div class="panel panel-default panel-custom panelLeft_style">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
								<i class="fa fa-money fa-lg fa-space"></i>Buat Lelang
							</a>
						</h4>
					</div>
					<div id="collapseTwo" class="panel-collapse collapse">
						
					</div>
				</div>
				<br>
				<div class="panel panel-default panel-custom panelLeft_style">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
							<i class="fa fa-user fa-lg fa-space"></i>Account
							</a>
						</h4>
					</div>
					<div id="collapseThree" class="panel-collapse collapse in">
						<div class="panel-body">
							<table class="table table-font">
								<tr>
									<td>
										<span class="fa fa-user fa-space"></span>
										<a href="#">My Account</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="fa fa-bank fa-space"></span>
										<a href="#">Rekening</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="fa fa-heart fa-space"></span>
										<a href="#">Interest</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				
				<div class="panel panel-default panel-custom panelLeft_style">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
							<i class="fa fa-cart-plus fa-lg fa-space"></i>My Bid
							</a>
						</h4>
					</div>
					<div id="collapseFour" class="panel-collapse collapse">
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
				
				<div class="panel panel-default panel-custom panelLeft_style">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
							<i class="fa fa-legal fa-lg fa-space"></i>My Auction
							</a>
						</h4>
					</div>
					<div id="collapseFive" class="panel-collapse collapse">
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
				
				<div class="panel panel-default panel-custom panelLeft_style">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
								<i class="fa fa-list fa-lg fa-space"></i>My Watch List
							</a>
						</h4>
					</div>
					<div id="collapseSix" class="panel-collapse collapse">
						<div class="panel-body">
							<table class="table table-font">
								<tr>
									<td>
										<span class="glyphicon glyphicon-usd"></span><a href="#">All Watch List</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="glyphicon glyphicon-user"></span><a href="#">Favorite Watch List</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				
				<div class="panel panel-default panel-custom panelLeft_style">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">
								<i class="fa fa-buysellads fa-lg fa-space"></i>My Ads
							</a>
						</h4>
					</div>
					<div id="collapseSeven" class="panel-collapse collapse">
						<div class="panel-body">
							<table class="table table-font">
								<tr>
									<td>
										<span class="fa fa-buysellads fa-space"></span><a href="#">All Ads</a>
									</td>
								</tr>
								<tr>
									<td>
										<span class="fa fa-buysellads fa-space"></span><a href="#">Create Ads</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				
				<div class="panel panel-default panel-custom panelLeft_style">
					<div class="panel-heading">
						<h4 class="panel-title font-sidebar">
							<a data-toggle="collapse" data-parent="#accordion" href="#collapseEight">
								<i class="fa fa-money fa-lg fa-space"></i>Payment Info
							</a>
						</h4>
					</div>
					<div id="collapseEight" class="panel-collapse collapse">
						<div class="panel-body">
							<table class="table table-font">
								<tr>
									<td>
										<span class="glyphicon glyphicon-usd"></span><a href="#">All Payment</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				
				
			</div><!-- End of Accordion -->
		
			</div><!-- End of SideLeft Menu -->
			
				
				<!-- SideRight Content -->
				<div class="col-md-9">
					<h3 class="hot-auction-label"><span>My Auction</span></h3>
					<div class="row">
						<div class="col-md-3">
							<img data-src="holder.js/140x140" class="img-rounded" alt="140x140" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNGVjOGE3ODFiZiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE0ZWM4YTc4MWJmIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ1LjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 140px; height: 140px;">
						</div>
					  
						<div class="col-md-9">
							<div class="media-body">
								<h4 class="media-heading">Kapal Tanker Pertamina Lokasi Ujung Berung</h4>
								<div class="table-responsive">
									<table class="table">
										<colgroup>
											<col class="col-xs-1">
											<col class="col-xs-4">
										</colgroup>
										<tbody>
											<tr>
											  <td>Jumlah Bidder</td>
											  <td>: 24</td>
											</tr>
											<tr>
											  <td>Harga Pembuka</td>
											  <td>: Rp 15.000.000.000</td>
											</tr>
											<tr>
											  <td>Bid Tertinggi</td>
											  <td>: Rp 25.230.000.000</td>
											</tr>
											<tr>
											  <td>Bid Terakhir Anda</td>
											  <td>: Rp 15.230.000.000</td>
											</tr>
											<tr>
											  <td>Waktu Tersisa</td>
											  <td>: 02:09:18:23</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<hr>
					<div class="row">
						<div class="col-md-3">
							<img data-src="holder.js/140x140" class="img-rounded" alt="140x140" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNGVjOGE3ODFiZiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE0ZWM4YTc4MWJmIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ1LjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 140px; height: 140px;">
						</div>
					  
						<div class="col-md-9">
							<div class="media-body">
								<h4 class="media-heading">Kapal Tanker Pertamina Lokasi Ujung Berung</h4>
								<div class="table-responsive">
									<table class="table">
										<colgroup>
											<col class="col-xs-1">
											<col class="col-xs-4">
										</colgroup>
										<tbody>
											<tr>
											  <td>Jumlah Bidder</td>
											  <td>: 24</td>
											</tr>
											<tr>
											  <td>Harga Pembuka</td>
											  <td>: Rp 15.000.000.000</td>
											</tr>
											<tr>
											  <td>Bid Tertinggi</td>
											  <td>: Rp 25.230.000.000</td>
											</tr>
											<tr>
											  <td>Bid Terakhir Anda</td>
											  <td>: Rp 15.230.000.000</td>
											</tr>
											<tr>
											  <td>Waktu Tersisa</td>
											  <td>: 02:09:18:23</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<hr>
					<div class="row">
						<div class="col-md-3">
							<img data-src="holder.js/140x140" class="img-rounded" alt="140x140" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNGVjOGE3ODFiZiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE0ZWM4YTc4MWJmIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ1LjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 140px; height: 140px;">
						</div>
					  
						<div class="col-md-9">
							<div class="media-body">
								<h4 class="media-heading">Kapal Tanker Pertamina Lokasi Ujung Berung</h4>
								<div class="table-responsive">
									<table class="table">
										<colgroup>
											<col class="col-xs-1">
											<col class="col-xs-4">
										</colgroup>
										<tbody>
											<tr>
											  <td>Jumlah Bidder</td>
											  <td>: 24</td>
											</tr>
											<tr>
											  <td>Harga Pembuka</td>
											  <td>: Rp 15.000.000.000</td>
											</tr>
											<tr>
											  <td>Bid Tertinggi</td>
											  <td>: Rp 25.230.000.000</td>
											</tr>
											<tr>
											  <td>Bid Terakhir Anda</td>
											  <td>: Rp 15.230.000.000</td>
											</tr>
											<tr>
											  <td>Waktu Tersisa</td>
											  <td>: 02:09:18:23</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div><!-- End SideRight Content-->
			</div>
			
			<div class="col-md-1"></div>
		</div> 
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