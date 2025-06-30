// 1. question dynamic render
// question and answer
// 2. check option selected
//     1 no _ warning 
//     2 yes - score then go to render next question

// 3. total score      

const quiz = [
    {
        question: "How many Infinity Stones are there?",
        option1: "3",
        option2: "5",
        option3: "6",
        option4: "8",
        answer: "6"
    },
     {
        question: "What is the only food that cannot go bad?",
        option1: "Dark chocolate",
        option2: "Peanut butter",
        option3: "Canned tuna",
        option4: "Honey",
        answer: "Honey"
    },
     {
        question: "What element does the chemical symbol Au stand for?",
        option1: "Silver",
        option2: "Gold",
        option3: "Salt",
        option4: "Magnesium",
        answer: "Gold"
    },
     {
        question: "Which was René Magritte’s first surrealist painting?",
        option1: "Not to Be Reproduced",
        option2: "Personal Values",
        option3: "The Lost Jockey",
        option4: "The Lovers",
        answer: "The Lost Jockey"
    },
     {
        question: "What’s the heaviest organ in the human body?",
        option1: "Brain",
        option2: "Liver",
        option3: "Skin",
        option4: "Heart",
        answer: "Skin"
    }
]


const question =document.querySelector("#question");

// console.log(question);
// console.log(question.textContent);
//  target level
const option_a =document.querySelector("#text_option_a");
const option_b =document.querySelector("#text_option_b");
const option_c =document.querySelector("#text_option_c");
const option_d =document.querySelector("#text_option_d");

// select radio button
// const answer_element= document.getElementsByClassName("answer");
// console.log(answer_element);

const answer_element= document.querySelectorAll(".answer");
// console.log(answer_element);

const button =document.querySelector("#btn");

let currentQuestion = 0;
let score = 0 ;

//* access array[currentQuestion]
// ! dynamic render 
// console.log(quiz[currentQuestion].question);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].option1;
option_b.textContent = quiz[currentQuestion].option2;
option_c.textContent = quiz[currentQuestion].option3;
option_d.textContent = quiz[currentQuestion].option4;

button.addEventListener('click',()=>{
const checkedAns = document.querySelector('input[type="radio"]:checked');
// console.log(checkedAns);
// for lebel
// console.log(checkedAns.nextSibling.textContent)

if (checkedAns === null) {
alert("Please Select an answer  ")
    
} else {
    // var x =checkedAns.nextSibling.textContent;
    // console.log(x)
    // console.log(checkedAns.nextSibling.textContent)
    if(checkedAns.nextSibling.textContent === quiz[currentQuestion].answer){
        score++;
    }
// checkedAns.checked = false;
currentQuestion++;
if (currentQuestion < quiz.length) {
    question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].option1;
option_b.textContent = quiz[currentQuestion].option2;
option_c.textContent = quiz[currentQuestion].option3;
option_d.textContent = quiz[currentQuestion].option4;
// next question me checked na ho
checkedAns.checked = false;
}
else{
    alert(`your score is : ${score} out of ${quiz.length}`);
    location.reload();
}
}
});