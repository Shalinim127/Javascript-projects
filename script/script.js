const quizData = [

    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'Which is MOST used programming language in 2019?',
        a: 'C',
        b: 'JAVA',
        c: 'Python',
        d: 'JavaScript',
        correct: 'b'
    },
    {
        question: 'Which is MOST used programming language in 2019?',
        a: 'C',
        b: 'JAVA',
        c: 'Python',
        d: 'JavaScript',
        correct: 'b'
    },
    {
        question: 'Which is MOST used programming language in 2019?',
        a: 'C',
        b: 'JAVA',
        c: 'Python',
        d: 'JavaScript',
        correct: 'b'
    },
    {
        question: 'Which is MOST used programming language in 2019?',
        a: 'C',
        b: 'JAVA',
        c: 'Python',
        d: 'JavaScript',
        correct: 'b'
    },
];
let currentQuestion = 0;
loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[curretData];

    questionEL.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submitBtn.addEventListener("click", () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert("You Finished! Well Done.")
    }

    // loadQuiz();
})