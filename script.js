var btn = document.querySelector('button')
var percent = document.querySelector('#percent')
var growth = document.querySelector('#growth')

var num = 0

btn.addEventListener('click',function(){
    var int = setInterval(function(){
        num++
        percent.innerHTML = num+'%'
        growth.style.width = num+'%'
    },40)

    setTimeout(function(){
        clearInterval(int)
    },4000)
})