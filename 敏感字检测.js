<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>搜索内容是否有敏感字"草"</title>
</head>
<body>
<script>
  var check=new Array();
  check=prompt("请输入您要搜索的内容");
 for(var i=0;i<check.length;i++){
  	if(check[i]=="草"){
  		document.write("敏感字‘草’在"+i+"位置被发现"+"<br />");
  	}
  }
  var firstK=check.indexOf("草");
  document.write("敏感字‘草’字首次出现的位置是"+firstK);
</script>
</body>
</html>
