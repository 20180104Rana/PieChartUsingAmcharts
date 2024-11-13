// Create root element by calling "new" method of "Root" class
// new() call is the id or reference of the DOM container we will want to place our chart in.
var root = am5.Root.new("chartdiv");  // chartdiv --> ID

root.setThemes([
    am5themes_Animated.new(root)
  ]);

// Create Pie Chart
var chart = root.container.children.push(
    am5percent.PieChart.new(root,{})
);

// Create PirSeries and add it to the chart
var series = chart.series.push(
    am5percent.PieSeries.new(
        root,{
            valueField:"value",
            categoryField:"category"
        }
    )
);

// Set data for the PieSeries

series.data.setAll([{
    category:"Research",
    value:1000
},{
    category:"Marketing",
    value:1200
},{
    category:"Sales",
    value:850
}])

