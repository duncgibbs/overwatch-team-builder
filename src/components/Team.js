import React, { Component } from 'react';
import HeroPortrait from './HeroPortrait';
import flux, { connectToStores } from '../flux';
const TeamStore = flux.store('TeamStore');
import _ from 'lodash';

class Team extends Component {
    renderTeamPortraits() {
        return _.map(this.props.team, (hero) => {
            return (
                <HeroPortrait key={hero} hero={hero} handleClick={this.props.removeHeroFromTeam} />
            );
        });
    }

    render() {
        return (
            <div className="team-container">
                {this.renderTeamPortraits()}
            </div>
        );
    }
}

Team = connectToStores(Team, [TeamStore], () => {
    return { team: TeamStore.getState().selectedHeroes };
});

export default Team;
