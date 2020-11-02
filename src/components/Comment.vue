<template>
  <div class="comment">
    <input
      type="text"
      class="comment--input"
      :value="comments[index].title"
      ref="input"
      @input="changeComment"
      :class="{'edit' : !changed}"
    >
    <div class="comment__card">
      <span>{{comments[index].author}} {{comments[index].date}}</span>
      <span @click="showSubComment" class="comment__card--close">&times;</span>
    </div>
    <div v-if="subComment">
      <Btn
        @click="editComment"
        :title="'Эдит'"
        :edit="true"
      />
      <Btn
        @click="saveChangeComment"
        :title="'Сохранить'"
        :success="true"
      />
      <Btn
        @click="deleteComment(index)"
        :title="'Удалить'"
        :cancel="true"
      />
    </div> 
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Btn from './Btn.vue';
export default {
  props: ["index"],
  name: "Comment",
  components: {
    Btn
  },
  data() {
    return {
      // btnVisible: false,
      subComment: false,
      btnDisabled: false,
      newComment: "",
      changed: false,
    };
  },
  computed: {
    ...mapGetters(["comments"])
  },
  methods: {
    
    showSubComment() {
      this.subComment = !this.subComment;
    },
    editComment() {
      //курсор падает в инпут
      this.$nextTick(() => this.$refs.input.focus());
      this.btnDisabled = true;
      this.changed = true;
    },
    changeComment(event) {
      this.newComment = event.target.value;
    },
    deleteComment() {
      this.deleteComment(this.index);
    },
    saveChangeComment() {
      if (this.newComment) {
        this.changeComment([this.index, this.newComment]);
        this.subComment = false;
      }
    },
    ...mapActions(["deleteComment"]), // всегда внизу должна быть
  },
  // не работает
  // mounted() {
  //   console.log('mounted')
  //   if (localStorage.getItem("comments")) {
  //     this.comments = JSON.parse(localStorage.getItem("comments"));
  //   }
  // },
  // watch: {
  //   comments: {
  //     handler() {
  //       localStorage.setItem("comments", JSON.stringify(this.comments));
  //     }
  //   }
  // }  
  
}
</script>
<style scoped lang="scss">
.comment {
  &--input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    margin: 10px 10px 10px 0;
    background: transparent;
    height: 30px;
    font-size: 24px;
    padding-bottom: 5px;
  }
  &__card{
    &--close{
      font-size: 16px;
      line-height: 1;
      padding-left: 10px;
      cursor: pointer;
    }
  }
}
.edit {
  caret-color: transparent;
}
</style>

