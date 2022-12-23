var num1 = 0, num2 = 0, ans, operate;
function number(num) {
    if (num1.length > 0) {
        num1 += num;
    }
    else {
        num1 = num;
    }
    document.getElementById("result").value = num1;
}

function operation(opt) {
    operate = opt;
    if (opt == 'add') {
        num2 = Number(num2) + Number(num1);
        document.getElementById("result").value = num2;
        num1 = 0;
    }
    if (opt == 'sub') {
        if (num2 == 0) {
            num2 = Number(num1) - Number(num2);
        }
        else {
            num2 = Number(num2) - Number(num1);
        }
        document.getElementById("result").value = num2;
        num1 = 0;
    }
    if (opt == 'multiply') {
        if(num2==0)
        {
            num2 = 1;
            num2 = Number(num2) * Number(num1);
        }
        else
        {
            num2 = Number(num2) * Number(num1);
        }
        document.getElementById("result").value = num2;
        num1 = 0;
    }
    if (opt == 'div') {
        if(num2==0){
            num2=num1;
            //num2 = Number(num2) / Number(num1);
        }
        else{
             num2 = Number(num2) / Number(num1);
        }
       
        document.getElementById("result").value = num2;
        num1 = 0;
    }
    if(opt=='sign')
    {
        if(num1>0){
            document.getElementById("result").value = '-'+num1;
            num1=document.getElementById('result').value;
        }
        else if(num1<=0){
            document.getElementById("result").value = Math.abs(num1);
            num1=document.getElementById('result').value;
        }
    }
}

function equal() {
    if (operate == 'add') {
        ans = Number(num1) + Number(num2);
        document.getElementById("result").value = ans;
        num1 = 0;
        num2 = 0;
        ans = 0;
    }
    if (operate == 'sub') {
        if (num2 == 0) {
            ans = Number(num1) - Number(num2);
        }
        else {
            ans = Number(num2) - Number(num1);
        }
        document.getElementById("result").value = ans;
        num1 = 0;
        num2 = 0;
        ans = 0;
    }
    if (operate == 'multiply') {
       if(num2==0)
        {
            num2 = 1;
            num2 = Number(num2) * Number(num1);
        }
        else
        {
            num2 = Number(num2) * Number(num1);
        }
        document.getElementById("result").value = num2;
        num1 = 0;
        num2 = 0;
        ans = 0;
    }
    if (operate == 'div') {
        ans = Number(num2) / Number(num1);
        document.getElementById("result").value = ans;
        num1 = 0;
        num2 = 0;
        ans = 0;
    }
}
function basic_op(opt) {
    if (opt == "CE") 
    {
        document.getElementById("result").value = "";
        num1=num2=ans=0;
    }
    if(opt=='sqrt')
    {
        ans = Math.sqrt(num1);
        document.getElementById('result').value=ans;
        num1=document.getElementById('result').value;
        num1=ans=0;
    }
    if(opt=='per')
    {
        ans=Number(num1)/100;
        document.getElementById('result').value=ans;
        num1=document.getElementById('result').value;
        ans=0;
    }
    if(opt=='pi')
    {
        document.getElementById('result').value=3.14159265359;
        num1=document.getElementById('result').value;
    }
    if(opt=='square')
    {
        ans=Number(num1)*Number(num1);
        document.getElementById('result').value=ans;
        num1=document.getElementById('result').value;
        ans=0;
    }
    if(opt=='r2')
    {
        document.getElementById('result').value=Number(num1).toFixed(2);
        num1=document.getElementById('result').value;
    }
    if(opt=='r0')
    {
        document.getElementById('result').value=Number(num1).toFixed(0);
        num1=document.getElementById('result').value;
    }
}
