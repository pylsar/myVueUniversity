<template>
  <div class="comments">
    <h3 class="comments--title">Оставьте Ваш комментарий</h3>
    <AddComment/>
    <div v-for="index in commentsCount" :key="index">
      <Comment :index="index-1"/>
    </div>
  </div>
</template>
<script>
import AddComment from '../components/AddComment.vue';
import Comment from '../components/Comment.vue';
import { mapGetters } from "vuex";
export default {
    name: 'Comments',
    components: {
        AddComment,
        Comment
    },
    computed: {
        ...mapGetters(['commentsCount'])
    },
     
}
</script>  
<style lang="scss">
.comments{
  width: 80%;
  margin: 0px auto;
  &--title{
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>