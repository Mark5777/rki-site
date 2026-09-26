// =====================================================================
// ВСЕ ТЕКСТЫ САЙТА — ЗДЕСЬ.
// Меняй только то, что в кавычках. Всё в [квадратных скобках] — заготовки,
// их обязательно нужно заменить на настоящие данные.
// =====================================================================

export const site = {
  // Название в шапке и подвале
  name: "Russian with Maria",
  email: "hello@example.com",

  // Заголовок вкладки браузера и описание для Google
  meta: {
    title: "Russian with Maria — learn Russian from zero",
    description:
      "A 12-week online course that takes you from the Russian alphabet to simple everyday conversations.",
  },

  // Пункты меню. href — это id раздела на странице
  nav: [
    { label: "Programme", href: "#programme" },
    { label: "How it works", href: "#method" },
    { label: "Plans", href: "#plans" },
    { label: "About me", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],

  // ---------- Первый экран ----------
  hero: {
    greeting: "Привет!",
    title: "Learn Russian from the very first letter",
    subtitle:
      "A 12-week course that takes you from the alphabet to simple everyday conversations, one clear step at a time.",
    primaryCta: "Choose a plan",
    secondaryCta: "See the programme",
    note: "Next group starts on [date]. Enrolment opens on [date].",
    // Тетрадная страница справа
    notebook: {
      date: "Двенадцатое октября",
      heading: "Классная работа",
      lines: ["Привет!", "Меня зовут Анна.", "Я из Италии.", "Я учу русский."],
      praise: "Молодец!",
      grade: "5",
    },
  },

  // ---------- Полоса под первым экраном ----------
  highlights: [
    { title: "Start the day you join", text: "Week 1 opens right after you enrol." },
    { title: "One week at a time", text: "A new block opens every week, so you never face everything at once." },
    { title: "Everything in one place", text: "Lessons, materials and homework on one platform." },
    { title: "A group chat", text: "Weekly tasks and support, so you are not learning alone." },
  ],

  // ---------- Проблемы ----------
  problems: {
    title: "Starting Russian can feel overwhelming",
    intro: "Russian is not impossible. Learning it without a clear plan is what makes it hard.",
    items: [
      {
        title: "You don't know where to start",
        text: "Alphabet, vocabulary, grammar, verbs — so much at once that you keep jumping between them.",
      },
      {
        title: "You know words, but not sentences",
        text: "You recognise привет and спасибо, but can't put words together when you want to say something.",
      },
      {
        title: "The grammar looks scary",
        text: "Cases, endings, verb forms. One table of forms and it feels like too much to remember.",
      },
      {
        title: "You study, but don't move forward",
        text: "Apps, videos, word lists — yet no clear idea of what comes next or how it all fits.",
      },
    ],
  },

  // ---------- Как устроен курс ----------
  method: {
    title: "How the course works",
    intro: "[Коротко: чем этот курс отличается от приложений и видео на YouTube.]",
    items: [
      {
        icon: "path",
        title: "One clear order",
        text: "Every week builds on the one before. You always know what to do next.",
      },
      {
        icon: "chat",
        title: "You speak from week one",
        text: "Exercises, tasks in the chat and homework with feedback — not just watching videos.",
      },
      {
        icon: "memory",
        title: "Made to be remembered",
        text: "Words and grammar come back on purpose, linked to what you already know.",
      },
    ],
  },

  // ---------- Программа по неделям ----------
  outcomes: {
    title: "What you'll be able to do",
    intro: "Twelve weeks, twelve practical steps — from your first words to simple conversations.",
    items: [
      { skill: "Read Russian and introduce yourself", example: "Привет! Меня зовут…" },
      { skill: "Talk about yourself and others", example: "Кто он? Она врач." },
      { skill: "Say what you have and where things are", example: "У меня есть… Где…?" },
      { skill: "Describe your everyday life", example: "Я работаю, я читаю." },
      { skill: "Order food and ask about prices", example: "Сколько стоит?" },
      { skill: "Talk about your family", example: "У меня есть брат." },
      { skill: "Describe your home", example: "Здесь кухня. Там окно." },
      { skill: "Talk about yesterday and tomorrow", example: "Вчера я был дома." },
      { skill: "Get around a city", example: "Я иду… Куда?" },
      { skill: "Say what you like and want", example: "Мне нравится… Я хочу…" },
      { skill: "Say how you feel", example: "Мне холодно." },
      { skill: "Have simple conversations", example: "Как дела? Что ты делаешь?" },
    ],
  },

  // ---------- Тарифы ----------
  plans: {
    title: "Choose how you want to learn",
    intro: "The same programme with different levels of support.",
    items: [
      {
        name: "Solo",
        price: "€75",
        perMonth: "or €25 a month",
        featured: false,
        badge: "",
        features: [
          "All 12 weekly lessons",
          "2 bonus lessons: handwriting and reading",
          "Group chat with weekly tasks",
          "4 months of platform access",
        ],
        cta: "Join the waiting list",
        note: "For learning on your own",
      },
      {
        name: "Group",
        price: "€199",
        perMonth: "or €66 a month",
        featured: true,
        badge: "Most popular",
        features: [
          "Everything in Solo",
          "Homework checked with personal feedback",
          "6 live group lessons, [день], 1.5 hours",
          "5 months of platform access",
          "12 places",
        ],
        cta: "Join the waiting list",
        note: "For a schedule and live practice",
      },
      {
        name: "1-on-1",
        price: "€450",
        perMonth: "or €150 a month",
        featured: false,
        badge: "",
        features: [
          "Everything in Solo",
          "Homework checked with personal feedback",
          "10 private lessons at times that suit you",
          "6 months of platform access",
          "5 places",
        ],
        cta: "Join the waiting list",
        note: "For personal attention",
      },
    ],
  },

  // ---------- О преподавателе ----------
  about: {
    title: "Hi, I'm Maria.",
    // Положи фото в папку public (например public/teacher.jpg) и напиши здесь "/teacher.jpg"
    photo: "",
    caption: "Maria, your teacher",
    paragraphs: [
      { lead: "[Квалификация].", text: "[Где училась, какие курсы РКИ проходила.]" },
      { lead: "[Опыт].", text: "[Сколько лет преподаёт, скольких учеников, в каких форматах.]" },
      { lead: "[Подход].", text: "[Что особенного в её методике.]" },
      { lead: "My goal is simple:", text: "[Одна-две фразы о том, чего она хочет для учеников.]" },
    ],
    contactsTitle: "Find me here or write to me",
    contacts: [
      { label: "Telegram", href: "https://t.me/[username]" },
      { label: "Instagram", href: "https://instagram.com/[username]" },
      { label: "Email", href: "mailto:hello@example.com" },
    ],
  },

  // ---------- Вопросы ----------
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Is this for complete beginners?", a: "[Ответ.]" },
      { q: "Do I need to know the alphabet?", a: "[Ответ.]" },
      { q: "When does the course start?", a: "[Ответ.]" },
      { q: "Why do lessons open one week at a time?", a: "[Ответ.]" },
      { q: "How long is the programme?", a: "[Ответ.]" },
      { q: "When are the live group lessons?", a: "[Ответ.]" },
      { q: "How do the 1-on-1 lessons work?", a: "[Ответ.]" },
      { q: "What level will I reach?", a: "[Ответ.]" },
    ],
  },

  // ---------- Форма записи ----------
  waitlist: {
    title: "Enrolment opens on [date]",
    intro: "Leave your email and I'll write to you first.",
    nameLabel: "First name",
    namePlaceholder: "Anna",
    emailLabel: "Email",
    emailPlaceholder: "anna@example.com",
    planLabel: "Which plan interests you?",
    planPlaceholder: "Choose a plan",
    submit: "Join the waiting list",
    success: "You're on the list. I'll email you as soon as enrolment opens.",
  },

  // ---------- Финальный блок ----------
  final: {
    title: "Your Russian can start here.",
    text: "Start from zero, follow a clear path and build Russian you can actually use.",
    note: "Enrolment opens on [date]. The group starts on [date].",
  },

  // ---------- Подвал ----------
  footer: {
    tagline: "A clear path to your first Russian.",
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms and Conditions", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
};
