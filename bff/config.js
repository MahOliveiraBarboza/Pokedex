const POKEMON_HOST = process.env.POKEMON_BACKEND_SERVICE_HOST || 'localhost';
const POKEMON_PORT = process.env.POKEMON_BACKEND_SERVICE_PORT || '8080';

const appConfig = {
    baseDir: __dirname,

    pokemon: {
        url: `http://${POKEMON_HOST}:${POKEMON_PORT}`,
    },
};

module.exports = appConfig;
