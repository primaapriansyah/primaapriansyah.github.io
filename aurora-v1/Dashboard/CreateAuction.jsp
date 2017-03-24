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
	<link href="../css/bootstrap-datetimepicker.css" rel="stylesheet">
	
	
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
			<a class="navbar-brand navbar-style" href="#"><img src="../img/logokompas.png" alt="HTML5 Icon" style="width:130px;"></a>
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
										<li><a href="#" class="megamenu-style">Building</a></li>
										<li><a href="#" class="megamenu-style">Factory & Office</a></li>
										<li><a href="#" class="megamenu-style">Land</a></li>
										<li><a href="#" class="megamenu-style">House</a></li>
										<li><a href="#" class="megamenu-style">Apartement</a></li>
										<li><a href="#" class="megamenu-style">Warehouse</a></li>
										<li><a href="#" class="megamenu-style">Other</a></li>
										<li class="divider"></li>
									</ul>
									</li>    
								</div>
			
								<div class="col-sm-4">
									<li class="mega-menu-column">
									<ul>
									<li class="nav-header">Transportation</li>
										<li><a href="#" class="megamenu-style">Car or Bus</a></li>
										<li><a href="#" class="megamenu-style">Motorcycle</a></li>
										<li><a href="#" class="megamenu-style">Truck</a></li>
										<li><a href="#" class="megamenu-style">Aircraft</a></li>
										<li><a href="#" class="megamenu-style">Ship</a></li>
										<li><a href="#" class="megamenu-style">Forklift</a></li>
										<li><a href="#" class="megamenu-style">Others</a></li>
										<li class="divider"></li>
									</ul>
									</li> 
								</div>
								
								<div class="col-sm-4">
									<li class="mega-menu-column">
									<ul>                            
									<li class="nav-header">Scrap Items</li>
										<li><a href="#" class="megamenu-style">Scrap Production</a></li>
										<li><a href="#" class="megamenu-style">Scrap Non Production</a></li>
										<li><a href="#" class="megamenu-style">Others</a></li>	
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
					<div class="form-group form-style">
						<input size="50" maxlength="50" class="form-control" name="q" type="text">          
					</div>
					<div class="form-group form-style">
						<select class="form-control" name="category">
							<option value="">All Location</option>
							<option value="0">select1</option>
							<option value="1">select2</option>
							<option value="2">select3</option>
						</select>           
					</div>
					<button type="submit" class="btn btn-default search-style">Search</button>
				</div>
			</form>
		
			<!-- Notif -->
			<div class="style-header-notif">	
				<ul class="nav navbar-nav nav-tab ">
					<!-- Messages: style can be found in dropdown.less-->
					<li class="dropdown messages-menu list-notif">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="fa fa-envelope-o notif"></i>
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
					</li><!--/.end of message -->
				  
					<!-- Notifications: style can be found in dropdown.less -->
					<li class="dropdown notifications-menu list-notif">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="fa fa-bell-o notif"></i>
							<span class="label label-warning">10</span>
						</a>
						<ul class="dropdown-menu">
							<li class="header">You have 10 notifications</li>
								<!-- inner menu: contains the actual data -->
								<ul class="menu">
									<li>
									<a href="#"><i class="glyphicon glyphicon-file"></i> 5 new members joined today</a>
									</li>
								</ul>
							<li class="footer"><a href="#">View all</a></li>
						</ul>
					</li><!--/.end of notification -->
				  
					<!-- User Account: style can be found in dropdown.less -->
					<li class="dropdown user user-menu list-notif">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<img src="../img/avatar5.png" class="user-image" alt="User Image"/>
							<span class="hidden-xs">Dena Sucianandika</span>
						</a>
						<ul class="dropdown-menu" style="margin-top:10px !important;">
							<!-- User image -->
							<li class="user-header">
								<img src="../img/avatar5.png" class="img-circle" alt="User Image" />
								<p>
								  Dena Sucianandika
								  <small>Account Member PT Pertamina since May. 2015</small>
								</p>
							</li>
							<li class="user-footer">
								<div class="pull-left"><a href="#" class="btn btn-default btn-flat">Profile</a></div>
								<div class="pull-right"><a href="#" class="btn btn-default btn-flat">Sign out</a></div>
							</li>
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
											<span class="fa fa-user"></span>
											<a href="#">Profile Information</a>
										</td>
									</tr>
									<tr>
										<td>
											<a href="../icon/phone"><i class="fa fa-phone"></i> Contact</a>
										</td>
									</tr>
									<tr>
										<td>
											<span class="fa fa-bank"></span>
											<a href="#">Rekening</a>
										</td>
									</tr>
									<tr>
										<td>
											<span class="fa fa-heart"></span>
											<a href="#">Interest</a>
										</td>
									</tr>
									<tr>
										<td>
											<span class="fa fa-lock"></span>
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
					<form style="margin-left:15px;">
						<fieldset>
							<h3 class="hot-auction-label"><span>Create Auction</span></h3>
								<div class="col-sm-8 col-md-8" style="margin-left:-15px;">
									<div class="well well-sm"><strong>What's you're selling.?</strong></div>
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Nama Perusahaan</label>
										<input class="form-control input-sm input-sm" id="NamaPerusahaan" placeholder="Nama Perusahaan">
									</div>
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Nama Barang</label>
										<input class="form-control input-sm" id="NamaBarang" placeholder="Nama Barang">
									</div>
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Kategori</label>
										<select class="form-control input-sm" style="width:40% !important;">
										  <option>-- Select Category --</option>
										  <option>Machineries</option>
										  <option>Transportation</option>
										  <option>Property</option>
										  <option>Scrap Items</option>
										  <option>Electronic</option>
										  <option>Others</option>
										</select>
									</div>
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Satuan</label>
										<select class="form-control input-sm" style="width:40% !important;">
										  <option>-- Select Category --</option>
										  <option>Unit</option>
										  <option>Kg</option>
										  <option>M3</option>
										  <option>Ha</option>
										  <option>Pcs</option>
										  <option>Set</option>
										  <option>Liter</option>
										  <option>Others</option>
										</select>
									</div>
									<div class="form-group form-style" style="width:40% !important;">
										<label for="exampleInputEmail1" class="label-form">Quantity</label>
										<input class="form-control input-sm" id="NamaPerusahaan" placeholder="Quantity Items">
									</div>
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Kondisi Aktual</label>
										<select class="form-control input-sm" style="width:40% !important;">
										  <option>-- Select Category --</option>
										  <option>Obsolete</option>
										  <option>Not Used-Good</option>
										  <option>Scrap</option>
										</select>
									</div>
									<div class="form-group form-style" style="width:40% !important;">
										<label for="exampleInputEmail1" class="label-form">Sertifikasi</label>
										<div class="input-group">
										  <input type="file" class="filestyle" data-buttonName="btn-primary">
										</div>
									</div>
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Deskripsi Barang</label>
										<textarea class="form-control input-sm" rows="6"></textarea>
										<label for="exampleInputEmail1" class="label-form">or Upload your Description </label>
										<input type="file" class="filestyle" data-buttonName="btn-primary">
									</div>
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Upload Image</label>
										<input id="input-dim-1" type="file" multiple class="file-loading" accept="image/*">
									</div>
									<hr><br>
									<div class="well well-sm"><strong>Price and Payment</strong></div>
									<div class="form-group form-style" style="width:40% !important;">
										<label for="exampleInputEmail1" class="label-form">Harga Pembuka</label>
										<input class="form-control input-sm" id="HargaPembuka" placeholder="Harga Pembuka">
									</div>
									<div class="form-group form-style" style="width:40% !important;">
										<label for="exampleInputEmail1" class="label-form">Jumlah Uang Jaminan</label>
										<input class="form-control input-sm" id="UangJaminan" placeholder="Uang Jaminan">
									</div>
									<div class="form-group form-style" style="width:40% !important;">
										<label for="exampleInputEmail1" class="label-form">Payment of Bail <i style="font-size:11px;">(days before Starting Auction)</i></label>
										<input class="form-control input-sm" id="UangJaminan" placeholder="Ex : 2 days">
									</div>
									<div class="form-group form-style" style="width:40% !important;">
										<label for="exampleInputEmail1" class="label-form">Full Payment <i style="font-size:11px;">(days after Closing Auction)</i></label>
										<input class="form-control input-sm" id="UangJaminan" placeholder="Ex : 2 days">
									</div>
									<hr><br>
									<div class="well well-sm"><strong>Auction Date and Shipping</strong></div>
									
									<div class="form-group form-style" style="width:40% !important;">
										<label for="exampleInputEmail1" class="label-form">Tanggal Pelaksanaan</label>
										<div>
											<div class="input-daterange input-append date" id="datepicker">
												<input class="form-control input-sm" id="dpd2" type="text" value="12-07-2015">
											</div>
										</div>
									</div>
									<div class="form-group form-style" style="width:40% !important;">
										<label class="control-label control-label-custom">Tanggal Berakhir Lelang</label>
										<div>
											<div class="input-daterange input-append date" id="datepicker">
												<input class="form-control input-sm" id="dpd3" type="text" value="12-07-2015">
											</div>
										</div>
									</div>
									
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Lokasi</label>
										<textarea class="form-control input-sm" rows="3"></textarea>
									</div>
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Prosedur Pengambilan Barang</label>
										<textarea class="form-control input-sm" rows="3"></textarea>
										<label for="exampleInputEmail1" class="label-form">or Upload your Procedure </label>
										<input type="file" class="filestyle" data-buttonName="btn-primary">
									</div>
									<hr><br>
									<div class="well well-sm"><strong>Add Additional Details</strong></div>
									<div class="form-group form-style">
										<label for="exampleInputEmail1" class="label-form">Other Details</label>
										<i style="font-size:11px;">(Make sure these additional details and your listing description match what you picked above)</i>
										<textarea class="form-control input-sm" rows="5"></textarea>
										<i style="font-size:11px;">Max 5000 Character limit </i>
									</div>
								</div>
								
								<div class="col-sm-4 col-md-4">
									<div class="bs-callout bs-callout-info bs-callout-style" id="callout-navs-tabs-plugin">
										<h4>Hal-hal yang perlu diperhatikan dalam membuat pelelangan :</h4>
										<ol type="1" style="font-size:13px;">
										  <li>Reduce the amount or width of navbar items.</li>
										  <li>Hide certain navbar items at certain screen sizes using <a href="../css/#responsive-utilities">responsive utility classes</a>.</li>
										  <li>Change the point at which your navbar switches between collapsed and horizontal mode. Customize the <code>@grid-float-breakpoint</code> variable or add your own media query.</li>
										</ol>
									</div>
								</div>
							<div class="form-actions col-sm-8 col-md-8 well">
							<a href="#" class="btn btn-primary save">Save</a>
							<a href="#" class="btn btn-default">Cancel</a>
						</div>
						
						</fieldset>
						
						
					</form>
				</div> <!-- End Row Content -->
			</div> <!-- SideRight Row -->
		</div> <!-- End of -->
	</div>
	
