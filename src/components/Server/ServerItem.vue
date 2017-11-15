<template>
  <li class="list-group-item" @click="updateDetails">
    Server #{{ server.id }} <span>{{ server.status }}</span>
  </li>
</template>

<script>
  import { eventBus } from '../../main.js';

  export default {
    props: {
      server: {
        type: Object,
        required: true,
        validator: function(obj) {
          return ( typeof(obj.id) === "number" ) &&
                 ( typeof(obj.status) === "string" );
        }
      },
    },
    methods: {
      updateStatusFn: function( newStatus ) {
        this.server.status = newStatus;
      },
      updateDetails(){
        eventBus.updateDetails(this.server, this.updateStatusFn);
      }
    }
  }
</script>

<style scoped>
  span {
    padding-left: 15px;
    color: lightgray;
  }
</style>
