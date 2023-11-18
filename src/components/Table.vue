<template>
  <label for="searchText">Поиск по таблице: </label>
  <input :value="searchText" @input="onInput($event)" />
  <table>
    <tr>
      <th v-for="columnName in getColumnNames" :key="columnName">
        <button @click="sortData(columnName)">
          {{ columnName }}
        </button>
      </th>
    </tr>
    <tr v-for="user in sortedUsers" :key="user.uuid">
      <td v-for="columnName in getColumnNames" :key="columnName">
        {{ user[columnName] }}
      </td>
    </tr>
  </table>
</template>

<script>
import { filterDataBySearch, sortData } from "@/common/utils";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Table",
  props: {
    users: Array,
  },
  data() {
    return {
      searchText: "",
      sortColumn: null,
      sortOrder: "asc",
    };
  },
  computed: {
    filteredUsers() {
      return filterDataBySearch(this.users, this.searchText);
    },
    sortedUsers() {
      return sortData(this.filteredUsers, this.sortColumn, this.sortOrder)
    },
    getColumnNames() {
      if (this.users.length) {
        return Object.keys(this.users[0]);
      }

      return [];
    },
  },
  methods: {
    onInput(e) {
      this.searchText = e.target.value;
    },
    sortData(columnName) {
      if (this.sortColumn === columnName) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortColumn = columnName;
        this.sortOrder = "asc";
      }
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
