var main = async function(){
  var req = await fetch("blog.json")
  var entries = JSON.parse(await req.text())
  console.log(entries)
  for(var t = entries.length - 1; t >= 0;t--){
    var data = entries[t]
    var entry = document.createElement('div')
    var title = document.createElement("h3")
    var a = document.createElement('a')
    a.href = "entry.html?id=" + t
    a.textContent = data.title
    title.appendChild(a)
    entry.appendChild(title)
    
    if(data.body.length < 10){
    var summary = data.body.replaceAll("\\n","").replaceAll("\t","")
        }
    else{
      var summary = data.body.replaceAll("\n","").replaceAll("\t","").slice(0,35) + "..."
    }
    var summarytxt = document.createElement('p')
    summarytxt.textContent = summary
    entry.appendChild(summarytxt)
    document.getElementById('entries').appendChild(entry)
  }
}

main()
