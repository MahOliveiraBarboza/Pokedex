const pokemonController = require('../pokemonController');

module.exports = (router) => {
    router.get('/api/pokemon', (req, res) => {
        pokemonController.getListPokemonStatus(req, res)
    });

    router.get('/api/pokemon/:pokemonName', (req, res) => {
        pokemonController.getDetailPokemonStatus(req, res, req.params['pokemonName']);
    });

    return router;
};