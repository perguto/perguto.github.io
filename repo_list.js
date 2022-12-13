fs=require('fs')
b=fs.readFileSync("perguto.json")
j=JSON.parse(b)
s='';for(i of j){s+='- ['+i.name.replaceAll('-',' ')+']('+i.html_url+'): '+i.description+'\n'}
fs.writeFileSync('repo_list',s)
