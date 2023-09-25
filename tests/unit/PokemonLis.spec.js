import {shallowMount} from '@vue/test-utils';
import pokemonapi from '@/gateways/pokemon.api';
import PokemonList from '../../src/components/PokemonList';

const factory = (propsData) => shallowMount(PokemonList, {
    propsData: {
      ...propsData
    }
  })

  const pokemons = {
    data: ["pokemon1", "pokemon2", "pokemon3", "pokemon4"],
  };

const pokemonDetail = {
    data: "pokemonDetail",
};


jest.mock("@/gateways/pokemon.api", () => ({
    getPokemonList: jest.fn().mockReturnValue(pokemons),
    getPokemonCard: jest.fn().mockReturnValue(pokemonDetail),
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

        // it('Teste de filtro de pokemons', () => {
        //     wrapper.setData({ pokemons: [{ name: "Pikachu" }, { name: "Squirtle" }], search: "Pika" });
        //     expect(wrapper.vm.filteredPokemons).toEqual([{ name: "Pikachu" }]);
        //   });
    })

})