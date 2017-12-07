<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>员工合同到期时间</title>
</head>
<body>
<script>
    var date=new Date(),
        y=parseInt(prompt("请输入员工的入职年份")),
        m=parseInt(prompt("请输入员工的入职月份")),
        d=parseInt(prompt("请输入员工的入职时间"));
       
        date.setFullYear(y);
        date.setMonth(m);
        date.setDate(d);
    var temp=new Date((y+3),m,d);

        document.write("该员工的入职时间是:"+y+"-"+m+"-"+d+"<br />");
        document.write("该员工的合同到期时间是:"+temp.getFullYear()+"-"+temp.getMonth()+"-"+temp.getDate());

</script>
</body>
</html>

