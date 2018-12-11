<template>
    <div class="perks">
        <div class="container">
            <div class="container__column">
                <div class="perks__content">
                    <div class="perks__title">
                        The culture
                    </div>

                    <div class="perks__heading">
                        Perks of a lifetime
                    </div>

                    <div class="perks__overview">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <div class="container__column">
                <img src="/assets/images/halloween.jpg" class="perks__image" />
                <div class="container">
                    <div class="container__column">
                        <img src="/assets/images/cloud-racers.jpg" class="perks__image" />
                    </div>
                    <div class="container__column">
                        <img src="/assets/images/anniversary.jpg" class="perks__image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../scss/base";

    .perks {
        background-color: $white;
        color: $charcoal;
        margin: 40px 0 0;
        padding: 0;
        text-align: center;

        @include media-query($small) {
            margin: 0 auto;
            text-align: left;
        }

        &__content {
            padding: 10px;

            @include media-query($medium) {
                padding: 80px;
            }
        }

        &__title {
            font-weight: bold;
            margin: 20px 0;
            text-transform: uppercase;
        }

        &__heading {
            color: $sky;
            font-size: 32px;
            margin: 0 0 20px;
        }

        &__overview {
            line-height: 30px;
        }

        &__image {
            width: 100%;
        }
    }
</style>

<script>
    export default {
        name: "Perks",
        data: () => ({
            section: 'perks section',
        }),
        methods: {},
    }
</script>
