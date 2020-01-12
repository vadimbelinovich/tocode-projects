<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Notes Page</h1>

        <!-- message -->
        <message v-if="message" :message="message" />

        <!-- new note -->
        <newNote />

        <div class="note-header" style="margin: 36px 0;">
          <h1>{{ title }}</h1>
          <search
            :value="search"
            placeholder="Find a note 1"
            @search="search = $event"
          />

          <div class="icons">
            <span :class="{ active: grid }" @click="grid = true"> </span>
            <span :class="{ active: !grid }" @click="grid = false"> </span>
          </div>
        </div>

        <!-- note list -->
        <notes :notes="notesFilter" :grid="grid" />
      </div>
    </section>
  </div>
</template>

<script>
import message from "@/components/Message.vue";
import notes from "@/components/Notes.vue";
import newNote from "@/components/NewNote.vue";
import search from "@/components/Search.vue";
export default {
  components: {
    message,
    notes,
    newNote,
    search
  },
  data() {
    return {
      search: "",
      title: null,
      grid: true,
      notes: null
    };
  },
  created() {
    this.title = this.$store.getters.getTitle;
    this.notes = this.$store.getters.getNoteList;
  },
  computed: {
    notesFilter() {
      let array = this.notes,
        search = this.search;
      if (!search) return array;
      search = search.trim().toLowerCase();
      array = array.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      return array;
    },
    message() {
      return this.$store.getters.getMessage;
    }
  }
};
</script>
