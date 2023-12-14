const mockLogger = {
    info: jest.fn(),
    error: jest.fn(),
    debug: jest.fn(),
};

jest.mock('logger', () => ({
    createLogger: () => mockLogger,
}));

const mockPokemonClient = {
    getListPokemon: jest.fn(),
    getDetailPokemon: jest.fn(),
};

jest.mock('../../main/gateway/client/pokemonClient', () => mockPokemonClient);

const pokemonStatus = require('../../main/usecase/pokemonStatus');

describe('Given pokemonStatus is started', () => {
    describe('When getListPokemonStatus usecase is called', () => {
        describe('And call was a success', () => {
            beforeEach(async () => {
                jest.clearAllMocks();
                mockPokemonClient.getListPokemon.mockResolvedValue({ status: 'operational' });
                await pokemonStatus.getListPokemonStatus();
            });

            it('Then log info is called with "[pokemonStatus:getListPokemonStatus] Starting to getListPokemonStatus"', () => {
                expect(mockLogger.info).toHaveBeenCalledWith('[pokemonStatus:getListPokemonStatus] Starting to getListPokemonStatus');
            });

            it('Then getListPokemon is called', () => {
                expect(mockPokemonClient.getListPokemon).toHaveBeenCalled();
            });

            it('Then logs debug is called', () => {
                expect(mockLogger.debug).toHaveBeenCalledWith('[pokemonStatus:getListPokemonStatus] Success on getListPokemonStatus');
            });
        });

        describe('And error response', () => {
            const expectedError = new Error('error:getPreActiveStatus');

            beforeAll(async () => {
                mockPokemonClient.getListPokemon.mockRejectedValueOnce(expectedError);
                try {
                    await pokemonStatus.getListPokemonStatus();
                } catch (e) {
                    // catch error
                }
            });

            it('Then log error is called with correct description', () => {
                expect(mockLogger.error).toHaveBeenCalledWith('[pokemonStatus:getListPokemonStatus] Error on getListPokemonStatus', {
                    exception: expectedError,
                });
            });
        });
    });




    describe('When getDetailPokemonStatus usecase is called', () => {
        describe('And call was a success', () => {
            const params = {
                pokemonName: 'bulbasaur',
              };

            beforeEach(async () => {
                jest.clearAllMocks();
                mockPokemonClient.getDetailPokemon.mockReturnValue();
                await pokemonStatus.getDetailPokemonStatus(params.pokemonName);
            });

            it('Then log info is called with "[pokemonStatus:getDetailPokemonStatus] Starting to getDetailPokemonStatus"', () => {
                expect(mockLogger.info).toHaveBeenCalledWith('[pokemonStatus:getDetailPokemonStatus] Starting to getDetailPokemonStatus');
            });

            it('Then getDetailPokemon is called', () => {
                expect(mockPokemonClient.getDetailPokemon).toHaveBeenCalledWith(params.pokemonName);
            });

            it('Then logs debug is called', () => {
                expect(mockLogger.debug).toHaveBeenCalledWith('[pokemonStatus:getDetailPokemonStatus] Success on getDetailPokemonStatus');
            });
        });

        describe('And error response', () => {
            const expectedError = new Error('error:getPreActiveStatus');

            beforeAll(async () => {
                mockPokemonClient.getDetailPokemon.mockRejectedValueOnce(expectedError);
                try {
                    await pokemonStatus.getDetailPokemonStatus();
                } catch (e) {
                    // catch error
                }
            });

            it('Then log error is called with correct description', () => {
                expect(mockLogger.error).toHaveBeenCalledWith('[pokemonStatus:getDetailPokemonStatus] Error on getDetailPokemonStatus', {
                    exception: expectedError,
                });
            });
        });
    });
});