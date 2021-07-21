import React, { Component } from "react"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"
import classes from "./Quiz.module.css"
import Loader from "../../components/UI/Loader/Loader"
import { connect } from "react-redux"
import { fetchQuizById, quizAnswerClick, retryQuiz } from "../../store/actions/quizAC"

class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuiz(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.retryQuizHandler()
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer at all guestions!</h1>

                    {
                        this.props.loading || !this.props.quiz
                            ? <Loader />
                            : this.props.isFinished
                                ? <FinishedQuiz
                                    results={this.props.results}
                                    quiz={this.props.quiz}
                                    onRetry={this.props.retryQuizHandler}
                                />
                                : <ActiveQuiz
                                    answers={this.props.quiz[this.props.activeQuestion].answers}
                                    question={this.props.quiz[this.props.activeQuestion].question}
                                    onAnswerClick={this.props.answerClickHandler}
                                    quizLength={this.props.quiz.length}
                                    answerNumber={this.props.activeQuestion + 1}
                                    state={this.props.answerState}
                                />
                    }

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuiz: id => dispatch(fetchQuizById(id)),
        answerClickHandler: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuizHandler: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)