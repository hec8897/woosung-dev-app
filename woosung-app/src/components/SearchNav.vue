<template>
<div class='Nav'>
    <ul>
        <li v-for="(item,i) in HighClassSearch" :key='i'>
            {{item.cropSectionName._text}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            HighClassSearch: "",
            list: "",
        }
    },
    created() {
        this.$Axios.get('api/class')
            .then((result) => {
                this.HighClassSearch = result.data.service.list.item
            })

    },
    methods: {
        SearchInsect() {
            this.$Axios.post('api', {
                    cropName: this.cropName
                })
                .then((result) => {
                    console.log(result)
                    this.list = result.data.service.list.item
                    console.log(result.data.service.list.item)
                })
        }
    }
}
</script>

<style lang="scss">
div.Nav {
    ul {
        padding: 0;
        border-bottom: 1px solid #d0d0d0;

        li {
            display: inline-block;
            padding: 5px 15px;
            border: 1px solid #d0d0d0;
            border-bottom: 0px;
            background: #fff;
            transfrom: t
        }
    }
}
</style>
