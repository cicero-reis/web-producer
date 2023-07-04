<template>
  <AlertComponent />
  <form @submit.prevent="sendMessage" class="was-validated">
    <div class="mb-3 mt-3">
      <label for="message" class="form-label">Mensagem</label>
      <textarea
        v-model="newMessage"
        class="form-control"
        id="message"
        placeholder="Digite sua mensagem"
        required
      >
      </textarea>
      <div class="valid-feedback">Válido.</div>
      <div class="invalid-feedback">Este campo é obrigatório.</div>
    </div>
    <button class="btn btn-primary">Enviar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { ACTION_SEND_MESSAGE } from "@/store/modules/actions";
import AlertComponent from "./AlertComponent.vue";

export default defineComponent({
  name: "MessageForm",

  components: {
    AlertComponent,
  },

  setup() {
    const store = useStore(key);

    const newMessage = ref("");

    const sendMessage = () => {
      store
        .dispatch(ACTION_SEND_MESSAGE, {
          id: 1,
          message: newMessage.value,
        })
        .then(() => clearValue())
        .catch((err) => {
          return err;
        });
    };

    const clearValue = () => {
      newMessage.value = "";
    };

    return {
      newMessage,
      sendMessage,
    };
  },
});
</script>
