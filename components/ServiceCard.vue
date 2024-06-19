<template>
    <div class="service-card">
        <h4>{{service.title}}</h4>
        <p v-if="service.subheader" class="sub">{{ service.subheader }}</p>
        <div class="icon-wrapper">
            <NuxtImg :src="service.icon" alt="" aria-hidden="true"/>
        </div>
        <ContentRenderer :value="service" />
    </div>
</template>
<script setup>
// const props = defineProps<{
//   service: {
//     type: Object,
//     required: true,

//     title: string,
//     icon: string
//   }
// }>()
const props = defineProps(['service'])

</script>
<style scoped>
.service-card {
    position: relative;
    background-color: var(--pure-white);
    padding: 1rem;
    border: var(--card-border);
    border-radius: var(--radius-sm);
    max-width: 24rem;
}

@media screen and (max-width: 767px) {
    .service-card {
        max-width: unset;
    }
}

.icon-wrapper {
    width: 7rem;
    height: 7rem;
    position: absolute;
    top: -3.5rem;
    right: 1rem;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: var(--primary-red);
    border-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-60);
    border-top-right-radius: var(--radius-40);

    &:deep(img) {
        width: 90%;
        height: 90%;
        margin: auto;
        opacity: 0.75;
        object-fit: contain;
    }
}

h4 {
    margin-block: 1rem;
    /* preventing the icon from hiding the text */
    margin-right: 8rem;
    font-weight: normal;
}

.sub {
    margin-bottom: 1rem;
    margin-top: -0.5rem;
}
</style>
