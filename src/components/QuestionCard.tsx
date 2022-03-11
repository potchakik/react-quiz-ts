import React from "react";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  questionNbr: number;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  questionNbr,
  answers,
  callback,
  userAnswer,
  totalQuestions,
}) => {
  console.log(answers);

  return (
    <div>
      <p>
        Question: {questionNbr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer, i) => (
          <div key={i}>
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
