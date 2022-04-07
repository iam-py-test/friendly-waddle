"use strict";
(async function(){
var term = new URL(location.href).searchParams.get('q')
var results = document.getElementById('results')
if(!term){
results.textContent = 'No search term specified'
  return
}
  document.getElementById('head').textContent = 'Results for \"' + term + "\""
  var found = []
  var blog = JSON.parse(await (await fetch('blog.json?noc='+Math.round(Math.random()*1000))).text())
  var keys = Object.keys(blog)
  for(var i = 0;i < keys.length;i++){
  if(blog[keys[i]].body.includes(term)){
  found.push(i)
    var resultE = document.createElement('div')
    var resultTitleA = document.createElement('a')
    var resultTitle = document.createElement('h3')
    var resultBody = document.createElement('div')
    resultTitleA.textContent = blog[i].title
    resultTitleA.href = "/entry.html?id="+i
    resultTitle.appendChild(resultTitleA)
    resultE.appendChild(resultTitle)
    if(blog[i].body.length < 55){
    var summary = blog[i].body.replaceAll("\\n","").replaceAll("\t","")
        }
    else{
      var summary = blog[i].body.replaceAll("\n","").replaceAll("\t","").slice(0,55) + "..."
    }
    resultBody.textContent = summary
    resultE.appendChild(resultBody)
    results.appendChild(resultE)
  }
  }
  
})()
