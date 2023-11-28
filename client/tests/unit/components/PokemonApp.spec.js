import {shallowMount} from '@vue/test-utils';
import PokemonApp from '../../../src/components/PokemonApp';

const factory = (propsData) => shallowMount(PokemonApp, {
    propsData: {
      ...propsData
    }
})
describe('Given PokemonApp', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory();
    });

    afterAll(() => {
        wrapper.destroy();
    });

    describe('When page is created', () => {
        it('Then componente name is defined', () => {
            expect(wrapper.vm.$options.name).toBe('AppView')
        });
    });
});
