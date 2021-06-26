
//from https://stackoverflow.com/a/2166104
function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}

var main = async function(){
  var req = await fetch("blog.json")
  var entries = JSON.parse(await req.text())
  var id = new URL(location).searchParams.get('id') * 1
  console.log(id,entries,entries[id])
  var cEntry = entries[id]
  if(cEntry === undefined || cEntry === null){
    document.title = "Entry not found"
    document.getElementById('title').textContent = 'Entry not found'
    return;
  }
  document.title = cEntry.title + " · friendly-waddle"
  document.getElementById('title').textContent = cEntry.title
  var encode = document.createElement('span')
  encode.innerText = cEntry.body
  var linkedbody = linkify(encode.innerHTML)
  document.getElementById('body').innerHTML = linkedbody
}

main()
