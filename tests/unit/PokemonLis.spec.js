import {shallowMount} from '@vue/test-utils';
import pokemonapi from '@/gateways/pokemon.api';
import PokemonList from '../../src/components/PokemonList';
import PokemonDetails from '../../src/components/PokemonDetails'

const factory = (propsData) => shallowMount(PokemonList, {
    propsData: {
      ...propsData
    }
  })

const pokemons = {
    data: "pokemons",
};

const pokemonDetail = {
    data: "pokemonDetail"
}

jest.mock("@/gateways/pokemon.api", () => ({
    getPokemonList: jest.fn().mockReturnValue(pokemons),
    getPokemonCard: jest.fn().mockReturnValue(pokemonDetail)
}));

describe('Given PokemonList', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory();
    });

    afterAll(() => {
        wrapper.destroy();
    });

    describe('When page is created', () => {
        it('Then componente name is defined', () => {
            expect(wrapper.vm.$options.name).toBe('PokemonList')
        });
    })

})