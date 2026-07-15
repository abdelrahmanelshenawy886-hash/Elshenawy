// 1. قاعدة البيانات المحلية للأسئلة والأجوبة (FAQ Database)
const qaDatabase = [
  {
    qAr: "ما اسم الجامعة ونوعها؟",
    qEn: "what is the university's name and type?",
    aAr: "جامعة برج العرب التكنولوجية (BATU) — جامعة حكومية مصرية تابعة لوزارة التعليم العالي، معتمدة بالكامل.",
    aEn: "Borg El Arab Technological University (BATU) — an Egyptian Public University under the Ministry of Higher Education, fully accredited."
  },
  {
    qAr: "متى تأسست الجامعة وبدأت الدراسة فيها؟",
    qEn: "when was the university founded?",
    aAr: "صدر قانون إنشائها رقم 72 لسنة 2019، وبدأت الدراسة الفعلية في سبتمبر 2022.",
    aEn: "Founded by Law No. 72 of 2019. Actual studies commenced in September 2022 (AY 2022/2023)."
  },
  {
    qAr: "ما لغة التدريس ونظام الدراسة؟",
    qEn: "what is the language of instruction?",
    aAr: "لغة التدريس الأساسية الإنجليزية. نظام ساعات معتمدة: 60% عملي و40% نظري.",
    aEn: "English is the primary language. Credit Hours system: 60% Practical, 40% Theoretical."
  },
  {
    qAr: "ما رقم التواصل الرسمي للجامعة؟",
    qEn: "what is the official contact number?",
    aAr: "رقم التواصل الرسمي: <a href='tel:01229890060' class='faq-link'>01229890060</a>",
    aEn: "Official contact number: <a href='tel:01229890060' class='faq-link'>01229890060</a>"
  },
  {
    qAr: "ما الموقع الإلكتروني الرسمي للجامعة؟",
    qEn: "what is the official university website?",
    aAr: "الموقع الرسمي: <a href='https://batechu.com' target='_blank' rel='noopener noreferrer' class='faq-link'>batechu.com</a>",
    aEn: "Official website: <a href='https://batechu.com' target='_blank' rel='noopener noreferrer' class='faq-link'>batechu.com</a>"
  },
  {
    qAr: "ما قنوات التواصل الاجتماعي للجامعة؟",
    qEn: "what are the social media channels?",
    aAr: "<a href='https://www.facebook.com/profile.php?id=100085885038638' target='_blank' class='faq-link'>فيسبوك الجامعة</a> | <a href='https://www.facebook.com/BATUUNION' target='_blank' class='faq-link'>اتحاد الطلاب</a> | <a href='https://youtube.com/@batu1022' target='_blank' class='faq-link'>يوتيوب</a>",
    aEn: "<a href='https://www.facebook.com/profile.php?id=100085885038638' target='_blank' class='faq-link'>University Facebook</a> | <a href='https://www.facebook.com/BATUUNION' target='_blank' class='faq-link'>Student Union</a> | <a href='https://youtube.com/@batu1022' target='_blank' class='faq-link'>YouTube</a>"
  },
  {
    qAr: "ما نظام الدراسة (2+2)؟",
    qEn: "what is the 2+2 study system?",
    aAr: "سنتان للدبلوم التكنولوجي العالي + سنتان إضافيتان للبكالوريوس التكنولوجي.",
    aEn: "First 2 years lead to a High Technological Diploma; next 2 years lead to a Technological Bachelor's Degree."
  },
  {
    qAr: "ما برامج كلية تكنولوجيا الصناعة والطاقة؟",
    qEn: "what programs does the faculty of industry & energy offer?",
    aAr: "تكنولوجيا المعلومات، تكنولوجيا السكك الحديدية، تكنولوجيا الجرارات والمعدات الزراعية، تكنولوجيا الغزل والنسيج، وتكنولوجيا الصناعات الغذائية.",
    aEn: "IT, Railway Technology, Tractors & Agricultural Equipment, Textile Technology, and Food Industry Technology."
  },
  {
    qAr: "ما برنامج تكنولوجيا المعلومات؟",
    qEn: "what is the information technology program?",
    aAr: "يُركّز على البرمجة والشبكات والأمن السيبراني. وظائف التخرج: مبرمج تطبيقات، متخصص دعم تقني، مسؤول شبكات.",
    aEn: "Covers programming, networks, and cybersecurity. Jobs: Applications Programmer, IT Support Specialist, Network Administrator."
  },
  {
    qAr: "ما برامج كلية تكنولوجيا العلوم الصحية؟",
    qEn: "what programs does the faculty of health sciences offer?",
    aAr: "تكنولوجيا المختبرات الطبية، تركيبات الأسنان، الأجهزة الطبية، إدارة المعلومات الصحية، الصناعات الدوائية، والرعاية الصحية.",
    aEn: "Medical Laboratories, Dental Prosthetics, Medical Equipment, Health Information Management, Pharmaceutical Industries, Healthcare Practice."
  },
  {
    qAr: "ما حد الغياب المسموح به؟",
    qEn: "what is the allowed absence limit?",
    aAr: "يُشترط الحضور بحد أدنى 75% في المحاضرات والجلسات التطبيقية لدخول الامتحانات النهائية.",
    aEn: "A minimum of 75% attendance is mandatory to sit for final exams."
  },
  {
    qAr: "ما الرسوم الدراسية للعام 2025/2026؟",
    qEn: "what are the fees for 2025/2026?",
    aAr: "رسوم التسجيل: 15,010 جنيه. تأمين طبي (مصر للتأمين): 1,255 جنيه. مصروفات إضافية: 1,000 جنيه.",
    aEn: "Tuition Fee: 15,010 EGP. Medical Insurance: 1,255 EGP. Incidental Expenses: 1,000 EGP."
  },
  {
    qAr: "هل تتوفر منح دراسية؟",
    qEn: "are scholarships available?",
    aAr: "أفضل 5 طلاب في كل برنامج يحصلون على خصم 25%. تتوفر منح مبادرة «تكافؤ» بشراكات مع بنك QNB وصنّاع الخير.",
    aEn: "Top 5 students in each program get a 25% discount. 'Takafo' initiative scholarships via QNB Bank and Sona'a El Khair."
  }
];

