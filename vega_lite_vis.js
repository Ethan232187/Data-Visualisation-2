// Each Chart is a variable set to the JSON file and relative path
var vg_x = "Charts/daily_cost_bar_chart.vg.json";

// Puts the variable (JSON graph obj) in the HTML tag with it bar_chart
// Each chart is then attached to a HTML element via the vegaEmbed function
//  vegaEmbed("#html_tag_id", chart_json_path_variable)...
vegaEmbed("#bar_chart", vg_1).then(function(result) {
}).catch(console.error);

var spec2 = "js/daily_cost_bar_chart.json";
vegaEmbed('#vega_bar_chart', spec2).then(function(result) {
}).catch(console.error);


var vg_1 = "Charts/fig1_routes_map.vg.json";
var vg_2 = "Charts/fig2_each_connection_heatmap.vg.json";
var vg_3 = "Charts/fig3_biggest_hubs_bar.vg.json";
var vg_4 = "Charts/fig4_plane_sizes_scatter.vg.json";
var vg_5 = "Charts/fig5_capacity_barcode.vg.json";

vegaEmbed("#figure_1", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#figure_2", vg_2).then(function(result) {}).catch(console.error);
vegaEmbed("#figure_3", vg_3).then(function(result) {}).catch(console.error);
vegaEmbed("#figure_4", vg_4).then(function(result) {}).catch(console.error);
vegaEmbed("#figure_5", vg_5).then(function(result) {}).catch(console.error);