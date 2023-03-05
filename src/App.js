import React, { useState } from "react";
import Article from "./components/Article";

function App() {
  const articleEn = {
    news:'NVIDIA NEWS',
    description: 'Article description:',
    preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
    content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
    author: 'Author: Mike', 
    published: 'Published: 06.12.2022 ',
    theme: 'Theme: Video cards',
    btn1: 'Mark as read',
    btn21: 'Read',
    btn22: 'Close',
    btn3: 'Mark as unread'
}
const articleUa = {
  news:'НОВИНИ NVIDIA',
  description: 'Опис статті:',
  preview: 'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
  content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
  author: 'Автор: Майк',
  published: 'Опубліковано: 06.12.2022',
  theme: 'Тема: відео карти',
  btn1: 'Прочитано',
  btn21: 'Читати',
  btn22: 'Закрити',
  btn3: 'Не прочитано'
}

  const [isShow, setIsShow] = useState(false); 
  const [myClass, setMyClass] = useState("article__body"); 
  const [prevLang, setMyLang] = useState('en');
  const [prevBtnState, setButtonState] = useState(articleEn.btn21);

  const addNewClass = () => {
    setMyClass(`article__body read`);
  };

  const unNewClass = () => {
    setMyClass(`article__body`);
  };

  const lang = () => {
    setMyLang((prevLang) => prevLang === 'en' ? 'ua' : 'en');
    setButtonState((prevBtnState) => {
      if (prevLang === 'en' && isShow === false) {
        return articleUa.btn21;
      }
      if (prevLang === 'en' && isShow === true) {
        return articleUa.btn22;
      }
      if (prevLang === 'ua' && isShow === false) {
        return articleEn.btn21;
      }
      if (prevLang === 'ua' && isShow === true) {
        return articleEn.btn22;
      }
    });
  }

  let myLang;
  if(prevLang === 'en'){
    myLang = articleEn;
  }
  else {
    myLang = articleUa;
  }

  const toggleArticle = () => {
    setIsShow(!isShow);    
    setButtonState(isShow ? myLang.btn21 : myLang.btn22);
  };

  return (
    <div className="wrapper">
      <h1 className="title">{myLang.news}</h1>
      <div className="article">
        <Article show={isShow} text={myLang} className={myClass}>
          <div className="article__title">
            <h2>{myLang.description}</h2>
          </div>
        </Article>
        <div className="article__actions">
          <button onClick={addNewClass} className="article__btn">
            {myLang.btn1}
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {prevBtnState}
          </button>
          <button onClick={unNewClass} className="article__btn">
            {myLang.btn3}
          </button>
        </div>
      </div>
      <div className="lang">
        <button onClick={lang} className="lang-btn"> UA </button>
        <button onClick={lang} className="lang-btn"> EN </button>
      </div>
    </div>
  );
}

export default App;












/*
import React, { useState } from "react";
import Article from "./components/Article";

 function App () {

  const articleEn = {
      news:'NVIDIA NEWS',
      description: 'Article description:',
      preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
      content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
      author: 'Author: Mike', 
      published: 'Published: 06.12.2022 ',
      theme: 'Theme: Video cards',
      btn1: 'Mark as read',
      btn21: 'Read',
      btn22: 'Close',
      btn3: 'Mark as unread'


  }
  const articleUa = {
    news:'НОВИНИ NVIDIA',
    description: 'Опис статті:',
    preview: 'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
    content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
    author: 'Автор: Майк',
    published: 'Опубліковано: 06.12.2022',
    theme: 'Тема: відео карти',
    btn1: 'Прочитано',
    btn21: 'Читати',
    btn22: 'Закрити',
    btn3: 'Прочитано'
  }

  const [isShow, setIsShow]  = useState(false);
  const [btnText, setBtnText] = useState("Read");
  const [myClass, setMyClass] = useState("article__body");
  const [myLang, setMyLang] = useState(langEn);

  const toggleArticle = () => {
    setIsShow(!isShow);
    setBtnText(isShow ? "Read" : "Close");
  };

  const addNewClass = () => {
   setMyClass(`article__body read`);
 };

  const unNewClass = () => {
    setMyClass(`article__body`);
  };

  const lang = () => {
    setMyLang(myLang === articleEn ? articleUa : articleEn);
  }

  return (
    <div className="wrapper">
      <h1 className="title">NVIDIA news</h1>
      <div className="article">
          <Article show={isShow} text={myLang} className={myClass}>
          <div className="article__title">
            <h2>NVIDIA Accelerated AI on Azure</h2>
          </div>
          </Article>
        <div className="article__actions">        
          <button onClick={addNewClass} className="article__btn"> {btn1}</button>
          <button onClick={toggleArticle} className="article__btn"> {btnText}</button>
          <button onClick={unNewClass} className="article__btn"> {btn2}</button>
        </div>
      </div>
      <div className="lang">
        <button onClick={lang} className="lang-btn">UA</button>
        <button onClick={lang} className="lang-btn">EN</button>
      </div>
    </div> 
    );
  }
export default App;
*/












/*
import React, { useState } from "react";
import Article from "./components/Article";

 function App () {

  const article = {
      description: 'Article description:',
      preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
      content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
  }
  const [isShow, setIsShow]  = useState(false);
  const [btnText, setBtnText] = useState("Read");
  const [myClass, setMyClass] = useState("article__body");


  const toggleArticle = () => {
    setIsShow(!isShow);
    setBtnText(isShow ? "Read" : "Close");
  };

  const addNewClass = () => {
   setMyClass(`article__body read`);
 };

  const unNewClass = () => {
    setMyClass(`article__body`);
  };

  return (
    <div className="wrapper">
      <h1 className="title">NVIDIA news</h1>
      <div className="article">
          <Article show={isShow} text={article} className={myClass}>
          <div className="article__title">
            <h2>NVIDIA Accelerated AI on Azure</h2>
          </div>
          </Article>
        <div className="article__actions">        
          <button onClick={addNewClass} className="article__btn"> Mark as read</button>
          <button onClick={toggleArticle} className="article__btn"> {btnText}</button>
          <button onClick={unNewClass} className="article__btn"> Mark as unread</button>
        </div>
      </div>
      <div className="lang">
        <button className="lang-btn">UA</button>
        <button className="lang-btn">EN</button>
      </div>
    </div> 
    );
  }
export default App;

*/