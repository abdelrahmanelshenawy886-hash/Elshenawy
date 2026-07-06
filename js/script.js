// ==========================================
// 1. نظام التوقيت والتحقق والتحكم في شاشات تسجيل الدخول
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // إخفاء الـ navbar والـ home مؤقتاً للتأكد من عدم ظهورهم قبل تسجيل الدخول
    if(document.querySelector(".navbar")) document.querySelector(".navbar").style.display = "none";
    if(document.getElementById("home")) document.getElementById("home").style.display = "none";

    // بعد 3 ثواني، إخفاء شاشة الترحيب وإظهار شاشة الدخول
    setTimeout(() => {
        if(document.getElementById("welcome-screen")) document.getElementById("welcome-screen").style.display = "none";
        if(document.getElementById("auth-screen")) document.getElementById("auth-screen").style.display = "flex";
    }, 3000);
});

// التبديل بين شاشتي الدخول والتسجيل
function toggleAuthBoxes(target) {
    if (target === 'signup') {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("signup-box").style.display = "block";
    } else {
        document.getElementById("signup-box").style.display = "none";
        document.getElementById("login-box").style.display = "block";
    }
}

// دالة إنشاء الحساب وحفظه في الـ localStorage
function handleSignUp() {
    const user = document.getElementById("signup-user").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const pass = document.getElementById("signup-pass").value.trim();

    if (!user || !email || !pass) {
        alert("برجاء ملء جميع الحقول المطلوبة!");
        return;
    }

    let registeredUsers = JSON.parse(localStorage.getItem("batu_users")) || [];
    const userExists = registeredUsers.some(u => u.username.toLowerCase() === user.toLowerCase());
    
    if (userExists) {
        alert("اسم المستخدم هذا مسجل بالفعل!");
        return;
    }

    registeredUsers.push({ username: user, email: email, password: pass });
    localStorage.setItem("batu_users", JSON.stringify(registeredUsers));

    alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
    toggleAuthBoxes('login');
}

