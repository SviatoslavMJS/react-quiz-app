import React, { Component } from "react"
import Button from "../../components/UI/Button/Button"
import Input from "../../components/UI/Input/Input"
import classes from "./Auth.module.css"

class Auth extends Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form className={classes.AuthForm}>

                        <Input 
                        label="Email" 
                        />

                        <Input 
                        label="Password" 
                        errorMessage="TEST"
                        />

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>

                </div>

            </div>
        )
    }
}

export default Auth