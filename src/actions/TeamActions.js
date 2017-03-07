const TeamActions = {
    addToTeam(hero) {
        this.dispatch('ADD_HERO_TO_TEAM', hero);
    },

    removeFromTeam(hero) {
        this.dispatch('REMOVE_HERO_FROM_TEAM', hero);
    },    
};

export default TeamActions;
