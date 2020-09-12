import React from 'react';
import App from './App'

export default class AppContainer extends React.Component {
    state = {
        darkMode: false
    }

    componentDidMount() {
        const darkMode = JSON.parse(localStorage.getItem('darkMode'))
        this.setState((prevState) => {
            return { darkMode: darkMode }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const darkMode = JSON.stringify(this.state.darkMode)
        localStorage.setItem('darkMode', darkMode)
    }

    onClick = () => {
        this.setState((prevState) => {
            return { darkMode: !prevState.darkMode }
        })
    }


    render() {
        // const {children} = this.props;

        return (
            <div className={this.state.darkMode ? "app-container dark-mode" : "app-container"}>
                {/* {children} */}
                <App state={this.state} onClick={this.onClick} />
            </div>
        );
    }

}