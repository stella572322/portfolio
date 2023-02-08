import { nanoid } from 'nanoid';

import imgAbout from '../images/about.jpg';
import projectSilverGate from '../images/projectSilverGate.png';
import projectHouten from '../images/projectHouten.png';
import projectRestaurant from '../images/projectRestaurant.gif';
import projectPokemon from '../images/projectPokemon.gif';

// HEAD DATA
export const headData = {
  title: 'Ssu Chieh Chen | Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcom to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '嗨嗨！ 我是',
  name: '思潔',
  subtitle: '一個還在自我精進的 UI/UX Designer 🎅',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: imgAbout,
  paragraphOne:
    '過去在一人身兼多職的工作經驗，讓我擁有快速發現問題並解決問題的能力，也促使我想成為 UX/UI 設計師。目前透過書籍、線上課程、競賽，學習 UX/UI 領域的知識，期望透過學習新的知識與技術，分析用戶需求，提高用戶體驗，創造可用性和可行性的產品。我的目標是打造符合使用者需求，並具有商業價值影響力的產品。',
  paragraphTwo:
    '閒暇之餘，我會走訪農場親近自然與動物，我不僅喜歡觀察身邊的一切，也熱愛嘗試新的美食，並藉由手作活動更加認識自己，這樣的生活模式讓我從出門的每一步，都能收穫更多的知識及成長。',
  paragraphThree: true,
  resume: 'https://stella572322.github.io/resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: projectSilverGate,
    title: '銀色大門 - 長輩送餐服務 APP',
    info: '參與 UXY 自學計畫為期 *3 個月與企業合作專案*，協助社團法人銀色大門老人福利協會，優化並重新設計既有『長輩送餐服務 APP』。',
    info2:
      '*與企業主與使用者進行訪談*，深入了解問題並制定出解決方案，重新設計建立長輩資料頁面、自選送餐時間頁面，額外新增系統推薦、查看訂單與評分功能 等,以符合用戶的訂餐需求。',
    info3: '',
    url: 'https://stella572322.github.io/resume/#/prototype?type=silverGate',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: projectHouten,
    title: 'HOUTEN - 資源整合學習 APP',
    info: 'HOUTEN 是一款可以查詢課程評價、找到志同道合的學習夥伴的 APP，是*由我自行發起*，並與另一位 UI/UX 設計師為期 2 個月的協作專案。',
    info2:
      '此專案*整合三大功能*，除了查詢課程評價、找尋學習夥伴，還包括向專業人士發問問題、交友聊天等系統，以符合學生族群的學習需求。 ',
    info3: '',
    url: 'https://stella572322.github.io/resume/#/prototype?type=houten',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: projectRestaurant,
    title: 'Just A Bite 餐廳網站',
    info: '目的：使用切版技術製做出一個餐廳網站的首頁。',
    info2: '技術：透過原生 *HTML & CSS* 實作版面的切版與特效。',
    info3: '',
    url: 'https://raw.githack.com/stella572322/mentor-program-4th/master/homeworks/week6/hw1/index.html',
    repo: 'https://github.com/stella572322/mentor-program-4th/blob/master/homeworks/week6/hw1/index.html', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: projectPokemon,
    title: 'Pokemon Lottery Game',
    info: '目的：使用 *React Hooks* 開發出一個具有動畫效果的神奇寶貝抽籤遊戲。',
    info2: '技術：透過 *styled-component* 實作 *css* 動畫，運用 *custom hook* 手刻弧形輪播圖。',
    info3: '',
    url: 'https://stella572322.github.io/pokemon-lottery/',
    repo: 'https://github.com/stella572322/pokemon-lottery', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
