var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
let quizQuestion = [
    {
        question: "What is a Boolean?",
        answers: {
            A: "A binary variable, having two possible values called “true” and “false.”.",
            
            B: "A funny word",

            C: "A standalone entity that holds multiple values in terms of properties and methods.",

            D: "An array is an ordered list of values",
        },
        correctAnswer: "A"
    },
    {
        question: "What is the correct way to code an array?",
        answers: {
                A: "var cars = ['Saab' | 'Volvo' | BMW];",
                
                B: "var cars = {'Saab:Volvo:BMW};",

                C: "var cars = ['Saab', 'Volvo', 'BMW'];",

                D: "var cars = ['Saab', 'Volvo', 'BMW']",
            },
            correctAnswer: "C"
    },
    {
        question: "How do you add an item to LocalStorage?",
        answers: {
                A:"localStorage.setItem('mycat , 'Tom')",

                B:"virtually places item in localStorage",

                C:"localStorage.getitem('mycat, 'Tom')",

                D:"localStorage.item('mycat, 'Tom')",
        },
            correctAnswer: "A"

        },
        
];