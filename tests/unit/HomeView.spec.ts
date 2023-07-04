import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('Home Vue', () => {

    test('HomeView', () => {
    
        const wrapper = mount(HomeView)
    
        expect(wrapper).toBeTruthy()
    })
})
