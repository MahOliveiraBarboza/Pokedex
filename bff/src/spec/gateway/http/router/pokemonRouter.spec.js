const mockPokemonController = {
    getListPokemonStatus: jest.fn(),
    getDetailPokemonStatus: jest.fn(),
};

jest.mock('../../../../main/gateway/http/pokemonController', () => mockPokemonController);

const findRoute = (mockRoutes, routeName, callbackIndex = 1, middlewareIndex = 1) => {
    const call = mockRoutes.mock.calls.find(c => c[0].toString() === routeName.toString())
    return { name: call[0], callback: call[callbackIndex], middleware: call[middlewareIndex] }
}

const pokemonRouter = require('../../../../main/gateway/http/router/pokemonRouter');

describe('Given router is called', () => {
    let mockContext
    let routerRoute
    const req = {
        params: {
            pokemonName: 'bulbasaur'
        },
    };
    const res = {};

    beforeEach(() => {
        jest.clearAllMocks()
        mockContext = {
            get: jest.fn()
        };
        pokemonRouter(mockContext);
    });

    describe('When route /api/pokemon is called', () => {
        beforeEach(() => {
            routerRoute = findRoute(mockContext.get, '/api/pokemon')
            routerRoute.callback(req, res);
        });

        it('Then pokemonController.getListPokemonStatus is called', () => {
            expect(mockPokemonController.getListPokemonStatus).toHaveBeenCalledWith(req, res);
        });
    });

    describe('When route /api/pokemon/:pokemonName is called', () => {
        beforeEach(() => {
            routerRoute = findRoute(mockContext.get, '/api/pokemon/:pokemonName');
            routerRoute.callback(req, res);
        });

        it('Then pokemonController.getDetailPokemonStatus is called', () => {
            expect(mockPokemonController.getDetailPokemonStatus).toHaveBeenCalledWith(req, res, 'bulbasaur');
        });
    });
});
