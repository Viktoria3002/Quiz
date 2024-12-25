const questions = [
  {
    question: 'Сколько лет прожил старик со старухой у синего моря?',
    answers: ['5', '20', '33'],
    correct: 2,
    header: 'Сказки',
  },
  {
    question: 'Какой волшебный предмет был самый любимый в "Сказке о мёртвой царевне..."?',
    answers: ['Кольцо', 'Зеркало', 'Венец'],
    correct: 1,
    header: 'Сказки',
  },
  {
    question: 'Кто помог Королевичу отыскать невесту?',
    answers: ['Солнце', 'Луна', 'Гроза'],
    correct: 0,
    header: 'Сказки',
  },
  {
    question: 'Чем должен был заплатить за работу поп Балде?',
    answers: ['Золотом', 'Серебром', 'Тремя щелчками'],
    correct: 2,
    header: 'Сказки',
  },
  {
    question: 'На чем спал Балда?',
    answers: ['На соломе', 'На чердаке', 'На сене'],
    correct: 0,
    header: 'Сказки',
  },
  {
    question: 'Сколько девиц пряли поздно вечерком?',
    answers: ['Семь', 'Две', 'Три'],
    correct: 2,
    header: 'Сказки',
  },
  {
    question: 'Кто жил в хрустальном доме под елью?',
    answers: ['Сурок', 'Белка', 'Гусь'],
    correct: 1,
    header: 'Сказки',
  },
  {
    question: 'Какую птицу подарил дадону мудрец?',
    answers: ['Ворону', 'Галку', 'Петуха'],
    correct: 2,
    header: 'Сказки',
  },
  //next block
  {
    question: 'Летает ночью, днём спит, и мышей ловить спешит',
    answers: ['Сова', 'Голубь', 'Воробей'],
    correct: 0,
    header: 'Животные',
  },
  {
    question: 'Весь день по деревьям скачет, орешки прячет от ребят',
    answers: ['Белка', 'Лиса', 'Ёжик'],
    correct: 0,
    header: 'Животные',
  },
  {
    question: 'В речке плавает, в траве квакает, зелёная, как листок',
    answers: ['Лягушка', 'Черепаха', 'Утка'],
    correct: 0,
    header: 'Животные',
  },
  {
    question: 'Летом серое, зимой белое, по лесу прыгает, от волка убегает',
    answers: ['Лиса', 'Заяц', 'Медведь'],
    correct: 1,
    header: 'Животные',
  },
  {
    question: 'Рыжая плутовка, хвост пушистый, в курятнике всех куриц считает',
    answers: ['Волк', 'Собака', 'Лисица'],
    correct: 2,
    header: 'Животные',
  },
  {
    question: 'Шубка полосатая, когти острые, в джунглях живёт, рычит грозно',
    answers: ['Тигр', 'Зебра', 'Лев'],
    correct: 0,
    header: 'Животные',
  },
  {
    question: 'В воде живёт, но не рыба, зубастая, как крокодил, а имя в нём "хвост" скрыло',
    answers: ['Кит', 'Бобр', 'Утконос'],
    correct: 1,
    header: 'Животные',
  },
  {
    question:
      'Этот зверь, как пылесос: всё в лесу он соберёт, шишки, ягоды найдет и в берлогу унесёт',
    answers: ['Барсук', 'Ёжик', 'Медведь'],
    correct: 2,
    header: 'Животные',
  },
  //next block
  {
    question:
      'Этот древний город, известный своими чудесами и мудрецами, был столицей великой империи на берегах Тигра',
    answers: ['Вавилон', 'Афины', 'Рим'],
    correct: 0,
    header: 'История',
  },
  {
    question: ' Этот правитель Египта построил самую большую пирамиду в Гизе',
    answers: ['Рамсес', 'Тутанхамон', 'Хеопс'],
    correct: 2,
    header: 'История',
  },
  {
    question: 'Этот великий завоеватель создал империю, простирающуюся от Греции до Индии',
    answers: ['Наполеон', 'Александр Македонский', 'Юлий Цезарь'],
    correct: 1,
    header: 'История',
  },
  {
    question:
      'Этот документ, подписанный в 1215 году, ограничил власть английского короля и стал основой прав человека',
    answers: ['Декларация независимости', 'Магна Карта', 'Билль о правах'],
    correct: 1,
    header: 'История',
  },
  {
    question:
      'Этот путешественник первым доказал, что Земля круглая, совершив кругосветное путешествие',
    answers: ['Христофор Колумб', 'Васко да Гама', 'Фердинанд Магеллан'],
    correct: 2,
    header: 'История',
  },
  {
    question:
      'Эта великая цивилизация майя оставила после себя впечатляющие пирамиды и календарь. Где она находилась?',
    answers: ['Южная Америка', 'Центральная Америка', 'Северная Америка'],
    correct: 1,
    header: 'История',
  },
  {
    question: 'Этот философ древней Греции был учеником Сократа и учителем Аристотеля',
    answers: ['Платон', 'Гераклит', 'Пифагор'],
    correct: 0,
    header: 'История',
  },
  {
    question:
      'Этот документ провозгласил независимость американских колоний от Великобритании в 1776 году',
    answers: ['Конституция США', 'Декларация независимости', 'Билль о правах'],
    correct: 1,
    header: 'История',
  },
  //next block
  {
    question:
      'Он приходит раз в году, приносит подарки и радость, живёт на Северном полюсе с оленями',
    answers: ['Пасхальный кролик', 'Санта-Клаус', 'Фея-крёстная'],
    correct: 1,
    header: 'Загадки',
  },
  {
    question: 'Без рук, без топорёнка, строит дом без угла',
    answers: ['Паук', 'Муравей', 'Улитка'],
    correct: 0,
    header: 'Загадки',
  },
  {
    question: 'Этот музыкальный инструмент имеет клавиши и струны, и на нём играют пальцами',
    answers: ['Флейта', 'Гитара', 'Фортепиано'],
    correct: 2,
    header: 'Загадки',
  },
  {
    question: 'Это животное носит на себе дом и прячется в нём, если его потревожить',
    answers: ['Улитка', 'Рысь', 'Обезьяна'],
    correct: 0,
    header: 'Загадки',
  },
  {
    question: 'Эта птица известна своим умением говорить и повторять звуки, которые слышит',
    answers: ['Воробей', 'Попугай', 'Ласточка'],
    correct: 1,
    header: 'Загадки',
  },
  {
    question: 'Это место является самой глубокой точкой на Земле и находится в Тихом океане',
    answers: ['Марианская впадина', 'Гранд-Каньон', 'Гималаи'],
    correct: 0,
    header: 'Загадки',
  },
  {
    question:
      'Это изобретение позволяет людям видеть сквозь стены и лечить болезни, изучая внутренности тела',
    answers: ['Телескоп', 'Рентген', 'Микроскоп'],
    correct: 1,
    header: 'Загадки',
  },
  {
    question:
      'В этом месяце бывает меньше всего дней, но иногда он получает один дополнительный день',
    answers: ['Январь', 'Февраль', 'Апрель'],
    correct: 1,
    header: 'Загадки',
  },
  //next block
  {
    question: 'Эта планета, известная своей красной окраской, часто называется "Красной планетой',
    answers: ['Венера', 'Марс', 'Юпитер'],
    correct: 1,
    header: 'Космос',
  },
  {
    question:
      'Эта самая большая планета в Солнечной системе имеет знаменитое Большое красное пятно',
    answers: ['Сатурн', 'Юпитер', 'Нептун'],
    correct: 1,
    header: 'Космос',
  },
  {
    question: 'Эта звезда является центром нашей Солнечной системы',
    answers: ['Полярная звезда', 'Альфа Центавра', 'Солнце'],
    correct: 2,
    header: 'Космос',
  },
  {
    question:
      'Этот космический объект, по виду напоминающий камень, часто падает на Землю и называется "падающей',
    answers: ['Комета', 'Метеор', 'Астероид'],
    correct: 1,
    header: 'Космос',
  },
  {
    question: 'Этот космический аппарат первым доставил человека на Луну',
    answers: ['Восток-1', ' Аполлон-11', 'Спутник-1'],
    correct: 1,
    header: 'Космос',
  },
  {
    question: 'Эта планета известна своими кольцами и является шестой от Солнца',
    answers: ['Сатурн', 'Уран', 'Венера'],
    correct: 0,
    header: 'Космос',
  },
  {
    question:
      'Этот термин описывает невидимую границу вокруг чёрной дыры, за которую ничто не может вырваться',
    answers: ['Событийный горизонт', 'Гравитационное поле', 'Магнитное поле'],
    correct: 0,
    header: 'Космос',
  },
  {
    question: 'Это название имеет наша галактика, в которой находится Солнечная системаь',
    answers: ['Андромеда', 'Млечный Путь', 'Большое Магелланово Облако'],
    correct: 1,
    header: 'Космос',
    // photo: 'assets/img/imgCat.png',
    // photo2: 'assets/img/imgCat2.png',
  },
];

