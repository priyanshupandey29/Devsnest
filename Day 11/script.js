const quiz = [
  {
    question: "Q1: What does acronym FOSS stand for?",
    a: "Free and Open-Source Software",
    b: "Full Option Sensor System",
    c: "Follow-On Support Service",
    d: "Fiber Optics Science System",
    ans: "ans1",
  },
  {
    question:
      "Q2: Approximately, how much data exists in the digital universe today?",
    a: "2.7 megabytes",
    b: "2.7 gigabytes",
    c: "2.7 zetabytes",
    d: "2.7 terabytes",
    ans: "ans3",
  },
  {
    question:
      "Q3: Which of the following is an important step towards the paperless concept?",
    a: "Doxing",
    b: "Digitizing",
    c: "Debugging",
    d: "Downloading",
    ans: "ans2",
  },
  {
    question:
      "Q4: What technology is used to make telephone calls over the Internet possible?",
    a: "Blutooth",
    b: "Ethernet",
    c: "NFC",
    d: "VoIP",
    ans: "ans4",
  },
  {
    question: "Q5: What tool would you use to reduce the digital image size?",
    a: "Filter",
    b: "Brush",
    c: "Rotate",
    d: "Crop",
    ans: "ans4",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionlist = quiz[questionCount];
  question.innerText = questionlist.question;
  option1.innerText = questionlist.a;
  option2.innerText = questionlist.b;
  option3.innerText = questionlist.c;
  option4.innerText = questionlist.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curanselem) => {
    if (curanselem.checked) {
      answer = curanselem.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  console.log(questionCount);
  if (checkedAnswer == quiz[questionCount].ans) {
    score++;
  }
  questionCount++;
  if (questionCount < quiz.length) {
    loadQuestion();
  } else {
    let Score = document.querySelector("#showScore");
    console.log(Score);
    let btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    btn.className = "btn";
    btn.addEventListener("click", function () {
      window.location.reload();
    });
    let heading = document.createElement("h3");
    heading.innerHTML = `Your score is ${score}/5.`;
    Score.appendChild(heading);
    Score.appendChild(btn);
    Score.style.display = "block";

    console.log(score);
  }
});