// المتغيرات العامة للتنقل واللغات والتحكم
let currentLang = 'ar';

// دالة فتح الصفحات والتنقل
function openPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById('home').style.display = 'none';
  
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
  }
  
  // تهيئة المحادثة ترحيبياً عند فتح صفحة الأسئلة الشائعة لأول مرة
  if (pageId === 'faqs') {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages && chatMessages.children.length === 0) {
      appendMessage("مرحباً بك! أنا مساعدك الذكي لجامعة BATU. كيف يمكنني مساعدتك اليوم؟", "bot");
    }
  }
}

// دالة الرجوع للخلف
function back(targetPageId, currentPageId) {
  const currentPage = document.getElementById(currentPageId);
  if (currentPage) currentPage.style.display = 'none';
  
  if (targetPageId === 'home') {
    document.getElementById('home').style.display = 'flex';
  } else {
    const targetPage = document.getElementById(targetPageId);
    if (targetPage) targetPage.style.display = 'block';
  }
}

// دالة إظهار وإخفاء تفاصيل التبويبات الفرعية بالأقسام والأنشطة
function showSectionDetails(boxId) {
  const parent = document.getElementById(boxId).parentElement;
  parent.querySelectorAll('.details-box').forEach(box => {
    box.style.display = 'none';
  });
  const targetBox = document.getElementById(boxId);
  if (targetBox) {
    targetBox.style.display = 'block';
  }
}

function closeDetails(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.querySelectorAll('.details-box').forEach(box => {
      box.style.display = 'none';
    });
  }
}

// دالة عرض جدول الفرقة الدراسية
function showYearTable(dept, yearId, btn) {
  const parent = btn.parentElement.parentElement;
  parent.querySelectorAll('.year-content').forEach(content => {
    content.style.display = 'none';
  });
  const targetYear = document.getElementById(dept + '-' + yearId);
  if (targetYear) {
    targetYear.style.display = 'block';
  }
}

// تحويل اللغات بشكل بسيط وبديهي
function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  
  if (currentLang === 'ar') {
    document.getElementById('welcome').innerText = "مرحبًا بك في BATU Guide";
    document.getElementById('desc').innerText = "استكشف الجامعة والأقسام والأنشطة";
    document.getElementById('startBtn').innerText = "ابدأ";
    document.getElementById('cardUniversity').innerText = "الجامعة";
    document.getElementById('cardFaqs').innerText = "الأسئلة الشائعة";
    document.getElementById('cardActivities').innerText = "الأنشطة";
    document.getElementById('cardVirtual').innerText = "التجول الافتراضي";
    document.getElementById('chatInput').placeholder = "اكتب سؤالك هنا...";
    document.getElementById('chatSendBtn').innerText = "إرسال";
    document.getElementById('faqTitle').innerText = "المساعد الذكي لجامعة BATU";
  } else {
    document.getElementById('welcome').innerText = "Welcome to BATU Guide";
    document.getElementById('desc').innerText = "Explore the university, departments, and activities";
    document.getElementById('startBtn').innerText = "Start";
    document.getElementById('cardUniversity').innerText = "University";
    document.getElementById('cardFaqs').innerText = "FAQs";
    document.getElementById('cardActivities').innerText = "Activities";
    document.getElementById('cardVirtual').innerText = "Virtual Tour";
    document.getElementById('chatInput').placeholder = "Type your question here...";
    document.getElementById('chatSendBtn').innerText = "Send";
    document.getElementById('faqTitle').innerText = "BATU Intelligent Assistant";
  }
}

