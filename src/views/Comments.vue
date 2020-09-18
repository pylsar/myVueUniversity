<template>
  <div id="comments">
    <h3>Оставьте Ваш комментарий</h3>
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