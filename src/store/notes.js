export default {
  state: {
    title: "Note App",
    message: null,
    status: ['regular','marked','important'],
    note: {
      title: "",
      descr: "",
      edit: false,
      status: 'regular',
    },
    noteList: [
      {
        title: "First Note",
        descr: "Description for first note",
        status: 'marked',
        edit: false,
        date: "08.01.2020, 01:52:51"
      },
      {
        title: "Second Note",
        descr: "Description for second note",
        status: 'important',
        edit: false,
        date: "08.01.2020, 01:50:11"
      },
      {
        title: "Third Note",
        descr: "Description for 3d note",
        status: 'regular',
        edit: false,
        date: "07.01.2020, 01:40:10"
      }
    ]
  },
  mutations: {
    addNote(state, payload) {
      let { title, descr, edit, status } = payload;

      state.noteList.push({
        title,
        descr,
        edit,
        status,
        date: new Date(Date.now()).toLocaleString()
      });
    },
    changeMessage(state, payload) {
      state.message = payload;
    },
    removeNote(state, payload) {
      state.noteList.splice(payload, 1);
    },
    editNoteTitle(state, index) {
      state.noteList.forEach(el => {
        el.edit = false
      });
      state.noteList[index].edit = true;
    },
    updateNoteTitle(state, payload) {
      state.noteList[payload.index].title = payload.value;
      state.noteList[payload.index].edit = false;
    },
    cancelEdit(state, index){
      state.noteList[index].edit = false;
    }
  },
  actions: {
    addNote({ commit }, payload) {
      commit("addNote", payload);
    },
    changeMessage({ commit }, payload) {
      commit("changeMessage", payload);
    },
    removeNote({ commit }, index) {
      commit("removeNote", index);
    },
    editNoteTitle({ commit }, index) {
      commit("editNoteTitle", index);
    },
    updateNoteTitle({ commit }, payload) {
      commit("updateNoteTitle", payload);
    },
    cancelEdit({ commit }, index) {
      commit("cancelEdit", index);
    },
  },
  getters: {
    getNoteList(state) {
      return state.noteList;
    },
    getTitle(state) {
      return state.title;
    },
    getNote(state) {
      return state.note;
    },
    getMessage(state) {
      return state.message;
    },
    getStatus(state) {
      return state.status;
    }
  }
};
