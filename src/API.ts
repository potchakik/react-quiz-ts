import { shuffleArray } from "./utils";

export type Question = {
    category: string;
    correct_answers: string;
    difficulty: string;
    incorrect_answers: string[];
    type: string;
    question: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "",
    MEDIUM = "",
    HARD = ""

}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json()
    return data.results.map((question: Question) => {
        return {
            ...question,
            answer: shuffleArray([...question.incorrect_answers, question.correct_answers])
        }
    })
}