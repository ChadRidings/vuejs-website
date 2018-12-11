<template>
    <div class="splash">
        <div class="banner">
            <h1 class="banner__heading">
                Realize Your<br />
                P<i class="fas fa-play-circle"></i>tential
            </h1>

            <h2 class="banner__subheading">
                cloud-based applications to recruit, train, manage,
                and connect people across your organization.
            </h2>
        </div>

        <div class="container people">
            <div class="container__column">
                <img src="/assets/images/banner-person-1.jpg" />
                <div class="people__heading">
                    Smart, cool and<br />
                    ready to prove it
                </div>
                <div class="people__subheading">
                    Khoa, Lead Product Manager
                </div>
                <i class="fas fa-quote-left"></i>
            </div>

            <div class="container__column">
                <div class="people__heading medium-up">
                    It's a new day,<br />
                    learn something
                </div>
                <div class="people__subheading medium-up">
                    Alyssa, Sales Manager
                </div>
                <i class="fas fa-quote-left medium-up"></i>
                <img src="/assets/images/banner-person-2.jpg" />
                <div class="people__heading small-down">
                    It's a new day,<br />
                    learn something
                </div>
                <div class="people__subheading small-down">
                    Alyssa, Sales Manager
                </div>
                <i class="fas fa-quote-left small-down"></i>
            </div>

            <div class="container__column">
                <img src="/assets/images/banner-person-3.jpg" />
                <div class="people__heading">
                    We're growing fast,<br />
                    and so can you
                </div>
                <div class="people__subheading">
                    Ravin, Director of Development
                </div>
                <i class="fas fa-quote-left"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../scss/base";

    .splash {
        background: url('/assets/images/splash-background.jpg') no-repeat $charcoal top center;
        background-size: cover;
        color: $white;
        font-weight: 500;
        margin: 0 auto;
        padding: 10px;
        width: 100%;

        .banner {
            margin: 50px auto;
            text-align: center;

            @include media-query($small) {
                margin: 180px auto;
            }

            &__heading {
                font-size: 55px;
                font-weight: bold;
                line-height: 60px;
                margin: 0;
                text-transform: uppercase;

                @include media-query($small) {
                    font-size: 100px;
                    line-height: 90px;
                    margin: 180px auto 0;
                }
            }

            &__subheading {
                color: $sky;
                font-size: 1em;
                font-weight: 600;
                margin: 20px auto 0;
                max-width: 500px;
                text-transform: uppercase;
            }

            .fas {
                color: $sky;
                font-size: 45px;

                @include media-query($small) {
                    font-size: 85px;
                }
            }
        }

        .people {
            margin: 0 auto 40px;
            width: 96%;
            text-align: center;

            &__heading {
                font-size: 1.5em;
                font-weight: bold;
                margin: 15px 0;
                padding: 0;
                text-transform: uppercase;
            }

            &__subheading {
                color: $sky;
            }

            .fas {
                color: $sky;
                font-size: 32px;
                margin: 15px 0 40px;

                @include media-query($small) {
                    margin: 15px 0;
                }
            }

            img {
                width: 100%;
            }
        }

        .medium-up {
            display: none;

            @include media-query($small) {
                display: block;
            }
        }

        .small-down {
            display: block;

            @include media-query($small) {
                display: none;
            }
        }
    }
</style>

<script>
    function keepDecimal(num) {
        return Number.parseFloat(num).toFixed(2);
    }

    export default {
        name: 'Splash',
        data: () => ({
            section: 'splash section',
        }),
        methods: {},
    }
</script>
