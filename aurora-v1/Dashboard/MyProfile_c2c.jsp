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

    <title>My Profile</title>

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
		
		@import url('demo.css');
		
		li,ul,body,input{margin:0; padding:0; list-style:none}
		/* Registrasi */
		li,ul,body,input{margin:0; padding:0; list-style:none}
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
							<div class="row" style="margin-left:15px;">
								<div class="col-sm-3">
									<li class="mega-menu-column">
									<ul>
										<li class="nav-header"><a href="#" class="list-nochild">Barang Antik & Seni</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Lukisan</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Seni Pahat & Patung</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Uang Kertas & Koin</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Prangko</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Barang Koleksi</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style ">Lainnya</a></li>
										<li class="divider"></li>
									</ul>
									</li>    
								</div>
			
								<div class="col-sm-3">
									<li class="mega-menu-column">
									<ul>
									<li class="nav-header"><a href="#" class="list-nochild">Elektronik</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Handphone & Tablet</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Computer & Aksesoris</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">TV & Audio</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Smartwatch & Wearable Device</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Camera</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Lainnya</a></li>
										<li class="divider"></li>
									</ul>
									</li> 
								</div>
								
								<div class="col-sm-3">
									<li class="mega-menu-column">
									<ul>                            
									<li class="nav-header"><a href="#" class="list-nochild">Fashion</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Pria</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Wanita</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Sepatu</a></li>	
										<li class="sub-category"><a href="#" class="megamenu-style">Tas</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Perhiasan</a></li>
										<li class="sub-category"><a href="#" class="megamenu-style">Lainnya</a></li>	
										<li class="divider"></li>
									</ul>
									</li> 
								</div>
								
								<div class="col-sm-3">
									<li class="mega-menu-column">
									<ul>                            
										<li class="nav-header"><a href="#" class="list-nochild">Lelang Proyek</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Proyek Elektronik</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Utility dan Bangunan</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Teknologi</a></li>	
											<li class="sub-category"><a href="#" class="megamenu-style">Lainnya</a></li>	
									</ul>
									</li>
								</div>
								
							</div>
							<br>
							<div class="row" style="margin-left:15px;">
								<div class="col-sm-3">
									<li class="mega-menu-column">
									<ul>                            
										<li class="nav-header"><a href="#" class="list-nochild">Transportasi</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Mobil & Truk</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Motor</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Part & Aksesoris</a></li>	
											<li class="sub-category"><a href="#" class="megamenu-style">Kendaraan Lainnya</a></li>
									</ul>
									</li> 
								</div>
								
								<div class="col-sm-3">
									<li class="mega-menu-column">
									<ul>                            
										<li class="nav-header"><a href="#" class="list-nochild">Property</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Rumah</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Ruko</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Tanah</a></li>	
											<li class="sub-category"><a href="#" class="megamenu-style">Furniture</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Lainnya</a></li>
									</ul>
									</li>
								</div>
								
								<div class="col-sm-3">
									<li class="mega-menu-column">
									<ul>                            
										<li class="nav-header"><a href="#" class="list-nochild">Hobi & Olahraga</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Golf</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Fitnes</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Sepeda</a></li>	
											<li class="sub-category"><a href="#" class="megamenu-style">Memancing</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Olahraga Indoor</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Olahraga Outdoor</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Lainnya</a></li>	
									</ul>
									</li>
								</div>
								
								<div class="col-sm-3">
									<li class="mega-menu-column">
									<ul>                            
										<li class="nav-header"><a href="#" class="list-nochild">Lelang Lainnya</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Hiburan</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Kesehatan & Kecantikan</a></li>
											<li class="sub-category"><a href="#" class="megamenu-style">Peralatan Bisnis & Industri</a></li>	
											<li class="sub-category"><a href="#" class="megamenu-style">Lainnya</a></li>	
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
						<input size="50" maxlength="50" class="form-control" name="q" type="text" placeholder="Cari Barang Lelang">          
					</div>
					<div class="form-group form-style spaceformheader">
						<select class="form-control" name="category">
							<option value="">Semua Lokasi</option>
							<option value="0">Jakarta</option>
							<option value="1">Bandung</option>
							<option value="2">Surabaya</option>
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
				<div class="col-md-3" style="margin-top:38px !important;">
					<div class="panel panel-default" style="margin-top:8px;border-radius:0;box-shadow: none;">
						<div class="panel-heading"><strong>Dena Sucianandika</strong></div>
						<div class="panel-body" style="padding: 10px 15px;">
							<i class="fa fa-user fa-lg fa-space"></i><a href="#">Dashboard</a>
							<hr>
							<i class="fa fa-cart-plus fa-lg fa-space"></i><a href="../buat_lelang.jsp">Buat Lelang</a>
						</div>
					</div>
					<div class="panel-group" id="accordion">
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
									<tbody><tr>
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
								</tbody></table>
							</div>
							</div>
						</div>
					
						<div class="panel panel-default panel-custom panelLeft_style">
							<div class="panel-heading">
								<h4 class="panel-title font-sidebar">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
									<i class="fa fa-cart-plus fa-lg fa-space"></i>My Bid<span class="badge badgesCustom">2</span>
									</a>
								</h4>
							</div>
							<div id="collapseFour" class="panel-collapse collapse">
								<div class="panel-body">
									<table class="table table-font">
										<tbody><tr>
											<td>
												<span class="fa fa-cart-arrow-down fa-space"></span>
												<a href="#">All Bid <span class="badge badgesCustom">1</span></a>
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
												<a href="#">Didn't Win Bid <span class="badge badgesCustom">1</span></a>
											</td>
										</tr>
									</tbody></table>
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
										<tbody><tr>
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
									</tbody></table>
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
										<tbody><tr>
											<td>
												<span class="glyphicon glyphicon-usd"></span><a href="#">All Watch List</a>
											</td>
										</tr>
										<tr>
											<td>
												<span class="glyphicon glyphicon-user"></span><a href="#">Favorite Watch List</a>
											</td>
										</tr>
									</tbody></table>
								</div>
							</div>
						</div>
					
						<div class="panel panel-default panel-custom panelLeft_style">
							<div class="panel-heading">
								<h4 class="panel-title font-sidebar">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseEight">
										<i class="fa fa-money fa-lg fa-space"></i>Payment Info <span class="badge badgesCustom">4</span>
									</a>
								</h4>
							</div>
							<div id="collapseEight" class="panel-collapse collapse">
								<div class="panel-body">
									<table class="table table-font">
										<tr>
											<td>
												<span class="fa fa-buysellads fa-space"></span><a href="#">Payment for Bidder <span class="badge badgesCustom">4</span></a>
											</td>
										</tr>
										<tr>
											<td>
												<span class="fa fa-buysellads fa-space"></span><a href="#">Payment for Seller</a>
											</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div><!-- End of Accordion -->
					
					<div class="panel panel-default" style="margin-top:8px;border-radius:0;box-shadow: none;">
						<div class="panel-heading"><strong>Foto Profil</strong></div>
						<div class="thumbnail" style="margin-bottom:0px !important; border:none !important;">
							<img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNGVjMTQyODUyMiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE0ZWMxNDI4NTIyIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNC41IiB5PSIzNi41Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true" style="width:100%;">
							<div class="caption">
								<input type="file" id="exampleInputFile">
								<p class="help-block" style="font-size:10px;">Maksimum 10 MB. Ekstensi yang diperbolehkan: .JPG .JPEG .GIF .PNG</p>
							</div>
						</div>
					</div>
				</div>
			
				<!-- SideRight Content -->
				<div class="col-md-9">
					<div class="row" style="margin-left:10px;">
						<div class="page-header text-center headerCustom">
							<h4 class="title-category">Akun Saya</h4>
						</div>
						<div class="row content-profile">
							<h5 class="bs-callout bs-callout-warning bs-callout-custom">Dena Sucianandika</h5>
							<h5>Informasi Profil<a href="#" type="button" class="btn btn-primary btn-xs" style="float:right;">Ubah Profil</a></h5>
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
									<td class="col-md-3">Tanggal lahir</td>
									<td>25 Desember 1990</td>
								  </tr>
								  <tr>
									<td class="col-md-3">Jenis Kelamin</td>
									<td>Laki-laki</td>
								  </tr>
								  <tr>
									<td>Username</td>
									<td>dena176</td>
								  </tr>
								  <tr>
									<td></td>
									<td><a href="#" type="button" class="btn btn-primary btn-sm"><i class="fa fa-key fa-space"></i>Ubah Password</a></td>
								  </tr>
								</tbody>
							</table>	
							<hr><br>
							<h5>Informasi Kontak<a href="#" type="button" class="btn btn-primary btn-xs" style="float:right;">Ubah Kontak</a></h5>
							<table class="table table-user-information">
								<tbody>
								  <tr>
									<td class="col-md-3">Alamat Lengkap</td>
									<td>Jl. Medan Merdeka Timur 1A, Jakarta 10110 </td>
								  </tr>
								  <tr>
									<td class="col-md-3">Email</td>
									<td>admin@pertamina.com</td>
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
							<hr><br>
							<h5>Rekening <a href="#" type="button" class="btn btn-primary btn-xs" style="float:right;">Ubah Rekening</a></h5>
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
							<hr><br>
							<h5>Ketertarikan Pelelangan <a href="#" type="button" class="btn btn-primary btn-xs" style="float:right;">Ubah Ketertarikan Lelang</a></h5>
							<table class="table table-user-information">
								<tbody>
								  <tr>
									<td class="col-md-3">Kategori</td>
									<td>Elektronik</td>
								  </tr>
								</tbody>
							</table>
						</div>
					</div>
					<hr><br>
					<!--
					<div class="row" style="margin-left:10px;">
						<div class="page-header text-center headerCustom">
							<h4 class="title-category">Rekomendasi Lelang</h4>
						</div>
						<div class="main">
							<div id="mi-slider" class="mi-slider">
								<ul>
									<li><a href="#"><img src="../img/mobil.jpg" alt="img01"><h4>Boots</h4></a></li>
									<li><a href="#"><img src="../img/truk.jpg" alt="img02"><h4>Oxfords</h4></a></li>
									<li><a href="#"><img src="../img/3.jpg" alt="img03"><h4>Loafers</h4></a></li>
									<li><a href="#"><img src="../img/4.jpg" alt="img04"><h4>Sneakers</h4></a></li>
								</ul>
								<ul>
									<li><a href="#"><img src="../img/5.jpg" alt="img05"><h4>Belts</h4></a></li>
									<li><a href="#"><img src="../img/6.jpg" alt="img06"><h4>Hats &amp; Caps</h4></a></li>
									<li><a href="#"><img src="../img/7.jpg" alt="img07"><h4>Sunglasses</h4></a></li>
									<li><a href="#"><img src="../img/8.jpg" alt="img08"><h4>Scarves</h4></a></li>
								</ul>
								<ul>
									<li><a href="#"><img src="../img/9.jpg" alt="img09"><h4>Casual</h4></a></li>
									<li><a href="#"><img src="../img/10.jpg" alt="img10"><h4>Luxury</h4></a></li>
									<li><a href="#"><img src="../img/11.jpg" alt="img11"><h4>Sport</h4></a></li>
								</ul>
								<ul>
									<li><a href="#"><img src="../img/12.jpg" alt="img12"><h4>Carry-Ons</h4></a></li>
									<li><a href="#"><img src="../img/13.jpg" alt="img13"><h4>Duffel Bags</h4></a></li>
									<li><a href="#"><img src="../img/14.jpg" alt="img14"><h4>Laptop Bags</h4></a></li>
									<li><a href="#"><img src="../img/15.jpg" alt="img15"><h4>Briefcases</h4></a></li>
								</ul>
								<nav>
									<a href="#">Barang Antik & Seni</a>
									<a href="#">Fashion</a>
									<a href="#">Transportasi</a>
									<a href="#">Elektronik</a>
								</nav>
							</div>
						</div>
					</div>
					-->
				</div> <!-- End SideRight Content-->
				
			</div>
			<div class="col-md-1"></div>
		</div> <!-- End Row -->
	</div> <!-- End of Container Content -->

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
      	</div>
	
		<div class="row footer-border"> 
			<p>AuctionParty.com merupakan platform e-auction yang memberikan fasilitas pelelangan online dan pemasaran barang lelang antar perusahaan. 
			Melalui AuctionParty.com ini, perusahaan yang ingin melakukan lelang terhadap aset-asetnya akan mendapatkan pengalaman lelang yang lebih mudah dan efisien serta sangat menguntungkan 
			untuk dapat mencapai harga yang maksimum dari barang yang dilelang. Selain itu pembeli ataupun peserta lelang juga bisa mendapatkan barang yang dinginkan dengan cepat dan mudah.
			<br><br><strong>Segera lelang di AuctionParty.com</strong> dan nikmati pengalaman lelang yang mudah, aman dan menyenangkan serta dapatkan harga maksimum
			dari barang yang anda lelang. Kami tidak hanya menyediakan fasilitas pelelangan online, tapi kami juga membantu untuk memasarkan barang yang anda lelang
			ke calon pembeli potensial anda. Nikmati kemudahan melakukan lelang di AuctionParty.com dengan berbagai fitur dan fasilitas yang telah
			kami sediakan untuk anda. Dan dapatkan harga maksimum dari penjualan lelang anda atau segera dapatkan barang yang anda inginkan dengan cepat, mudah dan aman.
			</p>
			<address>� 2015 AuctionParty.com. All rights reserved.</address>
		</div>	
		
	</div>
</div>

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
	<script src="../js/jquery.catslider.js"></script>
	<script src="../js/modernizr.custom.63321.js"></script>
	
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
		$(document).ready(function () {
			$( '#mi-slider' ).catslider();
		});
	</script>

</body>
</html>