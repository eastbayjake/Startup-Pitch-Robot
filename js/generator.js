var prefix = ["twit", "mack", "boosh", "whyr", "bongo", "wham", "krak", "min", "async", "hoob", "droom", "what", "ion", "spork", "whiz", "knit", "whet", "laff", "ramp", "flit", "whirl", "barz", "ball", "iron", "shop"];
var suffix = [".io", ".ly", ".me", "ify", ".com", ".net", ".biz", "urbate", "ster", "book", "la", "olator", "adoo", "hub", "erest", "r", "oo", "assa", "er", "istry", "head", "ista"];
var company = ["Facebook", "FarmVille", "Reddit", "Twitter", "Yelp", "Instagram", "Fandango", "eBay", "Amazon", "Spotify", "Tumblr", "Netflix", "Wordpress", "Pinterest", "Groupon", "Flickr", "LiveJournal", "Hot Or Not", "Kickstarter", "Pets.com", "Angry Birds", "Foursquare", "StubHub", "GitHub", "MySpace", "SoundCloud", "Pitchfork", "Buzzfeed", "Wikipedia", "LinkedIn", "Chatroulette", "Google Reader", "OKCupid", "Craigslist", "Coursera", "Grindr", "HackerNews", "Epicurious", "StumbleUpon"];
var customer = ["Justin Bieber fans", "cougars", "hipsters", "yoga", "single dads", "musicians", "dogs", "clowns", "street performers", "hookups", "stoners", "meetups", "web developers", "overachievers", "cops", "tiger moms", "soccer moms", "Millennials", "urban professionals", "Baby Boomers", "Republicans", "preppies", "flashmobs", "DJs", "veterans", "the elderly", "progressives", "college students", "newlyweds", "tweens", "vinyl snobs", "investment bankers", "evangelicals", "freelance writers", "movie lovers", "foodies", "eccentric billionaires", "CEOs", "trees"];
var funding = ["in Series A funding", "in angel funding", "in seed funding", "from our Harvard classmates", "from Larry Ellison's couch cushions", "from Carl Icahn", "from Michael Dell", "from Kickstarter", "from our IPO", "from the Chinese government", "from a Saudi prince"];
var feature = ["social", "mobile", "monetization", "advertising", "collaborative", "interactive", "innovative", "patented", "open-source", "realtime", "big data", "cool new", "amazing", "unprecedented", "totally new", "redesigned", "killer", "incredible", "premium"];
var lingo = ["revolutionize", "disrupt", "create competition for", "shock", "make a bunch of millionaires in", "forever change", "fundamentally alter", "produce creative destruction in", "cause waves in", "create quite a stir in", "drive investment in", "lead to a rebirth in", "revitalize", "improve", "dominate", "be the messiah of"];
var techhub = ["the tech industry", "Silicon Valley", "Palo Alto", "the Google campus", "the NASDAQ", "the startup scene", "the Austin tech scene", "the New York tech scene", "the American economy", "the Internet", "the TechCrunch comment section", "the way we use computers"];
var photos = ["images/dummy.jpg"];

var generate = function(){
  $('#prefix').html(prefix[Math.floor(Math.random()*prefix.length)]);
  $('#suffix').html(suffix[Math.floor(Math.random()*suffix.length)]);
  $('#company').html(company[Math.floor(Math.random()*company.length)]);
  $('#customer').html(customer[Math.floor(Math.random()*customer.length)]);
  $('#brag').html("\"Our product's "+feature[Math.floor(Math.random()*feature.length)]+" features are going to "+lingo[Math.floor(Math.random()*lingo.length)]+" "+techhub[Math.floor(Math.random()*techhub.length)]+"\"");
  $('#funding').html("\"We've already raised<br>$"+Math.ceil(Math.random()*99)+" million<br>"+funding[Math.floor(Math.random()*funding.length)]+"\"");
  $('#founder').html("<img src="+photos[Math.floor(Math.random()*photos.length)]+">");
};

var processPhotos = function (data) {
  var photo_data = data.photos.photo;
  for (i=0; i<photo_data.length; i++) {
    var farm = photo_data[i].farm;
    var server = photo_data[i].server;
    var id = photo_data[i].id;
    var secret = photo_data[i].secret;
    var url = "http://farm"+farm+".staticflickr.com/"+server+"/"+id+"_"+secret+"_m.jpg";
    photos.push(url);
  };
};

$(document).ready(function() {
  // Add the "Built at Hack Reactor" tag
  $('body').append('<a href="http://hackreactor.com"><img style="position: fixed; top: 0; right: 0; border: 0;" src="http://i.imgur.com/x86kKmF.png" alt="Built at Hack Reactor"></a>');
  // Make async HTTP request to Flickr API
  $.get('http://ycpi.api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dcd104336de19ad254c21da883a38d9f&text=startup%20pitch&format=json&nojsoncallback=1',
    function(data) {
      processPhotos(data);
  });
  // Set initial values for generator on load
  generate();

  // Refresh values on click
  $('#button').click(function(){
    generate();
  });

});
