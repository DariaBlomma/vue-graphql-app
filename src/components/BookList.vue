<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Book List
        <b-link href="#/add-Book">(Add Book)</b-link>
      </h2>
      <b-table striped hover :items="books" :fields="fields">
        <!-- <template slot="actions" scope="row"> -->
        <template #cell(actions)="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import gql from "graphql-tag";
// import router from "../router";

const GET_BOOKS = gql`
  {
    books {
      id
      title
      author
    }
  }
`;

export default {
  name: "BookList",
  apollo: {
    books: {
      query: GET_BOOKS,
      pollInterval: 300
    }
  },
  data() {
    return {
      fields: [
        {
          key: 'title',
          label: 'title',
          sortable: true, 
          class: "text-left"
        },
        {
          key: 'author',
          label: 'author',
          sortable: true, 
          class: "text-left"
        },
        {
          key: 'actions',
          label: 'actions',
          class: "text-center"
        }
      ],
      books: []
    };
  },
  methods: {
    details(book) {
      this.$router.push({ name: "ShowBook", params: { id: book.id } });
    }
  }
};
</script>

<style>
.table {
  width: 96%;
  margin: 0 auto;
}
</style>