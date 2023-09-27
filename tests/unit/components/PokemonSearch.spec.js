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
});
