import Fluxxor from 'fluxxor';

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
        this.selectedHeroes = [];
        this.bindActions(
            'ADD_HERO_TO_TEAM', this.addHeroToTeam
        );
    },

    addHeroToTeam(hero) {
        var heroIndex = this.heroPool.indexOf(hero);
        if (heroIndex !== -1) {
            this.heroPool.splice(heroIndex, 1);
            this.selectedHeroes.push(hero);
        }
        console.log(this.selectedHeroes);
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
