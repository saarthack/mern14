const users = [
    {
        fullName: "Virat Kohli",
        image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png",
        position: "Frontend Engineer",
        company: "CodeCricket Labs",
        skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind", "Figma", "GraphQL"],
        description: "Clean UI lover and always chasing pixel perfection.",
        available: true,
        price: 120
    },
    {
        fullName: "Rohit Sharma",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg/250px-Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg",
        position: "UI/UX Designer",
        company: "Design11 Studio",
        skills: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Research"],
        description: "Crafts user journeys as smooth as his cover drives.",
        available: false,
        price: 150
    },
    {
        fullName: "Jasprit Bumrah",
        image: "https://www.aljazeera.com/wp-content/uploads/2024/12/AFP__20241122__36N39GM__v1__HighRes__CricketAusInd-1733131187.jpg?resize=1800%2C1800",
        position: "Backend Developer",
        company: "FastAPI Tech",
        skills: ["Node.js", "Express", "MongoDB", "Docker", "AWS", "PostgreSQL", "Redis"],
        description: "Precision in code, just like his yorkers.",
        available: true,
        price: 110
    },
    {
        fullName: "KL Rahul",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tcesM7DzuztDzNij-VsQjUYfP6oZKPxnfA&s",
        position: "Full Stack Developer",
        company: "WicketTech Solutions",
        skills: ["React", "Node.js", "MongoDB", "Docker", "Next.js", "AWS", "TypeScript", "GraphQL"],
        description: "Balances frontend & backend like opening partnerships.",
        available: false,
        price: 140
    },
    {
        fullName: "Ravindra Jadeja",
        image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/46.png",
        position: "DevOps Engineer",
        company: "SpinDeploy Systems",
        skills: ["Docker", "Kubernetes", "Terraform", "AWS", "CI/CD", "Ansible", "Linux"],
        description: "Deploys code with the sharpness of a direct hit.",
        available: true,
        price: 160
    },
    {
        fullName: "Shubman Gill",
        image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/62.png",
        position: "React Developer",
        company: "NextGen BatTech",
        skills: ["React", "Redux", "Tailwind", "JavaScript", "Vite", "Git", "REST APIs", "Jest"],
        description: "Writes modern React apps with youthful elegance.",
        available: true,
        price: 100
    },
    {
        fullName: "Hardik Pandya",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjdQpY98TXuqgq7d4JwmJpNVBpd8xLELWNg&s",
        position: "Cloud Engineer",
        company: "SkyShot Cloud",
        skills: ["AWS", "Azure", "GCP", "Docker", "Terraform", "Kubernetes", "CloudFormation"],
        description: "Always ready to scale your cloud like his sixes.",
        available: false,
        price: 180
    },
    {
        fullName: "Rishabh Pant",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Prime_Minister_Of_Bharat_Shri_Narendra_Modi_with_Rishabh_Pant.jpg",
        position: "Software Tester",
        company: "BugSquashers Pvt Ltd",
        skills: ["Selenium", "Cypress", "Jest", "Postman", "Mocha", "JIRA", "Bug Tracking"],
        description: "Catches bugs like behind the stumps.",
        available: true,
        price: 90
    },
    {
        fullName: "Mohammed Siraj",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Mohammad_Siraj_%28cropped%29.jpg",
        position: "Data Engineer",
        company: "SwingData Analytics",
        skills: ["Python", "SQL", "Hadoop", "Spark", "Kafka", "Airflow", "Pandas"],
        description: "Delivers data pipelines with pace and accuracy.",
        available: false,
        price: 130
    },
    {
        fullName: "Yuzvendra Chahal",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Yuzvendra_Chahal_in_PMO_New_Delhi.jpg",
        position: "Machine Learning Engineer",
        company: "SpinAI Systems",
        skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Scikit-Learn", "Data Preprocessing"],
        description: "Tricks datasets like batsmen with his variations.",
        available: true,
        price: 200
    }
];

var sum = ''


users.forEach(function (elem, idx) {
    sum = sum + `<div class="card">
    <div class="top">
        ${elem.available?'<button>available</button>':'<h1></h1>'}
        <h3>$${elem.price}/hr</h3>
    </div>
    <img src="${elem.image}" alt="">

    <h2 class="name">${elem.fullName}</h2>
    <h3 class="role">${elem.position}</h3>
    <h4 class="com">${elem.company}</h4>

    <div class="skills">
        <h4>${elem.skills[0]}</h4>
        <h4>${elem.skills[1]}</h4>
        <h4>${elem.skills[2]}</h4>
        <h5>+${elem.skills.length - 3}</h5>
    </div>
    <p>${elem.description}</p>
    <button>View Profile</button>
</div>`
})


var main = document.querySelector('#main')

main.innerHTML = sum 