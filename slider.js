// JS for projects
var projects = [
    {
        name: 'Mychat',
        image: './images/chatbot.PNG',
        desc: 'MyChat is an advanced chatbot designed to assist users in conducting research on various topics. With its natural language processing capabilities, it can understand user queries and provide relevant information from trusted sources. Whether you need to  delve into academic research, or get personalized recommendations, MyChat is your go-to virtual assistant.',
        github: 'https://github.com/BulelaG/chatbot',
        // techstack: "HTML, CSS, and JavaScript"
        site: 'https://mycht.netlify.app'
    },

   
    {
        name: "My Portfolio",
        image:'./images/portfolio.PNG',
        desc: 'Welcome to my developer portfolio! Here you will find a showcase of my projects, skills, and experiences in the world of software development. From web applications to multimedia designs, I have a passion for building innovative solutions that make a difference. Dive into my portfolio to explore my work and get to know more about me as a developer.',
        github: 'https://github.com/BulelaG/portfolio2024',
        // techstack: "HTML, CSS, and JavaScript"
        site: 'https://bulela24.netlify.app/'
    },
    {
        name: "Bank Portal App",
        image:'./images/Bank.PNG',
        desc: 'The Bank Portal App is a comprehensive banking solution that empowers users to manage their finances with ease and security. From creating accounts to conducting transactions, this platform offers a seamless banking experience. With robust features such as account balance tracking, fund transfers, and transaction history, users can stay in control of their finances anytime, anywhere.',
        github: 'https://github.com/BulelaG/bank_python.git',
        site: '(not hosted)',
        // techstack:"Python & Tnker"
    },
    {
        name: "Les Chevres",
        image:'./images/restu.PNG',
        desc: 'Les Chèvres is a beautifully crafted website dedicated to showcasing the exquisite offerings of a French restaurant. From delectable culinary creations to an ambiance that exudes warmth and elegance, this website provides a tantalizing glimpse into the world of fine dining. Explore the menu, make reservations, and immerse yourself in the culinary delights that Les Chèvres has to offer.',
        github: 'https://github.com/BulelaG/resturant',
        // techstack:"HTML, CSS, and JavaScript" 
        site: 'https://leschevres.netlify.app'
    },
    {
        name: "Unit Converter",
        image:'./images/Unit_converter.PNG',
        desc: 'The Unit Converter is a handy tool designed to simplify the process of converting between different units of measurement. With support for a wide range of unit types and easy-to-use interface, performing conversions has never been easier. Say goodbye to complex calculations',
        github: 'https://github.com/BulelaG/Java/tree/main/unitConverter',
        // techstack: "Java and Swing"
        site: '(not hosted)'
    }
];

var num = 0;
function next() {
    let project = projects[num];

    var slider = document.getElementById('slider');
    var p_name = document.getElementById('p_name');
    var p_desc = document.getElementById('desc');
    var p_github = document.getElementById('github');
    var p_site = document.getElementById('site');
    // var p_stack = document.getElementById('stack');





    num++;
    if(num >= projects.length) {
        num = 0;
    }
       // Display the project data
   
    slider.src = projects[num].image;
    p_name.innerHTML = projects[num].name;
    p_desc.innerHTML = projects[num].desc;
    p_github.innerHTML = projects[num].github;
    p_site.innerHTML = projects[num].site;
    // p_stack.src = projects[num].techstack;

    


}
function prev() {
    var slider = document.getElementById('slider');
    var p_name = document.getElementById('p_name');
    var p_desc = document.getElementById('desc');
    var p_github = document.getElementById('github');
    var p_site = document.getElementById('site');
    // var p_stack = document.getElementById('stack');


    num--;
    if(num < 0) {
        num = projects.length-1;
    }
    slider.src = projects[num].image;
    p_name.innerHTML = projects[num].name;
    p_desc.innerHTML = projects[num].desc;
    p_github.href = projects[num].github;
    p_site.href = projects[num].site;
    // p_stack.src = projects[num].techstack;


}