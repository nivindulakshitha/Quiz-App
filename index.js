document.addEventListener("DOMContentLoaded", () => {
    loadNext();
});

const selectionHandler = (element) => {
    document.querySelectorAll("#answer-container p").forEach(loopElement => {
        if (loopElement == element) {
            element.classList.add("select");
            element.getElementsByTagName("input")[0].checked = true;
        } else {
            loopElement.classList.remove("select");
            loopElement.getElementsByTagName("input")[0].checked = false;
        }
    })
}

document.querySelector("body > main > section.controllers > button").addEventListener("click", function () {
    const container = document.querySelector("#answer-container");

    if (container.getAttribute("status") == "nutral") {
        container.setAttribute("status", "done")
    } else {
        container.setAttribute("status", "nutral")
        loadNext();
    }
})

function loadNext() {
    document.getElementsByTagName("header")[0].innerHTML = questionnier.name;
    const Questions = questionnier.questions;
    document.getElementById("future").innerText = Object.keys(Questions).length;

    for (i = 0; i < Object.keys(Questions).length; i++) {
        const questionId = Object.keys(Questions)[i];
        document.getElementById("present").innerText = questionId;

        if (!Questions[questionId].wait) {
            Questions[questionId].wait = true;

            document.getElementById("quiz-number").innerText = questionId;
            document.getElementById("quiz-question").innerText = Questions[questionId].question;

            const answersElements = document.querySelectorAll("#answer-container p");

            for (i = 0; i < answersElements.length; i++) {
                answersElements[i].getElementsByTagName("label")[0].innerText = Questions[questionId]["answers"][i];

                if (Questions[questionId]["correct"] == Questions[questionId]["answers"][i]) {
                    answersElements[i].classList.add("answer");
                } else {
                    answersElements[i].classList.remove("answer");
                }

                answersElements[i].getElementsByTagName("input")[0].checked = false;
                answersElements[i].classList.remove("select");
            }

            break;
        }
    }
}

const questionnier = {
    "name": "Programming Quiz",
    "questions": {
        "1": {
            "question": "What does HTML stand for?",
            "answers": ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Marking Language"],
            "correct": "Hyper Text Markup Language",
            "wait": false
        },
        "2": {
            "question": "What is the output of the following Python code?\nprint(2 + 2 * 2)",
            "answers": ["6", "8", "10", "22"],
            "correct": "6",
            "wait": false
        },
        "3": {
            "question": "What is the purpose of CSS?",
            "answers": ["To provide structure to a webpage", "To style the visual presentation of a webpage", "To perform calculations in a webpage", "To add interactivity to a webpage"],
            "correct": "To style the visual presentation of a webpage",
            "wait": false
        },
        "4": {
            "question": "What is the capital of France?",
            "answers": ["Berlin", "Madrid", "Paris", "Rome"],
            "correct": "Paris",
            "wait": false
        },
        "5": {
            "question": "What does the '++' operator do in programming?",
            "answers": ["Subtract 1 from a variable", "Add 1 to a variable", "Multiply a variable by 2", "Divide a variable by 2"],
            "correct": "Add 1 to a variable",
            "wait": false
        },
        "6": {
            "question": "Which of the following is a programming language?",
            "answers": ["JPEG", "HTML", "Python", "MP3"],
            "correct": "Python",
            "wait": false
        },
        "7": {
            "question": "What does SQL stand for?",
            "answers": ["Simple Question Language", "Structured Query Language", "Sequential Query Language", "Standard Query Language"],
            "correct": "Structured Query Language",
            "wait": false
        },
        "8": {
            "question": "What is the main purpose of JavaScript?",
            "answers": ["To style webpages", "To provide structure to webpages", "To add interactivity to webpages", "To define the layout of webpages"],
            "correct": "To add interactivity to webpages",
            "wait": false
        },
        "9": {
            "question": "What is the extension of a JavaScript file?",
            "answers": [".css", ".html", ".js", ".txt"],
            "correct": ".js",
            "wait": false
        },
        "10": {
            "question": "What does CSS stand for?",
            "answers": ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            "correct": "Cascading Style Sheets",
            "wait": false
        },
        "11": {
            "question": "Which of the following is NOT a valid programming language?",
            "answers": ["Java", "C++", "HTML", "Python"],
            "correct": "HTML",
            "wait": false
        },
        "12": {
            "question": "What does PHP stand for?",
            "answers": ["Personal Hypertext Processor", "Hypertext Preprocessor", "Pretext Hypertext Processor", "PHP: Hypertext Preprocessor"],
            "correct": "PHP: Hypertext Preprocessor",
            "wait": false
        },
        "13": {
            "question": "Which of the following is a server-side scripting language?",
            "answers": ["HTML", "CSS", "JavaScript", "PHP"],
            "correct": "PHP",
            "wait": false
        },
        "14": {
            "question": "What is the output of the following code snippet in Java?\nSystem.out.println(3 == 3);",
            "answers": ["true", "false", "3", "3 == 3"],
            "correct": "true",
            "wait": false
        },
        "15": {
            "question": "What does IDE stand for?",
            "answers": ["Integrated Development Environment", "Integrated Design Environment", "Interactive Development Environment", "Integrated Debugging Environment"],
            "correct": "Integrated Development Environment",
            "wait": false
        },
        "16": {
            "question": "Which of the following is a relational database management system?",
            "answers": ["MongoDB", "MySQL", "SQLite", "Firebase"],
            "correct": "MySQL",
            "wait": false
        },
        "17": {
            "question": "What is the primary purpose of a constructor in object-oriented programming?",
            "answers": ["To perform calculations", "To allocate memory", "To initialize object properties", "To define inheritance relationships"],
            "correct": "To initialize object properties",
            "wait": false
        },
        "18": {
            "question": "What is the extension of a Cascading Style Sheets file?",
            "answers": [".css", ".html", ".js", ".txt"],
            "correct": ".css",
            "wait": false
        }
    }
}
