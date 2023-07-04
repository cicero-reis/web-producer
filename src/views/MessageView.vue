<template>
    <div class="container mt-3">
        <h2 class="text-secondary">AWS SQS - <span>Simple Queue Service</span></h2>
        <br>
        <MessageForm />
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import MessageForm from '@/components/MessageForm.vue';

export default defineComponent({
  
    name: 'MessageView',

    components: {
        MessageForm
    }
});
</script>
