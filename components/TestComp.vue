<script lang="ts" setup>
const test = ref(true);

</script>
<template>
    <Transition name="post" appear>
        <div v-if="test">
            <div class="test">He<span>l</span>lo</div>
            <button>hellllloooooo</button>
            <img src="~/assets/icons/logo.svg" alt="" srcset="">
            <h2>HELLLO Υπηρεσίες</h2>
        </div>
    </Transition>
</template>
<style scoped lang="postcss">
div {
    span {
        color: red;
    }
}
</style>