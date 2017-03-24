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

    <title>Dashboard</title>

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
</body>
				
				
				
				