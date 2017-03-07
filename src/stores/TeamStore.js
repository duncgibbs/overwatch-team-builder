import Fluxxor from 'fluxxor';
import _ from 'lodash';

const TeamStore = Fluxxor.createStore({
    initialize() {
        this.heroPool = [
            'ana',
            'genji',
            'lucio',
            'mercy',
            'reaper',
            'soldier76',
            'torbjorn',
            'winston',
            'bastion',
            'hanzo',
            'mccree',
            'orisa',
            'reinhardt',
            'sombra',
            'tracer',
            'zarya',
            'd.va',
            'junkrat',
            'mei',
            'pharah',
            'roadhog',
            'symmetra',
            'widowmaker',
            'zenyatta'
        ];
        this.heroPool = _.sortBy(this.heroPool);
        this.selectedHeroes = [];
        this.bindActions(
            'ADD_HERO_TO_TEAM', this.addHeroToTeam,
            'REMOVE_HERO_FROM_TEAM', this.removeHeroFromTeam
        );
    },

    addHeroToTeam(hero) {
        var heroIndex = this.heroPool.indexOf(hero);
        if (heroIndex !== -1) {
            this.heroPool.splice(heroIndex, 1);
            this.selectedHeroes.push(hero);
        }
        this.emit('change');
    },

    removeHeroFromTeam(hero) {
        var heroIndex = this.selectedHeroes.indexOf(hero);
        if (heroIndex !== -1) {
            this.selectedHeroes.splice(heroIndex, 1);
            this.heroPool.push(hero);
            this.heroPool = _.sortBy(this.heroPool);
        }
        this.emit('change');
    },

    getState() {
        return {
            heroPool: this.heroPool,
            selectedHeroes: this.selectedHeroes
        };
    }
});

export default TeamStore;
