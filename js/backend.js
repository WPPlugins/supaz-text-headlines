jQuery(document).ready(function($){
	// Backend Settings Tabs Configuration
	$('ul.mh-tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.mh-tabs li').removeClass('current');
		$('.mh-tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('.mh-color-picker').wpColorPicker();

		$('.mh-copy-to-clipboard input').click(function() {
    	$(this).focus();
    	$(this).select();
    	document.execCommand('copy');
    	//alert('copied');
  	});
});