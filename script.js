document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeBtn = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotIcon = document.getElementById("chatbot-icon");

    


    const knowledgeBase = {
    
        "hello": "👋 Hello! How can I help you about ILIA or ENSAF?",
        "hi": "👋 Hi there! Do you want to know about ILIA program, courses, jobs or salaries?",
        "thanks": "🙏 You're welcome! Happy to help.",
        "thank you": "🙏 You're welcome! Let me know if you have more questions.",

    
        "ilia": "ILIA means *Software Engineering and Artificial Intelligence* program at ENSA Fès.",
        "ilia program": "ILIA trains engineers in software development, AI, cloud, big data, and modern IT systems.",
        "duration": "The ILIA program lasts **5 years**: 2 preparatory years + 3 engineering cycle years.",
        "degree": "At the end, you get an **Engineering Diploma in Software Engineering & AI**.",
        "objectives": "The goal is to create engineers with strong skills in programming, AI, and advanced IT systems.",
        "skills": "You gain skills in: programming, machine learning, software architecture, databases, cloud, big data, IoT, and project management.",
        "subjects": "Main subjects: programming (C, Java, Python), data structures, AI, ML, deep learning, cloud computing, distributed systems, software engineering, databases, web & mobile development.",
        "languages": "Programming languages taught: C, C++, Java, Python, JavaScript, SQL.",
        "ai": "AI modules include: machine learning, deep learning, computer vision, natural language processing (NLP), and robotics basics.",
        "projects": "Students work on real projects in software engineering and AI, often in partnership with companies.",
        "internship": "Internships are mandatory in 2nd, 3rd and 5th year, usually in IT companies or research labs.",
        "research": "Research domains: artificial intelligence, big data, cloud systems, optimization, cybersecurity, and IoT.",

        
        "ensaf": "ENSA Fès is a Moroccan engineering school. It offers programs in computer science, networks, AI, and embedded systems.",
        "ensaf location": "ENSA Fès is located in Fès, Morocco, near the University Sidi Mohamed Ben Abdellah.",
        "ensaf admission": "Admission requires passing national exams after high school or preparatory classes.",

        
        "jobs": "With ILIA, you can work as: Software Engineer, AI Engineer, Data Scientist, Cloud Engineer, DevOps, Mobile Developer, IT Consultant.",
        "salaries": "💰 Average salaries in Morocco: \n- Software Engineer: 8,000–12,000 MAD/month\n- Data Scientist: 10,000–18,000 MAD/month\n- AI Engineer: 12,000–20,000 MAD/month\n- Cloud/DevOps Engineer: 10,000–18,000 MAD/month.\n💼 Abroad, salaries are higher (ex: €40k–70k/year in Europe).",
        "career": "Graduates often join international companies, startups, or pursue PhD in AI/Computer Science.",

        
        "club": "ILIA has student clubs for coding, AI, robotics, and entrepreneurship.",
        "events": "Clubs organize hackathons, coding competitions, AI workshops, and seminars with industry experts.",
        "soft skills": "ILIA also helps develop soft skills like teamwork, leadership, communication, and project management.",

        
        "default": "❓ You can ask me about ILIA program, ENSAF, courses, jobs, or salaries."
    };

    
    chatbotIcon.addEventListener("click", () => {
        chatbotContainer.classList.remove("hidden");
        chatbotIcon.style.display = "none";
    });

    
    closeBtn.addEventListener("click", () => {
        chatbotContainer.classList.add("hidden");
        chatbotIcon.style.display = "flex";
        chatbotMessages.innerHTML = "";
    });

    
    sendBtn.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (!userMessage) return;

        appendMessage("user", userMessage);
        chatbotInput.value = "";

        const botReply = getBotReply(userMessage.toLowerCase());
        appendMessage("bot", botReply);
    }

    
    function getBotReply(message) {
        for (let key in knowledgeBase) {
            if (key !== "default" && message.includes(key)) {
                return knowledgeBase[key]; 
            }
        }
        return knowledgeBase["default"];
    }

    function appendMessage(sender, message) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", sender);
        msgDiv.textContent = message;
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }


const btn1 = document.querySelector(".choise1");
const btn2 = document.querySelector(".choise2");
const btn3 = document.querySelector(".choise3");

const year1 = document.querySelector(".year1");
const year2 = document.querySelector(".year2");
const year3 = document.querySelector(".year3");

btn1.addEventListener("click", () => {
    year1.classList.add("active");
    year2.classList.remove("active");
    year3.classList.remove("active");
});

btn2.addEventListener("click", () => {
    year2.classList.add("active");
    year1.classList.remove("active");
    year3.classList.remove("active");
});

btn3.addEventListener("click", () => {
    year3.classList.add("active");
    year1.classList.remove("active");
    year2.classList.remove("active");
});

const buttons = document.querySelectorAll(".choises button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active-btn"));
        btn.classList.add("active-btn");
    });
});

});




let typed = new Typed(".multiple-text", {
 strings: ["Développeur Logiciels", "Ingénieur en IA ", "Architecte Logiciel", "Consultant en IT", "Data Scientist", "Développeur Web", "Ingénieur DevOps", "Entrepreneur en IT", "Chercheur en IT"],
 typeSpeed: 80,
 backSpeed: 60,
 backDelay: 1500,
 loop: true
});


let typedd = new Typed(".ilia", {
 strings: ["ILIA"],
 typeSpeed: 120,
 backSpeed: 120,
 backDelay: 3000,
 loop: true
});




const clickSound = document.getElementById("click-sound");
const bttn = document.querySelectorAll(".nav-link");
const chatbotIconn = document.getElementById("chatbot-icon");
const closeBtnn = document.getElementById("close-btn");
const sendBtnn = document.getElementById("send-btn");
const choisebutton = document.querySelectorAll(".choises");
const btnnn = document.querySelectorAll(".hero-cta");
clickSound.volume = 1.0;

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar"); 

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("activE");
  navbar.classList.toggle("activE"); 
  clickSound.play();
});



