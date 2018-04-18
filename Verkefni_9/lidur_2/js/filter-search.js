let images={"img/p1.jpg":"Rabbit","img/p2.jpg":"Sea","img/p3.jpg":"Deer","img/p4.jpg":"New York Street Map","img/p5.jpg":"Sydney Train","img/p6.jpg":"Typographic Study","img/p7.jpg":"Trumpet","img/p8.jpg":"Aqua Logo","img/p9.jpg":"Ghost"}
for (var key in images){
  //document.getElementById("gallery").innerHTML +='<img src='+key+' alt='+images[key]+' />';
  let newImage = new Image()
  newImage.src = key
  newImage.alt = images[key]
  document.getElementById("gallery").appendChild(newImage);
}

(function() {                             // Lives in an IIFE
  var $imgs = $('#gallery img');          // Get the images
  var $search = $('#filter-search');      // Get the input element
  var cache = [];                         // Create an array called cache
  $imgs.each(function() {                 // For each image
    cache.push({                          // Add an object to the cache array
      element: this,                      // This image
      text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
    });
  });

  function filter() {                     // Declare filter() function
    var query = this.value.trim().toLowerCase();  // Get the query
    cache.forEach(function(img) {         // For each entry in cache pass image 
      var index = 0;                      // Set index to 0

      if (query) {                        // If there is some query text
        index = img.text.indexOf(query);  // Find if query text is in there
      }

      img.element.style.display = index === -1 ? 'none' : '';  // Show / hide
    });
  }

  if ('oninput' in $search[0]) {          // If browser supports input event
    $search.on('input', filter);          // Use input event to call filter()
  } else {                                // Otherwise
    $search.on('keyup', filter);          // Use keyup event to call filter()
  }              

}());
