const mockLogger = {
    info: jest.fn(),
    error: jest.fn(),
};

jest.mock('logger', () => ({
    createLogger: () => mockLogger,
}));

const mockAxios = require("axios");
const applicationConfig = require('../../../../config');
const pokemonClient = require('../../../main/gateway/client/pokemonClient');

jest.mock('axios');

describe('Given pokemonClient is started', () => {
    const PATH_LINE = {
        path: {
            pokemonName: 'bulbasaur',
        },
    };

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    describe('When getListPokemon is called', () => {
        const endpoint = `${applicationConfig.pokemon.url}/pokemon`;

        describe('And call was a success', () => {
            beforeAll(async () => {
                await pokemonClient.getListPokemon();
            });

            it('Then log info is called', () => {
                expect(mockLogger.info).toHaveBeenCalledWith(`[pokemonClient:getListPokemon] Calling pokemon with endpoint ${endpoint}`);
            });

            it('Then getListPokemon.get is called', () => {
                expect(mockAxios.get).toHaveBeenCalledWith(endpoint);
            });
        });

        describe('And call failed', () => {
            const expectError = new Error('error:getListPokemon');

            beforeAll(async () => {
                mockAxios.get.mockRejectedValueOnce(expectError);
                try {
                    await pokemonClient.getListPokemon();
                } catch (e) {
                    // catch error
                }
            });

            it('Then log error is called', () => {
                expect(mockLogger.error)
                    .toHaveBeenCalledWith('[pokemonClient:getListPokemon] Error calling api pokemon for getListPokemon', {
                        error: expectError,
                    });
            });
        });
    });

    describe('When getDetailPokemon is called', () => {
        const pokemonName = 'bulbasaur';
        const endpoint = `${applicationConfig.pokemon.url}/pokemon/${pokemonName}`;

        describe('And call was a success', () => {
            beforeAll(async () => {
                await pokemonClient.getDetailPokemon(pokemonName);
            });

            it('Then log info is called', () => {
                expect(mockLogger.info).toHaveBeenCalledWith(`[pokemonClient:getDetailPokemon] Calling pokemonName with endpoint ${endpoint}`);
            });

            it('Then getDetailPokemon.get is called', () => {
                expect(mockAxios.get).toHaveBeenCalledWith(endpoint, PATH_LINE);
            });
        });

        describe('And call failed', () => {
            const expectError = new Error('error:getDetailPokemon');

            beforeAll(async () => {
                mockAxios.get.mockRejectedValueOnce(expectError);
                try {
                    await pokemonClient.getDetailPokemon();
                } catch (e) { /** */ }
            });

            it('Then log error is called', () => {
                expect(mockLogger.error)
                    .toHaveBeenCalledWith('[pokemonClient:getDetailPokemon] Error calling api pokemonName for getDetailPokemon', {
                        error: expectError,
                    });
            });
        });
    });
});