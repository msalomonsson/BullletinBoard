import React from "react";
import ReactPost from "./ReactPost";

const BulletinBoard = () => {
  let questions = [
    {
      id: 1,
      question: "Vad är tre fördelar med att använda React?",
      answer: [
        "Snabbt",
        "Flexibilitet, html i javascript(jsx)",
        "Fokus på gränssnittet",
      ],
    },
    {
      id: 2,
      question: "Vad är tre nackdelar med att använda React?",
      answer: [
        "Inte täcker upp allt (bara UI)",
        "Uppdateras snabbt",
        "React stöds inte i någon webbläsare äldre än IE8",
      ],
    },
    {
      id: 3,
      question: "Vad är tre skillnader mellan React och Angular?",
      answer: [
        "Angular är ett fjullfjädrat ramverk, medans angular bara är ett javascipt biblotek",
        "Angular är baserat på typescript och React på javascript",
        "React är skapat av facebook och angular av google",
      ],
    },
    {
      id: 4,
      question: "Vad är tre bibliotek man kan använda med React?",
      answer: ["Framer Motion", "React-Bootstrap", "Material-UI"],
    },
  ];

  return (
    <div>
      {questions.map((question, i) => {
        return <ReactPost key={i} question={question} />;
      })}
    </div>
  );
};

export default BulletinBoard;
