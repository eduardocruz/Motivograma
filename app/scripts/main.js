require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery',
		bootstrap: 'vendor/bootstrap',
		chart: 'vendor/chart'
	},
	shim: {
		bootstrap: {
			deps: ['jquery'],
			exports: 'jquery'
		}
	}
});

require(['app', 'jquery', 'bootstrap', 'chart'], function (app, $, chart) {
	'use strict';
	// use app here    
	//console.log(app);
	//console.log('Running jQuery %s', $().jquery);
	var totalV = 0;
	var totalW = 0;
	var totalX = 0;
	var totalY = 0;
	var totalZ = 0;

	function countAnswers() {
		totalV = 0;
		totalW = 0;
		totalX = 0;
		totalY = 0;
		totalZ = 0;
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
	}

	function plotGraph(V, W, X, Y, Z){
        var ctx = document.getElementById('myChart').getContext('2d');
        var data = {
            labels : ['Fisiológica','Segurança','Associação','Auto-Estima','Auto-Realização'],
            datasets : [{fillColor : 'rgba(151,187,205,0.5)',strokeColor : 'rgba(151,187,205,1)',data : [V,W,X,Y,Z]}]
        };
        var myNewChart = new Chart(ctx).Bar(data);
	}

	$('#SubmitForm').click(function(){
		countAnswers();
		plotGraph(totalV, totalW, totalX, totalY, totalZ);
	});
});