// function getImageId() {
//   const urlParamsPhoto = new URLSearchParams(window.location.search);
//   return parseInt(urlParamsPhoto.get('id'), 10) - 1 || 0;
// }

function getQuestionId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id'), 10) - 1 || 0;
}

function getHeaderId() {
  const urlParamsHeader = new URLSearchParams(window.location.search);
  return parseInt(urlParamsHeader.get('id'), 10) - 1 || 0;
}

function showQuestion(id) {
  if (id >= 0 && id < questions.length) {
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers');
    questionText.textContent = questions[id].question;

    // Очистить предыдущие ответы
    answersContainer.innerHTML = '';

    // Показать варианты ответов
    questions[id].answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.onclick = () => {
        if (index === questions[id].correct) {
          button.classList.add('correct');
        } else {
          button.classList.add('incorrect');
        }
      };
      answersContainer.appendChild(button);
    });
  } else {
    document.getElementById('question-container').innerHTML = 'Вопрос не найден.';
  }
}

function showHeader(id) {
  if (id >= 0) {
    const headerText = document.getElementById('header');
    headerText.textContent = questions[id].header;
  }
}

// function showPhoto(id) {
//   if (id >= 0 && id < questions.length) {
//     const photo = document.getElementById('photo');
//     const photo2 = document.getElementById('photo2');
//     photo.src = questions[id].photo;
//     photo2.src = questions[id].photo2;
//   }
// }

// Показать вопрос при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  showQuestion(getQuestionId());
});

document.addEventListener('DOMContentLoaded', () => {
  showHeader(getHeaderId());
});

// document.addEventListener('DOMContentLoaded', () => {
//   showPhoto(getImageId());
// });
