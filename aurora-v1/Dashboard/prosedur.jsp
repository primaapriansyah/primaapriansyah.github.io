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
   <div id="wrap">
    <!--/.navigation -->
    <nav class="navbar navbar-default " role="navigation">     
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="../img/logo.png" alt="HTML5 Icon" style="width:130px;height:25px;"></a>
        </div>
        <div class="collapse navbar-collapse" id="centerednav">
          <form class="navbar-form" role="search">
		        <div class="form-group">
		          <input type="text" size="50" class="form-control search-category" placeholder="Cari">
		        </div>
		        <button type="submit" class="btn btn-default">Cari</button>
		  </form>
          <ul class="nav navbar-nav nav-tab">
            
            <li><a href="#about"><b>Prosedur Lelang</b></a></li>
			
            <!-- Messages: style can be found in dropdown.less-->
              <li class="dropdown messages-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="glyphicon glyphicon-envelope"></i>
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
                  <i class="glyphicon glyphicon-bell"></i>
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
        </div><!--/.nav-collapse -->
      </div> 
    </nav>
	<!--/.navigation -->
  
  
  	<!-- /.container -->
    <div class="container-fluid container-content ">
		<div class="row">
			<!-- Menu Kiri -->
      		<div class="col-md-1"></div>
			
			<!-- Konten -->
      		<div class="col-md-10">
				<div role="tabpanel" class="bs-example">
					<ul class="nav nav-pills border-bottom btn-group btn-group-justified" role="tablist">
					  <li role="presentation" class="active">
						<a href="#dashboard" aria-controls="dashboard" role="tab" data-toggle="tab" class="btn btn-default li-custom">
							Ketentuan Umum Pelelangan
						</a>
					  </li>
					  <li role="presentation">
						<a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" class="btn btn-default li-custom">Prosedur Pembuat Lelang</a>
					  </li>
					  <li role="presentation">
						<a href="#test" aria-controls="profile" role="tab" data-toggle="tab" class="btn btn-default li-custom">Prosedur Peserta Lelang</a>
					  </li>
					</ul>
				</div><!-- Tab panel -->
				
				<div role="tabpanel" class="bs-example">
					<!-- Tab panes -->
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane active" id="dashboard">
							<div class="bs-callout bs-callout-info" id="callout-glyphicons-location">
								<h4 id="changing-the-icon-font-location">Prosedur dan Ketentuan Umum Pelelangan<a class="anchorjs-link" href="#changing-the-icon-font-location"><span class="anchorjs-icon"></span></a></h4>
								<ol>
									<li>Setiap perusahaan diwajibkan untuk melakukan pendaftaran sebelum mengikuti pelelangan ataupun sebelum membuat suatu pelelangan.</li>
									<li>Pendaftaran yang telah dilakukan berlaku untuk perusahaan peserta lelang ataupun perusahaan yang ingin membuat pelelangan</li>
									<li>Pada saat proses pendaftaran diwajibkan untuk diisi selengkap mungkin dan pastikan nomor rekening serta  alamat email yang didaftarkan valid</li>
									<li>Selanjutnya untuk melakukan validasi dan pengaktifan username, lakukan aktivasi melalui email yang sudah didaftarkan sebelumnya. Proses aktivasi juga bertujuan untuk  mendapatkan nomor virtual account (nomor VA)</li>
									<li>Nomor Virtual Account tersebut nantinya akan digunakan untuk proses pembayaran uang jaminan dan juga pelunasan pelelangan</li>
									<li>Besaran uang jaminan sebesar 20% dari  total nilai harga pembuka lelang (opening price). Dan pengiriman uang jaminan wajib dilakukan jika ingin membuat penawaran (Bid) terhadap objek yang dilelang serta dikirimkan selambat-lambatnya pada H-1 sebelum pelelangan dimulai (kick off)</li>
									<li>Setiap peserta lelang yang mengikuti pelelangan diwajibkan untuk melakukan penawaran (Bid) terhadap lelang yang diikuti</li>
									<li>Peserta lelang yang belum berhasil memenangkan pelelangan, uang jaminan yang telah disetorkan sebelumnya akan dikembalikan segera dan dalam waktu maksimal 2 x 24 jam</li>
									<li>Untuk ketentuan pengambilan objek yang dilelang, peserta lelang diwajibkan untuk mengikuti prosedur yang diberlakukan oleh perusahaan pembuat lelang</li>
									<li>Ketentuan pemenang lelang sepenuhnya menjadi otoritas dan tanggung jawab pembuat pelelangan</li>
									<li>Untuk peserta lelang yang berhasil memenangkan pelelangan, diwajibkan untuk mengirimkan uang pelunasan pada nomor virtual account perusahaan pembuat lelang maksimal pada H+2 setelah penetapan pemenang lelang atau sesuai denganketentuan yang berlaku pada perusahaan pembuat lelang</li>
									<li>Pengiriman uang pelunasan ke rekening pembuat lelang, dikirimkan sesuai dengan BAST (Berita Acara Serah Terima) yang telah diunggah sebelumnya ke sistem</li>
									<li>Sistem akan mengirimkan pengembalian uang jaminan dan juga pelunasan pelelangan ke nomor rekening perusahaan yang telah didaftarkan sebelumnya</li>
									<li>Jika ada hal yang kurang jelas atau terdapat ketidaknyamanan pada pelayanan pelelangan online ini, dapat menghubungi nomor berikut 021-321xxxx</li>
								</ol>
							</div>
						</div><!-- Tabpanel Dashboard-->
						
						<div role="tabpanel" class="tab-pane active" id="peserta_lelang">
							
						</div><!-- Tabpanel Dashboard-->
					</div>
				</div><!-- Tab panel -->
			</div><!-- konten -->
			   
			<div class="col-md-1"></div>
		</div><!-- /.row -->
	
      	<div id="flush"></div>
      		
    </div>
      		
</div><!-- /.wrap -->


   <div id="footer">
      <div class="container">
      	<div class="row">
      		<div class="col-md-3">
      			
      		</div>
 			<div class="col-md-3">
 				<a id="footer-title" href=""><b>Contact US</b></a><br>
 				<p id="footer-content">
 				<b>PT Empower Information</b><br>
 				Jln. Mega Kuningan, Jakarta Selatan no 31<br>
 				
 				</p>
 			</div> 
 			<div class="col-md-3">
 				<a id="footer-title" href=""><b>About US</b></a>
 				<p id="footer-content">
 					Kami adalah perusahaan yang menyediakan layanan berupa lelang online. Untuk selengkapnya click tautan berikut <a href="">Selengkapnya</a> 
 				</p>
 			</div> 
 			
 			<div class="col-md-3">
 			</div>     	    	    	    	
      	</div>
      </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../js/ie10-viewport-bug-workaround.js"></script>
	<script>
		$(document).ready(function() {
			$("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
				e.preventDefault();
				$(this).siblings('a.active').removeClass("active");
				$(this).addClass("active");
				var index = $(this).index();
				$("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
				$("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
			});
		});
	</script>

</body></html>