import React, { Component } from 'react';
import '../assets/stylesheets/HeroPicker.css'; 
import HeroPortrait from './HeroPortrait';
import flux, { connectToStores } from '../flux';
const TeamStore = flux.store('TeamStore');
import _ from 'lodash';

class HeroPicker extends Component {
    renderHeroPortraits() {
        return _.map(this.props.heroPool, (hero) => {
            return (
                <HeroPortrait key={hero} hero={hero} handleClick={this.props.addHeroToTeam} />
            );
        });
    }

    render() {
        return (
            <div className='hero-portraits'>
                {this.renderHeroPortraits()}
            </div>
        );
    }
}

HeroPicker = connectToStores(HeroPicker, [TeamStore], () => {
    return { heroPool: TeamStore.getState().heroPool };
});

export default HeroPicker;
