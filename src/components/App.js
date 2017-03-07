import React, { Component } from 'react';
import logo from '../assets/images/logo_with_title.png';
import '../assets/stylesheets/App.css';
import Team from './Team';
import HeroPicker from './HeroPicker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.flux.store('TeamStore').getState();
        this.addHeroToTeam = this.props.flux.actions.team.addToTeam;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Team Builder</h2>
                </div>
                <div className="team-display">
                    <Team />
                </div>
                <div className="hero-picker">
                    <HeroPicker heroPool={this.state.heroPool} addHeroToTeam={this.addHeroToTeam} />
                </div>
            </div>
        );
    }
}

export default App;
