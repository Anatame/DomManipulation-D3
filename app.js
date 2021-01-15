var removeBtn = d3.select('#removebtn');
var addBtn = d3.select('#addbtn')

var quotes = [{
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13"
}, {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG"
}, {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R"
}, {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
}, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
}];

var newQuotes = [{
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
}, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
}];

var colors = {
    'G': 'red',
    'PG': 'blue',
    'PG-13': 'yellow',
    'R': 'pink',
}

d3.select('#quotes')
    .style('list-style', 'none')
    .selectAll('li')
    .data(quotes)
    .enter()
    .append('li')
    .text(function (d) {
        return d.movie;
    })
    .style('background', function (d) {
        return colors[d.rating]
    })

addBtn.on('click', function(){

    quotes = quotes.concat(newQuotes);


    d3.select('#quotes')
    .selectAll('li')
    .data(quotes)
    .enter()
    .append('li')
    .text(function (d) {
        return d.movie;
    })
    .style('background', function (d) {
        return colors[d.rating]
    })
})


removeBtn.on('click', function () {
    var nonRquotes = quotes.filter(function (movie) {
        return movie.rating !== 'R'
    });
    console.log(nonRquotes)
    d3.selectAll('li')
        .data(nonRquotes, function (d) {
            return d.quote
        }).exit().remove();

        removeBtn.remove();
})