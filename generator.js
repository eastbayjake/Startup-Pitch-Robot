
var prefix = ["twit", "mack", "boosh", "whyr", "bongo", "wham", "krak", "min", "async", "hoob", "droom", "what", "ion", "spork", "whiz", "knit", "whet", "laff", "ramp", "flit", "whirl", "barz", "ball", "iron", "shop"];
var suffix = [".io", ".ly", ".me", "ify", ".geocities.com", ".com", ".net", ".biz", "urbate", "ster", "book", "la", "olator", "adoo", "hub", "erest", "r", "oo", "assa", "er", "istry", "head", "ista"];
var company = ["Facebook", "Reddit", "Twitter", "Yelp", "Instagram", "Fandango", "eBay", "Amazon", "Spotify", "Tumblr", "a meme generator", "Netflix", "Wordpress", "Pinterest", "Groupon", "Flickr", "LiveJournal", "Hot Or Not", "Pets.com", "Angry Birds", "Foursquare", "StubHub", "GitHub", "MySpace", "SoundCloud", "Pitchfork", "Buzzfeed", "Wikipedia", "LinkedIn", "Chatroulette", "a 1990s Lycos chatroom", "Google Reader", "OKCupid", "Craigslist", "Coursera", "Grindr", "HackerNews"];
var customer = ["Justin Bieber fans", "cougars", "hipsters", "yoga", "single dads", "musicians", "dogs", "homeless people", "hookups", "stoners", "overachievers", "cops", "soccer moms", "Millennials", "urban professionals", "Baby Boomers", "Republicans", "preppies", "flashmobs", "DJs", "veterans", "the elderly", "progressives", "college students", "newlyweds", "the LGBT community", "investment bankers", "evangelicals", "freelance writers", "Kennedy assassination conspiracy theorists", "movie lovers", "foodies", "fans of The West Wing", "the mining industry", "CEOs", "trees"];

var generate = function(){
  $('#prefix').html(prefix[Math.floor(Math.random()*prefix.length)]);
  $('#suffix').html(suffix[Math.floor(Math.random()*suffix.length)]);
  $('#company').html(company[Math.floor(Math.random()*company.length)]);
  $('#customer').html(customer[Math.floor(Math.random()*customer.length)]);
};

$(document).ready(function() {
  generate();
  $('#button').click(function(){
    generate();
  });
});