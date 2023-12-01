const logger = require('logger').createLogger('logs.log');
const pokemonStatus = require('../../usecase/pokemonStatus');

const pokemonController = {
    getListPokemonStatus: async (req, res) => {
        logger.info('[pokemonController:getListPokemonStatus] Starting to getListPokemonStatus');
        try {
            const { pokemon } = req.body;

            const response = await pokemonStatus.getListPokemonStatus(pokemon);

            logger.info('[pokemonController:getListPokemonStatus] Success on getListPokemonStatus');

            res.status(200).send(response.data);
        } catch (error) { 
            logger.error('[pokemonController:getListPokemonStatus] Error on getListPokemonStatus');
            res.status(500).send();
        }
    },

    getDetailPokemonStatus: async (req, res) => {
        logger.info('[pokemonController:getDetailPokemonStatus] Starting to getDetailPokemonStatus');
        try {
            const { pokemonName } = req.body;

            const response = await pokemonStatus.getDetailPokemonStatus(pokemonName);

            logger.info('[pokemonController:getDetailPokemonStatus] Success on getDetailPokemonStatus');

            res.status(200).send(response.data);
        } catch (error) { 
            logger.error('[pokemonController:getDetailPokemonStatus] Error on getDetailPokemonStatus');
            res.status(500).send();
        }
    },
};

module.exports = pokemonController;
