const logger = require('logger').createLogger('logs.log');

const { default: axios } = require("axios");
const applicationConfig = require('../../../../config');

module.exports = {
    getListPokemon: async (pokemon) => {
        const endpoint = `${applicationConfig.pokemon.url}/${pokemon}`;

        logger.info(
            `[pokemonClient:getListPokemon] Calling pokemon with endpoint ${endpoint}`,
        );

        const config = {
            path: {
                pokemon: `${pokemon}`,
            },
        };

        try {
            return await axios.get(endpoint, config);
        } catch (error) {
            logger.error(
                '[pokemonClient:getListPokemon] Error calling api pokemon for getListPokemon',
                { error },
            );
            throw error;
        }
    },

    getDetailPokemon: async (pokemonName) => {
        const endpoint = `${applicationConfig.pokemon.url}/pokemon/${pokemonName}`;

        logger.info(
            `[pokemonClient:getDetailPokemon] Calling pokemonName with endpoint ${endpoint}`,
        );

        const config = {
            path: {
                pokemonName: `${pokemonName}`,
            },
        };

        try {
            return await axios.get(endpoint, config);
        } catch (error) {
            logger.error(
                '[pokemonClient:getDetailPokemon] Error calling api pokemonName for getDetailPokemon',
                { error },
            );
            throw error;
        }
    },
};

