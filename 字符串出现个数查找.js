<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>string方法</title>
</head>
<body>
<script>
    var str="JavaScript 是属于网络的脚本语言！JavaScript 被数百万计的网页用来改进设计、验证表单、检测浏览器、创建cookies，以及更多的应用。JavaScript 是因特网上最流行的脚本语言。JavaScript很容易使用！你一定会喜欢它的！" 
    var b=0;
    for(var i=0;i<str.length;i++){
      if(str[i]=="J"){
        b+=1;
        document.write("JavaScript第"+b+"次出现是在"+i+"的位置"+"<br />");
      }
    } 
    document.write("JavaScript在这段话中出现了"+b+"次"); 
</script>
</body>
</html>
