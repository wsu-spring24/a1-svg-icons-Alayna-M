// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Alayna Myers"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
// TODO

import * as d3 from "d3";

// ICON 1 - Append svg1 to html element with canvas id (article within main)
let svg1 = d3.select('#canvas')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#eeeeee')
    .style('fill', 'transparent')

// Create square in center of svg1 "canvas"
let icon1_square = svg1
    .append('rect')
    .attr('x', 25)
    .attr('y', 25)
    .attr('width', 50)
    .attr('height', 50)
    .attr('stroke', 'black')
    .attr('stroke-width', '3')
    .attr('fill', 'transparent')

// Create colored circle in center of svg1 "canvas"
let icon1_circle = svg1
    .append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 20)
    .attr('stroke', 'yellow')
    .attr('fill', 'yellow')

// Create rotation for square - Will rotate 360d
var interpol_rotate = d3.interpolateString( "rotate(0,50,50)", "rotate(360,50,50)" )

// Function to animate square spinning - loops
function animate_square1()
{
    icon1_square
        .transition()
        .attrTween('transform' , function(d,i,a){ return interpol_rotate } )
        .duration(2000)
        .on("end", animate_square1)
}

animate_square1()

// ICON 2 - Append svg2 to previous svg to place it directly next to said svg
let svg2 = d3.select('article')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#f87c7c')
    .style('fill', 'transparent')

// Create colored circle in center of svg2
let icon2_circle = svg2
    .append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 40)
    .attr('stroke', 'green')
    .attr('fill', 'green')

// Create colored circle in center of svg2 - Will be animated to look like pupil dilating
let icon2_circle2 = svg2
    .append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 10)
    .attr('stroke', 'black')
    .attr('fill', 'black')

// Function to animate inner circle to look like a pupil dilating - loops
function animate_dilate()
{
    icon2_circle2
        .transition()
        .duration(2000)
        .attr('r', 35)
        .transition()
        .duration(2000)
        .attr('r', 10)
        .on("end", animate_dilate);
}

animate_dilate()

// ICON 3 - Append svg3 to previous svg to place it directly next to said svg
let svg3 = d3.select('article')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'rgba(189,90,255,0.78)')
    .style('fill', 'transparent')

// Create colored triangle using path - no fill
let icon3_triangle = svg3
    .append("path")
    .style("stroke", "blue")
    .style('fill', 'none')
    .style('stroke-width', 2)
    .attr('d', 'M50 25 L25 75 L75 75 Z')

// Create square using path - will act as pathway for smaller square to follow
let icon3_main_path = svg3
    .append("path")
    .style("stroke", "black")
    .style('fill', 'none')
    .style('stroke-width', 2)
    .attr('d', 'M10 10 H90 V90 H10 Z')

// Create small square - Will be animated to follow path of larger square, is semi-transparent
let icon3_square = svg3
    .append('rect')
    .attr('x', 5)
    .attr('y', 5)
    .attr('width', 10)
    .attr('height', 10)
    .attr('stroke', 'rgba(27,229,44,0.92)')
    .attr('stroke-width', '3')
    .attr('fill', 'rgba(27,229,44,0.92)')

// Function to animate triangle "lines" growing thicker
function grow_triangle() {
    icon3_triangle
        .transition()
        .duration(4000)
        .style('stroke-width', '5')
}

grow_triangle()

// Function to animate smaller square "tracing" larger square pathway - loops
function trace_path() {
    icon3_square
        .transition()
        .duration(1000)
        .attr('x', 85)
        .attr('y', 5)
        .transition()
        .duration(1000)
        .attr('x', 85)
        .attr('y', 85)
        .transition()
        .duration(1000)
        .attr('x', 5)
        .attr('y', 85)
        .transition()
        .duration(1000)
        .attr('x', 5)
        .attr('y', 5)
        .on("end", trace_path)
}

trace_path()

// ICON 4 - Append svg4 to previous svg to place it directly next to said svg
let svg4 = d3.select('article')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'rgb(245,133,26)')
    .style('fill', 'transparent')

// Draw star shape in lower half of svg4 using polygon
let icon4_star = svg4
    .append("polygon")
    .attr("stroke", "black")
    .attr('fill', 'black')
    .attr('stroke-width', 2)
    .attr('points', '53.0,57.5  55.9,66.1 64.9,66.1 57.7,71.5 61.3,80.1 53.0,75.0 45.7,80.1 48.3,71.5 41.1,66.1 50.1,66.1')

// Create colored circle in upper left quadrant of svg4
let icon4_circle = svg4
    .append('circle')
    .attr('cx', 30)
    .attr('cy', 35)
    .attr('r', 10)
    .attr('stroke', 'maroon')
    .attr('fill', 'maroon')

// Create colored square in upper right quadrant of svg4
let icon4_square = svg4
    .append('rect')
    .attr('x', 65)
    .attr('y', 15)
    .attr('width', 15)
    .attr('height', 15)
    .attr('stroke', 'rgb(7,103,73)')
    .attr('stroke-width', '3')
    .attr('fill', 'rgb(7,103,73)')

