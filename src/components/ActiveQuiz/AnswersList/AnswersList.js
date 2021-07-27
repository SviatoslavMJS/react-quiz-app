import React from "react"
import AnswerItem from "./AnswerItem/AnswerItem"
import classes from "./AnswersList.module.css"

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer) => {
            return (
                <AnswerItem
                    key={answer.id}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state? props.state[answer.id] : null}
                />
            )
        })}
    </ul>
)

export default AnswersList