const questions =[
    {
        topic: "History",
        question: "Which Chinese Dynasty built the Great Wall of China?",
        choices: ["Qin", "Wei", "Han", "Xhao"],
        answer: "Qin"
    },

    {
        topic: "History",
        question: "Which Egyptian Pharoh built the largest pyramid in Egypt?",
        choices: ["Khafre", "Ptolemy", "Khufu", "Hatshepsut"],
        answer: "Khufu"
    },
    
    {
        topic: "History",
        question: "Who was the first emperor of the Roman Empire?",
        choices: ["Nero", "Caesar", "Justinian", "Constantine"],

    },

    {
        topic: "Math",
        question: "What's the solution to this quadratic equation: x^2 + 12x + 36 = 0?",
        choices: ["x = 2 or x = 6", "x = -6 or x = -6", "x = 6 or x = 6", "x = 12 or x = 3"],
        answer: "x = 6 or x = 6"

    },

    {
        topic: "Math",
        question: "The Solution of 4x - 6 = 14 is:",
        choices: ["7", "6", "4", "5"],
        answer: "5"

    },

    {
        topic: "Math",
        question: "Rewrite the expression with positive exponents. If the expression is numeric, then evaluate it",
        choices: ["x^5", "1/x^5", "1/x^-5", "5x"],
        answer: "1/x^5"

    },

    {
        topic: "Science",
        question: "What is a carbon footprint?" ,
        choice: ["The increase in temperature every year", "The total greenhouse gas emissions caused by people, products, or events", "The measurement of carbon dioxide levels in the atmosphere", "The impact of global warming in plants and animals"],
        answer: "The total greenhouse gas emissions caused by people, products, or events"
    },

    {
        topic: "Science",
        question: "What is the unit of electrical resistance?",
        choice: ["Volt", "Pound", "Ohm", "Watt"],
        answer: "Ohm"

    },

    {
        topic: "Science",
        question: "How many muscles are there in the human body?",
        choice: ["Between 600-899", "More than 900", "Between 300-599"],
        answer: "Between 600-899"
    }
];

document.getElementById('begin-button').addEventListener('click', () =>   {
    loadNextQuestion();
});

function loadNextQuestion() {
    const randomIndex = Math.floor(Math.random() * question.length);
    const question = questions[randomIndex];
    const container = document.getElementById('question-container');
    container.innerHTML = '<h2>${question.topic}: ${question.question}</h2>';

    question.choice.forEach(choice => {
        const choiceElement = document.createElement('div');
        c


    })



}