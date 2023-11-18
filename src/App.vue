<template>
  <div>
    <Table :users="users"/>
  </div>
</template>

<script>
import Table from './components/Table';
import { getUsers } from "@/services/userService";

export default {
  name: 'App',
  components: {
    Table
  },
  data() {
    return {
      users: [],
      countOfUser: 150,
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      this.users = await getUsers(this.countOfUser);
    },
  }
}
</script>

<style>
</style>
