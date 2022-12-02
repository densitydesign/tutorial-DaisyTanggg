// We load the SVG using d3.svg, which handles the parsing and understanding the content of an SVG (which is HTML).
d3.svg('assets/GOT-network.svg').then(function(svg){
  // when the data has been loaded, d3 accesses it with .then(). Everything happening here is subject to loading data, if data is not loaded, nothing happens.
  let mySvg = svg.documentElement; // We select inside our SVG the HTML content (#document)
  let container = d3.select("#visualization-container"); // We select the existing div which will contain the SVG

  console.log(mySvg);

  container.node().append(mySvg); // we add with .append() the content of our SVG to the HTML component of the d3.selection.
  
  let clusters = d3.selectAll("#nodes_1_ > g"); // Select all the clusters existing in our Illustrator-generated SVG. "g" is a group.

  clusters.on("click", function() { // On our selection, with .on() we "wire" the code to detect mouse events like clicks, scrolls, over. These events have specific names: https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
    clusters.style("opacity", 0.3);
    d3.select(this).style("opacity", 1); // "this" refers to the element on which the event is fired (in this case, where we have clicked.)

  });
  
  let backgroundRectangle = d3.select("#background-rectangle");

  backgroundRectangle.on("click",function(){
    clusters.style("opacity",1);

  });

}
)
  