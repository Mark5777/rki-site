// =====================================================================
// ТЕКСТЫ ДЛЯ НОВЫХ ДЕКОРАТИВНЫХ БЛОКОВ.
// Основные тексты по-прежнему в lib/content.ts.
// =====================================================================

export const extra = {
  // Рукописная подпись со стрелкой под кнопками первого экрана
  heroDoodle: "Zero Russian? Perfect, start here",

  // Бегущая строка со словами
  marquee: [
    { ru: "привет", en: "hello" },
    { ru: "спасибо", en: "thank you" },
    { ru: "пожалуйста", en: "please" },
    { ru: "друг", en: "friend" },
    { ru: "чай", en: "tea" },
    { ru: "как дела?", en: "how are you?" },
    { ru: "до свидания", en: "goodbye" },
    { ru: "я понимаю", en: "I understand" },
    { ru: "вкусно", en: "tasty" },
    { ru: "давай!", en: "let's go!" },
  ],

  // Интерактивный алфавит
  alphabet: {
    title: "33 letters. Tap one.",
    intro:
      "The Cyrillic alphabet is where every student starts. Pick a letter to see a word — and hear it.",
    listen: "Listen",
    // note — пояснение для букв, с которых слово не начинается
    letters: [
      { l: "Аа", word: "арбуз", en: "watermelon" },
      { l: "Бб", word: "банан", en: "banana" },
      { l: "Вв", word: "вода", en: "water" },
      { l: "Гг", word: "город", en: "city" },
      { l: "Дд", word: "дом", en: "house" },
      { l: "Ее", word: "еда", en: "food" },
      { l: "Ёё", word: "ёлка", en: "fir tree" },
      { l: "Жж", word: "жираф", en: "giraffe" },
      { l: "Зз", word: "зонт", en: "umbrella" },
      { l: "Ии", word: "игра", en: "game" },
      { l: "Йй", word: "йогурт", en: "yogurt" },
      { l: "Кк", word: "кошка", en: "cat" },
      { l: "Лл", word: "лимон", en: "lemon" },
      { l: "Мм", word: "мама", en: "mum" },
      { l: "Нн", word: "нос", en: "nose" },
      { l: "Оо", word: "окно", en: "window" },
      { l: "Пп", word: "папа", en: "dad" },
      { l: "Рр", word: "рыба", en: "fish" },
      { l: "Сс", word: "солнце", en: "sun" },
      { l: "Тт", word: "театр", en: "theatre" },
      { l: "Уу", word: "утро", en: "morning" },
      { l: "Фф", word: "фото", en: "photo" },
      { l: "Хх", word: "хлеб", en: "bread" },
      { l: "Цц", word: "цветок", en: "flower" },
      { l: "Чч", word: "чай", en: "tea" },
      { l: "Шш", word: "шапка", en: "hat" },
      { l: "Щщ", word: "щи", en: "cabbage soup" },
      { l: "Ъъ", word: "подъезд", en: "entrance", note: "The hard sign never starts a word." },
      { l: "Ыы", word: "сыр", en: "cheese", note: "No Russian word starts with this letter." },
      { l: "Ьь", word: "день", en: "day", note: "The soft sign has no sound of its own." },
      { l: "Ээ", word: "это", en: "this" },
      { l: "Юю", word: "юбка", en: "skirt" },
      { l: "Яя", word: "яблоко", en: "apple" },
    ],
  },

  // Стикер на фото преподавателя
  aboutSticky: "Fun fact: [интересный факт о преподавателе]",

  // Рукописная фраза над финальным заголовком
  finalHand: "Давай начнём!",
};
