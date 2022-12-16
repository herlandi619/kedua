//event pada saat link diKlik 
$('.page-scroll').on('click', function() {

	//cara ambil isi href
	var tujuan = $(this).attr('href');

	//cara tangkep elemen tersebut
	var elemenTujuan = $(tujuan);

	//cara pindahkan scroll
	$('html').animate({            
      scrollTop: elemenTujuan.offset().top - 50
}, 1250, 'easeInOutExpo');

});


// cara buat slide about

	$(window).on('load', function() {

		$('.pKiri').addClass('pMuncul');
		$('.pKanan').addClass('pMuncul');

	});




// Cara Bikin Paralax


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// Cara Buat Efek JumboTron

	$('.jumbotron img').css({
		'transform' : 'translate(8px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(8px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(8px, '+ wScroll +'%)'
	});


	// Cara Buat Efek Portfolio

	if(wScroll > $('.portfolio').offset().top - 300 ) {
		$('.portfolio .thumbnail').each(function(i) {

			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			},300*(i+1) );
		});
	}

		 

});