function add(a: number, b: number): number{
    return a+b;
  }
  
  let add2 = function(x: number, y: number):number{
    return x+y
  }
  let addArrow = (x: number,y: number): number =>{
    return x+y;
  }
  
  
  function strAdd(str1: string, str2: string): string{
    return str1+str2
  }
  
  function checkNum(num: number): boolean {
    return num > 10;
  }
  
  function printMessage(message: string): void{ //void :不回傳值
    console.log("message");
    alert("322");
    
  }