import React from "react";

type Props = {
    question: string;
    questionNbr: number
    answers: string[];
    callback: any;
    userAnswer: any;
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

                    <div key={i} >
                        <button disabled={userAnswer} value={answer} onClick={callback} >

                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default QuestionCard;
