<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>splice</title>
</head>
<body>
<script>
   var recoder=new Array();
   while(recoder[recoder.length-1]!=-1){
       recoder[recoder.length]=prompt("请输入你想输入的任意字符");
       Number(recoder);
   }
   recoder.splice(0,2,"Hello","Hello");
   recoder.pop();
   document.write(recoder);
</script>
</body>
</html>
