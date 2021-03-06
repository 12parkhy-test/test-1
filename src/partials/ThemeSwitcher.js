import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export default class ThemeSwitcher extends React.Component {

    render() {
        const { state, onClick } = this.props
        return (
            <button onClick={onClick} className="app__dark-mode-btn icon level-right">
                <FontAwesomeIcon icon={state.darkMode ? faSun : faMoon} color={state.darkMode ? '#FFA500' : '#4D5B6B'}/>
            </button>
        );
    }

}