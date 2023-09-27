import {shallowMount} from '@vue/test-utils';
import pokemonapi from '../../../src/gateways/pokemon.api';
import PokemonList from '../../../src/components/PokemonList';

const factory = (propsData) => shallowMount(PokemonList, {
    propsData: {
      ...propsData
    }
})

const pokemonsListMock = {
    data: {
        results: [
            {
                name: 'Bulbasaur',
                url: 'https://pokeapi.co/api/v2/pokemon/1/'
            },
            {
                name: 'Charmander',
                url: 'https://pokeapi.co/api/v2/pokemon/2/'
            },
            {
                name: 'Squirtle',
                url: 'https://pokeapi.co/api/v2/pokemon/3/'
            }
        ]
    } 
};

const pokemonDetailMock = {
    data: "pokemonDetail",
};

jest.mock("../../../src/gateways/pokemon.api", () => ({
    getPokemonList: jest.fn().mockReturnValue(pokemonsListMock),
    getPokemonCard: jest.fn().mockReturnValue(pokemonDetailMock),
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

        it('Then pokemonSearch is defined', () => {
            expect(wrapper.vm.$options.components.pokemonSearch).toBeDefined()
        });

        it('Then pokemonDetails is defined', () => {
            expect(wrapper.vm.$options.components.pokemonDetails).toBeDefined()
        });

        it('Then pokemons value', () => {
            expect(wrapper.vm.pokemons).toEqual(pokemonsListMock.data.results)
        });

        it('Then search value', () => {
            expect(wrapper.vm.search).toEqual('')
        });

        it('Then showDetails value', () => {
            expect(wrapper.vm.showDetails).toBeFalsy()
        });

        it('Then pokemonDetail value', () => {
            expect(wrapper.vm.pokemonDetail).toEqual({})
        });
    });

    describe('When page is mounted', () => {
        it('Then Mounted is defined', () => {
            expect(wrapper.vm.pokemons).toEqual(pokemonsListMock.data.results)
        });

        it('Then api is called', () => {
            expect(pokemonapi.getPokemonList).toHaveBeenCalledWith('10')
        })
    });

    describe('When computed is called', () => {
        describe('And search is empty', () => {
            beforeEach(() => {
                wrapper.vm.search = '';
            });

            it('Then return the original pokemons list if search is empty', () => {
            expect(wrapper.vm.filteredPokemons).toEqual(pokemonsListMock.data.results);
          });
        });

        describe('And search has value', () => {
            beforeEach(() => {
                wrapper.vm.search = 'Squirtle';
            });

          it('Then return only pokemons that match the search', () => {
            expect(wrapper.vm.filteredPokemons).toEqual([{ name: 'Squirtle', url: "https://pokeapi.co/api/v2/pokemon/3/" }])
          });
        });
    });

    describe('When methods is called', () => {
        const pokemon = {
            name: 'Bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/'
        };
        
        describe('And getId is called', () => {
            let idPokemon;
              
            beforeEach(() => {
                idPokemon = wrapper.vm.getId(pokemon)
            });

            it('Then getId is called', () => {
                expect(idPokemon).toBe(1);
            });
        });

        describe('And getName is called', () => {
            let namePokemon;
              
            beforeEach(() => {
                namePokemon = wrapper.vm.getName(pokemon)
            });

            it('Then getName is called', () => {
                expect(namePokemon).toBe('Bulbasaur');
            });
        });

        describe('And openCardDetails is called', () => {              
            beforeEach(() => {
                wrapper.vm.openCardDetails(pokemon)
            });

            it('Then api is called', () => {
                expect(pokemonapi.getPokemonCard).toHaveBeenCalledWith('Bulbasaur')
            });

            it('Then openCardDetails is defined', () => {
                expect(wrapper.vm.pokemonDetail).toEqual(pokemonDetailMock.data)
            });

            it('Then showDetails is true', () => {
                expect(wrapper.vm.showDetails).toBeTruthy()
            });
        });

        describe('And closeCardDetails is called', () => {
            beforeEach(() => {
                wrapper.vm.closeCardDetails()
            });

            it('Then showDetails is false', () => {
                expect(wrapper.vm.showDetails).toBeFalsy()
            });
        })
 
    })

});