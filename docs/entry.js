var main = async function(){
  var req = await fetch("blog.json")
  var entries = JSON.parse(await req.text())
  var id = new URL(location).searchParams.get('id') + 0
  var cEntry = entries[id]
  document.title = cEntry.title + " &middot; friendly-waddle"
  document.getElementById('title').textContent = cEntry.title
  document.getElementById('body').innerText = cEntry.body
}

main()
