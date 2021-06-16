
// function btnval(num) {
// var val= document.getElementById('val')
// val.value += num; 

// }

 function btnval(num) {
     var val = document.getElementById('val');
     var lastVal = val.value.slice(val.value.length - 1);
     var opt = ['+','-','*','/'];
     if(opt.indexOf(lastVal) !== -1 && opt.indexOf(num) !== -1){
         val.value = val.value.slice(0,-1) + num
     }else{
         val.value += num;
     }


 }

function setResult() {
     var val = document.getElementById('val');
     val.value = eval(val.value)
 }

 function del() {
     var val = document.getElementById('val');
     val.value = val.value.slice(0, val.value.length - 1)
 }


 function clearVal() {
     var val = document.getElementById('val');
     val.value = ""
 }