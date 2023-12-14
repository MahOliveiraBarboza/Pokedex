const logger = require('logger').createLogger('logs.log');

const pokemonClient = require('../gateway/client/pokemonClient');

module.exports = {
    getListPokemonStatus: async () => {
        try {
            logger.info('[pokemonStatus:getListPokemonStatus] Starting to getListPokemonStatus');

            const response = await pokemonClient.getListPokemon();

            logger.debug('[pokemonStatus:getListPokemonStatus] Success on getListPokemonStatus');

            return response;
        } catch (exception) {
            logger.error('[pokemonStatus:getListPokemonStatus] Error on getListPokemonStatus', { exception });
            throw exception;
        }
    },

    getDetailPokemonStatus: async (pokemonName) => {
        try {
            logger.info('[pokemonStatus:getDetailPokemonStatus] Starting to getDetailPokemonStatus');

            const response = await pokemonClient.getDetailPokemon(pokemonName);

            logger.debug('[pokemonStatus:getDetailPokemonStatus] Success on getDetailPokemonStatus');

            return response;
        } catch (exception) {
            logger.error('[pokemonStatus:getDetailPokemonStatus] Error on getDetailPokemonStatus', { exception });
            throw exception;
        }
    },
};
