function setAccordion() {
	/* OPEN ACCORD */
	var openAccord = function(item, viewport, contentH) {
		item.addClass('active');
		viewport.height(contentH);
	}
	
	/* CLOSE ACCORD */
	var closeAccord = function(item, viewport) {
		item.removeClass('active');
		viewport.height(0);
	}
	
	/* TOGGLE ACCORD */
	var toggleAccord = function(item) {
		var header = item.find('.accord-header');
		var accord = item.closest('.accord');
		var viewport = item.find('.accord-viewport');
		var content = item.find('.accord-content');
		var contentH = content.outerHeight();
		
		if(item.hasClass('active') == false) {
			openAccord(item, viewport, contentH);
		}
		else {
			closeAccord(item, viewport);
		}
	}
	
	/* OPEN BY ACTIVE CLASS */
	$('.accord-it.active').each(function() {
		var item = $(this);
		var viewport = item.find('.accord-viewport');
		var content = item.find('.accord-content');
		var contentH = content.outerHeight();
		
		openAccord(item, viewport, contentH);
	});
	
	/* OPEN BY CLICK */
	$('.accord-head').click(function() {
		var item = $(this).closest('.accord-it');
		
		toggleAccord(item);
	});
}

function toggleReply() {

	$('.reply-click').click(function(){
		var el = $(this);
		var reply = el.siblings('.reply-commentbox-form-cont');
		var content = reply.children('.commentbox-form');
		var contentH = content.outerHeight();

		if(reply.hasClass('active')) {
			reply.height(0);
			reply.removeClass('active');
		}
		else {
			reply.css('height', 'auto');
			reply.addClass('active');
		}
	});
}

function setCustomCB() {
	/* INITIAL CHECK */
	$('.cbdummy').each(function() {
		var customButton = $(this);
		var realButton = customButton.siblings('.cb');
		
		if(realButton.prop('checked') == true) {
			customButton.addClass('active');
		}
		else {
			customButton.removeClass('active');
		}
	});
	
	/* TOGGLE BY CLICK */
	$('.cbdummy').click(function() {
		console.log('clicked');
		var customButton = $(this);
		var realButton = customButton.siblings('.cb');
		
		if(realButton.prop('checked') == false) {
			customButton.addClass('active');
		}
		else {
			customButton.removeClass('active');
		}
	});
}

function setCustomRB() {
	/* INITIAL CHECK */
	$('.rbdummy').each(function() {
		var customButton = $(this);
		var realButton = customButton.siblings('.rb');
		
		if(realButton.prop('checked') == true) {
			customButton.addClass('active');
		}
		else {
			customButton.removeClass('active');
		}
	});
	
	/* TOGGLE BY CLICK */
	$('.rbdummy').click(function() {
		var customButton = $(this);
		var realButton = customButton.siblings('.rb');
		var group = customButton.closest('.rcbgroup');

		if(realButton.prop('checked') == false) {
			group.find('.rbdummy').removeClass('active');
			customButton.addClass('active');
		}
	});
}

function setTab() {
	/* CHANGE TAB BY CLICK */
	$('.tab-button').click(function(event) {
		var button = $(this);
		var href = button.attr('href');
		var group = button.closest('.tabgroup');
		var target = $(href);
		var scrollPos = $(window).scrollTop();
		
		event.preventDefault();
		
		group.find('.tab').removeClass('active');
		target.addClass('active');
		group.find('.tab-button').removeClass('active');
		button.addClass('active');
		
		/*
		window.location.hash = href;
		
		$(window).scrollTop(scrollPos);
		*/
		
		return false;
	});
	
	/* CHANGE TAB BY HASH */
	/*
	if(window.location.hash) {
		var myHash = window.location.hash;
		
		if($('.tab-button[href="'+myHash+'"]').length) {
			$('.tab-button[href="'+myHash+'"]').trigger('click');
		}
	}
	*/
}

function setPasswordToggle() {
	var togglePassword = function(button) {
		var target = button.siblings('.field');
		var inputType = target.attr('type');
		var newInputType = inputType == 'password' ? 'text' : 'password';
		
		target.clone().attr('type',newInputType).insertAfter(target).prev().remove();
		button.toggleClass('active');
	}
	
	$('.password-toggle').click(function() {
		togglePassword($(this));
	});
}

