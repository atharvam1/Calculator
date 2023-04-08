
function addition(x,y){

     var L= x+y
     return L
    
  }
function subtraction(x,y){
      var L= x-y
      return L
  }
function multiplication(x,y){
      var L =x*y
      return L
  }
function division(x,y){
      var L= x/y
      return L
  }
function exponents(x,y){
      var L = x**y
      return L
  }



  

   



 //CONNECT VISUALS TO LOGIC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
        button1 = document.getElementById("button1").addEventListener("click",()=> operator2("+"))
        button2 = document.getElementById("button2").addEventListener("click",()=> operator2("-"))
        button3 = document.getElementById("button3").addEventListener("click",()=> operator2("/"))
        button4 = document.getElementById("button4").addEventListener("click",()=> operator2("*"))
        button5 = document.getElementById("button5").addEventListener("click",()=> equalto("="))
        button6 = document.getElementById("button6").addEventListener("click",()=> myFunction(0))
        button7 = document.getElementById("button7").addEventListener("click",()=> myFunction(1));
        button8 = document.getElementById("button8").addEventListener("click",()=> myFunction(2));
        button9 = document.getElementById("button9").addEventListener("click",()=> myFunction(3))
        button10 = document.getElementById("button10").addEventListener("click",()=> myFunction(4))
        button11 = document.getElementById("button11").addEventListener("click",()=> myFunction(5))
        button12 = document.getElementById("button12").addEventListener("click",()=> myFunction(6))
        button13 = document.getElementById("button13").addEventListener("click",()=> myFunction(7))
        button14 = document.getElementById("button14").addEventListener("click",()=> myFunction(8))
        button15 = document.getElementById("button15").addEventListener("click",()=> myFunction(9))
        button16 = document.getElementById("button16").addEventListener("click",()=> myFunction("."))
        button17 = document.getElementById("button17").addEventListener("click", ()=> clear(clear))
        
        
        screens = document.getElementById("screens")
        operator4 = ""
        N1 = ""
        N2 = ""

    function myFunction(number){
        screens.innerHTML +=number
   
        }
    function clear(){
        screens.innerHTML = " "
    }

    function getnum1(){
        return screens.innerHTML
    }

    function getnum2(){
         N2 = screens.innerHTML.split(operator4)
         N2 = N2[1]

        
    }

    function operator2(operator){
         N1 = getnum1()
        screens.innerHTML += operator
        operator4 = operator
    }

    function equalto(){
        getnum2()
        console.log(N1, N2, operator4)
        N1 = parseInt(N1)
        N2 = parseInt(N2)
           
if (operator4 =="*"){
    Ans=multiplication(N1,N2)
    }
if (operator4 =="+"){

  Ans=addition(N1,N2)
    }
if (operator4 =="-"){

     Ans=subtraction(N1,N2)
    }
if (operator4 =="/"){

     Ans=division(N1,N2)
     }
if (operator4 =="^"){

     Ans= exponents(N1,N2)
    }
console.log(Ans)
clear()

screens.innerHTML +=(Ans)


    }



   
    


        
    
        
        
        
        

        

  
