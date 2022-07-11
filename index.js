const alertBox=document.getElementById("Alert");
const closeAlert=document.getElementById("CloseAlert");
closeAlert.addEventListener("click",()=>{
  alertBox.style.display = "none";
})

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const skillDiv=document.getElementById("Skills");
const ENADiv=document.getElementById("ENA");

function animate(){
  document.querySelectorAll(".seventyfive").forEach((el)=>{
    el.classList.add("seventyfiveAnimation");
  });
  document.querySelectorAll(".eighty").forEach((el)=>{
    el.classList.add("eightyAnimation");
  });
  document.querySelectorAll(".eightyfive").forEach((el)=>{
    el.classList.add("eightyfiveAnimation");
  });
  document.querySelectorAll(".ninty").forEach((el)=>{
    el.classList.add("nintyAnimation");
  });
  document.querySelectorAll(".nintyfive").forEach((el)=>{
    el.classList.add("nintyfiveAnimation");
  });
  document.querySelectorAll(".nintyseven").forEach((el)=>{
    el.classList.add("nintysevenAnimation");
  });
}

const skills=[];
skills.push({
  name:"Data Structures",
  confidence:"eighty"
});
skills.push({
  name:"Algorithms",
  confidence:"ninty"
});
skills.push({
  name:"OOPS",
  confidence:"nintyfive"
});
skills.push({
  name:"JavaScript",
  confidence:"nintyseven"
});
skills.push({
  name:"C/C++",
  confidence:"nintyseven"
});
skills.push({
  name:"HTML",
  confidence:"nintyfive"
});
skills.push({
  name:"CSS",
  confidence:"ninty"
});
skills.push({
  name:"Bootstrap/TailwindCSS",
  confidence:"nintyfive"
});
skills.push({
  name:"NodeJS/ExpressJS",
  confidence:"ninty"
});
skills.push({
  name:"EJS",
  confidence:"nintyfive"
});
skills.push({
  name:"SQL",
  confidence:"nintyfive"
});
skills.push({
  name:"Git/GitHub",
  confidence:"ninty"
});
skills.push({
  name:"Java",
  confidence:"ninty"
});
skills.push({
  name:"Front End Development",
  confidence:"nintyfive"
});
skills.push({
  name:"Google Cloud Platform",
  confidence:"ninty"
});

const actSkillDiv=skillDiv.childNodes[1].childNodes[3];
skills.forEach((val)=>{
  let sEle=document.createElement("div");
  sEle.classList.add("col-4");
  sEle.innerHTML=val.name;
  let cEle=document.createElement("div");
  cEle.classList.add("col-8");
  cEle.innerHTML=`<div class="confidance ${val.confidence}"></div>`;
  actSkillDiv.appendChild(sEle);
  actSkillDiv.appendChild(cEle);
})