// Function to animate color change of svg4 and all shapes within
function color_change() {
    svg4
        .transition()
        .duration('4000')
        .style('background', 'rgb(234,193,57)')
        .transition()
        .duration('4000')
        .style('background', 'rgb(48,213,0)')

    icon4_star
        .transition()
        .duration('4000')
        .attr('stroke', 'rgb(57,234,207)')
        .attr('fill', 'rgb(57,234,207)')
        .transition()
        .duration('4000')
        .attr('fill', 'rgb(78,67,220)')
        .attr("stroke", "rgb(78,67,220)")

    icon4_circle
        .transition()
        .duration('4000')
        .attr('stroke', 'rgb(234,57,137)')
        .attr('fill', 'rgb(234,57,137)')
        .transition()
        .duration('4000')
        .attr('fill', 'rgb(253,193,134)')
        .attr("stroke", "rgb(253,193,134)")

    icon4_square
        .transition()
        .duration('4000')
        .attr('stroke', 'rgb(6,34,133)')
        .attr('fill', 'rgb(6,34,133)')
        .transition()
        .duration('4000')
        .attr('fill', 'rgb(255,226,33)')
        .attr("stroke", "rgb(255,226,33)")

}

color_change()

// Icon 5 - Append svg5 to previous svg to place it directly next to said svg
let svg5 = d3.select('article')
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'rgb(137,220,255)')
    .style('fill', 'transparent')

// Create small colored circle to represent a star in Ursa Major - Color matches svg5 to make sure it's not visible until animation
let icon5_star1 = svg5
    .append('circle')
    .attr('cx', 10)
    .attr('cy', 25)
    .attr('r', 2)
    .style('fill', 'rgb(137,220,255)');

// Create small colored circle to represent a star in Ursa Major - Color matches svg5 to make sure it's not visible until animation
let icon5_star2 = svg5
    .append('circle')
    .attr('cx', 28)
    .attr('cy', 30)
    .attr('r', 2)
    .style('fill', 'rgb(137,220,255)');

// Create small colored circle to represent a star in Ursa Major - Color matches svg5 to make sure it's not visible until animation
let icon5_star3 = svg5
    .append('circle')
    .attr('cx', 38)
    .attr('cy', 40)
    .attr('r', 2)
    .style('fill', 'rgb(137,220,255)');

// Create small colored circle to represent a star in Ursa Major - Color matches svg5 to make sure it's not visible until animation
let icon5_star4 = svg5
    .append('circle')
    .attr('cx', 48)
    .attr('cy', 53)
    .attr('r', 2)
    .style('fill', 'rgb(137,220,255)');

// Create small colored circle to represent a star in Ursa Major - Color matches svg5 to make sure it's not visible until animation
let icon5_star5 = svg5
    .append('circle')
    .attr('cx', 46)
    .attr('cy', 68)
    .attr('r', 2)
    .style('fill', 'rgb(137,220,255)');

// Create small colored circle to represent a star in Ursa Major - Color matches svg5 to make sure it's not visible until animation
let icon5_star6 = svg5
    .append('circle')
    .attr('cx', 78)
    .attr('cy', 61)
    .attr('r', 2)
    .style('fill', 'rgb(137,220,255)');

// Create small colored circle to represent a star in Ursa Major - Color matches svg5 to make sure it's not visible until animation
let icon5_star7 = svg5
    .append('circle')
    .attr('cx', 68)
    .attr('cy', 78)
    .attr('r', 2)
    .style('fill', 'rgb(137,220,255)');

// Create small colored circle to represent a star in Ursa Major - Color matches svg5 to make sure it's not visible until animation
let icon5_path = svg5
    .append('path')
    .style('stroke', 'rgb(137,220,255)')
    .style('fill', 'none')
    .style('stroke-width', 0.5)
    .attr('d', 'M10 25 L28 30 L38 40 L48 53 L46 68 L68 78 L78 61 L48 53')

// Create larger colored circle to represent sun and moon - Changes color and position in animation to emulate sun setting and moon rising
let icon5_smoon = svg5
    .append('circle')
    .attr('cx', 75)
    .attr('cy', 25)
    .attr('r', 15)
    .style('fill', 'yellow');

// Function to animate colors and movements of svg5 and shapes within - Emulates day to night as Ursa Major appears
function night_animation() {
    svg5
        .transition()
        .duration(8000)
        .style('background', 'rgb(10,15,30)')
    icon5_star1
        .transition()
        .duration(6000)
        .style('fill', 'white')
    icon5_star2
        .transition()
        .duration(6000)
        .style('fill', 'white')
    icon5_star3
        .transition()
        .duration(6000)
        .style('fill', 'white')
    icon5_star4
        .transition()
        .duration(6000)
        .style('fill', 'white')
    icon5_star5
        .transition()
        .duration(6000)
        .style('fill', 'white')
    icon5_star6
        .transition()
        .duration(6000)
        .style('fill', 'white')
    icon5_star7
        .transition()
        .duration(6000)
        .style('fill', 'white')
    icon5_path
        .transition()
        .duration(6000)
        .style('stroke', 'white')
    icon5_smoon
        .transition()
        .duration(2500)
        .attr('cx', 75)
        .attr('cy', 120)
        .transition()
        .duration('1')
        .style('fill', 'white')
        .transition()
        .duration(2500)
        .attr('cx', 75)
        .attr('cy', 25)
}

night_animation()