function setHeaderErrorClose() {
	$('.header-error-close').click(function() {
		$('.header-error').removeClass('active');
	});
}

function setHomeSlider() {
	$('.home-slider').slick({
		prevArrow: $('.home-slider-prev'),
		nextArrow: $('.home-slider-next'),
		dots: true,
		appendDots: $('.home-slider-pager-cont'),
		fade: true
	});
}

function setHomeDirectorySlider() {
	$('.dir-slider').slick({
		prevArrow: $('.dir-slider-prev'),
		nextArrow: $('.dir-slider-next'),
		dots: true,
		appendDots: $('.dir-slider-pager-cont'),
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	if($(window).width() < 768) {
		$('.dir-slider').slick('unslick');
	}
}

function setSlider3() {
	$('.slider3').slick({
		prevArrow: $('.slider3-prev'),
		nextArrow: $('.slider3-next'),
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}

function setSlider4() {
	$('.slider4').slick({
		prevArrow: $('.slider4-prev'),
		nextArrow: $('.slider4-next'),
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}

function setSlider6() {
	$('.slider6').slick({
		prevArrow: $('.slider6-prev'),
		nextArrow: $('.slider6-next'),
		slidesToShow: 6,
		slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	if($(window).width() < 768) {
		$('.slider6').slick('unslick');
	}
}

function setHomeHeaderSearch() {
	if($('.home-search-cont').length) {
		var checkSearchPosition = function(callback1, callback2) {
			var currentPos = $(window).scrollTop();
			var targetPos = $('.home-search-cont').offset().top;
			
			if(currentPos > targetPos) {
				callback1();
			}
			else {
				callback2();
			}
		}
		
		var toggleHeaderSearch = function() {
			checkSearchPosition(function() {
				if($('.menu-link.type-search').hasClass('active') == false) {
					$('.menu-link.type-search').addClass('active');
				}
			}, function() {
				if($('.menu-link.type-search').hasClass('active')) {
					$('.menu-link.type-search').removeClass('active');
				}
			});
		}
		
		toggleHeaderSearch();
		
		$(window).scroll(function() {
			toggleHeaderSearch();
		});
	}
}

function setSearch() {
	var content = $('.search-page-cont');
	var isOpen = 0;

	$('.search-trigger').click(function() {

		if(isOpen == 0) {
			content.addClass('active');
			$('body').addClass('noScroll');
			content.fadeIn(400);

			isOpen = 1;
		}
		else {
			content.removeClass('active');
			$('body').removeClass('noScroll');
			content.fadeOut(400);

			isOpen = 0;
		}

	});

	$('.search-close-trigger').click(function() {
		content.removeClass('active');
		$('body').removeClass('noScroll');
		content.fadeOut(400);

		isOpen = 0;
	});
}

function setFormValidator() {
	var myLang = {
		errorTitle: "Gagal submit form!",
		requiredField: "Harap diisi",
		requiredFields: "Kolom wajib masih ada yang kosong",
		badTime: "Waktu tidak valid",
		badEmail: "Email tidak valid",
		badTelephone: "No telepon tidak valid",
		badSecurityAnswer: "Jawaban salah",
		badDate: "Tanggal tidak valid",
		lengthBadStart: "Isian harus sepanjang ",
		lengthBadEnd: " karakter",
		lengthTooLongStart: "Isian lebih panjang dari ",
		lengthTooShortStart: "Isian lebih pendek dari ",
		notConfirmed: "Isian tidak bisa dikonfirmasi",
		badDomain: "Domain tidak valid",
		badUrl: "URL tidak valid",
		badCustomVal: "Isian tidak valid",
		andSpaces: " dan spasi ",
		badInt: "Isian tidak berupa angka yang benar",
		badSecurityNumber: "Angka keamanan salah",
		badUKVatAnswer: "Angka UK VAT salah",
		badUKNin: "UK NIN salah",
		badUKUtr: "Angka UK UTR salah",
		badStrength: "Password tidak cukup kuat",
		badNumberOfSelectedOptionsStart: "Anda harus memilih setidaknya ",
		badNumberOfSelectedOptionsEnd: " jawaban",
		badAlphaNumeric: "Isian hanya boleh alfanumerik ",
		badAlphaNumericExtra: " dan ",
		wrongFileSize: "File terlalu besar (max %s)",
		wrongFileType: "Hanya file dengan tipe %s yang diperbolehkan",
		groupCheckedRangeStart: "Harap pilih antara ",
		groupCheckedTooFewStart: "Harap pilih setidaknya ",
		groupCheckedTooManyStart: "Maksimal pilih ",
		groupCheckedEnd: " pilihan",
		badCreditCard: "Nomor kartu kredit tidak valid",
		badCVV: "Nomor CVV tidak valid",
		wrongFileDim: "Ukuran/dimensi gambar salah,",
		imageTooTall: "gambar tidak boleh lebih tinggi dari",
		imageTooWide: "gambar tidak boleh lebih lebar dari",
		imageTooSmall: "gambar terlalu kecil",
		min: "min",
		max: "max",
		imageRatioNotAccepted: "Rasio gambar tidak valid",
		badBrazilTelephoneAnswer: "No telepon tidak valid",
		badBrazilCEPAnswer: "CEP tidak valid",
		badBrazilCPFAnswer: "CPF tidak valid",
		badPlPesel: "PESEL tidak valid",
		badPlNip: "NIP tidak valid",
		badPlRegon: "REGON tidak valid",
		badreCaptcha: "Mohon konfirmasi bahwa Anda bukan bot"
	}
	
	$.validate({
		modules : 'date, security, file',
		language: myLang
	});
}

/* Some functions to work with our UI */
function addFile(id, file) {
var template = '' +
  '<div class="file" id="uploadFile' + id + '">' +
    '<div class="bar">' +
      '<div class="progress" style="width:0%"></div>' +
    '</div>' +
  '</div>';
  
  $('#fileList').prepend(template);
}

function updateFileStatus(id, status, message) {
	$('#uploadFile' + id).find('span.status').html(message).addClass(status);
}

function updateFileProgress(id, percent) {
	$('#uploadFile' + id).find('div.progress').width(percent);
}

function setUploadFile() {
	$('.commentbox-form-upload').dmUploader({
		url: 'upload.php',
		dataType: 'json',
		allowedTypes: 'image/*',
		maxFiles: 5,
		/*extFilter: 'jpg;png;gif',*/
		onBeforeUpload: function(id){
		  updateFileStatus(id, 'uploading', 'Uploading...');
		},
		onNewFile: function(id, file){
		  addFile(id, file);
		},
		onUploadProgress: function(id, percent){
		  var percentStr = percent + '%';

		  updateFileProgress(id, percentStr);
		},
		onUploadSuccess: function(id, data){		  
		  updateFileStatus(id, 'success', 'Upload Complete');
		  
		  updateFileProgress(id, '100%');
		},
		onUploadError: function(id, message){
		  updateFileStatus(id, 'error', message);
		},
		/*onFileExtError: function(file){
		  $.danidemo.addLog('#demo-debug', 'error', 'File \'' + file.name + '\' has a Not Allowed Extension');
		},*/
		onFallbackMode: function(message){
		  alert('Browser not supported(do something else here!): ' + message);
		}
	});
}

function setMemberWrite() {
	tinymce.init({
		selector: '#write-content',
		plugins: [
	        'advlist autolink lists link image print anchor pagebreak',
	        'wordcount visualblocks visualchars',
	        'insertdatetime media nonbreaking save table contextmenu',
	        'emoticons template paste textcolor'
	    ],
		toolbar: [
			'undo, redo | bold, italic, underline | alignleft, aligncenter, alignright, alignjustify | bullist, numlist, outdent, indent, blockquote',
			'image, media | link, unlink, anchor | print | forecolor, backcolor, emoticons'
		]
	});
}

function openModal(target) {
	var id = '#' + target;

	$(id).fadeIn(400);
	$('body').addClass('noScroll');

	/*
	var fixed = $(id);
	fixed.addEventListener('touchmove', function(e) {
        e.preventDefault();
	}, false);
	*/
}

function openModalMember(target) {
	var id = '#' + target;

	$(id).fadeIn(400);
	$('.overlay-member-login').fadeIn(400);
}

function openModalReserv(target) {
	var id = '#' + target;

	$(id).fadeIn(400);
	$('body').addClass('noScroll');
	$('.overlay-reserv').fadeIn(400);
}

function closeModal() {
	$('.modal').fadeOut(400);
	$('body').removeClass('noScroll');
}

function closeModalMember() {
	$('#modal-login-member').fadeOut(400);
	$('body').removeClass('noScroll');
	$('.overlay-member-login').fadeOut(400);
}

function closeModalReserv() {
	$('#modal-reserv').fadeOut(400);
	$('body').removeClass('noScroll');
	$('.overlay-reserv').fadeOut(400);
}

function setModalTrigger() {
	$('.modal-trigger').click(function() {
		var target = $(this).data('modal');

		openModal(target);
	});

	var isOpen = 0;

	$('.modal-member-trigger').click(function() {
		var target = $(this).data('modal');

		if(isOpen == 0) {
			openModalMember(target);
			isOpen = 1;
		} else {
			closeModalMember();
			isOpen = 0;
		}
	});

	$('.modal-reserv-trigger').click(function() {
		var target = $(this).data('modal');

		openModalReserv(target);
	});
	
	$('.sc-diagnose-modal-trigger').click(function() {
		$('.sc-diagnose-modal').fadeIn();
	});
}

function setModalClose() {
	$('.modal-close-trigger').click(function() {
		closeModal();
	});

	$('.modal').click(function() {
		if($(this).hasClass('overlay-close-disabled') == false) {
			closeModal();
		}
	}).children().click(function(e) {
		e.stopPropagation();
	});

	$('.overlay-member-login').click(function() {
		closeModalMember();
	});

	$('.modal-reserv-close-trigger').click(function() {
		closeModalReserv();
	});

	$('.overlay-reserv').click(function() {
		closeModalReserv();
	});
	
	$('.sc-diagnose-modal-close-trigger').click(function() {
		$('.sc-diagnose-modal').fadeOut();
	});
}

function setRateStar() {
	$('.rating').each(function() {
		var el = $(this);
		var rate = el.data('star');

		if(rate == 1) {
			el.removeClass('rate1 rate2 rate3 rate4 rate5');
			el.addClass('rate1');
		}
		else if(rate == 2) {
			el.removeClass('rate1 rate2 rate3 rate4 rate5');
			el.addClass('rate2');
		}
		else if(rate == 3) {
			el.removeClass('rate1 rate2 rate3 rate4 rate5');
			el.addClass('rate3');
		}
		else if(rate == 4) {
			el.removeClass('rate1 rate2 rate3 rate4 rate5');
			el.addClass('rate4');
		}
		else if(rate == 5) {
			el.removeClass('rate1 rate2 rate3 rate4 rate5');
			el.addClass('rate5');
		}
		else {
			el.removeClass('rate1 rate2 rate3 rate4 rate5');
		}
	});
}

function setToggleRateStar() {
	$('.button-rate').click(function() {
		var el = $(this);
		var rate = el.data('star');
		var rating = el.closest('.rating');
		var rateValue = el.siblings('.rate-value');

		if(rate == 1) {
			console.log('bintang1');
			rating.removeClass('rate1 rate2 rate3 rate4 rate5');
			rating.addClass('rate1');
			rateValue.val('1');
		}
		else if(rate == 2) {
			console.log('bintang2');
			rating.removeClass('rate1 rate2 rate3 rate4 rate5');
			rating.addClass('rate2');
			rateValue.val('2');
		}
		else if(rate == 3) {
			console.log('bintang3');
			rating.removeClass('rate1 rate2 rate3 rate4 rate5');
			rating.addClass('rate3');
			rateValue.val('3');
		}
		else if(rate == 4) {
			console.log('bintang4');
			rating.removeClass('rate1 rate2 rate3 rate4 rate5');
			rating.addClass('rate4');
			rateValue.val('4');
		}
		else if(rate == 5) {
			console.log('bintang5');
			rating.removeClass('rate1 rate2 rate3 rate4 rate5');
			rating.addClass('rate5');
			rateValue.val('5');
		}
	});
}

function setResetField() {
	$('.reset-trigger').click(function() {
		var target = $(this).data('field');
		var id = '#' + target;

		$(id).val('');
	});
}

function setDatetimepicker() {
	$('#datetimepicker').datetimepicker({
		maxView: 3
	});

	$('.schedule-time').datetimepicker({
		maxView: 1,
		startView: 1,
		minView: 0,
		format: 'hh : ii'
	});
}

function setMemberUploadImg() {
	var $uploadCrop;

	function readFile(input) {
		if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
				$('.submitpage-img-upload').addClass('active');
            	$uploadCrop.croppie('bind', {
            		url: e.target.result
            	}).then(function(){
            		console.log('jQuery bind complete');
            	});

            	var fileVal = $('#upload').val();
            	var fileName = fileVal.split('\\');

            	$('.upfile-name').text(fileName[fileName.length-1]);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
        else {
	        swal("Sorry - your browser doesn't support the FileReader API");
	    }
	}
	
	$uploadCrop = $('#upload-img').croppie({
		enableExif: true,
	    viewport: {
	        width: 200,
	        height: 200
	    },
	    boundary: {
	        width: 270,
	        height: 270
	    }
	});

	function getBase64(file) {
	   var reader = new FileReader();
	   reader.readAsDataURL(file);
	   reader.onload = function () {
	     console.log(reader.result);
	   };
	   reader.onerror = function (error) {
	     console.log('Error: ', error);
	   };
	}

	$('#upload').on('change', function () {
		var querySelected = document.querySelector('#upload').files[0];
		readFile(this);

		var reader = new FileReader();
		reader.readAsDataURL(querySelected);
		reader.onload = function () {
			$('.original').val(reader.result);
		};
		reader.onerror = function (error) {
		 console.log('Error: ', error);
		};
	});

	$('#upload-img').on('update', function() {
		$uploadCrop.croppie('result', {
			type: 'base64',
			size: 'viewport',
			circle: false
		}).then(function(myResult) {
			$('.upload-result').val(myResult);
		});
	});
}

function toggleSubmenuInfo() {
	$('.submenu-link').hover(function() {
		var target = $(this).data('link');
		id = '#' + target;

		$(id).show();
        }, function(){
        $(id).hide();
	});
}

function lazyLoad() {
	$('img').unveil(200);
}

function setFilterSearch() {
	$.expr[":"].contains = $.expr.createPseudo(function(arg) {
	    return function( elem ) {
	        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
	    };
	});

	$('.filter-search').keyup(function() { 
		var val = $(this).val();
		var length = val.length; 

		console.log(val);

		if(length >= 3) { 
			$('.filter-it').hide();
			$('.filter-key[data-filter*="'+val+'"]').closest('.filter-it').show(); 
		} 
		else { 
			$('.filter-it').show(); 
		} 
	});
}

function setAddField() {
	/* ADD FIELD */
	$('.add-field-button').click(function() {
		var myButton = $(this);
		var myContainer = myButton.closest('.add-field-cont');

		$(this).siblings('.add-field-it:first').clone().appendTo(myContainer);
	});

	$('.add-field-schedule-button').click(function() {
		var myContainer = $(this).closest('.add-field-cont');

		 $(this).siblings('.add-field-it:first').clone().appendTo(myContainer);
	});

	$('.add-field-time-button').click(function() {
		var myContainer = $(this).closest('.schedule-time-content');

		$(this).siblings('.schedule-time-it:first').clone().appendTo(myContainer);
	});


	/* REMOVE FIELD */
	$(document).on('click', '.remove-field-button', function() {
		var item = $(this).closest('.add-field-it');

		item.remove();
	});
	$(document).on('click', '.remove-field-time-button', function() {
		var item = $(this).closest('.add-field-it');

		item.remove();
	});
}

function setStickyKit() {
	var windowWidth = $(window).width();

	if(windowWidth < 992) {
		$('.sticky-side').trigger('sticky_kit:detach');
	}
	else {
		$('.sticky-side').stick_in_parent({
			offset_top: 70
		});
	}
}

function setDiseaseFilter() {
	/* SELECT DISEASE */
	$('.dislist-filter-link').click(function() {
		$('.dislist-filter-link').removeClass('active');
		$(this).addClass('active');
	});

	/* RESET FILTER */
	$('.reset-disease').click(function() {
		$('.dislist-filter-link').removeClass('active');
	});

	/* SCROLL */
	$('.dislist-filter-link').click(function() {
		if($(window).width() < 768) {
			scrollToElement($('.dislist-body'));
		}
	});
}

function setPagination() {
	var monkeyList = new List('pagination-list', {
	  valueNames: ['this-search-keyword'],
	  page: 3,
	  pagination: true
	});
}

function setMobileMenu() {
	var flag = 0;

	$('.mobile-menu-button').click(function() {	
		if(flag == 0) {
			$('.mobile-menu').fadeIn(400);

			$('body').addClass('noScroll');
			flag = 1;
		}
		else {
			$('.mobile-menu').fadeOut(400);

			$('body').removeClass('noScroll');
			flag = 0;
		}
	});
}

function toggleSideFilter() {
	var isOpen = 0;

	$('.filter-button').click(function() {
		if(isOpen == 0) {
			$('.dirpage-control-block').show();

			isOpen = 1;
		}
		else {
			$('.dirpage-control-block').hide();

			isOpen = 0;
		}

		scrollToElement($('.dirpage-control'));
	});
}

function setLimitableList() {
	$('.commentbox-list-more-button').click(function() {
		myButton = $(this);
		myList = myButton.parent().siblings('.limitable-list');

		myList.children('li').removeClass('type-hidden');

		myButton.hide();
	});
}

function cloneDirectoryName() {
	var target = $('.dirdetail-head');

	if($(window).width() < 992) {
		target.clone().insertAfter('.dirdetail-side-profpic-cont');
		target.remove();
	}
}

function toggleDetailSide() {
	var flag = 0;

	$('.button-toggle-side').click(function() {
		if(flag == 0) {
			$('.dirdetail-side-profdata').height('auto');
			$('.button-toggle-side').addClass('active');
			$('.button-toggle-side-text').text('Sembunyikan Profil');
			scrollToElement($('.dirdetail-side-profdata'));

			flag = 1;
		}
		else {
			$('.dirdetail-side-profdata').height(0);
			$('.button-toggle-side').removeClass('active');
			$('.button-toggle-side-text').text('Tampilkan Profil');
			flag = 0;
		}
	});
}

function cloneAuthor() {
	$('.article-author').clone().appendTo('.article-media');
}

function cloneSelectOrder() {
	$('.select-order').clone().appendTo('#modal-select-order .modal-body');
}

function cloneMemberButton() {
		$('.submitpage-body-head-button-cont').clone().appendTo('.submitpage-form');
}

function scrollToElement(target) {
	var targetOffset = target.offset().top;
	var extra = 100;

	$('html, body').animate({
		scrollTop: targetOffset - extra
	}, 400);
}

function scrollScResult() {
	$('.sc-result-button').click(function() {
		scrollToElement($('.sc-menu3'));
	})
}

function setFeedbackButton() {
	if($('.dirpage').length == 1) {
		if($(window).width() < 768) {
			$('.feedback-button-cont').addClass('type2');
			$('footer').addClass('type2');
		}
	}
	else if($('.forum').length == 1) {
		if($(window).width() < 768) {
			$('.feedback-button-cont').addClass('type2');
			$('footer').addClass('type2');
		}
	}
}

function alertModalActive() {
    if($('#alertmodal').length == 1) {
        $('#content').addClass('alert-active');        
    }

    $('.header-error-close').click(function() {
        if($('#alertmodal').height() != 0) {
            $('#content').removeClass('alert-active');
        }
    });
}

/* MAIN */
$(document).ready(function() {
	/* UNIVERSAL */
	setAccordion();
	setCustomCB();
	setCustomRB();
	setTab();
	setPasswordToggle();
	setHeaderErrorClose();
	setFormValidator();
	toggleReply();
	setSlider3();
	setSlider4();
	setSlider6();
	setResetField();
	setSearch();
	lazyLoad();
	setFilterSearch();
	setAddField();
	setStickyKit();
	setDiseaseFilter();
	setPagination();
	setMobileMenu();
	toggleSideFilter();
	setLimitableList();
	cloneDirectoryName();
	toggleDetailSide();
	cloneAuthor();
	cloneSelectOrder();
	cloneMemberButton();
	scrollScResult();
	setFeedbackButton();

	/* HOME */
	setHomeSlider();
	setHomeDirectorySlider();

	/* UPLOAD IMG */
	setMemberUploadImg();

	/* MEMBER SUBMIT */
	setMemberWrite();

	/* MODAL */
	setModalTrigger();
	setModalClose();

	/* RATING */
	setRateStar();
	setToggleRateStar();

	/* DATE TIME PICKER */
	setDatetimepicker();
});