var main = async function(){
  var req = await fetch("blog.json")
  var entries = JSON.parse(await req.text())
  console.log(entries)
  for(var t = 0; t < entries.length;t++){
    var data = entries[t]
    var entry = document.createElement('div')
    var a = document.createElement('a')
    a.href = "entry.html?id=" + t
    a.textContent = data.title
    entry.appendChild(a)
    
    if(data.body.length < 10){
    var summary = data.body
        }
    else{
      var summary = data.body.slice(0,10) + "..."
    }
    var summarytxt = document.createElement('p')
    summarytxt.textContent = summary
    entry.appendChild(summarytxt)
    document.getElementById('entries').appendChild(entry)
  }
}

main()
