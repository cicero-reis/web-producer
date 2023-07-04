import { mount,
    key,
    store,
    MessageForm,
    AlertComponent } from './../index'

jest.mock('axios', () => {
    const mockAxiosInstance = { 
        post: jest.fn(() => Promise.reject())
        
    }
    return {
        create: jest.fn(() => mockAxiosInstance),
    };
});

let wrapper: any

beforeEach(async () => {
    wrapper = mount(MessageForm, {     
        global: {
            plugins: [[store, key]],
            stubs: {
                AlertComponent
            }
        }
    })
})


describe('Component Message Form Reject', () => {

    test('should fail to send the message', async () => {

        await wrapper.find('textarea').setValue('Good morning!')
        
        await wrapper.find('form').trigger('submit.prevent')
        
        expect(wrapper.findComponent({ name: 'AlertComponent' }).exists()).toBe(true)
        expect(wrapper.html()).toContain('Ops! Algo deu muito errado')
    })
})


