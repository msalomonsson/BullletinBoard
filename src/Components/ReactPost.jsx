import React, { useState } from "react";
import PostLike from "./PostLike";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ReactPost = ({ question }) => {
  const [showLiked, setShowLiked] = useState(false);

  const addLike = () => {
    setShowLiked(!showLiked);
  };

  const answerList = question.answer.map((answer, i) => {
    return <li key={i}>{answer}</li>;
  });

  return (
    <div className="reactpost">
      <h1>{question.question}</h1>
      <h3>
        <ul>{answerList}</ul>
      </h3>

      <div className="btn-div">
        {!showLiked ? (
          <FaThumbsUp
            style={{ color: "green", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => addLike()}
          ></FaThumbsUp>
        ) : (
          ""
        )}
        {showLiked ? <PostLike /> : ""}
      </div>
    </div>
  );
};

export default ReactPost;
