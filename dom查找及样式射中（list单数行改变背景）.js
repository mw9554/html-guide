<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>列表各行换色</title>
</head>
<body>
    <h3>前端知识点</h3>
    <ul id="listWeb">
    <li>JavaScript基础</li>
    <li>CSS基础</li>
    <li>HTML基础</li>
    <li>CSS3</li>
    <li>HTML5</li>
    <li>jQuery</li>
    <li>Bootstrap</li>
    <li>WebApp</li>
  </ul>
  <script>
   var lis=document.getElementById("listWeb").getElementsByTagName("li");
   for(var i=0,len=lis.length;i<len;i++){
       
       if(((i+1)%2)!=0){
           lis[i].style.backgroundColor="yellow";
       }
/*       else{lis[i].style.backgroundColor="white";}*/
       
   }
  </script>
</body>
</html>
