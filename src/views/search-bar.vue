<template>
    <div class="search">
        <i class="fas fa-search"></i>
        <input class="search__box" type="text" placeholder="My perfect job is ..." />
    </div>
</template>

<style lang="scss">
    @import "../scss/base";

    .search {
        background-color: $sky;
        font-weight: 500;
        margin: 0;
        padding: 20px 0;
        text-transform: uppercase;
        width: 100%;

        @include media-query($small) {
            margin: 10px auto;
        }

        &__box {
            background: none;
            border: 0;
            color: $white;
            font-size: 20px;
            margin: 0;
            outline: 0;
            width: 75%;

            &::placeholder {
                color: $white;
            }

            @include media-query($small) {
                font-size: 32px;
                width: 85%;
            }
        }

        .fas {
            color: $white;
            font-size: 20px;
            margin: 0 15px 0 25px;

            @include media-query($small) {
                font-size: 32px;
            }
        }
    }
</style>

<script>
    export default {
        name: "Search",
        data: () => ({
            section: 'search section',
        }),
        methods: {},
    }
</script>
