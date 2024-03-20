// JS for projects
var projects = [
    {
    name: 'Mychat',
    image: './images/chatbot.PNG',
    desc: 'This is a chatbot that can be used to research all kinds of topics, built.',
    github: 'https://github.com',
    site: 'https://github.com'
    },
    {
    name: "Les Chevres",
    image:'./images/restu.PNG',
    desc: 'This is a website for Les Chèvres, a french restaurant in France.',
    github: 'https://github.com',
    site: 'https://github.com'
    },
    {
        name: "My Portfolio",
        image:'./images/portfolio.PNG',
        desc: 'This is my developer portfolio',
        github: 'https://github.com/BulelaG/portfolio2024',
        site: 'https://github.com'

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




    num++;
    if(num >= projects.length) {
        num = 0;
    }
       // Display the testimonial data
    //    document.getElementById('testimonial-name').textContent = testimonial.name;
    //    document.getElementById('testimonial-image').src = testimonial.image;
    //    document.getElementById('testimonial-text').textContent = testimonial.text;
    slider.src = projects[num].image;
    p_name.innerHTML = projects[num].name;
    p_desc.innerHTML = projects[num].desc;
    p_github.innerHTML = projects[num].github;
    p_site.innerHTML = projects[num].site;
    


}
function prev() {
    var slider = document.getElementById('slider');
    var p_name = document.getElementById('p_name');
    var p_desc = document.getElementById('desc');
    var p_github = document.getElementById('github');
    var p_site = document.getElementById('site');

    num--;
    if(num < 0) {
        num = projects.length-1;
    }
    slider.src = projects[num].image;
    p_name.innerHTML = projects[num].name;
    p_desc.innerHTML = projects[num].desc;
    p_github.href = projects[num].github;
    p_site.href = projects[num].site;


}