bttn.forEach(btn => {
    btn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

chatbotIconn.addEventListener("click", () => {
      clickSound.currentTime = 0;
        clickSound.play();
});

closeBtnn.addEventListener("click", () => {
     clickSound.currentTime = 0;
        clickSound.play();
});

sendBtnn.addEventListener("click", () => {  
    clickSound.currentTime = 0;
        clickSound.play(); 
});

choisebutton.forEach(btn => {
    btn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

btnnn.forEach(btn => {
    btn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});



function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');

    
    const navbar = document.querySelector(".nav.container");

    if (pageId === "courses") {
        navbar.classList.add("courses-page");
    } else {
        navbar.classList.remove("courses-page");
    }
}







var clubContent = {
    activities: [],
    projects: [],
    gallery: []
};


document.addEventListener('DOMContentLoaded', function() {
    // Charger le contenu existant depuis le localStorage si présent
    var savedContent = localStorage.getItem('clubILIAContent');
    if (savedContent) {
        try {
            clubContent = JSON.parse(savedContent);
        } catch (e) {
            console.error('Erreur parsing localStorage :', e);
        }
    }

    
    var contentTypeSelect = document.getElementById('content-type');
    if (contentTypeSelect) {
        contentTypeSelect.addEventListener('change', function() {
            var type = this.value;
            var fileInput = document.getElementById('content-image');
            var fileInfo = document.getElementById('file-type-info');

            if (fileInput && fileInfo) {
                if (type === 'gallery') {
                    fileInput.accept = 'image/*';
                    fileInput.multiple = false;
                    fileInfo.textContent = 'Images seulement (JPEG, PNG, etc.)';
                } else {
                    fileInput.accept = '/';
                    fileInfo.textContent = 'Tous types de fichiers acceptés';
                }
            }
        });
    }
});


function addContent() {
    var typeElement = document.getElementById('content-type');
    var titleElement = document.getElementById('content-title');
    var descElement = document.getElementById('content-desc');
    var fileInput = document.getElementById('content-image');
    var loader = document.getElementById('loader');

    if (!typeElement || !fileInput) return;

    var type = typeElement.value; 
    var title = titleElement.value || 'Sans titre';
    var description = descElement.value || 'Aucune description';

    if (!fileInput.files[0]) {
        alert('Veuillez sélectionner un fichier !');
        return;
    }

    var file = fileInput.files[0];

    if (type === 'gallery' && !file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image pour la galerie !');
        return;
    }

    if (loader) loader.style.display = 'block';

    var reader = new FileReader();
    reader.onload = function(e) {
        var newItem = {
            id: Date.now(),
            title: title,
            description: description,
            file: e.target.result,
            fileName: file.name,
            fileType: file.type,
            date: new Date().toLocaleDateString('fr-FR'),
            isImage: file.type.startsWith('image/')
        };

        // Ajouter à la catégorie correspondante
        clubContent[type + 's'].push(newItem);

        // Sauvegarder dans le localStorage
        localStorage.setItem('clubILIAContent', JSON.stringify(clubContent));

        if (loader) loader.style.display = 'none';

    
        titleElement.value = '';
        descElement.value = '';
        fileInput.value = '';

        alert('Contenu ajouté avec succès !');

        
        if (type === 'activity') renderActivities();
        if (type === 'project') renderProjects();
        if (type === 'gallery') renderGallery();
    };

    reader.onerror = function() {
        if (loader) loader.style.display = 'none';
        alert('Erreur lors de la lecture du fichier');
    };

    reader.readAsDataURL(file);
}

function renderActivities() {
    var container = document.getElementById('activities-container');
    if (!container) return;

    var html = '';
    clubContent.activities.forEach(activity => {
        html += `<div class="gris card">
                    ${activity.isImage ? `<img src="${activity.file}" alt="${escapeHtml(activity.title)}">` : ''}
                    <div class="card-content">
                        <h3><i class="fas fa-calendar-alt"></i> ${escapeHtml(activity.title)}</h3>
                        <p>${escapeHtml(activity.description)}</p>
                    </div>
                 </div>`;
    });

    if (!html) container.innerHTML = '<p class="empty-message">Aucune activité ajoutée.</p>';
    else container.innerHTML = html;
}

function renderProjects() {
    var container = document.getElementById('projects-container');
    if (!container) return;

    var html = '';
    clubContent.projects.forEach(project => {
        html += `<div class="gris card">
                    ${project.isImage ? `<img src="${project.file}" alt="${escapeHtml(project.title)}">` : ''}
                    <div class="card-content">
                        <h3><i class="fas fa-project-diagram"></i> ${escapeHtml(project.title)}</h3>
                        <p>${escapeHtml(project.description)}</p>
                    </div>
                 </div>`;
    });

    if (!html) container.innerHTML = '<p class="empty-message">Aucun projet ajouté.</p>';
    else container.innerHTML = html;
}

function renderGallery() {
    var container = document.getElementById('gallery-container');
    if (!container) return;

    var html = '';
    clubContent.gallery.forEach(item => {
        html += `<div class="gallery-item">
                    <img src="${item.file}" alt="${escapeHtml(item.title)}">
                    <div class="gallery-overlay">
                        <h3>${escapeHtml(item.title)}</h3>
                        <p>${escapeHtml(item.description)}</p>
                    </div>
                 </div>`;
    });

    if (!html) container.innerHTML = '<p class="empty-message">Aucune photo ajoutée.</p>';
    else container.innerHTML = html;
}

function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/*
window.addEventListener('load', () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}); */


