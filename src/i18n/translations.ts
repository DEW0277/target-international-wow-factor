export type Language = "uz" | "ru" | "en" | "de";

export const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Navigation
    "nav.home": "Bosh sahifa",
    "nav.about": "Biz haqimizda",
    "nav.values": "Asosiy qadriyatlar",
    "nav.programs": "Dasturlar",
    "nav.admissions": "Qabul",
    "nav.branches": "Filiallar",
    "nav.team": "Bizning jamoa",
    "nav.gallery": "Galereya",
    "nav.contact": "Biz bilan bog'lanish",
    
    // Hero
    "hero.title": "TARGET International",
    "hero.titleHighlight": "School",
    "hero.subtitle": "Ingliz tili, tadbirkorlik va zamonaviy texnologiyalarga urg'u berilgan xalqaro ta'lim",
    "hero.cta.apply": "Qabul uchun ariza",
    "hero.cta.telegram": "Telegram orqali aloqa",
    
    // Trust badges
    "badge.curriculum": "Xalqaro Dastur",
    "badge.stem": "STEM Ta'lim",
    "badge.ielts": "IELTS Tayyorlov",
    "badge.safety": "Xavfsiz Muhit",
    
    // About
    "about.title": "Biz haqimizda",
    "about.subtitle": "TARGET Xalqaro Maktabi - bu kelajak liderlarini tarbiyalovchi, zamonaviy bilim va qadriyatlarni uyg'unlashtirgan ta'lim maskani.",
    "about.mission.title": "Bizning Missiyamiz",
    "about.mission.desc": "Faqatgina aqlli emas, balki har tomonlama barkamol shaxslarni tarbiyalash. Kitoblardan tashqariga chiqib, o'quvchilarda qiziqish, ijodkorlik va tanqidiy fikrlashni rivojlantirish hamda 21-asr ko'nikmalariga ega o'ziga ishongan va mehribon yetakchilarni shakllantirish.",
    "about.vision.title": "Bizning Vizyonimiz",
    "about.vision.desc": "O'zbekistonning boy madaniyati bilan xalqaro ta'limni mukammal uyg'unlashtirgan eng ishonchli maktab bo'lish. O'quvchilarni nafaqat akademik bilimlar, balki ertangi kun biznes olamida va top universitetlarda muvaffaqiyat qozonishi uchun zarur bo'lgan amaliy ko'nikmalar, hissiy barqarorlik va global dunyoqarash bilan tayyorlash.",
    
    "about.values.title": "Asosiy Qadriyatlar",
    "about.values.excellence.title": "Mukammallik (Excellence)",
    "about.values.excellence.desc": "Akademik va xarakterdagi eng yuqori standartlarga intilish",
    "about.values.resilience.title": "Chidamlilik (Resilience)",
    "about.values.resilience.desc": "Qat'iyat va moslashuvchanlikni rivojlantirish",
    "about.values.globalcitizenship.title": "Global Fuqarolik",
    "about.values.globalcitizenship.desc": "Turfaxillikni qadrlash va mahalliy/global jamoalarga hissa qo'shish",
    "about.values.protecting.title": "Himoya qilish (Protecting)",
    "about.values.protecting.desc": "Sayyoramizni asrash va atrof-muhitni muhofaza qilish",
    "about.values.innovation.title": "Innovatsiya (Innovation)",
    "about.values.innovation.desc": "Ijodiy fikrlash va muammolarni hal qilishni rag'batlantirish",
    "about.values.helping.title": "Yordam berish (Helping)",
    "about.values.helping.desc": "Hayotni yaxshilash va boshqalarni yuksaltirish uchun harakat qilish",
    "about.values.integrity.title": "Halollik (Integrity)",
    "about.values.integrity.desc": "Halollik, adolat va axloqiy jasorat bilan harakat qilish",
    
    "about.philosophy.title": "Ta'lim Falsafasi",
    "about.philosophy.academic.title": "Akademik qat'iylik",
    "about.philosophy.academic.desc": "Tadqiqotlarga asoslangan o'qitish metodlari va xalqaro o'quv dasturi",
    "about.philosophy.holistic.title": "Yaxlit rivojlanish",
    "about.philosophy.holistic.desc": "Yetakchilik dasturlari, ijtimoiy-hissiy ta'lim, boshlang'ich sinflardanoq kasb/universitetga tayyorgarlik ko'rish",
    "about.philosophy.ethos.title": "Ta'lim etikasi (Ethos)",
    "about.philosophy.ethos.desc": "Xalqaro ta'lim standartlari, O'zbek madaniyati va qadriyatlarini hurmat qilish, ko'p tilli o'quv muhiti",

    "about.journey.title": "Bizning yo'limiz",
    "about.timeline.2012.title": "Maktabga asos solindi",
    "about.timeline.2012.desc": "TARGET Xalqaro Maktabi 50 nafar o'quvchi bilan o'z eshiklarini ochdi",
    "about.timeline.2015.title": "05.05.2015 yil",
    "about.timeline.2015.desc": "\"Concord lite\" nomi bilan o'quv markazi ochildi",
    "about.timeline.2016.title": "15.11.2016 yil",
    "about.timeline.2016.desc": "O'quv markazining 2-filiali ochildi \"Rebranding Target\"",
    "about.timeline.2017.title": "05.09.2017 yil",
    "about.timeline.2017.desc": "O'quv markazining 3-filiali ochildi",
    "about.timeline.2018_1.title": "05.11.2018 yil",
    "about.timeline.2018_1.desc": "O'quv markazining 4-filiali ochildi",
    "about.timeline.2018_2.title": "05.12.2018 yil",
    "about.timeline.2018_2.desc": "Target Consulting firmasi ochildi",
    "about.timeline.2019.title": "05.02.2019 yil",
    "about.timeline.2019.desc": "O'quv markazining 5-filiali ochildi",
    "about.timeline.2021.title": "05.10.2021 yil",
    "about.timeline.2021.desc": "\"Sergeli\"da Targetning 1-maktabi ochildi",
    "about.timeline.2022_1.title": "12.05.2022 yil",
    "about.timeline.2022_1.desc": "O'quv markazining 6-filiali ochildi",
    "about.timeline.2022_2.title": "15.09.2022 yil",
    "about.timeline.2022_2.desc": "\"Tinchlik\"da Targetning maktabining 2-filiali ochildi",
    "about.timeline.2023.title": "15.12.2023 yil",
    "about.timeline.2023.desc": "\"Istirohat\"da Target maktabining 3-filiali va 1-Bog'chasi ochildi",
    "about.timeline.2024.title": "20.04.2024 yil",
    "about.timeline.2024.desc": "\"Yunusobod\"da 4-filiali ochildi, SAT Test center maqomini oldik",
    "about.timeline.2025.title": "04.04.2025 yil",
    "about.timeline.2025.desc": "AP Test Center va Xalqaro Cambridge akkreditatsiyasidan o'tdik",
    
    // Stats
    "stats.students": "O'quvchi",
    "stats.teachers": "Barcha filiallar",
    "stats.years": "Yillik tajriba",
    "stats.universities": "Xorijiy universitetlarga",
    
    // Programs -> Why Target?
    "programs.title": "Nima uchun Target ni tanlash kerak?",
    "programs.subtitle": "Eng yaxshi global amaliyotlar va mahalliy qadriyatlar uyg'unligi",
    "programs.primary.title": "Xalqaro o'quv dasturi",
    "programs.primary.desc": "Eng yaxshi jahon ta'lim standartlari integratsiyasi",
    "programs.secondary.title": "Individual yondashuv",
    "programs.secondary.desc": "Kichik sinflar va shaxsiylashtirilgan o'quv rejalari",
    "programs.stem.title": "Zamonaviy infratuzilma",
    "programs.stem.desc": "Jihozlangan sinfxonalar, laboratoriyalar va dam olish zonalari",
    "programs.languages.title": "Ingliz tilini chuqur o'rganish",
    "programs.languages.desc": "IELTS va boshqa xalqaro imtihonlarga tayyorgarlik ko'rish",
    "programs.ielts.title": "Universitetga kirishda qo'llab-quvvatlash",
    "programs.ielts.desc": "Universitet tanlash va hujjatlarni tayyorlashda maslahat va yordam",
    "programs.university.title": "Biznes va IT darslari",
    "programs.university.desc": "Tadbirkorlik ko'nikmalari va raqamli savodxonlikni rivojlantirish",
    
    // Highlights
    "highlights.title": "Kampus hayoti",
    "highlights.subtitle": "Zamonaviy infratuzilma va boy tajribalar",
    
    // Testimonials
    "testimonials.title": "Ota-onalar va o'quvchilar fikri",
    "testimonials.subtitle": "Bizning jamoamiz xaqida mijozlarimiz",
    
    // Admissions
    "admissions.title": "Qabul jarayoni",
    "admissions.subtitle": "Farzandingiz bilan birga muvaffaqiyat sari birinchi qadamni qo'ying",
    "admissions.step1": "Ariza topshirish",
    "admissions.step1Desc": "Onlayn ariza to'ldiring yoki maktabga tashrif buyuring",
    "admissions.step2": "Suhbat",
    "admissions.step2Desc": "O'quvchi va ota-ona bilan tanishish suhbati",
    "admissions.step3": "Test",
    "admissions.step3Desc": "Bilim va qobiliyatlarni baholash",
    "admissions.step4": "Qabul",
    "admissions.step4Desc": "Shartnoma imzolash va o'qishni boshlash",
    
    // Contact
    "contact.title": "Biz bilan bog'laning",
    "contact.subtitle": "Manzil va telefon raqamlarimiz",
    "contact.address": "Manzil",
    "contact.addressText": "Toshkent shahri, Yunusobod tumani, Nurmakon ko'chasi, 1",
    "contact.phone": "Telefon",
    "contact.email": "E-mail",
    "contact.hours": "Filiallar",
    "contact.hoursText": "Tinchlik, Sirg'ali, Olmazor, Yunusobod",
    
    // Form
    "form.name": "Ismingiz",
    "form.phone": "Telefon raqamingiz",
    "form.email": "Email manzilingiz",
    "form.childName": "Farzand ismi",
    "form.childAge": "Farzand yoshi",
    "form.grade": "Qaysi sinfga",
    "form.message": "Xabar",
    "form.submit": "Yuborish",
    "form.success": "Arizangiz qabul qilindi! Tez orada bog'lanamiz.",
    "form.error": "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.",
    
    // Footer
    "footer.rights": "Barcha huquqlar himoyalangan",
    "footer.address": "Toshkent, O'zbekiston",
    
    // CTA
    "cta.title": "Siz ham biz bilan birga bo'lishni xohlaysizmi?",
    "cta.subtitle": "Shu yerda ro'yxatdan o'ting",
    "cta.button": "Bepul konsultatsiya olish",
    
    // Team
    "team.title": "Bizning Jamoa",
    "team.subtitle": "TARGET School ning professional o'qituvchilari",
    
    // Gallery
    "gallery.title": "Galereya",
    "gallery.subtitle": "Maktab hayotidan lavhalar",
    
    // FAQ
    "faq.title": "Ko'p so'raladigan savollar",
    "faq.q1": "Qabul yoshi qancha?",
    "faq.a1": "Boshlang'ich sinflarga 6 yoshdan, o'rta sinflarga esa sinf talablariga muvofiq qabul qilamiz.",
    "faq.q2": "O'qish narxi qancha?",
    "faq.a2": "Narxlar sinf va dasturga qarab farq qiladi. Batafsil ma'lumot uchun biz bilan bog'laning.",
    "faq.q3": "Transport xizmati bormi?",
    "faq.a3": "Ha, Toshkent shahrining barcha tumanlaridan transport xizmati mavjud.",
    "faq.q4": "Qanday tilarda dars olib boriladi?",
    "faq.a4": "Asosiy ta'lim ingliz tilida, o'zbek va rus tillari alohida o'qitiladi.",
    
    // Branches
    "branches.title": "Bizning Filiallar",
    "branches.subtitle": "Toshkent shahri bo'ylab qulay joylashuvdagi filiallarimiz: Tinchlik, Sirg'ali, Olmazor, Yunusobod",
    "branches.getDirections": "Yo'nalish olish",
  },
  
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.programs": "Программы",
    "nav.admissions": "Приём",
    "nav.branches": "Филиалы",
    "nav.team": "Команда",
    "nav.gallery": "Галерея",
    "nav.contact": "Контакты",
    
    // Hero
    "hero.title": "Начните будущее вашего ребёнка",
    "hero.titleHighlight": "уже сегодня",
    "hero.subtitle": "TARGET International School — подготовка к мировым университетам через Кембриджскую программу, STEM-образование и индивидуальный подход",
    "hero.cta.apply": "Подать заявку",
    "hero.cta.telegram": "Связаться в Telegram",
    
    // Trust badges
    "badge.curriculum": "Международная программа",
    "badge.stem": "STEM & Робототехника",
    "badge.ielts": "Результаты IELTS",
    "badge.safety": "Безопасный кампус",
    
    // Stats
    "stats.students": "Учеников",
    "stats.teachers": "Опытных учителей",
    "stats.years": "Лет опыта",
    "stats.universities": "Поступили в вузы",
    
    // Programs
    "programs.title": "Образовательные программы",
    "programs.subtitle": "Индивидуальный подход к каждому ученику",
    "programs.primary.title": "Начальное образование",
    "programs.primary.desc": "Программа Cambridge Primary для детей 6-10 лет",
    "programs.secondary.title": "Среднее образование",
    "programs.secondary.desc": "Cambridge Secondary 1 & 2, возраст 11-16 лет",
    "programs.stem.title": "STEM & Робототехника",
    "programs.stem.desc": "Практические проекты и подготовка к олимпиадам",
    "programs.languages.title": "Языковой центр",
    "programs.languages.desc": "Английский, русский, корейский, китайский",
    "programs.ielts.title": "Подготовка к IELTS",
    "programs.ielts.desc": "Интенсивные курсы с гарантией 7.0+ баллов",
    "programs.university.title": "Подготовка к университету",
    "programs.university.desc": "SAT, A-Level и помощь с документами",
    
    // Highlights
    "highlights.title": "Жизнь кампуса",
    "highlights.subtitle": "Современная инфраструктура и богатый опыт",
    
    // About
    "about.title": "О нас",
    "about.mission": "Наша миссия",
    "about.missionText": "Раскрыть талант каждого ребёнка и воспитать личностей с навыками 21 века и глобальным мышлением.",
    "about.vision": "Наше видение",
    "about.visionText": "Стать ведущей международной школой Узбекистана и отправить наших выпускников в лучшие университеты мира.",
    "about.subtitle": "TARGET International School - это образовательное учреждение, которое воспитывает будущих лидеров, сочетая современные знания и ценности.",
    "about.mission.title": "Наша Миссия",
    "about.mission.desc": "Предоставление качественного образования, соответствующего мировым стандартам, и развитие интеллектуального и духовного потенциала учащихся.",
    "about.vision.title": "Наше Видение",
    "about.vision.desc": "Стать одной из самых передовых и престижных международных школ в Узбекистане, формируя конкурентоспособное на глобальном уровне поколение.",
    "about.values.title": "Наши ценности",
    "about.values.excellence.title": "Совершенство",
    "about.values.excellence.desc": "Мы стремимся к высочайшим стандартам во всем, что делаем",
    "about.values.vision.title": "Видение",
    "about.values.vision.desc": "Подготовка студентов к быстро меняющемуся глобальному будущему",
    "about.values.care.title": "Забота",
    "about.values.care.desc": "Каждый ученик ценится и поддерживается индивидуально",
    "about.values.community.title": "Сообщество",
    "about.values.community.desc": "Построение прочных отношений с семьями и партнерами",
    "about.values.resilience.title": "Стойкость",
    "about.values.resilience.desc": "Мы поощряем наших студентов никогда не сдаваться",
    "about.journey.title": "Наш путь",
    "about.timeline.2012.title": "Основание школы",
    "about.timeline.2012.desc": "TARGET International School открыла свои двери для 50 учеников",
    "about.timeline.2015.title": "05.05.2015",
    "about.timeline.2015.desc": "Открыт учебный центр под названием \"Concord lite\"",
    "about.timeline.2016.title": "15.11.2016",
    "about.timeline.2016.desc": "Открыт 2-й филиал учебного центра \"Rebranding Target\"",
    "about.timeline.2017.title": "05.09.2017",
    "about.timeline.2017.desc": "Открыт 3-й филиал учебного центра",
    "about.timeline.2018_1.title": "05.11.2018",
    "about.timeline.2018_1.desc": "Открыт 4-й филиал учебного центра",
    "about.timeline.2018_2.title": "05.12.2018",
    "about.timeline.2018_2.desc": "Открыта фирма Target Consulting",
    "about.timeline.2019.title": "05.02.2019",
    "about.timeline.2019.desc": "Открыт 5-й филиал учебного центра",
    "about.timeline.2021.title": "05.10.2021",
    "about.timeline.2021.desc": "В \"Сергели\" открыта 1-я школа Target",
    "about.timeline.2022_1.title": "12.05.2022",
    "about.timeline.2022_1.desc": "Открыт 6-й филиал учебного центра",
    "about.timeline.2022_2.title": "15.09.2022",
    "about.timeline.2022_2.desc": "На \"Тинчлик\" открыт 2-й филиал школы Target",
    "about.timeline.2023.title": "15.12.2023",
    "about.timeline.2023.desc": "На \"Истирохат\" открыты 3-й филиал школы Target и 1-й детский сад",
    "about.timeline.2024.title": "20.04.2024",
    "about.timeline.2024.desc": "В \"Юнусабаде\" открыт 4-й филиал, получен статус SAT Test Center",
    "about.timeline.2025.title": "04.04.2025",
    "about.timeline.2025.desc": "Пройдена международная аккредитация Cambridge и получен статус AP Test Center",
    
    // Admissions
    "admissions.title": "Процесс приёма",
    "admissions.subtitle": "Сделайте первый шаг к успеху вместе с вашим ребёнком",
    "admissions.step1": "Подача заявки",
    "admissions.step1Desc": "Заполните онлайн-заявку или посетите школу",
    "admissions.step2": "Собеседование",
    "admissions.step2Desc": "Знакомство с учеником и родителями",
    "admissions.step3": "Тестирование",
    "admissions.step3Desc": "Оценка знаний и способностей",
    "admissions.step4": "Зачисление",
    "admissions.step4Desc": "Подписание договора и начало обучения",
    
    // Contact
    "contact.title": "Свяжитесь с нами",
    "contact.subtitle": "Есть вопросы? Мы готовы помочь",
    "contact.address": "Адрес",
    "contact.addressText": "г. Ташкент, Юнусабадский район",
    "contact.phone": "Телефон",
    "contact.email": "Email",
    "contact.hours": "Часы работы",
    "contact.hoursText": "Пн-Пт: 8:00 - 18:00",
    
    // Form
    "form.name": "Ваше имя",
    "form.phone": "Номер телефона",
    "form.email": "Email адрес",
    "form.childName": "Имя ребёнка",
    "form.childAge": "Возраст ребёнка",
    "form.grade": "Класс",
    "form.message": "Сообщение",
    "form.submit": "Отправить",
    "form.success": "Заявка принята! Мы свяжемся с вами в ближайшее время.",
    "form.error": "Произошла ошибка. Пожалуйста, попробуйте снова.",
    
    // Footer
    "footer.rights": "Все права защищены",
    "footer.address": "Ташкент, Узбекистан",
    
    // CTA
    "cta.title": "Начните будущее вашего ребёнка уже сегодня",
    "cta.subtitle": "Запишитесь на бесплатную консультацию и экскурсию по школе",
    "cta.button": "Получить консультацию",
    
    // Team
    "team.title": "Наша команда",
    "team.subtitle": "Опытные и заботливые преподаватели",
    
    // Gallery
    "gallery.title": "Галерея",
    "gallery.subtitle": "Моменты школьной жизни",
    
    // FAQ
    "faq.title": "Часто задаваемые вопросы",
    "faq.q1": "С какого возраста принимают?",
    "faq.a1": "В начальные классы с 6 лет, в средние — согласно требованиям класса.",
    "faq.q2": "Сколько стоит обучение?",
    "faq.a2": "Стоимость зависит от класса и программы. Свяжитесь с нами для подробностей.",
    "faq.q3": "Есть ли транспорт?",
    "faq.a3": "Да, школьный транспорт доступен из всех районов Ташкента.",
    "faq.q4": "На каких языках ведётся обучение?",
    "faq.a4": "Основное обучение на английском, узбекский и русский преподаются отдельно.",
    
    // Branches
    "branches.title": "Наши Филиалы",
    "branches.subtitle": "Удобно расположенные кампусы по всему Ташкенту",
    "branches.getDirections": "Проложить маршрут",
  },
  
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.admissions": "Admissions",
    "nav.branches": "Branches",
    "nav.team": "Team",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Start your child's future",
    "hero.titleHighlight": "today",
    "hero.subtitle": "TARGET International School — preparing children for world universities through Cambridge curriculum, STEM education, and individual approach",
    "hero.cta.apply": "Apply for Admission",
    "hero.cta.telegram": "Contact via Telegram",
    
    // Trust badges
    "badge.curriculum": "International Curriculum",
    "badge.stem": "STEM & Robotics",
    "badge.ielts": "IELTS Results",
    "badge.safety": "Safe Campus",
    
    // Stats
    "stats.students": "Students",
    "stats.teachers": "Experienced Teachers",
    "stats.years": "Years of Experience",
    "stats.universities": "University Admissions",
    
    // Programs
    "programs.title": "Educational Programs",
    "programs.subtitle": "Individual approach for every student",
    "programs.primary.title": "Primary Education",
    "programs.primary.desc": "Cambridge Primary curriculum for ages 6-10",
    "programs.secondary.title": "Secondary Education",
    "programs.secondary.desc": "Cambridge Secondary 1 & 2, ages 11-16",
    "programs.stem.title": "STEM & Robotics",
    "programs.stem.desc": "Hands-on projects and competition preparation",
    "programs.languages.title": "Language Center",
    "programs.languages.desc": "English, Russian, Korean, Chinese",
    "programs.ielts.title": "IELTS Preparation",
    "programs.ielts.desc": "Intensive courses with 7.0+ score guarantee",
    "programs.university.title": "University Prep",
    "programs.university.desc": "SAT, A-Level and application support",
    
    // Highlights
    "highlights.title": "Campus Life",
    "highlights.subtitle": "Modern infrastructure and rich experiences",
    
    // About
    "about.title": "About Us",
    "about.mission": "Our Mission",
    "about.missionText": "To discover every child's talent and nurture them into globally-minded individuals with 21st century skills.",
    "about.vision": "Our Vision",
    "about.visionText": "To become the leading international school in Uzbekistan and send our graduates to the world's most prestigious universities.",
    "about.subtitle": "TARGET International School is an educational institution that nurtures future leaders by combining modern knowledge with traditional values.",
    "about.mission.title": "Our Mission",
    "about.mission.desc": "To provide high-quality education meeting global standards, enhancing students' intellectual and spiritual potential.",
    "about.vision.title": "Our Vision",
    "about.vision.desc": "To become one of the most advanced and prestigious international schools in Uzbekistan, shaping a globally competitive generation.",
    "about.values.title": "Our Values",
    "about.values.excellence.title": "Excellence",
    "about.values.excellence.desc": "We strive for the highest standards in everything we do",
    "about.values.vision.title": "Vision",
    "about.values.vision.desc": "Preparing students for a rapidly changing global future",
    "about.values.care.title": "Care",
    "about.values.care.desc": "Every student is valued and supported individually",
    "about.values.community.title": "Community",
    "about.values.community.desc": "Building strong relationships with families and partners",
    "about.values.resilience.title": "Resilience",
    "about.values.resilience.desc": "We encourage our students to never give up",
    "about.journey.title": "Our Journey",
    "about.timeline.2012.title": "School Founded",
    "about.timeline.2012.desc": "TARGET International School opened its doors with 50 students",
    "about.timeline.2015.title": "2015.05.05",
    "about.timeline.2015.desc": "Training center opened under the name \"Concord lite\"",
    "about.timeline.2016.title": "2016.11.15",
    "about.timeline.2016.desc": "2nd branch of the training center opened \"Rebranding Target\"",
    "about.timeline.2017.title": "2017.09.05",
    "about.timeline.2017.desc": "3rd branch of the training center opened",
    "about.timeline.2018_1.title": "2018.11.05",
    "about.timeline.2018_1.desc": "4th branch of the training center opened",
    "about.timeline.2018_2.title": "2018.12.05",
    "about.timeline.2018_2.desc": "Target Consulting firm opened",
    "about.timeline.2019.title": "2019.02.05",
    "about.timeline.2019.desc": "5th branch of the training center opened",
    "about.timeline.2021.title": "2021.10.05",
    "about.timeline.2021.desc": "The 1st Target school opened in \"Sergeli\"",
    "about.timeline.2022_1.title": "2022.05.12",
    "about.timeline.2022_1.desc": "6th branch of the training center opened",
    "about.timeline.2022_2.title": "2022.09.15",
    "about.timeline.2022_2.desc": "The 2nd branch of Target school opened in \"Tinchlik\"",
    "about.timeline.2023.title": "2023.12.15",
    "about.timeline.2023.desc": "The 3rd branch of Target school and the 1st Kindergarten opened in \"Istirohat\"",
    "about.timeline.2024.title": "2024.04.20",
    "about.timeline.2024.desc": "The 4th branch opened in \"Yunusabad\", acquired SAT Test Center status",
    "about.timeline.2025.title": "2025.04.04",
    "about.timeline.2025.desc": "Passed international Cambridge accreditation and obtained AP Test Center status",
    
    // Admissions
    "admissions.title": "Admission Process",
    "admissions.subtitle": "Take the first step towards success with your child",
    "admissions.step1": "Submit Application",
    "admissions.step1Desc": "Fill out online application or visit the school",
    "admissions.step2": "Interview",
    "admissions.step2Desc": "Meet with student and parents",
    "admissions.step3": "Assessment",
    "admissions.step3Desc": "Evaluate knowledge and abilities",
    "admissions.step4": "Enrollment",
    "admissions.step4Desc": "Sign contract and begin studies",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Have questions? We're here to help",
    "contact.address": "Address",
    "contact.addressText": "Tashkent, Yunusabad District",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Working Hours",
    "contact.hoursText": "Mon-Fri: 8:00 AM - 6:00 PM",
    
    // Form
    "form.name": "Your Name",
    "form.phone": "Phone Number",
    "form.email": "Email Address",
    "form.childName": "Child's Name",
    "form.childAge": "Child's Age",
    "form.grade": "Grade",
    "form.message": "Message",
    "form.submit": "Submit",
    "form.success": "Application received! We'll contact you soon.",
    "form.error": "An error occurred. Please try again.",
    
    // Footer
    "footer.rights": "All rights reserved",
    "footer.address": "Tashkent, Uzbekistan",
    
    // CTA
    "cta.title": "Start your child's future today",
    "cta.subtitle": "Register for a free consultation and school tour",
    "cta.button": "Get Free Consultation",
    
    // Team
    "team.title": "Our Team",
    "team.subtitle": "Experienced and caring educators",
    
    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle": "Moments from school life",
    
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What is the admission age?",
    "faq.a1": "Primary from age 6, secondary according to grade requirements.",
    "faq.q2": "How much does tuition cost?",
    "faq.a2": "Fees vary by grade and program. Contact us for details.",
    "faq.q3": "Is transportation available?",
    "faq.a3": "Yes, school transport is available from all Tashkent districts.",
    "faq.q4": "What languages are used for instruction?",
    "faq.a4": "Main instruction is in English, Uzbek and Russian are taught separately.",
    
    // Branches
    "branches.title": "Our Branches",
    "branches.subtitle": "Conveniently located campuses across Tashkent",
    "branches.getDirections": "Get Directions",
  },

  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.programs": "Programme",
    "nav.admissions": "Aufnahme",
    "nav.branches": "Standorte",
    "nav.team": "Team",
    "nav.gallery": "Galerie",
    "nav.contact": "Kontakt",
    
    // Hero
    "hero.title": "Starten Sie die Zukunft Ihres Kindes",
    "hero.titleHighlight": "heute",
    "hero.subtitle": "TARGET International School — bereitet Kinder durch den Cambridge-Lehrplan, MINT-Ausbildung und individuellen Ansatz auf Weltuniversitäten vor",
    "hero.cta.apply": "Bewerbung einreichen",
    "hero.cta.telegram": "Kontakt über Telegram",
    
    // Trust badges
    "badge.curriculum": "Internationaler Lehrplan",
    "badge.stem": "MINT & Robotik",
    "badge.ielts": "IELTS Ergebnisse",
    "badge.safety": "Sicherer Campus",
    
    // About
    "about.title": "Über uns",
    "about.subtitle": "TARGET International School ist eine Bildungseinrichtung, die zukünftige Führungskräfte fördert, indem sie modernes Wissen mit traditionellen Werten verbindet.",
    "about.mission.title": "Unsere Mission",
    "about.mission.desc": "Bereitstellung hochwertiger Bildung nach globalen Standards zur Förderung des intellektuellen und geistigen Potenzials der Schüler.",
    "about.vision.title": "Unsere Vision",
    "about.vision.desc": "Eine der fortschrittlichsten und angesehensten internationalen Schulen in Usbekistan zu werden und eine global wettbewerbsfähige Generation zu formen.",
    "about.values.title": "Unsere Werte",
    "about.values.excellence.title": "Exzellenz",
    "about.values.excellence.desc": "Wir streben nach den höchsten Standards bei allem, was wir tun",
    "about.values.vision.title": "Vision",
    "about.values.vision.desc": "Vorbereitung der Schüler auf eine sich schnell verändernde globale Zukunft",
    "about.values.care.title": "Fürsorge",
    "about.values.care.desc": "Jeder Schüler wird individuell geschätzt und unterstützt",
    "about.values.community.title": "Gemeinschaft",
    "about.values.community.desc": "Aufbau starker Beziehungen zu Familien und Partnern",
    "about.values.resilience.title": "Resilienz",
    "about.values.resilience.desc": "Wir ermutigen unsere Schüler, niemals aufzugeben",
    "about.journey.title": "Unsere Reise",
    "about.timeline.2012.title": "Schule gegründet",
    "about.timeline.2012.desc": "Die TARGET International School öffnete ihre Türen mit 50 Schülern",
    "about.timeline.2015.title": "05.05.2015",
    "about.timeline.2015.desc": "Bildungszentrum unter dem Namen \"Concord lite\" eröffnet",
    "about.timeline.2016.title": "15.11.2016",
    "about.timeline.2016.desc": "2. Filiale des Bildungszentrums eröffnet \"Rebranding Target\"",
    "about.timeline.2017.title": "05.09.2017",
    "about.timeline.2017.desc": "3. Filiale des Bildungszentrums eröffnet",
    "about.timeline.2018_1.title": "05.11.2018",
    "about.timeline.2018_1.desc": "4. Filiale des Bildungszentrums eröffnet",
    "about.timeline.2018_2.title": "05.12.2018",
    "about.timeline.2018_2.desc": "Firma Target Consulting gegründet",
    "about.timeline.2019.title": "05.02.2019",
    "about.timeline.2019.desc": "5. Filiale des Bildungszentrums eröffnet",
    "about.timeline.2021.title": "05.10.2021",
    "about.timeline.2021.desc": "Die 1. Target-Schule in \"Sergeli\" eröffnet",
    "about.timeline.2022_1.title": "12.05.2022",
    "about.timeline.2022_1.desc": "6. Filiale des Bildungszentrums eröffnet",
    "about.timeline.2022_2.title": "15.09.2022",
    "about.timeline.2022_2.desc": "Die 2. Filiale der Target-Schule in \"Tinchlik\" eröffnet",
    "about.timeline.2023.title": "15.12.2023",
    "about.timeline.2023.desc": "Die 3. Filiale der Target-Schule und der 1. Kindergarten in \"Istirohat\" eröffnet",
    "about.timeline.2024.title": "20.04.2024",
    "about.timeline.2024.desc": "Die 4. Filiale in \"Yunusabad\" eröffnet, SAT Test Center Status erhalten",
    "about.timeline.2025.title": "04.04.2025",
    "about.timeline.2025.desc": "Internationale Cambridge-Akkreditierung bestanden und AP Test Center Status erhalten",
    
    // Stats
    "stats.students": "Schüler",
    "stats.teachers": "Erfahrene Lehrer",
    "stats.years": "Jahre Erfahrung",
    "stats.universities": "Universitätszulassungen",
    
    // Programs
    "programs.title": "Bildungsprogramme",
    "programs.subtitle": "Individueller Ansatz für jeden Schüler",
    "programs.primary.title": "Grundschulbildung",
    "programs.primary.desc": "Cambridge Primary Lehrplan für 6-10-Jährige",
    "programs.secondary.title": "Sekundärbildung",
    "programs.secondary.desc": "Cambridge Secondary 1 & 2, 11-16 Jahre",
    "programs.stem.title": "MINT & Robotik",
    "programs.stem.desc": "Praxisprojekte und Wettbewerbsvorbereitung",
    "programs.languages.title": "Sprachzentrum",
    "programs.languages.desc": "Englisch, Russisch, Koreanisch, Chinesisch",
    "programs.ielts.title": "IELTS Vorbereitung",
    "programs.ielts.desc": "Intensivkurse mit 7.0+ Punkte Garantie",
    "programs.university.title": "Universitätsvorbereitung",
    "programs.university.desc": "SAT, A-Level und Bewerbungsunterstützung",
    
    // Highlights
    "highlights.title": "Campus Leben",
    "highlights.subtitle": "Moderne Infrastruktur und reiche Erfahrungen",
    
    // Admissions
    "admissions.title": "Aufnahmeprozess",
    "admissions.subtitle": "Machen Sie den ersten Schritt zum Erfolg mit Ihrem Kind",
    "admissions.step1": "Bewerbung",
    "admissions.step1Desc": "Online-Antrag ausfüllen oder Schule besuchen",
    "admissions.step2": "Interview",
    "admissions.step2Desc": "Treffen mit Schüler und Eltern",
    "admissions.step3": "Bewertung",
    "admissions.step3Desc": "Beurteilung von Wissen und Fähigkeiten",
    "admissions.step4": "Anmeldung",
    "admissions.step4Desc": "Vertrag unterzeichnen und Studium beginnen",
    
    // Contact
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle": "Haben Sie Fragen? Wir helfen gerne",
    "contact.address": "Adresse",
    "contact.addressText": "Taschkent, Bezirk Yunusabad",
    "contact.phone": "Telefon",
    "contact.email": "Email",
    "contact.hours": "Öffnungszeiten",
    "contact.hoursText": "Mo-Fr: 8:00 - 18:00",
    
    // Form
    "form.name": "Ihr Name",
    "form.phone": "Telefonnummer",
    "form.email": "Email-Adresse",
    "form.childName": "Name des Kindes",
    "form.childAge": "Alter des Kindes",
    "form.grade": "Klasse",
    "form.message": "Nachricht",
    "form.submit": "Absenden",
    "form.success": "Bewerbung erhalten! Wir melden uns bald.",
    "form.error": "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    
    // Footer
    "footer.rights": "Alle Rechte vorbehalten",
    "footer.address": "Taschkent, Usbekistan",
    
    // CTA
    "cta.title": "Starten Sie die Zukunft Ihres Kindes heute",
    "cta.subtitle": "Registrieren Sie sich für eine kostenlose Beratung und Schulführung",
    "cta.button": "Kostenlose Beratung erhalten",
    
    // Team
    "team.title": "Unser Team",
    "team.subtitle": "Erfahrene und fürsorgliche Pädagogen",
    
    // Gallery
    "gallery.title": "Galerie",
    "gallery.subtitle": "Momente aus dem Schulleben",
    
    // FAQ
    "faq.title": "Häufig gestellte Fragen",
    "faq.q1": "Was ist das Aufnahmealter?",
    "faq.a1": "Grundschule ab 6 Jahren, Sekundarschule je nach Klassenanforderungen.",
    "faq.q2": "Wie hoch sind die Schulgebühren?",
    "faq.a2": "Gebühren variieren nach Klasse und Programm. Kontaktieren Sie uns für Details.",
    "faq.q3": "Gibt es einen Transportservice?",
    "faq.a3": "Ja, Schultransport ist aus allen Bezirken Taschkents verfügbar.",
    "faq.q4": "In welchen Sprachen wird unterrichtet?",
    "faq.a4": "Hauptunterricht ist auf Englisch, Usbekisch und Russisch werden separat unterrichtet.",
    
    // Branches
    "branches.title": "Unsere Standorte",
    "branches.subtitle": "Günstig gelegene Campusse in ganz Taschkent",
    "branches.getDirections": "Wegbeschreibung",
  },
};

