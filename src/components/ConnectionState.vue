<template>
  <p>State: {{ connected }}</p>
  <div v-if="fooEvents">
    <p>fooEvents: {{ fooEvents }}</p>
    <p>barEvents: {{ barEvents }}</p>
  </div>
</template>

<script>
import { state } from '@/socket';

export default {
  name: 'ConnectionState',
  computed: {
    connected() {
      return state.connected;
    },
    fooEvents() {
      return state.fooEvents;
    },
    barEvents() {
      return state.barEvents;
    },
  },
};
</script>
