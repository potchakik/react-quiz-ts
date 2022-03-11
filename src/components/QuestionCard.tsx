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
    return (
        <div>
            <p>
                Question: {questionNbr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback} />
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
