<template>
    <div class="add_comment">
        <input 
            type="text" 
            placeholder="писать тут" 
            v-model="newCommentInput" 
            @click="onBtnVisible"
            class="add_comment--input"
            >
        <div v-if="btnVisible">
            <button @click="save" class="btn--success">Save</button>
            <button @click="cancel" class="btn--warning">Cancel</button>
        </div>
    </div>
</template> 
<script>
import {mapActions} from 'vuex';
export default {
    name: 'AddComment',
    data(){
        return{
            newCommentInput: '',
            btnVisible: false
        }
    },
    methods: {
        ...mapActions(['addComment']),
        onBtnVisible(){
            this.btnVisible = true;
        },
        cancel(){
            this.btnVisible = false;
            this.newCommentInput = '';
        },
        save(){
            if(this.newCommentInput){
                this.addComment(this.newCommentInput);
            }
            this.cancel();
        },

    },
   
    
}
</script>    
<style lang="scss">
    .add_comment {
        &--input {
            height: 30px;
            width: 80%;
            font-size: 24px;
            outline: none;
        }
    }
</style> 