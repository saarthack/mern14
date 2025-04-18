// 1. make a whatsapp chat UI with different details of each chat 

// 2. make a instagram post feature with different data 

// 3. complete todays task with different data 

var arr = [
    {
        username:'spider man',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNbbAG6WN0nfRFZrkN_y12zm9a9b3Apxe9w&s',
        age:24,
        superpower:'Web developer',
        realName:'Peter Parker'

    },
    {
        username:'iron man',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbnZFRhuUP_TPos-xReniz08khAV-rtwY6A&s',
        age:44,
        superpower:'AI Engineer',
        realName:'Tony Stark'
    },
    {
        username:'hulk',
        image:'https://cosmicbook.news/wp-content/uploads/2025/01/marvel-world-war-hulk-rumors.webp',
        age:34,
        superpower:'mechanical engineer',
        realName:'Bruce Banner'
    },
    {
        username:'Shaktimaan',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFgfwv0E2Xnxeln3koOxugFhUzs_kRCFx2w&s',
        age:69,
        superpower:'gol gol ghumna',
        realName:'Gangadhar'
    }
]

var sum = ''

arr.forEach(function(elem){
    sum = sum + `<div class="card">
    <img src="${elem.image}" alt="">
    <h1>${elem.username}, ${elem.age}</h1>
    <h2>${elem.realName}</h2>
    <h5>${elem.superpower}</h5>
</div>`
})


var main = document.querySelector("#main")

main.innerHTML = sum