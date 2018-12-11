<template>
    <div class="main-content">
        <Search />
        <Splash />
        <Press />
        <Perks />
        <Family />
    </div>
</template>

<style lang="scss">
    @import "../scss/base";

    .main-content {
        margin: 0 auto;
        max-width: $maxWidth;
        padding: 10px;
    }
</style>

<script>
    import Search from './search-bar';
    import Splash from './splash';
    import Press from './press-roll';
    import Perks from './perks';
    import Family from './family';

    export default {
        name: "main-content",
        components: {
            Search,
            Splash,
            Press,
            Perks,
            Family
        },
        data: () => ({
            section: 'Main',
        }),
        methods: {},
    }
</script>
