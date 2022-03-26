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
  if(blog[keys[i]].)
  }
})()
