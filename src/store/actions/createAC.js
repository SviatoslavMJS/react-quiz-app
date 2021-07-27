import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from "./actionTypes";
import axios from "../../axios/axios-quiz"

export function createQuizQuestion(item) {
    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        try {
            await axios.post("/quizes.json", getState().create.quiz)
            .then(response => console.log("axios",response))
            dispatch(resetQuizCreation())
        } catch (error) {
            console.log(error)
        }

    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}
