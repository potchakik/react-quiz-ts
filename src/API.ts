
export enum Difficulty {
    EASY = "",
    MEDIUM = "",
    HARD = ""

}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json()
    console.log(data);

}