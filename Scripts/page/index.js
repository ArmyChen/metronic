var chartData = [ {
	"lineColor" : "#b7e021",
	"date" : "2012-01-01",
	"duration" : 408
}, {
	"date" : "2012-01-02",
	"duration" : 482
}, {
	"date" : "2012-01-03",
	"duration" : 562
}, {
	"date" : "2012-01-04",
	"duration" : 379
}, {
	"lineColor" : "#fbd51a",
	"date" : "2012-01-05",
	"duration" : 501
}, {
	"date" : "2012-01-06",
	"duration" : 443
}, {
	"date" : "2012-01-07",
	"duration" : 405
}, {
	"date" : "2012-01-08",
	"duration" : 309,
	"lineColor" : "#2498d2"
}, {
	"date" : "2012-01-09",
	"duration" : 287
}, {
	"date" : "2012-01-10",
	"duration" : 485
}, {
	"date" : "2012-01-11",
	"duration" : 890
}, {
	"date" : "2012-01-12",
	"duration" : 810
} ];
var chartData2 = [ {
	"date" : "2012-01-01",
	"distance" : 227,
	"townName" : "New York",
	"townName2" : "New York",
	"townSize" : 20,
	"latitude" : 40.71,
	"duration" : 350
}, {
	"date" : "2012-01-02",
	"distance" : 371,
	"townName2" : "Washington",
	"townSize" : 14,
	"latitude" : 38.89,
	"duration" : 482
}, {
	"date" : "2012-01-03",
	"distance" : 433,
	"townName" : "Wilmington",
	"townSize" : 6,
	"latitude" : 34.22,
	"duration" : 562
}, {
	"date" : "2012-01-04",
	"distance" : 345,
	"townName" : "Jacksonville",
	"townSize" : 7,
	"latitude" : 30.35,
	"duration" : 379
}, {
	"date" : "2012-01-05",
	"distance" : 480,
	"townName" : "Miami",
	"townName2" : "Miami",
	"townSize" : 10,
	"latitude" : 25.83,
	"duration" : 501
}, {
	"date" : "2012-01-06",
	"distance" : 386,
	"townName" : "Tallahassee",
	"townSize" : 7,
	"latitude" : 30.46,
	"duration" : 443
}, {
	"date" : "2012-01-07",
	"distance" : 348,
	"townName" : "New Orleans",
	"townSize" : 10,
	"latitude" : 29.94,
	"duration" : 405
}, {
	"date" : "2012-01-08",
	"distance" : 238,
	"townName" : "Houston",
	"townName2" : "Houston",
	"townSize" : 16,
	"latitude" : 29.76,
	"duration" : 309
}, {
	"date" : "2012-01-09",
	"distance" : 218,
	"townName" : "Dalas",
	"townSize" : 17,
	"latitude" : 32.8,
	"duration" : 287
}, {
	"date" : "2012-01-10",
	"distance" : 349,
	"townName" : "Oklahoma City",
	"townSize" : 11,
	"latitude" : 35.49,
	"duration" : 485
}, {
	"date" : "2012-01-11",
	"distance" : 603,
	"townName" : "Kansas City",
	"townSize" : 10,
	"latitude" : 39.1,
	"duration" : 890
}, {
	"date" : "2012-01-12",
	"distance" : 534,
	"townName" : "Denver",
	"townName2" : "Denver",
	"townSize" : 18,
	"latitude" : 39.74,
	"duration" : 810
}, {
	"date" : "2012-01-13",
	"townName" : "Salt Lake City",
	"townSize" : 12,
	"distance" : 425,
	"duration" : 670,
	"latitude" : 40.75,
	"alpha" : 0.4
}, {
	"date" : "2012-01-14",
	"latitude" : 36.1,
	"duration" : 470,
	"townName" : "Las Vegas",
	"townName2" : "Las Vegas",
	"bulletClass" : "lastBullet"
}, {
	"date" : "2012-01-15"
}, {
	"date" : "2012-01-16"
}, {
	"date" : "2012-01-17"
}, {
	"date" : "2012-01-18"
}, {
	"date" : "2012-01-19"
} ];
var chart, chart2;

