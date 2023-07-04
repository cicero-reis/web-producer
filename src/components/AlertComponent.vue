<template>
      <div :class="[typeAlert ? activeClass : hidden]" class="alert alert-dismissible fade show">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong id="type-alert"></strong> <span id="message">{{ textAlert }}</span>
    </div>
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'

export default defineComponent({
    name: 'AlertComponent',

    setup() {

        const store = useStore(key)
        
        const typeAlert = computed(() => store.getters.notication) 
        const textAlert = computed(() => store.getters.notificationText)

        const activeClass = computed(() => store.getters.notificationClass)
        const hidden = 'hidden'

        return {
            activeClass,
            hidden,
            typeAlert,
            textAlert
        }
    },
})

</script>

<style scoped="scss">
.hidden {
    display: none;
}
</style>