function Calculator(){
        this.jisuan=function(num1,num2,oper){
            var res=0;
            switch(oper){
                case "+":
                    res=num1+num2;
                    break;
                case "-":
                    res=num1-num2;
                    break;
                case "*":
                    res=num1*num2;
                    break;
                case "/":
                    res=num1/num2;
                    break;
            }
            return res;
        }
    }
    var calculator=new Calculator();
    
    
    var val=0; 
    var xval=0;
    var temp=0;    
    var oper="";
    
    function inputEvent(e){
    
        val=e.value
        var xsval=document.getElementById("inp1");        
        xsval.value+=val;
        xval=parseFloat(xsval.value);
    
    }
    
    function inputPCB(e){
        var xsval=document.getElementById("inp1");
            if(e.value=="AC"){
               xsval.value="";

            }else if(e.value=="+/-"){
               xsval.value=-1*xsval.value;

            }else if(e.value=="%"){
               xsval.value=0.01*xsval.value;
            }
            }

    function inputOper(e){
        oper=e.value;
        if (e.value=="+"){
            var xsval=document.getElementById("inp1");
            temp=parseFloat(xsval.value);
            xsval.value="";                        
        }else if(e.value=="-"){
            var xsval=document.getElementById("inp1");
            temp=parseFloat(xsval.value);
            xsval.value="";
        }else if(e.value=="*"){
            var xsval=document.getElementById("inp1");
            temp=parseFloat(xsval.value);
            xsval.value="";
        }else if(e.value=="/"){
            var xsval=document.getElementById("inp1");
            temp=parseFloat(xsval.value);
            xsval.value="";
        }
    }
    
    function inputEquel(e){
    
    
        var xsval=document.getElementById("inp1");        
        if(e.value=="="){
            xsval.value=calculator.jisuan(temp,xval,oper);
        }
    }