AmCharts.ready(function() {
	// 初始化下拉框控件
	$('.bs-select').selectpicker({
		iconBase : 'fa',
		tickIcon : 'fa-check'
	});
	//初始化日期控件
	$('.date-picker').datepicker({
		rtl: App.isRTL(),
        orientation: "left",
        autoclose: true
	});
	
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	if(month<10){
		month = "0"+ month;
	}
	var day = d.getDate();
	if(day < 10){
		day = "0" + day;
	}
	var dCurrent = year+"-"+month+"-"+day;
	
	$(".page-content").on("changed.bs.select",".select-user",function(){
		var type = $(this).val();
		if(type != "3"){
			//不显示日期框
			$(".date-panel-user").empty();
		}else{
			$(".date-panel-user").append(dateHtml);
			$(".date-panel-user input").datepicker({
		        orientation: "left",
		        autoclose: true
			});
			$(".start-date").datepicker('setDate',dCurrent);
			$(".end-date").datepicker('setDate',dCurrent);
		}
	});
	
	// SERIAL CHART
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData;

	chart.categoryField = "date";
	chart.dataDateFormat = "YYYY-MM-DD";

	var balloon = chart.balloon;
	balloon.cornerRadius = 6;
	balloon.adjustBorderColor = false;
	balloon.horizontalPadding = 10;
	balloon.verticalPadding = 10;

	// AXES
	// category axis
	var categoryAxis = chart.categoryAxis;
	categoryAxis.parseDates = true; // as our data is date-based, we set
	// parseDates to true
	categoryAxis.minPeriod = "DD"; // our data is daily, so we set minPeriod to
	// DD
	categoryAxis.autoGridCount = false;
	categoryAxis.gridCount = 50;
	categoryAxis.gridAlpha = 0;
	categoryAxis.gridColor = "#000000";
	categoryAxis.axisColor = "#555555";
	// we want custom date formatting, so we change it in next line
	categoryAxis.dateFormats = [ {
		period : 'DD',
		format : 'DD'
	}, {
		period : 'WW',
		format : 'MMM DD'
	}, {
		period : 'MM',
		format : 'MMM'
	}, {
		period : 'YYYY',
		format : 'YYYY'
	} ];

	// as we have data of different units, we create two different value axes
	// Duration value axis
	var durationAxis = new AmCharts.ValueAxis();
	durationAxis.gridAlpha = 0.05;
	durationAxis.axisAlpha = 0;
	// the following line makes this value axis to convert values to duration
	// it tells the axis what duration unit it should use. mm - minute, hh -
	// hour...
	durationAxis.duration = "mm";
	durationAxis.durationUnits = {
		DD : "d. ",
		hh : "h ",
		mm : "min",
		ss : ""
	};
	chart.addValueAxis(durationAxis);

	// GRAPHS
	// duration graph
	var durationGraph = new AmCharts.AmGraph();
	durationGraph.title = "duration";
	durationGraph.valueField = "duration";
	durationGraph.type = "line";
	durationGraph.valueAxis = durationAxis; // indicate which axis should be
	// used
	durationGraph.lineColorField = "lineColor";
	durationGraph.fillColorsField = "lineColor";
	durationGraph.fillAlphas = 0.3;
	durationGraph.balloonText = "[[value]]";
	durationGraph.lineThickness = 1;
	durationGraph.legendValueText = "[[value]]";
	durationGraph.bullet = "square";
	durationGraph.bulletBorderThickness = 1;
	durationGraph.bulletBorderAlpha = 1;
	chart.addGraph(durationGraph);

	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.zoomable = false;
	chartCursor.categoryBalloonDateFormat = "YYYY MMM DD";
	chartCursor.cursorAlpha = 0;
	chart.addChartCursor(chartCursor);

	var chartScrollbar = new AmCharts.ChartScrollbar();
	chart.addChartScrollbar(chartScrollbar);

	chart.write("chartdiv1");

	// 第二个图标
	chart2 = new AmCharts.AmSerialChart();
	chart2.addClassNames = true;
	chart2.dataProvider = chartData2;
	chart2.categoryField = "date";
	chart2.dataDateFormat = "YYYY-MM-DD";
	chart2.startDuration = 1;
	chart2.color = "#666";
	chart2.marginLeft = 0;

	// AXES
	// category表格的类型-网格型
	var categoryAxis = chart2.categoryAxis;
	categoryAxis.parseDates = true; // as our data is date-based, we set
									// parseDates to true
	categoryAxis.minPeriod = "DD"; // our data is daily, so we set minPeriod to
									// DD
	categoryAxis.autoGridCount = false;
	categoryAxis.gridCount = 50;
	categoryAxis.gridAlpha = 0.1;
	categoryAxis.gridColor = "#fff";
	categoryAxis.axisColor = "#666";
	// we want custom date formatting, so we change it in next line
	categoryAxis.dateFormats = [ {
		period : 'DD',
		format : 'DD'
	}, {
		period : 'WW',
		format : 'MMM DD'
	}, {
		period : 'MM',
		format : 'MMM'
	}, {
		period : 'YYYY',
		format : 'YYYY'
	} ];

	// as we have data of different units, we create three different value axes
	// Distance value axis
	var distanceAxis = new AmCharts.ValueAxis();
	distanceAxis.title = "distance";
	distanceAxis.gridAlpha = 0;
	distanceAxis.axisAlpha = 0;
	chart2.addValueAxis(distanceAxis);

	// latitude value axis
	var latitudeAxis = new AmCharts.ValueAxis();
	latitudeAxis.gridAlpha = 0;
	latitudeAxis.axisAlpha = 0;
	latitudeAxis.title = "duration and latitude";
	latitudeAxis.offset = 83;
	latitudeAxis.titleOffset = 10;
	latitudeAxis.position = "right";
	chart2.addValueAxis(latitudeAxis);

	// duration value axis
	var durationAxis = new AmCharts.ValueAxis();
	// the following line makes this value axis to convert values to duration
	// it tells the axis what duration unit it should use. mm - minute, hh -
	// hour...
	durationAxis.duration = "mm";
	durationAxis.durationUnits = {
		DD : "d. ",
		hh : "h ",
		mm : "min",
		ss : ""
	};
	durationAxis.gridAlpha = 0;
	durationAxis.axisAlpha = 0;
	durationAxis.inside = false;
	durationAxis.position = "right";
	chart2.addValueAxis(durationAxis);

	// GRAPHS
	// distance graph 柱状图
	var distanceGraph = new AmCharts.AmGraph();
	distanceGraph.valueField = "distance";
	distanceGraph.title = "distance";
	distanceGraph.type = "column";
	distanceGraph.fillAlphas = 0.9;
	distanceGraph.valueAxis = distanceAxis; // indicate which axis should be
											// used
	distanceGraph.balloonText = "[[value]] miles";
	distanceGraph.legendValueText = "[[value]] mi";
	distanceGraph.legendPeriodValueText = "total: [[value.sum]] mi";
	distanceGraph.lineColor = "#95cce6";
	distanceGraph.alphaField = "alpha";
	chart2.addGraph(distanceGraph);

	// latitude graph 动态虚线图
	var latitudeGraph = new AmCharts.AmGraph();
	latitudeGraph.valueField = "latitude";
	latitudeGraph.id = "g1";
	latitudeGraph.classNameField = "bulletClass";
	latitudeGraph.title = "latitude/city";
	latitudeGraph.type = "line";
	latitudeGraph.valueAxis = latitudeAxis; // indicate which axis should be
											// used
	latitudeGraph.lineColor = "#fdd400";
	latitudeGraph.lineThickness = 1;
	latitudeGraph.legendValueText = "[[description]]/[[value]]";
	latitudeGraph.descriptionField = "townName";
	latitudeGraph.bullet = "round";
	latitudeGraph.bulletSizeField = "townSize"; // indicate which field should
												// be used for bullet size
	latitudeGraph.bulletBorderColor = "#fdd400";
	latitudeGraph.bulletBorderAlpha = 1;
	latitudeGraph.bulletBorderThickness = 2;
	latitudeGraph.bulletColor = "#fff";
	latitudeGraph.labelText = "[[townName2]]"; // not all data points has
												// townName2 specified, that's
												// why labels are displayed only
												// near some of the bullets.
	latitudeGraph.labelPosition = "right";
	latitudeGraph.balloonText = "latitude:[[value]]";
	latitudeGraph.showBalloon = true;
	latitudeGraph.animationPlayed = true;
	chart2.addGraph(latitudeGraph);

	// duration graph一次动画折线图
	var durationGraph = new AmCharts.AmGraph();
	durationGraph.id = "g2";
	durationGraph.title = "duration-title";
	durationGraph.valueField = "duration";
	durationGraph.type = "line";
	durationGraph.valueAxis = durationAxis; // indicate which axis should be
											// used
	durationGraph.lineColor = "#84b761";
	durationGraph.balloonText = "[[value]]";
	durationGraph.lineThickness = 1;
	durationGraph.legendValueText = "[[value]]";
	durationGraph.bullet = "square";
	durationGraph.bulletBorderColor = "#84b761";
	durationGraph.bulletBorderThickness = 0;
	durationGraph.bulletBorderAlpha = 1;
	durationGraph.dashLengthField = "dashLength";
	durationGraph.animationPlayed = true;
	chart2.addGraph(durationGraph);
	
	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.zoomable = false;
	chartCursor.categoryBalloonDateFormat = undefined;
	chartCursor.cursorAlpha = 0;
	chartCursor.valueBalloonsEnabled = false;
	chartCursor.valueLineBalloonEnabled = true;
	chartCursor.valueLineEnabled = true;
	chartCursor.valueLineAlpha = 0.5;
	chart2.addChartCursor(chartCursor);

	// LEGEND	下方铭文
	var legend = new AmCharts.AmLegend();
	legend.bulletType = "round";
	legend.equalWidths = false;
	legend.valueWidth = 120;
	legend.useGraphSettings = true;
	legend.color = "#666";
	chart2.addLegend(legend);

	// WRITE
	chart2.write("chartdiv2");
});

function dateHtml(){
	var html = "";
	html += "<div class='input-group input-daterange'>";
	html += "<input type='text' class='form-control start-date' name='from' data-date-format='yyyy-mm-dd'>";
	html += "<span class='input-group-addon'> to </span>";
	html += "<input type='text' class='form-control end-date' name='to' data-date-format='yyyy-mm-dd'>";
	html += "</div>";
	return html;
}
