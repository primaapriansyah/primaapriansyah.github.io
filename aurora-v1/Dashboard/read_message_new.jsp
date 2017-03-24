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

    <title>Read Message</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
	<link href="../css/fileinput.css" rel="stylesheet">
	
    <!-- Custom styles for this template -->
    <link href="../css/modify.css" rel="stylesheet">
	<link href="../css/style.css" rel="stylesheet">
	<link href="../css/datepicker.css" rel="stylesheet">
	<link href="../css/collapse.css" rel="stylesheet">
	<link href="../css/font-awesome.css" rel="stylesheet">
	<link href="../css/menu.css" rel="stylesheet"> 
	
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
</head>

<body class="general-font">
<div id="wrap">
	<!-- Navigation -->
	<nav class="navbar navbar-default navbar-style w3_megamenu" role="navigation">     
		<div class="container">
			<!-- Logo -->
			<div class="navbar-header style-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand navbar-style" href="#"><img src="../img/box.png" alt="HTML5 Icon" style="width:50px;"></a>
			</div>
			
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<!-- Mega Manu Category -->   
				<ul class="nav navbar-nav category-inline">
					<li class="dropdown w3_megamenu-fw">
						<a href="#" class="dropdown-toggle megamenu-style" id="header_categori" data-toggle="dropdown">Kategori<b class="caret"></b></a>   
						<ul class="dropdown-menu fullwidth">
							<li class="w3_megamenu-content withdesc">
								<div class="row">
									<div class="col-sm-3">
										<h3 class="title">Barang Antik & Seni</h3>
										<ul>
											<li><a data-description="Image Animation" href="http://w3lessons.info/2014/02/15/animate-images-on-page-scroll-using-jquery-css3/">Lukisan</a></li>
											<li><a data-description="Tooltips" href="http://w3lessons.info/2014/02/13/fancy-tooltips-using-css3/">Seni pahat & Patung</a></li>
											<li><a data-description="Image Animation" href="http://w3lessons.info/2013/11/14/image-hover-effects-using-css3/">Uang Kertas & Koin</a></li>
											<li><a data-description="Metro Style Boxes" href="http://w3lessons.info/2013/08/26/animated-windows-metro-boxes-using-css3/">Prangko</a></li>
											<li><a data-description="Css3 Skill bar" href="http://w3lessons.info/2013/06/04/skill-bar-with-jquery-css3/">Barang Koleksi</a></li>
										</ul>
									</div>
									<div class="col-sm-3">
										<h3 class="title">Elektronik</h3>
										<ul>
											<li><a data-description="DropDown Menu" href="http://w3lessons.info/2013/12/26/mashable-style-ajax-drop-down-menu-using-php-mysql-jquery/">Handphone & Tablet</a></li>
											<li><a data-description="Facebook Friends Search" href="http://w3lessons.info/2013/12/12/facebook-style-search-friends-using-jquery/">Komputer & Aksesoris</a></li>
											<li><a data-description="Text Search" href="http://w3lessons.info/2013/12/11/live-text-search-using-jquery/">TV & Audio</a></li>
											<li><a data-description="Security" href="http://w3lessons.info/2013/10/28/secure-web-page-content-using-jquery/">Smartwatch & Wearable Device</a></li>
											<li><a data-description="Page Speed" href="http://w3lessons.info/2013/07/11/how-to-reduce-web-page-loading-time-with-jquery/">Camera</a></li>
										</ul>
									</div>
									<div class="col-sm-3">
										<h3 class="title">Fashion</h3>
										<ul>
											<li><a data-description="Checking Expired Sessions" href="http://w3lessons.info/2014/01/01/how-to-check-expired-sessions-using-php-jquery-ajax/">Pria</a></li>
											<li><a data-description="Smiley Parser" href="http://w3lessons.info/2013/08/11/smiley-parser-with-php/">Wanita</a></li>
											<li><a data-description="IP address validation" href="http://w3lessons.info/2013/04/01/validate-ipv4-address-in-php/">Sepatu</a></li>
											<li><a data-description="PHP TimeZones" href="http://w3lessons.info/2012/11/11/php-country-time-zones/">Perhiasan</a></li>
										</ul>
									</div>
									<div class="col-sm-3">
										<h3 class="title">Lelang Proyek</h3>
										<ul>
											<li><a data-description="HTML5 Inline Edit" href="http://w3lessons.info/2014/04/13/html5-inline-edit-with-php-mysql-jquery-ajax/">Proyek Elektronik</a></li>
											<li><a data-description="Advanced HTML5 Tutorials" href="http://w3lessons.info/2014/03/22/advanced-html5-tutorials-client-side-offline-geolocation-part-i/">Utility & Bangunan</a></li>
											<li><a data-description="HTML5 Chart" href="http://w3lessons.info/2013/04/08/html5-chart/">Teknologi</a></li>
										</ul>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-3">
										<h3 class="title">Transportasi</h3>
										<ul>
											<li><a data-description="Image Animation" href="http://w3lessons.info/2014/02/15/animate-images-on-page-scroll-using-jquery-css3/">Mobil & Truk</a></li>
											<li><a data-description="Tooltips" href="http://w3lessons.info/2014/02/13/fancy-tooltips-using-css3/">Motor</a></li>
											<li><a data-description="Image Animation" href="http://w3lessons.info/2013/11/14/image-hover-effects-using-css3/">Sparepart & Aksesoris</a></li>
											<li><a data-description="Metro Style Boxes" href="http://w3lessons.info/2013/08/26/animated-windows-metro-boxes-using-css3/">Kendaraan Lainnya</a></li>
										</ul>
									</div>
									<div class="col-sm-3">
										<h3 class="title">Properti</h3>
										<ul>
											<li><a data-description="DropDown Menu" href="http://w3lessons.info/2013/12/26/mashable-style-ajax-drop-down-menu-using-php-mysql-jquery/">Handphone & Tablet</a></li>
											<li><a data-description="Facebook Friends Search" href="http://w3lessons.info/2013/12/12/facebook-style-search-friends-using-jquery/">Komputer & Aksesoris</a></li>
											<li><a data-description="Text Search" href="http://w3lessons.info/2013/12/11/live-text-search-using-jquery/">TV & Audio</a></li>
											<li><a data-description="Security" href="http://w3lessons.info/2013/10/28/secure-web-page-content-using-jquery/">Smartwatch & Wearable Device</a></li>
											<li><a data-description="Page Speed" href="http://w3lessons.info/2013/07/11/how-to-reduce-web-page-loading-time-with-jquery/">Camera</a></li>
										</ul>
									</div>
									<div class="col-sm-3">
										<h3 class="title">Hobi & Olahraga</h3>
										<ul>
											<li><a data-description="Checking Expired Sessions" href="http://w3lessons.info/2014/01/01/how-to-check-expired-sessions-using-php-jquery-ajax/">Rumah</a></li>
											<li><a data-description="Smiley Parser" href="http://w3lessons.info/2013/08/11/smiley-parser-with-php/">Ruko</a></li>
											<li><a data-description="IP address validation" href="http://w3lessons.info/2013/04/01/validate-ipv4-address-in-php/">Tanah</a></li>
											<li><a data-description="PHP TimeZones" href="http://w3lessons.info/2012/11/11/php-country-time-zones/">Furniture</a></li>
										</ul>
									</div>
									<div class="col-sm-3">
										<h3 class="title">Lelang Lainnya</h3>
										<ul>
											<li><a data-description="HTML5 Inline Edit" href="http://w3lessons.info/2014/04/13/html5-inline-edit-with-php-mysql-jquery-ajax/">Proyek Elektronik</a></li>
											<li><a data-description="Advanced HTML5 Tutorials" href="http://w3lessons.info/2014/03/22/advanced-html5-tutorials-client-side-offline-geolocation-part-i/">Utility & Bangunan</a></li>
											<li><a data-description="HTML5 Chart" href="http://w3lessons.info/2013/04/08/html5-chart/">Teknologi</a></li>
											<li><a data-description="HTML5 Whiteboard Marker" href="http://w3lessons.info/2012/12/22/white-board-drawing-widget-using-html5/">Lainnya</a></li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
				<!-- End Mega Manu Category --> 
				
				
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
						<a href="search_result.jsp" type="button" class="search_btn_header btn btn-default">Cari</a>
					</div>
				</form>
				<!-- End Form Searching -->
		
		
				<!-- Notifikasi -->
				<div class="pull-right style-header-notif">	
					<ul class="nav navbar-nav nav-tab ">
						<!-- Messages -->
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
											<h4>Support Team</h4>
											<p><small class="notif_fmessage">5 mins</small></p>
										</a>
									  </li><!-- end message -->
									</ul>
									<li class="footer"><a href="#">See All Messages</a></li>
								</li>
							</ul>
						</li>
						<!-- End of message -->
					  
						<!-- Notifications -->
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
											<small class="notif_fnotif">5 mins</small>
										</a>
										</li>
									</ul>
									<li class="footer"><a href="#">See All Notification </a></li>
								</li>
							</ul>
						</li>
						<!-- End of notification -->
						
						<!-- Menu user -->
						<li class="dropdown user user-menu list-notif">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								<img src="../img/avatar5.png" class="user-image" alt="User Image"/>
								<span class="hidden-xs">Dena Sucianandika</span>
							</a>
							<ul class="dropdown-menu notifdash">
								<li><a href="dashboard/dashboard.jsp">Dashboard</a></li>
								<li><a href="buat_lelang_c2c_new.jsp">Buat Lelang</a></li>
								<li><a href="dashboard/MyProfile_c2c_new.jsp">Akun Saya</a></li>
								<li><a href="dashboard/bid_aktif_c2c.jsp">Bid Saya</a></li>
								<li><a href="dashboard/active_auction_c2c_new.jsp">Lelang Saya</a></li>
								<li><a href="dashboard/payment_info.jsp">Pembayaran</a></li>
								<li><a href="dashboard/donasi.jsp">Donasi</a></li>
								<li role="separator" class="divider"></li>
								<li><a href="#">Logout</a></li>
							  </ul>
						</li>
						<!-- End of Menu User -->
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<!-- End Navigation -->

  
	<!-- Container -->
    <div class="container-fluid">
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-10">
				<div class="row">
					<!-- Breadcrumb -->
					<ol class="breadcrumb breadcrumb-style">
					  <li><a href="#">Halaman Utama</a><span class="breadcrumb-divider"><i class="icon-chevron-right-alt muted"></i></span></li>
					   <li class="active">Isi Pesan</li>
					</ol><!-- End Breadcrumb -->
				</div>
			</div>
			<div class="col-md-1"></div>
		</div>
		
		
		<div class="row inner_pagi">
			<div class="col-md-1"></div>
			<div class="col-md-10">
				<!-- SideLeft Menu -->
				<div class="col-md-3 inner_cat" role="complementary">
					<nav class="bs-docs-sidebar">
						<p class="media-heading f14">Selamat Datang Dena SA!</p>
						<div class="panel-group" id="accordion">
							<div class="panel panel-default panel-custom panelLeft_style dashboard_leftside">
								<div class="panel-heading dashboard_leftside_heading">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="sidebar_menufont">
										<i class="fa fa-dashboard fa-space"></i>Dashboard
									</a>
								</div>
							</div>
							
							<div class="panel panel-default panel-custom panelLeft_style dashboard_leftside">
								<div class="panel-heading dashboard_leftside_heading">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="sidebar_menufont">
										<i class="fa fa-edit  fa-space"></i>Buat Lelang
									</a>
								</div>
							</div>
							
							<div class="panel panel-default panel-custom panelLeft_style dashboard_leftside">
								<div class="panel-heading dashboard_leftside_heading">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="sidebar_menufont">
										<i class="fa fa-user fa-space"></i>Akun Saya
									</a>
								</div>
							</div>
							
							<div class="panel panel-default panel-custom panelLeft_style dashboard_leftside">
								<div class="panel-heading dashboard_leftside_heading">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" class="sidebar_menufont">
										<i class="fa fa-cart-plus fa-space"></i>Bid Saya<span class="caret"></span>
									</a>
								</div>
								<div id="collapseFour" class="panel-collapse collapse">
									<div class="panel-body dashboard_dropd">
										<table class="table table-font">
											<tbody><tr>
												<td class="modif_td">
													<span class="fa fa-cart-arrow-down fa-space"></span>
													<a class="subsidebar_menufont" href="#">Bid Aktif<span class="badge badgesCustom">1</span></a>
												</td>
											</tr>
											<tr>
												<td class="modif_td">
													<span class="fa fa-check-square fa-space"></span>
													<a class="subsidebar_menufont" href="#">Winning Bid</a>
												</td>
											</tr>
											<tr>
												<td class="modif_td">
													<span class="fa fa-times-circle fa-space"></span>
													<a class="subsidebar_menufont" href="#">Didn't Win Bid <span class="badge badgesCustom">1</span></a>
												</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							
							<div class="panel panel-default panel-custom panelLeft_style dashboard_leftside">
								<div class="panel-heading dashboard_leftside_heading">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseFive" class="sidebar_menufont">
										<i class="fa fa-legal fa-space"></i>Lelang Saya<span class="caret"></span>
									</a>
								</div>
								<div id="collapseFive" class="panel-collapse collapse">
									<div class="panel-body dashboard_dropd">
										<table class="table table-font">
											<tbody><tr>
												<td class="modif_td">
													<span class="fa fa-cart-arrow-down fa-space"></span>
													<a class="subsidebar_menufont" href="#">Lelang Aktif<span class="badge badgesCustom">1</span></a>
												</td>
											</tr>
											<tr>
												<td class="modif_td">
													<span class="fa fa-line-chart fa-space"></span>
													<a class="subsidebar_menufont" href="#">Lelang Terjual</a>
												</td>
											</tr>
											<tr>
												<td class="modif_td">
													<span class="fa fa-sort-amount-desc fa-space"></span>
													<a class="subsidebar_menufont" href="#">Lelang Tidak Terjual</a>
												</td>
											</tr>
											<tr>
												<td class="modif_td">
													<span class="fa fa-thumbs-up fa-space"></span>
													<a class="subsidebar_menufont" href="#">Draft Lelang</a>
												</td>
											</tr>
											<tr>
												<td class="modif_td">
													<span class="fa fa-check-square fa-space"></span>
													<a class="subsidebar_menufont" href="#">Pengembalian Lelang</a>
												</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							
							<div class="panel panel-default panel-custom panelLeft_style dashboard_leftside">
								<div class="panel-heading dashboard_leftside_heading">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseSix" class="sidebar_menufont">
										<i class="fa fa-money fa-space"></i>Pembayaran
									</a>
								</div>
							</div>
							
							<div class="panel panel-default panel-custom panelLeft_style dashboard_leftside">
								<div class="panel-heading dashboard_leftside_heading">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" class="sidebar_menufont">
										<i class="fa fa-money fa-space"></i>Donasi
									</a>
								</div>
							</div>
						</div><!-- End of Accordion -->
				
						<hr>
						<h5 class="media-heading f14 inner_cat_leftside">Contact Us</h5>
						<ul class="nav">
							<li><a href="#"><i class="fa fa-map-marker contactus_map"></i>Lokasi Kami :<p class="contactus_desc">Jalan Jend Sudirman Gd. Sampoerna Lt. 15. Jakarta Selatan</p></a></li>
							<li><a href="#"><i class="fa fa-phone"></i> 021 500261</a></li>
							<li><a href="#"><i class="fa fa-envelope"></i> admin@auctionparty.com </a></li>
						</ul>
						
					</nav>
				</div>
				<!-- End of SideLeft Menu -->
				
				
				<!-- SideRight Content -->
				<div class="col-md-9">
					<div class="page-header ph-custom">
						<h4 id="whats" class="title-category">Isi Pesan Anda</h4>
						<small><cite>" Easiest way to buy, Highest price to sell "</cite></small>
					</div>

					<div class="row row-cols9">
						<div class="row">
							<div class="col-md-9">
								<ul class="nav nav-pills">
									<li class="aktif"><a href="#whats" class="kategori"><i class="fa fa-inbox fa-space"></i>Inbox <span class="label label-primary label-custom">12</span></a></li>
									<li role="presentation"><a href="#whats" class="kategori"><i class="fa fa-envelope-o fa-space"></i>Sent</a></li>
									<li role="presentation"><a href="#whats" class="kategori"><i class="fa fa-file-text-o fa-space"></i>Drafts <span class="label label-warning label-custom">12</span></a></li>
									<li role="presentation"><a href="#whats" class="kategori"><i class="fa fa-filter fa-space"></i>Spam <span class="label label-danger label-custom">12</span></a></li>
									<li role="presentation"><a href="#whats" class="kategori"><i class="fa fa-trash-o fa-space"></i>Trash</a></li>
								</ul>
							</div>
						</div>
						<hr>
						<div class="message_mn">
							<div class="box-header with-border">
							  <h3 class="box-title">Read Mail</h3>
							</div><!-- /.box-header -->
							<div class="box-body no-padding">
							  <div class="mailbox-read-info">
								<h3>Message Subject Is Placed Here</h3>
								<h5>From: support@auctionparty.com <span class="mailbox-read-time pull-right">15 Feb. 2015 11:03 PM</span></h5>
							  </div><!-- /.mailbox-read-info -->
							  
							  <div class="mailbox-read-message">
								<p>Hello Bidder,</p>
								<p>Auctionparty adalah situs pelelangan online yang bekerja layaknya broker untuk memasarkan barang lelang anda dan mempertemukannya dengan banyak calon pembeli potensial, sehingga barang lelang yang anda jual dapat mencapai harga yang kompetitif daripada pelelangan biasanya. Kami membuat anda menjadi sangat mudah dalam menjual ataupun membeli barang lelang yang anda inginkan.</p> 
								<p><cite>"We always commit to assist you and never sleep to serve your auction. "</cite></p>
								<p>Thanks,<br>Jane</p>
							  </div><!-- /.mailbox-read-message -->
							</div><!-- /.box-body -->
							<div class="box-footer">
							  <ul class="mailbox-attachments clearfix">
								<li>
								  <span class="mailbox-attachment-icon"><i class="fa fa-file-pdf-o"></i></span>
								  <div class="mailbox-attachment-info">
									<a href="#" class="mailbox-attachment-name"><i class="fa fa-paperclip"></i> Sep2014-report.pdf</a>
									<span class="mailbox-attachment-size">
									  1,245 KB
									  <a href="#" class="btn btn-default btn-xs pull-right"><i class="fa fa-cloud-download"></i></a>
									</span>
								  </div>
								</li>
								<li>
								  <span class="mailbox-attachment-icon"><i class="fa fa-file-word-o"></i></span>
								  <div class="mailbox-attachment-info">
									<a href="#" class="mailbox-attachment-name"><i class="fa fa-paperclip"></i> App Description.docx</a>
									<span class="mailbox-attachment-size">
									  1,245 KB
									  <a href="#" class="btn btn-default btn-xs pull-right"><i class="fa fa-cloud-download"></i></a>
									</span>
								  </div>
								</li>
								 </ul>
							</div><!-- /.box-footer -->
							<div class="box-footer">
							  <button class="btn btn-default"><i class="fa fa-trash-o"></i> Delete</button>
							  <button class="btn btn-default"><i class="fa fa-print"></i> Print</button>
							</div><!-- /.box-footer -->
						  </div>
					</div>
				</div>
			</div>
			<div class="col-md-1"></div>
		</div>
	</div>
	
	<!-- Footer
    ================================================== -->
	<div class="footer">
		<!-- Feedback from customer -->
			<div class="row fb_row">
				<div class="col-md-1 placeholder"></div>	
				<div class="col-md-10">
					<div class="feedback feedback-alert" role="alert">
						<h4 class="feedback_font text-center">Bagaimana Waterbe menurut anda? <a href="feedback_form.jsp" class="btn btn-success btn-sm feedback-btn">Beri Feedback</a></h4> 
					</div>
				</div>
				<div class="col-md-1 placeholder"></div>	
			</div>
		
		<div class="footer-style">
			<div class="container footer-row-style">
				<div class="row">
					<div class="col-md-2">
						<h5 class="h5-footer"><b>Waterbe</b></h5>
						<ul class="nav">
							<li><a href="aboutus.jsp">Tentang Kami</a></li>
							<li><a href="#">Keamanan Lelang Waterbe</a></li>
							<li><a href="#">Beri Feedback</a></li>
							<li><a href="#">Beritahu teman</a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
					
					<div class="col-md-2">
						<h5 class="h5-footer"><b>Bantuan</b></h5>
						<ul class="nav">
							<li><a href="#">Bantuan</a></li>
							<li><a href="#">Site Map</a></li>
							<li><a href="#">Syarat & Ketentuan</a></li>
							<li><a href="#">Kebijakan Privasi</a></li>
						</ul>
					</div> 
					
					<div class="col-md-2">
						<h5 class="h5-footer"><b>Bidder</b></h5>
						<ul class="nav">
							<li><a href="#">Cara Ikut Lelang</a></li>
							<li><a href="#">Pembayaran</a></li>
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
							<li><a href="#"><i class="fa fa-envelope"></i> admin@Waterbe.com </a></li>
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
						<!-- Language -->
						<div class="row language_btn">
							<div class="btn-group" data-toggle="buttons">
								<label class="btn btn-info btn-sm active">
									<input type="radio" name="options" id="option1" autocomplete="off" checked>Indonesia
								</label>
								<label class="btn btn-info btn-sm">
									<input type="radio" name="options" id="option2" autocomplete="off">English
								</label>
							</div>
						</div>
					</div>	
				</div>	
				
				<!-- Footer Description Waterbe -->
				<div class="row footer-desc">
					<p>Waterbe.com merupakan platform e-auction yang memberikan fasilitas pelelangan online dan pemasaran barang lelang antar perusahaan. 
					Melalui Waterbe.com ini, perusahaan yang ingin melakukan lelang terhadap aset-asetnya akan mendapatkan pengalaman lelang yang lebih mudah dan efisien serta sangat menguntungkan 
					untuk dapat mencapai harga yang maksimum dari barang yang dilelang. Selain itu pembeli ataupun peserta lelang juga bisa mendapatkan barang yang dinginkan dengan cepat dan mudah.
					<br><br><strong>Segera lelang di Waterbe.com</strong> dan nikmati pengalaman lelang yang mudah, aman dan menyenangkan serta dapatkan harga maksimum
					dari barang yang anda lelang. Kami tidak hanya menyediakan fasilitas pelelangan online, tapi kami juga membantu untuk memasarkan barang yang anda lelang
					ke calon pembeli potensial anda. Nikmati kemudahan melakukan lelang di Waterbe.com dengan berbagai fitur dan fasilitas yang telah
					kami sediakan untuk anda. Dan dapatkan harga maksimum dari penjualan lelang anda atau segera dapatkan barang yang anda inginkan dengan cepat, mudah dan aman.
					</p>
					<address>© 2015 Waterbe.com. All rights reserved.</address>
				</div>
			</div>
		</div><!--/ Row Footer-Style -->
	</div><!--/ End Footer -->

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
	<script src="../js/jquery.catslider.js"></script>
	<script src="../js/modernizr.custom.63321.js"></script>
	
	
	
	<script>
	$("#input-dim-1").fileinput({
		uploadUrl: "localhost/aurora/WebContent/img/",
		allowedFileExtensions: ["jpg", "png", "gif"],
		minImageWidth: 50,
		minImageHeight: 50
	});
</script>

<script>
$('.accordian-body').on('show.bs.collapse', function () {
    $(this).closest("table")
        .find(".collapse.in")
        .not(this)
        .collapse('toggle')
})
</script>

<script>
$(".date-picker").datepicker();

$(".date-picker").on("change", function () {
    var id = $(this).attr("id");
    var val = $("label[for='" + id + "']").text();
    $("#msg").text(val + " changed");
});
</script>

<script>
	$(document).ready(function () {
		$( '#mi-slider' ).catslider();
	});
</script>

</body></html>