// ==================== منطق الـ Chatbot المحلي بالكامل ====================
function getLocalReply(userMessage) {
  const cleanMessage = userMessage
    .toLowerCase()
    .replace(/[؟?!.,]/g, "")
    .trim();

  const synonyms = {
    "مصاريف": ["رسوم", "مصروفات", "الرسوم", "fees"],
    "رسوم": ["مصاريف", "مصروفات", "fees"],
    "سنين": ["سنوات", "مدة", "دراسة"],
    "سنوات": ["سنين", "مدة"],
    "كلية": ["جامعة"],
    "جامعة": ["كلية"],
    "رقم": ["تليفون", "هاتف", "موبايل", "اتصال"],
    "موقع": ["ويب", "website", "site"],
    "منح": ["خصومات", "تكافؤ"],
    "غياب": ["حضور", "attendance"]
  };

  let bestMatch = null;
  let bestScore = 0;

  for (const item of qaDatabase) {

    let score = 0;

    const question =
      (item.qAr + " " + item.qEn).toLowerCase().replace(/[؟?!.,]/g, "");

    cleanMessage.split(" ").forEach(word => {

      if (word.length < 2) return;

      if (question.includes(word))
        score += 3;

      if (synonyms[word]) {
        synonyms[word].forEach(s => {
          if (question.includes(s.toLowerCase()))
            score += 3;
        });
      }

    });

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore > 0) {
    const english = /[a-zA-Z]/.test(cleanMessage);
    return english ? bestMatch.aEn : bestMatch.aAr;
  }

  return /[a-zA-Z]/.test(cleanMessage)
      ? "Sorry, I don't have an answer for that."
      : "عذراً، لا أملك إجابة لهذا السؤال حالياً.";
}

function sendChatMessage() {
  const chatInput = document.getElementById("chatInput");
  const messageText = chatInput.value.trim();

  if (messageText === "") return;

  appendMessage(messageText, "user");
  chatInput.value = "";

  const typingIndicator = appendMessage(currentLang === 'ar' ? "جاري البحث..." : "Searching...", "bot-typing");

  setTimeout(() => {
    typingIndicator.remove();
    const reply = getLocalReply(messageText);
    appendMessage(reply, "bot");
  }, 400); 
}

function appendMessage(text, sender) {
  const chatMessages = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  
  messageDiv.style.margin = "10px 15px";
  messageDiv.style.padding = "10px 15px";
  messageDiv.style.borderRadius = "12px";
  messageDiv.style.maxWidth = "75%";
  messageDiv.style.fontSize = "14px";
  messageDiv.style.lineHeight = "1.5";
  messageDiv.style.wordBreak = "break-word";

  if (sender === "user") {
    messageDiv.className = "message user-message";
    messageDiv.style.background = "#2b6cb0";
    messageDiv.style.color = "#ffffff";
    messageDiv.style.alignSelf = "flex-end";
    messageDiv.style.marginLeft = "auto";
    messageDiv.innerText = text;
  } else if (sender === "bot") {
    messageDiv.className = "message bot-message";
    messageDiv.style.background = "rgba(255, 255, 255, 0.9)";
    messageDiv.style.color = "#2d3748";
    messageDiv.style.alignSelf = "flex-start";
    messageDiv.style.marginRight = "auto";
    messageDiv.innerHTML = text;
  } else if (sender === "bot-typing") {
    messageDiv.className = "message bot-message typing";
    messageDiv.style.background = "rgba(255, 255, 255, 0.5)";
    messageDiv.style.color = "#718096";
    messageDiv.style.alignSelf = "flex-start";
    messageDiv.style.marginRight = "auto";
    messageDiv.innerText = text;
  }

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; 
  return messageDiv;
}

// تفعيل إرسال الرسالة بالضغط على زر Enter داخل صندوق الإدخال
document.getElementById("chatInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendChatMessage();
  }
});
console.log("QA Database:", qaDatabase);