// دالة تسجيل الدخول التي تقوم بفتح بقية شاشات مشروعك الأصلي
function handleLogin() {
    const userInp = document.getElementById("login-user").value.trim();
    const passInp = document.getElementById("login-pass").value.trim();

    if (!userInp || !passInp) {
        alert("برجاء إدخال اسم المستخدم وكلمة المرور!");
        return;
    }

    let registeredUsers = JSON.parse(localStorage.getItem("batu_users")) || [];
    const validUser = registeredUsers.find(u => 
        (u.username.toLowerCase() === userInp.toLowerCase() || u.email.toLowerCase() === userInp.toLowerCase()) 
        && u.password === passInp
    );

    if (validUser) {
        // إخفاء شاشة التسجيل
        document.getElementById("auth-screen").style.display = "none";
        
        // إظهار أجزاء تطبيقك الأصلي بالكامل وتفعيل الـ flex والتصميم الداكن
        if(document.querySelector(".navbar")) document.querySelector(".navbar").style.display = "flex";
        
        const homeSection = document.getElementById("home");
        if(homeSection) {
            homeSection.style.display = "flex"; 
            homeSection.classList.add("active");
        }
        
        // رسالة ترحيبية مخصصة داخل الشات بوت باسم المستخدم لتنال إعجاب دكتور المادة
        if(document.getElementById("chatMessages")) {
            initChat();
            addChatBubble(`أهلاً بك يا <b>${validUser.username}</b>! استمتع بجولتك الذكية في جامعة برج العرب.`, "bot");
        }
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
}

// --- 2. دوال التنقل المحدثة لملائمة الكود الجديد ---
function openPage(id) {
    // إخفاء الـ home وجميع الـ pages الأخرى أولاً
    if(document.getElementById("home")) document.getElementById("home").style.display = "none";
    document.querySelectorAll(".page").forEach(page => {
        if(page.id !== "auth-screen") page.style.display = "none";
    });
    
    // إظهار الصفحة المطلوبة حسب نوع الـ layout الخاص بها
    const targetPage = document.getElementById(id);
    if(targetPage) {
        if(id === 'home') {
            targetPage.style.display = "flex";
        } else {
            targetPage.style.display = "block";
        }
    }
    if (id === 'faqs' && document.getElementById("chatMessages").children.length === 0) initChat();
}

function back(open, current) {
    const currentEl = document.getElementById(current);
    if(currentEl) currentEl.style.display = "none";
    
    const openEl = document.getElementById(open);
    if (openEl) { 
        if (open === "home") { 
            openEl.style.display = "flex"; 
        } else { 
            openEl.style.display = "block"; 
        } 
    }
}

let currentLang = "ar";
let conversation = [];
let isProcessing = false;

const translations = {
  ar: {
    welcome: "مرحبًا بك في BATU Guide",
    desc: "استكشف الجامعة والأقسام والأنشطة",
    startBtn: "ابدأ",
    cardUniversity: "الجامعة",
    cardFaqs: "الأسئلة الشائعة",
    cardActivities: "الأنشطة",
    cardVirtual: "التجول الافتراضي",
    faqTitle: "المساعد الذكي لجامعة BATU"
  },

  en: {
    welcome: "Welcome to BATU Guide",
    desc: "Explore the university, departments and activities",
    startBtn: "Start",
    cardUniversity: "University",
    cardFaqs: "FAQs",
    cardActivities: "Activities",
    cardVirtual: "Virtual Tour",
    faqTitle: "BATU AI Assistant"
  }
};

const CONFIG = {
    SUGGESTIONS_AR: ["ما هي تخصصات الجامعة؟", "ما هي المصروفات؟", "ما هو رقم التواصل؟"],
    SUGGESTIONS_EN: ["What are the specializations?", "What are the fees?", "What is the contact number?"]
};

// --- 2. دوال التنقل الأصلية ---
function showSectionDetails(contentId) {
    const targetBox = document.getElementById(contentId);
    const isAlreadyOpen = targetBox.style.display === "block";
    targetBox.closest('.info').querySelectorAll('.details-box').forEach(box => box.style.display = "none");
    if (!isAlreadyOpen) targetBox.style.display = "block";
}

function showYearTable(departmentPrefix, yearKey, buttonElement) {
    const targetSection = document.getElementById(`${departmentPrefix}-subjects`);
    targetSection.querySelectorAll('.year-content').forEach(content => content.style.display = "none");
    targetSection.querySelectorAll('.year-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${departmentPrefix}-${yearKey}`).style.display = "block";
    buttonElement.classList.add('active');
}

function closeDetails(pageId) {
    const page = document.getElementById(pageId);
    page.querySelectorAll('.details-box').forEach(box => box.style.display = "none");
    page.querySelectorAll('.year-content').forEach(content => content.style.display = "none");
    page.querySelectorAll('.year-btn').forEach(btn => btn.classList.remove('active'));
}

function openPage(id) {
    document.getElementById("home").style.display = "none";
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.getElementById(id).style.display = "block";
    if (id === 'faqs' && document.getElementById("chatMessages").children.length === 0) initChat();
}

function back(open, current) {
    document.getElementById(current).style.display = "none";
    if (open === "home") { document.getElementById("home").style.display = "flex"; }
    else { document.getElementById(open).style.display = "block"; }
}

// --- 3. منطق الشات بوت الذكي ---
function initChat() {
    const messagesContainer = document.getElementById("chatMessages");
    messagesContainer.innerHTML = "";
    const welcomeMsg = currentLang === "ar" ? "👋 مرحباً! كيف يمكنني مساعدتك اليوم؟" : "👋 Welcome! How can I help you today?";
    addChatBubble(welcomeMsg, "bot");
    renderChips();
}

function renderChips() {
    const chipsContainer = document.getElementById("suggestionsBox");
    chipsContainer.innerHTML = "";
    const list = currentLang === "ar" ? CONFIG.SUGGESTIONS_AR : CONFIG.SUGGESTIONS_EN;
    list.forEach(txt => {
        const chip = document.createElement("div");
        chip.className = "suggest-chip";
        chip.innerText = txt;
        chip.onclick = () => { document.getElementById("chatInput").value = txt; sendChatMessage(); };
        chipsContainer.appendChild(chip);
    });
}

function addChatBubble(text, sender, isHTML = true) {
    const messagesContainer = document.getElementById("chatMessages");
    const row = document.createElement("div");
    row.className = `msg-row ${sender}`;
    const bubble = document.createElement("div");
    bubble.className = "msg-bubble";
    if (isHTML) bubble.innerHTML = text; else bubble.innerText = text;
    row.appendChild(bubble);
    messagesContainer.appendChild(row);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return bubble;
}

async function sendChatMessage() {
    if (isProcessing) return;

    const inputEl = document.getElementById("chatInput");
    const prompt = inputEl.value.trim();
    if (!prompt) return;

    addChatBubble(prompt, "user", false);
    inputEl.value = "";

    const loadingBubble = addChatBubble("...", "bot", true);
    isProcessing = true;

    try {

        const response = await fetch("http://localhost:3000/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt
            })
        });

        const data = await response.json();

        loadingBubble.innerHTML = data.reply;

    } catch (error) {

        loadingBubble.innerHTML = "❌ تعذر الاتصال بالخادم.";

    }

    isProcessing = false;
}

function toggleLang() {

    currentLang = currentLang === "ar" ? "en" : "ar";

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    const t = translations[currentLang];

    for (let id in t) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = t[id];
        }
    }

    initChat();
}