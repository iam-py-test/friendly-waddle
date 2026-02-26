import json, os
from bs4 import BeautifulSoup

try:
	os.mkdir("pages")
except:
	pass

articles = json.loads(open("blog.json", encoding="UTF-8").read())

article_page = ""
entry_base = """<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
	<link rel="stylesheet" href="style.css"> 
		<title>{{title}}</title>
	</head>
	<body>
		<h1 id="title">{{title}}</h1>
		<p>Posted on: {{post_date}}</p>
		<div id='body'>
			{{body}}
		</div>
		<a href="https://github.com/iam-py-test/friendly-waddle">friendly-waddle source code</a>
	</body>
	</html>

"""
homepage_entry_base = """<div>
	<a href="{{url}}"><h3>{{title}}</h3></a>
	<div>
		{{desc}}
	</div>
</div>
"""
homepage_base = """<!DOCTYPE html>
<html lang='en-US'>
	<head>
		<meta charset="UTF-8">
	<link rel="stylesheet" href="style.css">
		<title>My blog?</title>
	</head>
	<body>
		<h2>My Blog</h2>
		<div id="entries">
		{{entries}}
		</div>
		<a href="https://github.com/iam-py-test/friendly-waddle">Source code</a>
	</body>
</html>
"""

homepage_entries = []

for article in articles:
	if "hidden" in article:
		if article["hidden"] == True:
			continue
	article_title = article["title"]
	article_url = "pages/" + article_title.replace(" ", "_").replace("\"", "").replace("/", "-").replace(":", "_") + ".html"
	print(article_url)
	article_file = open(article_url, 'w', encoding="UTF-8")
	try:
		article_soup = BeautifulSoup(article["body"].replace("\t"," ").replace("&emsp;","").replace("<br>", "").replace("\n", ""),'html.parser')
		preview = article_soup.get_text()[:300].strip() + "..."
	except:
		preview = "No preview"
	if "posted_on" in article:
		posted_on = article["posted_on"]
	else:
		posted_on = "Unknown"
	homepage_entry = homepage_entry_base.replace("{{url}}", article_url).replace("{{title}}", article_title).replace("{{desc}}", preview)
	homepage_entries.append(homepage_entry)
	
	entry_data = entry_base.replace("{{title}}", article_title).replace("{{body}}", article["body"].replace("\n", "<br>\n")).replace("{{post_date}}", posted_on)
	entry_file = open(article_url, 'w', encoding="UTF-8")
	entry_file.write(entry_data)
	entry_file.close()

homepage_file = open("index.html", "w")
print(homepage_entries)
homepage_file.write(homepage_base.replace("{{entries}}", "\n".join(homepage_entries)))
homepage_file.close()
