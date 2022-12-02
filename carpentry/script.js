// Interpret the data as the correct format. Use d3.csv or d3.tsv accordingly.
data = d3.csv("data/data.csv");

// Select the container where we will put our HTML elements
let cards = d3.select("#all-cards");

// Load data
data.then(function(data) {
    // Do stuff with your data!
    console.log(data);

    // Join your data to the creation of div elements to the same number of items in your dataset.
    let card = cards.selectAll("div")
    .data(data)
    .join("div")
    .attr("class", "card");

    // We append to the initial card all the parts required.
    // HEADER
    card.append("div")
    .attr("class", "card-header")
    .style("background", function(d) { // We write a function that accesses the values of the current data point (datum).
        console.log(d.verified)
        if (d.verified == "VERIFIED") {
            return "powderblue" // If the datum has been tagged as VERIFIED in the relative column, color it blue
        }
    })
    .text(function(d) {
        return d.timestamp;
    })

    // IMAGE
    card.append("img")
    .attr("class", "card-img-top")
    .attr("src", function(d) {
        let filename = d.filename;
        let path = "images/";
        // Concatenate the path and the filename of the image
        return path + filename;
    })

    // TWEET
    card.append("div")
    .attr("class", "card-body")
    .append("p")
    .text(function(d) {
        return d.body;
    })
});