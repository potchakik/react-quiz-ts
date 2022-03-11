import React from "react";

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNumber: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
    question,
    answer,
    callback,
    userAnswer,
    totalQuestions,
}) => {
    return (
        <div>
            <p>
                Question: {question} / {totalQuestions}
            </p>
        </div>
    );
};

export default QuestionCard;
