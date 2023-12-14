const mockLogger = {
    info: jest.fn(),
    error: jest.fn(),
};

jest.mock('logger', () => ({
    createLogger: () => mockLogger,
}));

const mockUseCase = {
    getListPokemonStatus: jest.fn(),
    getDetailPokemonStatus: jest.fn(),
};

jest.mock('../../../main/usecase/pokemonStatus', () => mockUseCase);

const pokemonController = require('../../../main/gateway/http/pokemonController');
const pokemonStatus = require('../../../main/usecase/pokemonStatus');

describe('Given pokemonController is started', () => {
    const req = {
        params: {
            pokemonName: 'bulbassaur',
        },
    };

    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('When getListPokemonStatus method is called', () => {

        describe('And pokemonStatus usecase returns with success', () => {
            const response = {
                status: 200,
            };

            beforeEach(async () => {
                pokemonStatus.getListPokemonStatus.mockResolvedValue(response);
                await pokemonController.getListPokemonStatus(req, res);
            });

            it('Then log info is called with "[pokemonController:getListPokemonStatus] Starting to getListPokemonStatus"', () => {
                expect(mockLogger.info).toHaveBeenCalledWith('[pokemonController:getListPokemonStatus] Starting to getListPokemonStatus')
            });

            it('Then getListPokemonStatus usecase is called correctly', () => {
                expect(pokemonStatus.getListPokemonStatus).toHaveBeenCalled();
            });

            it('Then call log info with "[pokemonController:getListPokemonStatus] Success on getListPokemonStatus"', () => {
                expect(mockLogger.info)
                    .toHaveBeenCalledWith('[pokemonController:getListPokemonStatus] Success on getListPokemonStatus');
            });

            it('Then return status code 200', () => {
                expect(res.status).toHaveBeenCalledWith(200);
            });

            it('Then return data', () => {
                expect(res.send).toHaveBeenCalled(response.data);
            })
        });

        describe('And pokemonStatus usecase returns status 500', () => {
            const error = {
                response: {
                    status: 500,
                },
            };

            beforeEach(async () => {
                pokemonStatus.getListPokemonStatus.mockRejectedValue(error);
                await pokemonController.getListPokemonStatus(req, res);
            });

            it('Then call log error with "[pokemonController:getListPokemonStatus] Error on getListPokemonStatus"', () => {
                expect(mockLogger.error)
                    .toHaveBeenCalledWith('[pokemonController:getListPokemonStatus] Error on getListPokemonStatus');
            });

            it('Then return status code 500', () => {
                expect(res.status).toHaveBeenCalledWith(500);
            });
        });
    });




    describe('When getDetailPokemonStatus method is called', () => {

        describe('And pokemonStatus usecase returns with success', () => {
            const response = {
                status: 200,
                data: {
                    name: 'bulbasaur',
                }
            };

            beforeEach(async () => {
                pokemonStatus.getDetailPokemonStatus.mockResolvedValue(response);
                await pokemonController.getDetailPokemonStatus(req, res);
            });

            it('Then log info is called with "[pokemonController:getDetailPokemonStatus] Starting to getDetailPokemonStatus"', () => {
                expect(mockLogger.info).toHaveBeenCalledWith('[pokemonController:getDetailPokemonStatus] Starting to getDetailPokemonStatus')
            });

            it('Then getDetailPokemonStatus usecase with correct params is called', () => {
                expect(mockUseCase.getDetailPokemonStatus).toHaveBeenCalledWith('bulbassaur');
            });
            //erro aqui

            it('Then call log info with "[pokemonController:getDetailPokemonStatus] Success on getDetailPokemonStatus"', () => {
                expect(mockLogger.info)
                    .toHaveBeenCalledWith('[pokemonController:getDetailPokemonStatus] Success on getDetailPokemonStatus');
            });

            it('Then return status code 200', () => {
                expect(res.status).toHaveBeenCalledWith(200);
            });

            it('Then return data', () => {
                expect(res.send).toHaveBeenCalledWith(response.data);
            })
        });

        describe('And pokemonStatus usecase returns status 500', () => {
            const error = {
                response: {
                    status: 500,
                },
            };

            beforeEach(async () => {
                pokemonStatus.getDetailPokemonStatus.mockRejectedValue(error);
                await pokemonController.getDetailPokemonStatus(req, res);
            });

            it('Then call log error with "[pokemonController:getDetailPokemonStatus] Error on getDetailPokemonStatus"', () => {
                expect(mockLogger.error)
                    .toHaveBeenCalledWith('[pokemonController:getDetailPokemonStatus] Error on getDetailPokemonStatus');
            });

            it('Then return status code 500', () => {
                expect(res.status).toHaveBeenCalledWith(500);
            });
        });
    });
});
