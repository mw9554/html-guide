<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>首字母变大写</title>
</head>
<body>
<script>
    function Upper(str){
        var newChar=[];
        var index=str.split(" ");
        for(var i=0,len=index.length;i<len;i++){
            var newStr=index[i];
            index[i]=newStr.charAt(0).toUpperCase()+newStr.slice(1)+"&nbsp";
            newChar+=index[i];
        }
        return newChar;
    }
    var c="all time is no time when it is past";
    document.write(Upper(c));
</script>
</body>
</html>
