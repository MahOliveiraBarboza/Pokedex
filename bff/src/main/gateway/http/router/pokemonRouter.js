const pokemonController = require('../pokemonController');

module.exports = (router) => {
    router.get('/api/pokemon', async(req, res) => {
        await pokemonController.getListPokemonStatus(req,res)
    });

    router.get('/api/pokemon/:pokemonName', async(req, res) => {
        await pokemonController.getDetailPokemonStatus(req. res, req.params['pokemonName'])
    });

    return router;
};