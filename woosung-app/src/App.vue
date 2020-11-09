<template>
<div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class='api_box'>
        <SearchNav />
    </div>
</div>
</template>

<script>
import SearchNav from './components/SearchNav'

export default {
    name: 'App',
    components: {
        SearchNav
    },
    data() {
        return {
            list: ""
        }
    },

}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;

    div.api_box {
        max-width: 1024px;
        margin: 0 auto;
    }
}
</style>
