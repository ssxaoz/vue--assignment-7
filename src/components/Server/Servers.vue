<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <server-item
            v-for="serv in servers" :key="serv.id"
            :server="serv">
          </server-item>
        </ul>
    </div>
</template>

<script>
  import ServerItem from './ServerItem.vue';

  export default {
    data: function(){
      return {
        servers: [
          { id: 1, status: 'Normal'},
          { id: 2, status: 'Critical'},
          { id: 3, status: 'Unknown'},
          { id: 4, status: 'Shutdown'},
          { id: 5, status: 'Normal'},
          { id: 6, status: 'Hacked'}
        ]
      };
    },
    components: {
      ServerItem
    }
  }
</script>
