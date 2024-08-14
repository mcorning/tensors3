<template>
  <div id="app">
    <ConnectionManager />
    <ConnectionState />
    <MyForm />
  </div>
</template>

<script>
import ConnectionManager from '@/components/ConnectionManager.vue';
import ConnectionState from '@/components/ConnectionState.vue';
import MyForm from '@/components/MyForm.vue';

export default {
  name: 'App',
  components: {
    ConnectionManager,
    ConnectionState,
    MyForm,
  },
};
</script>

<style>
/* Add your styles here */
</style>
