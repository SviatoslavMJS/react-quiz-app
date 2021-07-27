import React, { Component } from "react"
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle"
import classes from "./Layout.module.css"
import Drawer from "../../components/Navigation/Drawer/Drawer"
import { connect } from "react-redux"

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuOnCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuOnCloseHandler}
                    isAuthenticated={this.props.isAuthenticated}
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)