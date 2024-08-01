<template>
    <div>
        <header>
            <img :src="data.image" alt="">
            <p>{{ data.description }}</p>
        </header>
        
        <ContactForm />

        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56237.7009479391!2d25.085147875931053!3d35.32012953281903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ea9e000947e55a9%3A0x95e8fac4c1174105!2zTXludXRyZWF0bWVudCB8IM6UzrnOsc-Ez4HOv8-Gzr_Ou8-MzrPOv8-CIHwgzpnPic6szr3Ovc6xIM6gzrHPgM6xz4TOts6xzr3Org!5e0!3m2!1sen!2sgr!4v1719310895692!5m2!1sen!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>
<script setup>
const {data} = await useAsyncData('contact', async () => {
    return await queryContent('main/contact/contact').findOne();
})
</script>
<style scoped>
header {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    gap: 2rem;
    align-items: center;

    img {
        border-radius: var(--radius-sm);
        width: 100%;
        /* max-width: 50rem; */
        max-height: 30rem;
        object-fit: cover;
        filter: hue-rotate(-14deg)
    }

    p {
        margin-bottom: 2rem;
        margin-right: 2rem;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            /* top: 15%;
            transform: translateY(-50%); */
            top: -2rem;
            right: -2rem;
            padding-block: 5rem;
            display: block;
            width: 20rem;
            height: 10rem;
            padding-block: 2rem;
            background-color: var(--off-red);
            border-radius: var(--radius-sm);
            border-top-left-radius: var(--radius-lg);
            border-bottom-left-radius: var(--radius-lg);
            z-index: -1;
        }
    }
}

@media screen and (max-width: 767px) {
    header {
        grid-template-columns: 1fr;
        margin-bottom: 4rem;

        img {
            max-height: 15rem;
            position: relative;
            left: -2rem;
        }

        p {
            margin-bottom: unset;
            margin-right: unset;

            &::after {
                content: unset;
            }
        }
    }
}

.map {
    border-radius: var(--radius-sm) var(--radius-sm) var(--radius-sm) var(--radius-sm);
    filter: hue-rotate(-10deg);
    width: 90vw;
    margin-inline: auto;
    margin-top: 4rem;
}
</style>