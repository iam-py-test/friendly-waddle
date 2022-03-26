/*this is used to handle the search box*/
"use strict";
(function(){
  var searchDiv = document.getElementById('search')
  if(!searchDiv){
  //the Div doesn't exist, exit
    console.warn("Div 'search' does not exist, exiting...")
    return;
  }
  var input = document.createElement('input')
  input.type = 'search'
  input.onkeydown = function(e){
  if(e.key.toLowerCase() === 'enter' || e.key.toLowerCase() == 'return'){
  location.href = 'search.html?q=' + encodeURIComponent(input.value)
  }
  }
  searchDiv.appendChild(input)
})()
