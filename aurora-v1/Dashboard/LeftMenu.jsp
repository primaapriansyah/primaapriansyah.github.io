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
    
  	<!-- /.container -->
    <div class="container-fluid">
		<div class="row">
			<!-- SideLeft Menu -->
			<div class="col-sm-2 col-md-2 SideLeft-style">
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
				<br><br>
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
			
		</div> <!-- End Row -->
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