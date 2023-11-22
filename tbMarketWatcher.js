// Initialize arrays to store historical data
var woodRates = [];
var stoneRates = [];
var ironRates = [];

// Create a function to open a popup window with the chart
function openPopupWithChart() {
    var popupWindow = window.open('', 'Historical Data Chart', 'width=800,height=320');
    popupWindow.document.write('<html><head><title>Historical Data Chart</title></head><body>');

    // Create a div element to hold the chart
    popupWindow.document.write('<div id="chart_div"></div>');

    // Include the Google Charts library
    popupWindow.document.write('<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>');

    // Include the chart drawing code
    popupWindow.document.write('<script type="text/javascript">');
    popupWindow.document.write('google.charts.load("current", {packages:["corechart"]});');
    popupWindow.document.write('google.charts.setOnLoadCallback(drawChart);');
    popupWindow.document.write('function drawChart() {');
    popupWindow.document.write('var data = new google.visualization.DataTable();');
    popupWindow.document.write('data.addColumn("string", "Time");');
    popupWindow.document.write('data.addColumn("number", "Wood Rate");');
    popupWindow.document.write('data.addColumn("number", "Stone Rate");');
    popupWindow.document.write('data.addColumn("number", "Iron Rate");');
    popupWindow.document.write('data.addRows([');

    // Populate the chart with historical data
    for (var i = 0; i < woodRates.length; i++) {
        popupWindow.document.write('["' + i + '", ' + woodRates[i] + ', ' + stoneRates[i] + ', ' + ironRates[i] + '],');
    }

    popupWindow.document.write(']);');

    // Create and draw the chart
    popupWindow.document.write('var options = {');
    popupWindow.document.write('title: "Historical Data",');
    popupWindow.document.write('curveType: "function",');
    popupWindow.document.write('legend: { position: "bottom" }');
    popupWindow.document.write('};');
    popupWindow.document.write('var chart = new google.visualization.LineChart(document.getElementById("chart_div"));');
    popupWindow.document.write('chart.draw(data, options);');
    popupWindow.document.write('}');
    popupWindow.document.write('</script>');

    popupWindow.document.write('</body></html>');
    popupWindow.document.close();
}

function openAlertWindow(message) {
    var alertWindow = window.open('', 'Alert', 'width=400,height=200');
    alertWindow.document.write('<html><head><title>Alert</title></head><body>');
    alertWindow.document.write('<h1 style="font-size: 36px;">' + message + '</h1>');
    alertWindow.document.write('</body></html>');
    alertWindow.document.close();
}

function scrapeData() {
    var woodRateText = document.getElementById('premium_exchange_rate_wood').innerText;
    var stoneRateText = document.getElementById('premium_exchange_rate_stone').innerText;
    var ironRateText = document.getElementById('premium_exchange_rate_iron').innerText;

    // Extract and store historical data
    var woodRate = parseInt(woodRateText.match(/\d+/)[0]);
    var stoneRate = parseInt(stoneRateText.match(/\d+/)[0]);
    var ironRate = parseInt(ironRateText.match(/\d+/)[0]);

    // Compare with thresholds and open alert windows if needed
    if (woodRate < woodThreshold) {
        openAlertWindow("BER! - Wood Threshold Exceeded!");
    }
    if (stoneRate < stoneThreshold) {
        openAlertWindow("BER! - Stone Threshold Exceeded!");
    }
    if (ironRate < ironThreshold) {
        openAlertWindow("BER! - Iron Threshold Exceeded!");
    }

    woodRates.push(woodRate);
    stoneRates.push(stoneRate);
    ironRates.push(ironRate);

    console.log('Wood: ', woodRate);
    console.log('Stone: ', stoneRate);
    console.log('Iron: ', ironRate);

    // Open the popup window with the chart
    openPopupWithChart();
}

// Get user input for thresholds
var woodThreshold = parseFloat(prompt("Enter Wood Threshold:"));
var stoneThreshold = parseFloat(prompt("Enter Stone Threshold:"));
var ironThreshold = parseFloat(prompt("Enter Iron Threshold /than click on TribalWars market/:"));

setInterval(scrapeData, 5000); // Run the function every 5000 milliseconds (5 seconds)
