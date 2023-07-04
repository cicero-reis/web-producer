import { InjectionKey } from 'vue'
import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import { StateMessage, moduleMessage } from './modules'

export interface State {
    stateMessage: StateMessage
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({  
  modules: {
    moduleMessage
  }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}