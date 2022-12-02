let data = d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRRy2dEW3gKEE-oWeDQUG3awj9-QFWm5XXUeTELWG3rILfFRrkEDglmGgTOebVuD8LY5Q8QihNvgU3H/pub?gid=0&single=true&output=csv");

let cardsContainer = d3.select("#visualization-container")

data.then(function(myData){
    console.log(myData);

    let card = cardsContainer.selectAll("div")
    .data(myData)
    .join("div")
    .attr("class","card")

    card.append("div")
    .attr("class","card-header")
    .text(function(datum){
        return datum.timestamp;

    });

    card.append("img")
    .attr("class","card-img-top")
    .attr("src",function(datum){
        let path ="assets/images/";
        let filename = datum.filename;
        return path + filename
    
    });


}
);