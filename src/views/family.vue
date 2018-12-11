<template>
    <div class="family">
        <div class="family__title">
            Our culture
        </div>
        <div class="family__heading">
            A Family Named Cornerstone
        </div>
        <div class="container">
            <div class="container__column family__photo" v-for="photo in photos1">
                <img :src="photo.url" />
            </div>
        </div>
        <div class="container">
            <div class="container__column family__photo" v-for="photo in photos2">
                <img :src="photo.url" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../scss/base";

    .family {
        background-color: $white;
        color: $charcoal;
        margin: 0 auto;
        padding: 50px 0;
        text-align: center;

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

        &__photo {
            padding: 2px;
            img {
                width: 100%;
            }
        }
    }
</style>

<script>
    var photoRoll1 = [
        { url: '/assets/images/photo-roll/354.jpg' },
        { url: '/assets/images/photo-roll/355.jpg' },
        { url: '/assets/images/photo-roll/356.jpg' },
        { url: '/assets/images/photo-roll/357.jpg' },
        { url: '/assets/images/photo-roll/358.jpg' },
        { url: '/assets/images/photo-roll/359.jpg' },
        { url: '/assets/images/photo-roll/360.jpg' }
    ];

    var photoRoll2 = [
        { url: '/assets/images/photo-roll/361.jpg' },
        { url: '/assets/images/photo-roll/362.jpg' },
        { url: '/assets/images/photo-roll/363.jpg' },
        { url: '/assets/images/photo-roll/364.jpg' },
        { url: '/assets/images/photo-roll/365.jpg' },
        { url: '/assets/images/photo-roll/366.jpg' },
        { url: '/assets/images/photo-roll/367.jpg' }
    ];

    export default {
        name: "Family",
        data: () => ({
            section: 'family section',
            photos1: photoRoll1,
            photos2: photoRoll2
        }),
        methods: {},
    }
</script>
