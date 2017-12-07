<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title> </title>
</head>
<body>
<script>
    var mail=new Array();
    mail=prompt("请输入登陆邮箱");
    var b=mail.indexOf("@");
    document.write("邮箱的用户名是:"+mail.slice(0,b)+"<br />");
    document.write("登陆的邮箱域名是:"+mail.slice(b+1));
</script>
</body>
</html>
