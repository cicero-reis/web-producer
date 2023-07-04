import { Module } from 'vuex'
import { State } from '@/store'
import http from '@/http'
import IMessage from '@/interface/IMessage'
import { ACTION_SEND_MESSAGE } from './actions';
import { MUTATION_ALERT_NOTIFICATION } from './mutations'
import { NotificationAlert, NotificationText } from '@/enum/Notification';

export interface StateMessage {
    messages: IMessage[],
    alertType: boolean,
    alertText: string ,
    alertClass: string
}

export const moduleMessage: Module<StateMessage, State> = {

    state: {
        alertType: false,
        alertText: '',
        alertClass: '',
        messages: [],
    },

    mutations: {
        [MUTATION_ALERT_NOTIFICATION](state, payload) {
            state.alertType = payload.type
            state.alertText = payload.text
            state.alertClass = payload.class
        }
    },

    actions: {
        [ACTION_SEND_MESSAGE]({commit}, data: IMessage) {
            let payload = {}
            
            if (!data.message) {
                payload = {type: true, text: NotificationText.TEXT_WARNING, class: NotificationAlert.ALERT_WARNING}
                commit(MUTATION_ALERT_NOTIFICATION, payload)
                return
            }

            return http.post('/send-message', data)
                    .then(() => {
                        payload = {type: true, text: NotificationText.TEXT_SUCCESS, class: NotificationAlert.ALERT_SUCCESS}
                        commit(MUTATION_ALERT_NOTIFICATION, payload)
                    }).catch(() => {
                        payload = {type: true, text: NotificationText.TEXT_DANGER, class: NotificationAlert.ALERT_DANGER}
                        commit(MUTATION_ALERT_NOTIFICATION, payload)
                    })
        }
    },

    getters: {
        notication(state) {
            return state.alertType
        },
        notificationText(state) {
            return state.alertText
        },
        notificationClass(state) {
            return state.alertClass
        }
    }
}