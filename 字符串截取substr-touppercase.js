<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
  var str="Never deter till tomorrow that which you can do today";
  var change=str.split(" ");
  var cut=change.slice(3,4);
  /*document.write(cut);
  document.write(typeof(cut));*/
  var nc=str.replace(cut,"TOMORROW");
  /*var nm=cut.join("");
    var bm=nm.toUpperCase();
  var nc=str.replace('tomorrow',bm);*/
  /*var index=str.indexOf("tomorrow");//补充代码
    var strNew=str.substr(index,8);//补充代码
    var upperStr=strNew.toUpperCase();//补充代码
  document.write(upperStr);*/
    document.write(nc);
   /* document.write((bm));*/
</script>
</body>
</html>
