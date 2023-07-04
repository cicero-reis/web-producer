import { mount,
    key,
    store,
    MessageForm,
    AlertComponent } from './../index'

jest.mock('axios', () => {
    const mockAxiosInstance = { 
        post: jest.fn(() => Promise.resolve())
        
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


describe('Component Message Form', () => {

    test('Create Component Message Form', () => {
        expect(wrapper).toBeTruthy()
    })

    test('the message field is required', async () => {
        
        await wrapper.find('textarea').setValue('')
        
        await wrapper.find('form').trigger('submit.prevent')

        expect(wrapper.findComponent({ name: 'AlertComponent' }).exists()).toBe(true)
        expect(wrapper.html()).toContain('O campo mensagem é obrigatório')
    })

    test('must send the message successfully', async () => {    

        await wrapper.find('textarea').setValue('Good morning!')
        
        await wrapper.find('form').trigger('submit.prevent')
        
        expect(wrapper.findComponent({ name: 'AlertComponent' }).exists()).toBe(true)
        expect(wrapper.html()).toContain('Ok! Mensagem enviada com sucesso')
    })
})