<div class="footer footer-style">
    <div class="container">
      	<div class="row footer-row-style">
      		<div class="col-md-2">
				<h5 class="h5-footer"><b>AuctionParty</b></h5>
				<ul class="nav">
					<li><a href="#">Tentang Kami</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Legalitas</a></li>
					<li><a href="#">Keamanan Lelang AuctionParty</a></li>
					<li><a href="#">Keuntungan Lelang di AuctionParty</a></li>
				</ul>
      		</div>
 			<div class="col-md-2">
 				<h5 class="h5-footer"><b>Bantuan</b></h5>
 				<ul class="nav">
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Site Map</a></li>
					<li><a href="#">Syarat & Ketentuan</a></li>
					<li><a href="#">Bantuan</a></li>
					<li><a href="#">Kebijakan Privasi</a></li>
				</ul>
 			</div> 
 			<div class="col-md-2">
 				<h5 class="h5-footer"><b>Bidder</b></h5>
 				<ul class="nav">
					<li><a href="#">Cara Ikut Lelang</a></li>
					<li><a href="#">Pembayaran</a></li>
					<li><a href="#">Pengembalian Uang Jaminan</a></li>
					<li><a href="#">Pengambilan Barang</a></li>
					<li><a href="#">Risalah Pelelangan</a></li>
					<li><a href="#">Tips Pelelangan</a></li>
				</ul>
 			</div> 
			<div class="col-md-2">
 				<h5 class="h5-footer"><b>Seller</b></h5>
 				<ul class="nav">
					<li><a href="#">Cara Membuat Pelelangan</a></li>
					<li><a href="#">Pengiriman Pembayaran</a></li>
					<li><a href="#">Ketentuan Pelelangan</a></li>
				</ul>
 			</div> 
 			<div class="col-md-2">
 				<h5 class="h5-footer"><b>Hubungi Kami</b></h5>
 				<ul class="nav">
					<li><a href="#"><i class="fa fa-map-marker" style="margin-right: 5px;"></i>Lokasi Kami :<p style="  margin-left: 12px;">Jalan Jend Sudirman Gd. Sampoerna Lt. 15. Jakarta Selatan</p></a></li>
					<li><a href="#"><i class="fa fa-phone"></i> 021 500261</a></li>
					<li><a href="#"><i class="fa fa-envelope"></i> admin@auctionparty.com </a></li>
				</ul>
 			</div>  
			<div class="col-md-2">
				<h5 class="h5-footer"><b>Ikuti Kami</b></h5>
				<div class="social">
					<ul>
						<li><a href="#"><i class="fa fa-lg fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-lg fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-lg fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-lg fa-youtube"></i></a></li>
					</ul>
				</div>
			</div>	
      	</div><!--/ End Row Footer -->
	
		<div class="row footer-border"> 
			<p>AuctionParty.com merupakan platform e-auction yang memberikan fasilitas pelelangan online dan pemasaran barang lelang antar perusahaan. 
			Melalui AuctionParty.com ini, perusahaan yang ingin melakukan lelang terhadap aset-asetnya akan mendapatkan pengalaman lelang yang lebih mudah dan efisien serta sangat menguntungkan 
			untuk dapat mencapai harga yang maksimum dari barang yang dilelang. Selain itu pembeli ataupun peserta lelang juga bisa mendapatkan barang yang dinginkan dengan cepat dan mudah.
			<br><br><strong>Segera lelang di AuctionParty.com</strong> dan nikmati pengalaman lelang yang mudah, aman dan menyenangkan serta dapatkan harga maksimum
			dari barang yang anda lelang. Kami tidak hanya menyediakan fasilitas pelelangan online, tapi kami juga membantu untuk memasarkan barang yang anda lelang
			ke calon pembeli potensial anda. Nikmati kemudahan melakukan lelang di AuctionParty.com dengan berbagai fitur dan fasilitas yang telah
			kami sediakan untuk anda. Dan dapatkan harga maksimum dari penjualan lelang anda atau segera dapatkan barang yang anda inginkan dengan cepat, mudah dan aman.
			</p>
			<address>© 2015 AuctionParty.com. All rights reserved.</address>
		</div>	
		
	</div><!--/ End Container Footer -->
</div><!--/ End Footer -->


	
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- J styles for this template -->
	<script src="../js/jquery.min.js"></script>
    <script src="../js/fileinput.min.js" type="text/javascript"></script>
	<script src="../js/bootstrap.min.js"></script>
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

<script>
	// Dropdown Menu Fade    
jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});
</script>
	

</body>
</html>