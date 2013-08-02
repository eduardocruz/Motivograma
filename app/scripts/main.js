require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery',
		bootstrap: 'vendor/bootstrap'
	},
	shim: {
		bootstrap: {
			deps: ['jquery'],
			exports: 'jquery'
		}
	}
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
	'use strict';
	// use app here    
	//console.log(app);
	//console.log('Running jQuery %s', $().jquery);
	function soma() {
		var totalV = 0;
		var totalW = 0;
		var totalX = 0;
		var totalY = 0;
		var totalZ = 0;
		$('.VTotal').val(0);
		$('.WTotal').val(0);
		$('.XTotal').val(0);
		$('.YTotal').val(0);
		$('.ZTotal').val(0);
		$('.VAnswer:checked').each(function(){
			totalV++;
		});
		$('.WAnswer:checked').each(function(){
			totalW++;
		});
		$('.XAnswer:checked').each(function(){
			totalX++;
		});
		$('.YAnswer:checked').each(function(){
			totalY++;
		});
		$('.ZAnswer:checked').each(function(){
			totalZ++;
		});
		$('.VTotal').val(totalV);
		$('.WTotal').val(totalW);
		$('.XTotal').val(totalX);
		$('.YTotal').val(totalY);
		$('.ZTotal').val(totalZ);
	}
	$('#SubmitForm').click(function(){
		soma();
	});
});