const projects=[];
projects.push({
  header: 'DNS Server Web Application',
  timeline: 'April 2022',
  image: {link:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ICloud_logo.svg/2560px-ICloud_logo.svg.png', sizeClass:'ENA-logo'},
  description: 'Developed a DNS Server Web Application that interacts with an mysql database for querying and maintaining DNS records. Tech Stack used: HTML, TailwindCSS, Javascript, EJS, Nodejs, ExpressJS, mysql and npm.',
  buttons:[{name:'View Code',link:'https://github.com/naman-luthra/DNS-Server'}]
});
projects.push({
  header: 'Track My Health Project',
  timeline: 'March-April 2022',
  image: {link:'images/trackMyHealth.png', sizeClass:'ENA-logo'},
  description: 'Working as a full stack developer on building a health monitoring web application. Used Nodejs and Expressjs to build a authentication and login-session creation server. Used Tailwind CSS and some js frameworks like chartjs and cryptojs to build the front end data visualing part of the website. Used electron js to make a cross desktop application for the web-app.',
  buttons:[{name:'In Progress',link:'',disabled:true}]
});
projects.push({
  header: 'Retro Game Project',
  timeline: 'January 2022',
  image: {link:'images/snake.png', sizeClass:'ENA-logo-xs'},
  description: 'Built more javascript focused small websites for playing retro games like the simon game and the very popular snake game. During development of these websites, I gained more practical experince in javascript.',
  buttons:[{name:'Snake Game',link:'https://snake-game.namanluthra1.repl.co'},
          {name:'Simon Game',link:'https://simongame.namanluthra1.repl.co'}]
});
projects.push({
  header: 'Personal Website Project',
  timeline: 'November 2021',
  image: {link:'images/favicon.png', sizeClass:'ENA-logo'},
  description: `Built a personal website using knowledge of front-end web development which included HTML, CSS, Bootstrap, and JavaScript. I hosted this website on Github pages. During this project's development process, I learnt about maintaning and updating a project's codebase on Git/GitHub and the system of commits and pull-requests on Github.`,
  buttons:[{name:'View Project',link:'https://www.namanluthra.repl.co/'}]
});
projects.push({
  header: 'Virtual Experience Program',
  timeline: 'November 2021',
  image: {link:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1200px-Goldman_Sachs.svg.png', sizeClass:'ENA-logo'},
  description: `Attended Engineering Virtual Experience program by Goldman Sachs. Learnt a lot about hashing, password cracking, cyber security and online password cryptography. Decoded MD5 hashes using Hashcat and learnt about password-cracking methods used by Crackers which made me realise the significance of strong password keeping practices.`,
  buttons:[{name:'View Certificate',link:'https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_iSWAqTWqJnxWNwSRc_1636137071679_completion_certificate.pdf"'}]
});
projects.push({
  header: 'Commercial Website Project',
  timeline: 'October-November 2021',
  image: {link:'images/khuranaAgro.png', sizeClass:'ENA-logo-xs'},
  description: `Collaborated with a peer to build and deploy a commercial website for an agro based company using Google cloud's knowledge for hosting and HTML, CSS and Bootstrap for Website design and Development. Meanwhile also learning best software development practices to follow in order to efficiently work in a collaborative enviornment.`,
  buttons:[{name:'View Project',link:'https://www.khuranaagro.com'}]
});
projects.push({
  header: 'Global Coding Challange 2021',
  timeline: 'October 2021',
  image: {link:'https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_pxwnhw9n/def_height/2700/def_width/2700/version/100012/type/1', sizeClass:'ENA-logo-xs'},
  description: `Attained a position in top 5% while solving 9/9 Problems in Credit Suisse's Global Coding Challenge 3.0 in October 2021. Learned about real world application of Data Structures and Algorithms. Solved problems related to Finance thereby learning about intersection of technology with different disciplines such as finance.`,
  buttons:[{name:'View Code',link:'https://drive.google.com/drive/folders/1fX6-u76ZVP6kOrEe9QBOcPZfc35mzIbe?usp=sharing'}]
});
projects.push({
  header: '30 Days of Google Cloud',
  timeline: 'October 2021',
  image: {link:'https://p2zk82o7hr3yb6ge7gzxx4ki-wpengine.netdna-ssl.com/wp-content/uploads/Untitled-design-90.png', sizeClass:'ENA-logo-xs'},
  description: `Completed Cloud Engineering Track and Data Science & Machine Learning Track in 30 Days of Google Cloud Program 2021. Google's 30 Days of Cloud was a great learning experience. It was exciting to learn about how millions of web applications that we use daily are deployed in the cloud. This knowledge allowed me to host a website using apache2 on GCP. I also used GCP's Cloud DNS API and Maps API in this project. I look forward to learn more about Cloud Computing, Machine Learning and Data Science.`,
  buttons:[{name:'View Badges',link:'https://www.qwiklabs.com/public_profiles/c28c41da-e589-4c80-aca0-018c99e27977'}]
});


const actENADiv=ENADiv.childNodes[1].childNodes[3];
projects.forEach((val)=>{
  let ele=document.createElement("div");
  ele.classList.add("col-md-6");
  let iHTML=`<div class="card text-center">
        <div class="card-header">
          ${val.header}
        </div>
        <div class="card-footer text-muted">
          ${val.timeline}
        </div>
        <div class="card-body">
          <img src="${val.image.link}" class="${val.image.sizeClass} card-img-top" alt="...">
          <p class="card-text">${val.description}</p>`;
  val.buttons.forEach((but)=>{
    iHTML+=`<a href="${but.link}" target="_blank" class="btn btn-primary">${but.name}</a> `;
  });
  iHTML+=`</div>
      </div>`;
  ele.innerHTML=iHTML;
  actENADiv.appendChild(ele);
});

let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let prevRatio = 0.0;
window.addEventListener("load", (event) => {
  for(let i=2;i<=2*skills.length;i+=2){
  createObserver(actSkillDiv.childNodes[i]);
  }
}, false);

function createObserver(dive) {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.8]
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(dive);
}

function handleIntersect(entries, observer) {
  if(entries[0].intersectionRatio>0.8){
    console.log(entries[0].target.childNodes[0].classList);
    let per=entries[0].target.childNodes[0].classList[1];
    entries[0].target.childNodes[0].classList.add(`${per}Animation`);
  }
  else{
    let per=entries[0].target.childNodes[0].classList[1];
    entries[0].target.childNodes[0].classList.toggle(`${per}Animation`);
  }
}