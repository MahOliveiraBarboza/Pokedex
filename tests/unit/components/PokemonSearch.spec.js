import {shallowMount} from '@vue/test-utils';
import PokemonSearch from '../../../src/components/PokemonSearch';

const factory = (propsData) => shallowMount(PokemonSearch, {
    propsData: {
      ...propsData
    }
});

describe('Given PokemonSearch', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory();
    });

    afterAll(() => {
        wrapper.destroy();
    });

    describe('When page is created', () => {
        it('Then componente name is defined', () => {
            expect(wrapper.vm.$options.name).toBe('PokemonSearch')
        });

        it('Then localSearch value', () => {
            expect(wrapper.vm.localSearch).toEqual('')
        });
    });

    describe('When watch is called', () => {
        // const newSearchValue = 'Value search';
        
        beforeEach(() => {
            wrapper.vm.localSearch = 'Value search';
          });
      
        it('Then localSerach is true', () => {
            expect(wrapper.emitted().input).toBeTruthy()
        });

        it('Then localSearch receives a value', () => {
            expect(wrapper.emitted().input[0]).toEqual(['Value search']);
        })
    })
});
