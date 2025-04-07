var btn = document.querySelector('button')
var h5 = document.querySelector('h5')

btn.addEventListener('click',function(){
    
    h5.innerHTML = 'Sending...'
    h5.style.color = 'gold'
    btn.innerHTML = 'Adding...'
    setTimeout(function(){
        h5.innerHTML = 'Friends'
        h5.style.color = 'green'
        btn.innerHTML = 'Remove'
    },3000)
})