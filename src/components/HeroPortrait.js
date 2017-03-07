import React, { Component } from 'react';

class HeroPortrait extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.addHeroToTeam(event.target.name);
    }

    render() {
        return (
            <div className={`${this.props.hero}-portrait`}>
                <img src={`./images/hero_portraits/${this.props.hero}.png`}
                    alt={this.props.hero} name={this.props.hero}
                    onClick={this.handleClick}/>
            </div>
        );
    }
}

export default HeroPortrait;
