import { shallowMount } from '@vue/test-utils'
import Hello from '@/components/hello'

describe('Hello.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'tester'

    const wrapper = shallowMount(Hello, {
      propsData: { name }
    })

    expect(wrapper.text()).toBe('Hello tester!')
  })
})