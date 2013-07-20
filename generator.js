var prefix = ["twit", "mack", "boosh", "whyr", "bongo", "wham", "krak", "mini", "async", "hoob", "droom", "what", "onion", "spork", "whiz", "knit", "whet", "ramp", "flit", "whirl", "barz"];
var suffix = [".io", ".ly", ".me", "ify", ".geocities.com", ".com", ".net", ".biz", ".info", "urbate", "ster", "book"];
var company = ["Facebook", "Reddit", "Twitter", "Yelp", "Instagram", "Fandango", "eBay", "Amazon", "Spotify", "Tumblr", "Netflix", "Pinterest", "Foursquare", "StubHub", "GitHub", "Wikipedia", "LinkedIn", "Chatroulette", "a 1990s Lycos chatroom", "Google Reader", "OKCupid", "Craigslist", "Coursera", "Grindr", "HackerNews"];
var noun = ["homeless people", "hookups", "Justin Bieber fans", "cougars", "hipsters", "yoga", "single dads", "dogs", "stoners", "overachievers", "cops", "bored housewives", "the obese", "Baby Boomers", "Republicans", "progressives", "the LGBT community", "Kennedy assassination conspiracy theorists", "fans of The West Wing", "the mining industry", "CEOs", "trees"];

$(document).ready(function() {
    $('#prefix').html(prefix[Math.floor(Math.random()*prefix.length)]);
    $('#suffix').html(suffix[Math.floor(Math.random()*suffix.length)]);
    $('#company').html(company[Math.floor(Math.random()*company.length)]);
    $('#noun').html(noun[Math.floor(Math.random()*noun.length)]);
  $('#button').click(function(){
    $('#prefix').html(prefix[Math.floor(Math.random()*prefix.length)]);
    $('#suffix').html(suffix[Math.floor(Math.random()*suffix.length)]);
    $('#company').html(company[Math.floor(Math.random()*company.length)]);
    $('#noun').html(noun[Math.floor(Math.random()*noun.length)]);
  })
});