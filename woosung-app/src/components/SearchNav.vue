<template>
<div class='Nav'>
    <ul>
        <li v-for="(item,i) in HighClassSearch" :key='i' :class="{active:Mode == item.cropSectionCode._text}" @click="ModeChanger(item.cropSectionCode._text)">
            {{item.cropSectionName._text}}
        </li>
    </ul>
    <div class='midList'>
        <ul>
            <li v-for="(item,i) in MidClassSearch" :key='i'>
                <p>{{item.cropName._text}}</p>
                <div class="imgbox">
                    <img :src="item.thumbImg._text" alt="">
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            Mode: '1',
            HighClassSearch: "",
            MidClassSearch: "",
            list: "",
        }
    },
    created() {
        this.$Axios.get('api/class')
            .then((result) => {
                this.HighClassSearch = result.data.service.list.item
            })
            .then(() => {
                this.ModeChanger(1)
            })

    },
    methods: {

        ModeChanger(i) {
            this.$Axios.post('api', {
                    cropSectionCode: i
                })
                .then(result => {
                    this.MidClassSearch = result.data.service.list.item
                    console.log(this.MidClassSearch)
                })
            return this.Mode = i

        }
    }
}
</script>

<style lang="scss">
div.Nav {
    ul {
        padding: 0;
        border-bottom: 1px solid #d0d0d0;
        justify-content: space-around;

        li {
            cursor: pointer;
            display: inline-block;
            padding: 5px 15px;

            transform: translateY(1px);

            &.active {
                background: #fff;
                border: 1px solid #d0d0d0;
                border-bottom: 0px;
                margin: 0px 3px;
                border-radius: 5px 5px 0px 0px;
            }
        }
    }

    div.midList {

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                flex: 1;

                div.imgbox {
                    width: 300px;
                    height: 200px;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }
            }
        }

    }
}
</style>
