<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>统计员工工资</title>
    </head>
    <body>
    <script>
       var Salaries=new Array();
       for(var i=0;q!=0;i++){
       	Salaries[i]=prompt("请输入员工工资");
        if(Salaries[i]=="退出"){
        	var q;
        	q=0;
        }
       }
       Salaries.length-=1;
       document.write(Salaries);
    </script>
    </body>
</html>
