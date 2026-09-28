// =====================================================================
// ВСЕ ТЕКСТЫ САЙТА — ЗДЕСЬ.
// Меняй только то, что в кавычках. Всё в [квадратных скобках] — заготовки,
// их обязательно нужно заменить на настоящие данные.
// =====================================================================

// Ссылка на Instagram — на неё ведут все кнопки записи на занятие
const INSTAGRAM =
  "https://www.instagram.com/nadya.russian?stkn=MXJwMnA2czVleHF4cQ%3D%3D&utm_source=qr";

export const site = {
  name: "Russian with Nadya",
  email: "hello@example.com",
  instagram: INSTAGRAM,

  meta: {
    title: "Russian with Nadya — individual online Russian lessons",
    description:
      "Book individual online Russian lessons with a real teacher. Single lessons and packages, flexible scheduling, payment via Boosty.",
  },

  nav: [
    { label: "What you'll learn", href: "#programme" },
    { label: "Pricing", href: "#plans" },
    { label: "About me", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],

  // ---------- Первый экран ----------
  hero: {
    greeting: "Привет!",
    title: "Individual Russian lessons, made for you",
    subtitle:
      "One-on-one online lessons with a real teacher. Book a single lesson or a package, learn at your own pace, and get feedback after every class.",
    primaryCta: { label: "Book a lesson", href: INSTAGRAM, external: true },
    secondaryCta: { label: "Get the free guide", href: "#guide", external: false },
    freeGuideNote: "New here? Get a free starter guide to Russian, no lesson required.",
    note: "Lessons are booked individually via Instagram, no fixed groups or start dates.",
    notebook: {
      date: "Двенадцатое октября",
      heading: "Классная работа",
      lines: ["Привет!", "Меня зовут Анна.", "Я из Италии.", "Я учу русский."],
      praise: "Молодец!",
      grade: "5",
    },
  },

  // ---------- О преподавателе ----------
  about: {
    title: "Hi, I'm Nadya.",
    // Положи фото в папку public (например public/teacher.jpg) и напиши здесь "/teacher.jpg"
    photo: "",
    caption: "Nadya, your teacher",
    paragraphs: [
      { lead: "[Квалификация].", text: "[Где училась, какие курсы РКИ проходила.]" },
      { lead: "[Опыт].", text: "[Сколько лет преподаёт, скольких учеников, в каких форматах.]" },
      { lead: "[Подход].", text: "[Что особенного в её методике.]" },
      { lead: "My goal is simple:", text: "[Одна-две фразы о том, чего она хочет для учеников.]" },
    ],
    contactsTitle: "Find me here or write to me",
    contacts: [
      { label: "Instagram", href: INSTAGRAM },
      { label: "Email", href: "mailto:hello@example.com" },
    ],
  },

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

  // ---------- Чему научишься (флип-карточки) ----------
  outcomes: {
    title: "What you'll learn together",
    intro: "Real, practical Russian built around your goals. Tap a card to see it in Russian.",
    cards: [
      { front: "Read Russian and introduce yourself", back: "Привет! Меня зовут…" },
      { front: "Talk about yourself and other people", back: "Кто он? Она врач." },
      { front: "Say what you have and where things are", back: "У меня есть… Где…?" },
      { front: "Describe your everyday life", back: "Я работаю, я читаю, я не понимаю." },
      { front: "Order food and ask about prices", back: "Я хочу… Сколько стоит?" },
      { front: "Talk about your family and describe people", back: "У меня есть брат. Ему 30 лет." },
      { front: "Describe your home", back: "Здесь кухня. Там окно." },
      { front: "Talk about yesterday, today and tomorrow", back: "Вчера я был… Сегодня я дома." },
      { front: "Get around a city", back: "Я иду… Я еду… Куда?" },
      { front: "Say what you like, want and can do", back: "Мне нравится… Я хочу… Я могу…" },
      { front: "Talk about how you feel", back: "У меня болит голова. Мне холодно." },
      { front: "Have simple everyday conversations", back: "Как дела? Что ты делаешь?" },
    ],
  },

  // ---------- Тарифы ----------
  pricing: {
    title: "Choose your lesson format",
    intro: "Individual online lessons, planned around your schedule and level.",
    cards: [
      {
        name: "Single lesson",
        price: "$25",
        compare: "",
        savings: "",
        featured: false,
        badge: "",
        note: "Try it once, no commitment",
        features: [
          "One 55-minute one-on-one lesson",
          "Book anytime that suits you",
          "Personalised to your level and goals",
          "Homework and feedback after the lesson",
        ],
      },
      {
        name: "8-lesson package",
        price: "$180",
        compare: "$200",
        savings: "Save 10%",
        featured: true,
        badge: "Best value",
        note: "2 lessons a week — about a month of study",
        features: [
          "Everything in a single lesson",
          "8 lessons at a steady, twice-a-week pace",
          "Consistent progress with a clear plan",
          "Priority scheduling",
        ],
      },
      {
        name: "4-lesson package",
        price: "$95",
        compare: "$100",
        savings: "Save 5%",
        featured: false,
        badge: "",
        note: "1 lesson a week — about a month of study",
        features: [
          "Everything in a single lesson",
          "4 lessons at a relaxed, once-a-week pace",
          "A steady rhythm if you're busy",
          "Priority scheduling",
        ],
      },
    ],
    cta: "Book a lesson",
  },

  // ---------- Пробный урок ----------
  trial: {
    name: "Trial lesson",
    tag: "First time? Start here",
    price: "$12.50",
    compare: "$25",
    savings: "50% off",
    text: "A short, low-pressure lesson to meet your teacher and find the right starting point.",
    benefits: [
      "Meet your teacher and ask any questions",
      "A quick assessment of your current level",
      "A personal plan for what to learn next",
      "No pressure, decide about a package afterwards",
    ],
    cta: "Book the trial lesson",
  },

  // ---------- Условия занятий ----------
  terms: {
    title: "Good to know before you book",
    items: [
      {
        icon: "clock",
        title: "Lesson length",
        text: "Each lesson lasts 55 minutes.",
      },
      {
        icon: "calendar",
        title: "Package validity",
        text: "A package stays valid for 2 months from the date of purchase.",
      },
      {
        icon: "ban",
        title: "Cancellations",
        text: "Cancelling less than 24 hours before a lesson counts it as used, with no refund. Cancel earlier and it's rescheduled at no cost.",
      },
    ],
  },

  // ---------- Оплата через Boosty ----------
  boosty: {
    title: "Payment via Boosty",
    intro:
      "All lessons and packages are paid through Boosty, a trusted platform that makes paying from abroad simple.",
    benefits: [
      "Accepts international cards, so paying from abroad is simple",
      "A secure, well-known platform used by many Russian-speaking creators",
      "Instant payment confirmation",
      "No need for a Russian bank account",
    ],
    highlight:
      "Before you purchase, please confirm the lesson time and details with your teacher on Instagram.",
    cta: "Message on Instagram",
  },

  // ---------- Бесплатная методичка ----------
  guide: {
    title: "Get your free starter guide",
    intro: "Leave your name and email, and the guide will land straight in your inbox.",
    nameLabel: "First name",
    namePlaceholder: "Anna",
    emailLabel: "Email",
    emailPlaceholder: "anna@example.com",
    submit: "Send me the guide",
    success: "Check your inbox, the guide is on its way!",
  },

  // ---------- Вопросы ----------
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Is this for complete beginners?", a: "Yes. Lessons are adapted to your level, whether you're starting from zero or already know some Russian." },
      { q: "Do I need to know the Cyrillic alphabet already?", a: "No. If you're just starting out, the first lessons cover the alphabet and reading." },
      { q: "How do I book a lesson?", a: "Message your teacher on Instagram to agree on a time, then complete payment via Boosty." },
      { q: "How long does a lesson last?", a: "Every lesson, whether single or part of a package, lasts 55 minutes." },
      { q: "How long is a package valid for?", a: "A package stays valid for 2 months from the date of purchase, so there's room for a flexible schedule." },
      { q: "What happens if I need to cancel a lesson?", a: "Cancelling less than 24 hours before the lesson counts it as used and it isn't refunded. Cancelling earlier lets you reschedule at no cost." },
      { q: "Can I switch from a single lesson to a package later?", a: "Yes. Many students start with a single lesson or the trial and move to a package once they know the format suits them." },
      { q: "Is the trial lesson necessary?", a: "It's optional, but recommended if this is your first lesson: it's a low-cost way to meet your teacher and get a plan before booking a package." },
    ],
  },

  // ---------- Финальный блок ----------
  final: {
    title: "Ready for your first lesson?",
    text: "Message your teacher on Instagram to pick a time, or grab the free guide and start today.",
    note: "Payment for all lessons and packages is handled securely via Boosty.",
  },

  // ---------- Подвал ----------
  footer: {
    tagline: "Individual online Russian lessons.",
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms and Conditions", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
};
