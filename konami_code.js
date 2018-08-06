const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
   document.body.addEventListener("keydown",codes);
}
function codes(e)
{
   let key = parseInt(e.which ||e.detail);
   let index =0;
   
   if(key ===code[index])
   {
     index++;
     if(index ===code.length-1)
      alert("Hurray!");
   }
   else 
   index =0;
}