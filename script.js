// DOM - Document Object Model 
// Frontend ki JavaScript 

// 4 pillars of DOM

// 1. Selection of an Element ✅
// 2. Changing HTML ✅
// 3. Changing CSS ✅
// 4. Event Listener ✅


var h5 = document.querySelector('h5')
var btn = document.querySelector('button')

var flag = 0

btn.addEventListener('click', function () {

    if(flag == 0){
        h5.innerHTML = 'Friends'
        h5.style.color = 'green'
        btn.innerHTML = 'Remove Friend'
        flag = 1
    }else{
        h5.innerHTML = 'Stranger'
        h5.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        flag = 0
    }

})