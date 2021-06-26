var main = async function(){
  var req = await fetch("blog.json")
  var entries = JSON.parse(await req.text())
  var id = new URL(location).searchParams.get('id') * 1
  console.log(id,entries,entries[id])
  var cEntry = entries[id]
  document.title = cEntry.title + " · friendly-waddle"
  document.getElementById('title').textContent = cEntry.title
  document.getElementById('body').innerText = cEntry.body
}

main()
