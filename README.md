Startup-Pitch-Robot
===================

This is a generator for tech startup ideas. On load and with each button click, jQuery selects a new string from each category's array and inserts it into the DOM. Photos are retrieved through a JSONP request to Flickr for 100 photos matching the query "startup pitch." The data is scraped for id information which gets turned into unique URLs for each photo by the processPhotos() function. A random photo URL is drawn from the array with each button click. Photos are not being asynchronously downloaded and stored -- the img tag's source attribute is simply being changed.

This project had three goals:

  (1) Explore the Flickr API
  (2) Demonstrate for a blog post how to build a simple ad lib generator app
  (3) Entertain my friends
  
If this helped you with any of those things, I'm really glad. I welcome pull requests to add funny items to any of the generator's arrays!
