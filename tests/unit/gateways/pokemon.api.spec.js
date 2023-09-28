import axios from "axios";
import pokemonapi from "../../../src/gateways/pokemon.api";

jest.mock('axios', () => ({
    get: jest.fn()
}));

describe('Given pokemonapi', () => {
    describe('When getPokemonList is called', () => {
        const quantity = '10';

        beforeEach(() => {
            pokemonapi.getPokemonList(quantity);
        });

        it('Then axios.get is called', () => {
            expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=10')
        });
    });

    describe('When getPokemonCard is called', () => {
        const name = 'bulbasaur';

        beforeEach(() => {
            pokemonapi.getPokemonCard(name);
        });

        it('Then axios.get is called', () => {
            expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        });
    });
})