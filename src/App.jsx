import './app.css'
import { useState } from 'react';
import Trivia from './components/Trivia';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  
  const data = [
    {
      id: 1,
      question: "What is the capital of Australia?",
      answers: [
        {
          text: "Sydney",
          correct: false,
        },
        {
          text: "Canberra",
          correct: true,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Perth",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Vincentius Bunardi",
          correct: false,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the largest ocean in the world?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which planet is known as the RED PLANET?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who wrote the play ROMEO AND JULIET?",
      answers: [
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Vincentius Bunardi",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the currency of Japan?",
      answers: [
        {
          text: "Yen",
          correct: true,
        },
        {
          text: "Euro",
          correct: false,
        },
        {
          text: "Dollar",
          correct: false,
        },
        {
          text: "Rupiah",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which country is home to the famous ancient monument Stonehenge?",
      answers: [
        {
          text: "France",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "United Kingdom",
          correct: true,
        },
        {
          text: "Egypt",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who is the author of the Harry Potter book series?",
      answers: [
        {
          text: "VINCENTIUS BUNARDI, again?",
          correct: false,
        },
        {
          text: "J.K. Rowling",
          correct: true,
        },
        {
          text: "J.R.R. Tolkien",
          correct: false,
        },
        {
          text: "George R.R. Martin",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: " Which country is known as the Land of the Rising Sun?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "South Korea",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "Thailand",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "What is the tallest mountain in the world?",
      answers: [
        {
          text: "Mount Fuji",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount McKinley",
          correct: false,
        },
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who painted the famous artwork 'The Starry Night'?",
      answers: [
        {
          text: "Salvador Dalí",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "What is the official language of Brazil?",
      answers: [
        {
          text: "Spanish",
          correct: false,
        },
        {
          text: "Portuguese",
          correct: true,
        },
        {
          text: "French",
          correct: false,
        },
        {
          text: "Tagalog",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which continent is the most populous?",
      answers: [
        {
          text: "Asia",
          correct: true,
        },
        {
          text: "Africa",
          correct: false,
        },
        {
          text: "Europe",
          correct: false,
        },
        {
          text: "North America",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who invented the telephone?",
      answers: [
        {
          text: "Thomas Edison",
          correct: false,
        },
        {
          text: "Alexander Graham Bell",
          correct: true,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Isaac Newton",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the largest organ in the human body?",
      answers: [
        {
          text: "Heart",
          correct: false,
        },
        {
          text: "Liver",
          correct: false,
        },
        {
          text: "Brain",
          correct: false,
        },
        {
          text: "Skin",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 400"},
    {id:5, amount:"$ 500"},
    {id:6, amount:"$ 1000"},
    {id:7, amount:"$ 2000"},
    {id:8, amount:"$ 4000"},
    {id:9, amount:"$ 8000"},
    {id:10, amount:"$ 16000"},
    {id:11, amount:"$ 32000"},
    {id:12, amount:"$ 64000"},
    {id:13, amount:"$ 125000"},
    {id:14, amount:"$ 250000"},
    {id:15, amount:"$ 500000"}
  ].reverse();

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
         <Trivia 
         data={data} 
         setStop={setStop} 
         questionNumber={questionNumber}
         setQuestionNumber={setQuestionNumber} />
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
      {/* <h1>Almeera Shezan Noreen</h1> */}
    </div>
  );
}

export default App;
