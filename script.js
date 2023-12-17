function printRange(num = 0, action = () => {}) {
    document.getElementById('countdown-container').innerText = num;
   console.log(num)
   if(action) {
   		action()
   }
}


function printRange(num = 0, action = () => {}) {
    document.getElementById('countdown-container').innerText = num;
    if (num > 0) {
       setTimeout(() => printRange(num - 1, action), 1000);
    } else {
       action();
    }
 }
 
 
 printRange(10, () => {
    document.getElementById('countdown-container').innerText = 'Happy Independence Day!';
 });