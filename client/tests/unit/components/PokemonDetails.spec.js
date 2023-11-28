import {shallowMount} from '@vue/test-utils';
import PokemonDetails from '../../../src/components/PokemonDetails'

const factory = (propsData) => shallowMount(PokemonDetails, {
  propsData: {
    ...propsData
  }
})

const mockProps = {
  detail: {},
  closeDetails: jest.fn()
}

describe("Given PokemonDetails", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = factory(mockProps);
  });

  afterAll(() => {
    wrapper.destroy();
  });

  describe("When page is created", () => {
    it('Then component name is defined', () => {
      expect(wrapper.vm.$options.name).toBe('PokemonDetails')
    });

    it('Then detail is required', () => {
      expect(wrapper.vm.$options.props.detail.required).toBeTruthy();
    });

    it('Then closeDetails is required', () => {
      expect(wrapper.vm.$options.props.closeDetails.required).toBeTruthy();
    });

    it('Then detail value', () => {
      expect(wrapper.vm.detail).toStrictEqual({})
    });

    it('Then closeDetails value', () => {
      expect(wrapper.vm.closeDetails).toBeDefined()
    })
  })

  describe('When closeDetail is called', () => {
    beforeEach(() => {
      wrapper.vm.closeDetail()
    })

    it('Then closeDetails is called', () => {
      expect(wrapper.vm.closeDetails).toHaveBeenCalled()
    })
  })
})