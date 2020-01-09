<template>
  <!-- new note -->
  <div class="new-note">
    <label>Title</label>
    <input 
      v-model="note.title" 
      type="text" />
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    <label>Choose status</label>
    <select v-model="note.status">
      <option 
        v-for="(option, index) in status" 
        :value="option" 
        :key="index"> {{ option }} </option>
    </select>
    <button 
      class="btn btnPrimary" 
      @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      note: null,
      status: null
    };
  },
  created() {
    this.note = this.$store.getters.getNote;
    this.status = this.$store.getters.getStatus;
    this.message = this.$store.getters.getMessage;
  },
  methods: {
    addNote() {
      if (this.note.title === "") {
        this.$store.dispatch("changeMessage", "Title can't be blank!");
        return false;
      }
      this.$store.dispatch("addNote", this.note);
      this.$store.dispatch("changeMessage", null);
      this.note.title = "";
      this.note.descr = "";
      this.note.status = "regular";
    }
  }
};
</script>

<style lang="scss">
.new-note {
  text-align: center;
  & select {
    display: block;
    margin: 10px auto 30px;
  }
  & p {
    margin-top: 10px;
  }
  & textarea {
    margin-bottom: 30px;
  }
}
</style>

