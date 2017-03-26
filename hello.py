import httplib, urllib
params = urllib.urlencode({'number': 12524, 'type': 'issue', 'action': 'show'})
headers = {"Content-type": "application/x-www-form-urlencoded",
            "Accept": "text/plain"}
conn = httplib.HTTPConnection("http://localhost:8080/")
conn.request("POST", "", params, headers)
