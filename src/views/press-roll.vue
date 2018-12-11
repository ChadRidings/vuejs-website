<template>
    <div class="press-roll">
        <div class="container">
            <div class="container__column press-roll__item">
                <img src="/assets/images/glassdoor.png" /><br />
                Glassdoor's Best Place to Work 2015
            </div>
            <div class="container__column press-roll__item">
                <img src="/assets/images/fortune.png" /><br />
                Fortune's Great Place to Work in Tech
            </div>
            <div class="container__column press-roll__item">
                <img src="/assets/images/outside.png" /><br />
                Outside's Best Places to Work
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../scss/base";

    .press-roll {
        background-color: $gray;
        color: $charcoal;
        margin: 0 auto;
        padding: 40px 0;
        text-align: center;

        @include media-query($small) {
            background-color: $white;
        }

        &__item {
            padding: 0 0 40px;

            &:last-of-type {
                padding: 0;
            }

            @include media-query($small) {
                padding: 0 20px;
            }
        }
    }
</style>

<script>
    export default {
        name: "Press",
        data: () => ({
            section: 'press roll section',
        }),
        methods: {},
    }
</script>
