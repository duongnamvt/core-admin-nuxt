<template>
    <div class="w-full flex flex-wrap">
        <vue-editor class="w-full" v-model="content"></vue-editor>
    </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            content: 'demo content'
        }
    }
}
</script>