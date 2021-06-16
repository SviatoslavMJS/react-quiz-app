import React from "react"
import Button from "../UI/Button/Button"
import classes from "./FinishedQuiz.module.css"

const FinishedQuiz = props => {
    const successCount = Object.values(props.results).reduce((total, value) => {
        if (value === "success") total++
        return total
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        "fa",
                        props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
                        classes[props.results[quizItem.id]]
                    ]

                    return (
                        <li>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(" ")} />
                        </li>
                    )
                })}

            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Button type="success">Перейти в список</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz