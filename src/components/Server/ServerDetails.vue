<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="id">
            <p>Server id: {{ id }}</p>
            <p>Server status: {{ status }}</p>
            <button @click="updateStatusFn(status = 'Normal')"
            >Set to "Normal"</button>
        </template>
        <p v-else>Server Details are currently not updated</p>
    </div>
</template>

<script>
  import { eventBus} from '../../main.js';

  export default {
    data: function() {
      return {
        id: 0,
        status: '',
        updateStatusFn: Function
      }
    },
    created() {
      eventBus.$on('serverChanged', (obj) => {
        this.id = obj.server.id;
        this.status = obj.server.status;
        this.updateStatusFn = obj.callback;
      });
    }
  }
</script>
