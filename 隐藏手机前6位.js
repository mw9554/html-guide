<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
   var tel=prompt("请输入您的手机号码");
  /* var Tel=tel.slice(0,7);
        Newtel=tel.replace(Tel,"*******");*/
   var arr=tel.split("");
  /* document.write(typeof(arr)+"<br />");
   for(var i=0;i<6;i++){
     arr[i]="*";
   }*/
   arr.splice(0,7,"*","*","*","*","*","*","*");
   var fin=arr.join("");
   document.write(typeof(fin)+"<br />");
   document.write(fin);
   
</script>
</body>
</html>
