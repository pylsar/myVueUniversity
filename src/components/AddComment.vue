<template>
    <div class="add_comment">
        <input 
            type="text" 
            placeholder="писать тут" 
            v-model="newCommentInput" 
            @click="onBtnVisible"
            class="add_comment--input"
            @keyup.enter="save"
            @keydown.esc="cancel"
            >
        <div v-if="btnVisible" class="add_comment__buttons">
            <Btn
                @click="save"
                :title="'Сохранить'"
                :success="true"
                class="add_comment__buttons__btn"
            />
            <Btn
                @click="cancel"
                :title="'Отмена'"
                :cancel="true"
                class="add_comment__buttons__btn"
            />
        </div>
    </div>
</template> 
<script>
import {mapActions} from 'vuex';
import Btn from './Btn.vue';
export default {
    name: 'AddComment',
    components:{
        Btn
    },
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
            margin-bottom: 20px;           
        }
        &__buttons{
            display: flex;
            &__btn{
                margin-right: 10px;
            }
        }
    }

</style> 