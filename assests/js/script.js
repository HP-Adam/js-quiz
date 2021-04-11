let timeRem = 0;
let score = 0;
let qNum = 0;
let correctAns = "";
let startBtnEl = document.querySelector("#start-btn");
let timeEl = document.querySelector("#timer");
timeEl.textContent = timeRem;
let questionTitleEl = document.querySelector("#question");
let ansOption1El = document.querySelector("#answer1");
let ansOption2El = document.querySelector("#answer2");
let ansOption3El = document.querySelector("#answer3");
let ansOption4El = document.querySelector("#answer4");
const quizQuestions = [
  {
    q: "question 1 here",
    aOp: {
      a1: "*answer option 1",
      a2: "answer option 2",
      a3: "answer option 3",
      a4: "answer option 4",
    },
    a: "a1",
  },
  {
    q: "question 2 here",
    aOp: {
      a1: "answer option 1",
      a2: "answer option 2",
      a3: "*answer option 3",
      a4: "answer option 4",
    },
    a: "a3",
  },
  {
    q: "question 3 here",
    aOp: {
      a1: "answer option 1",
      a2: "*answer option 2",
      a3: "answer option 3",
      a4: "answer option 4",
    },
    a: "a2",
  },
  {
    q: "question 4 here",
    aOp: {
      a1: "answer option 1",
      a2: "answer option 2",
      a3: "answer option 3",
      a4: "*answer option 4",
    },
    a: "a4",
  },
];

const startQuiz = () => {
  timeRem = 60;
  timeEl.textContent = timeRem;
  let countDown = setInterval(() => {
    if (timeRem > 0) {
      timeRem--;
      timeEl.textContent = timeRem;
    } else {
      clearInterval(countDown);
      endScreen();
    }
  }, 1000);

  document.querySelector("#start-area").style.display = "none";
  document.querySelector("#question-area").style.display = "flex";

  quizzing();
};

const quizzing = () => {
  console.log(qNum);
  if (qNum > 3 || timeRem <= 0) {
    endScreen();
  }

  questionTitleEl.textContent = quizQuestions[qNum].q;
  ansOption1El.textContent = quizQuestions[qNum].aOp.a1;
  ansOption2El.textContent = quizQuestions[qNum].aOp.a2;
  ansOption3El.textContent = quizQuestions[qNum].aOp.a3;
  ansOption4El.textContent = quizQuestions[qNum].aOp.a4;
  correctAns = quizQuestions[qNum].a;
};

const checkAnswer = (correctAns, inputAns) => {
  if (correctAns === inputAns) {
    score++;
    qNum++;
    document.querySelector("#right-or-wrong").textContent = "CORRECT!";
  } else {
    qNum++;
    timeRem = timeRem - 10;
    document.querySelector("#right-or-wrong").textContent = "INCORRECT!";
  }
  quizzing();
};

const endScreen = () => {
  document.querySelector("#question-area").style.display = "none";
  document.querySelector("#end-area").style.display = "flex";
  document.querySelector("#end-score").textContent = score;
};

startBtnEl.addEventListener("click", startQuiz);
ansOption1El.addEventListener("click", () => {
  checkAnswer(correctAns, "a1");
});
ansOption2El.addEventListener("click", () => {
  checkAnswer(correctAns, "a2");
});
ansOption3El.addEventListener("click", () => {
  checkAnswer(correctAns, "a3");
});
ansOption4El.addEventListener("click", () => {
  checkAnswer(correctAns, "a4");
});
