function search() {
  let input = document.getElementById('searchInput');
  let filter = input.value.toUpperCase();
  let ul = document.getElementById('wordList');
  let li = ul.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    let word = li[i];
    if (word.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

let questions = [
  {
    question: "А вы знаете, как правильно ставить ударение в слове ЕРЕТИК?",
    answers: ["ерЕтик", "еретИк"]
  },
    {    question: "А вы знаете, как правильно ставить ударение в слове ЗВОНИШЬ?", answers: ["звонИшь", "звОнишь"]
 },
    {   question: "А вы знаете, как правильно ставить ударение в слове ПОДЕЛЕННЫЙ?", 
     answers: ["поделЕнный", "подЕленный"]
    },

  // Добавь другие вопросы по мере необходимости
];

let currentQuestion = 0;

function showQuestion() {
  document.getElementById('question').innerText = questions[currentQuestion].question;
  let answerOptions = "";
  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    answerOptions += "<button onclick=\"checkAnswer('" + questions[currentQuestion].answers[i] + "')\">" + questions[currentQuestion].answers[i] + "</button>";
  }
  document.getElementById('answerOptions').innerHTML = answerOptions;
}

function checkAnswer(response) {
  if (response === 'correct') {
    alert('Правильно!');
  } else {
    alert('Неправильно!');
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    alert('Это была последняя викторина!');
  }
}

showQuestion();
function showExplanation(word) {
  var modal = document.getElementById("explanationModal");
  var explanationText = document.getElementById("explanationText");
  explanationText.innerText = getExplanation(word);
  modal.style.display = "block";
}

function getExplanation(word) {
  //  ключи - это слова, а значения - их объяснения
  const wordExplanations = {
    "еретик": "В данном слове ударение падает на слог с буквой И — еретИк.",
    "семинар": "В упомянутом выше слове ударение падает на слог с буквой А — семинАр.",
    "акцент": "В данном слове ударение ставят на слог с буквой Е — акцЕнт.",
    // Добавь другие слова соответственно
  };

  if (wordExplanations.hasOwnProperty(word)) {
    return wordExplanations[word];
  } else {
    return "Объяснение для этого слова отсутствует";
  }
}

function closeExplanationModal() {
  var modal = document.getElementById("explanationModal");
  modal.style.display = "none";
}

function sortWordsAlphabetically() {
  var wordList = document.getElementById("wordList");
  var words = Array.from(wordList.getElementsByTagName("li"));
  
  words.sort(function(a, b) {
    return a.textContent.localeCompare(b.textContent);
  });
}
function divideWordsIntoRows() {
  var wordList = document.getElementById("wordList");
  var words = Array.from(wordList.getElementsByTagName("li"));

  var rows = Math.ceil(words.length / 3);

  for (var i = 0; i < rows; i++) {
    var row = document.createElement("div");
    row.classList.add("row");

    for (var j = i * 3; j < (i + 1) * 3 && j < words.length; j++) {
      row.appendChild(words[j]);
    }

    wordList.appendChild(row);
  }
}

// Вызов функции после загрузки страницы
window.onload = function() {
  divideWordsIntoRows();
};