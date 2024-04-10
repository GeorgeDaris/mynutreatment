<script lang="ts" setup>
// TODO: Add this to a layout

let navOpen = ref(false);

const toggleNav = (() => {
    navOpen.value = !navOpen.value;
})
</script>
<template>
    <header class="site-header">
        <NuxtLink to="/" class="has-image">
            <img src="/assets/icons/logo.svg" alt="" aria-hidden="true" width="70" height="70"
        </NuxtLink>
            <nav :class="navOpen ? 'open' : ''">
                <button class="nav-close" v-if="navOpen" @click="toggleNav">
                    <img src="/assets/icons/close-bold-svgrepo-com.svg" alt="" width="50px" height="50px">
                </button>
                <ul>
                    <li>
                        <NuxtLink to="/" @click="toggleNav">Αρχική</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/services" @click="toggleNav">Υπηρεσίες</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" @click="toggleNav">Σχετικά με εμάς</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog" @click="toggleNav">Blog</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" @click="toggleNav">Επικοινωνια</NuxtLink>
                    </li>
                </ul>
            </nav>
        <button class="nav-toggle" @click="toggleNav">
            <img src="/assets/icons/burger-menu-svgrepo-com.svg" alt="" width="50px" height="50px" aria-hidden="true">
        </button>
        <!-- {{ navOpen }} -->
    </header>
    
</template>
<style scoped>
header {
    background-color: var(--white);
    background-color: var(--white-semi-transparent);
    padding-block: 0.5rem;
    padding-inline: 1rem;
    margin-inline: auto;
    margin-bottom: 2rem;
    max-width: var(--max-width);
    border-bottom-right-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
    backdrop-filter: blur(1rem);

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;

    img {

    }

    nav {
        /* width: 80%; */

    
        ul {
            display: flex;
            justify-content: space-between;
            padding-left: 0;
            gap: 2rem;

            li {
                list-style-type: none;

                a {
                    text-decoration: none;
                    font-family: var(--header-font);
                    color: var(--dark-blue);
                }
            }
        }
    }
}

.nav-toggle, .nav-close {
    display: none;
}

@media screen and (max-width: 767px) {
    header nav {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        z-index: 120;
        background-color: var(--white-semi-transparent);

        display: grid;
        visibility: hidden;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(1rem);
        transform: translateX(25rem);
        opacity: 0;
        transition: all 0.7s ease-in-out;

        &.open {
            visibility: visible;
            transform: translateX(0);
            opacity: 1;
            /* transition: all 1s; */

        }

        ul {
            flex-direction: column;
            text-align: center
        }
    }

    .nav-toggle, .nav-close {
        display: grid;
        justify-content: center;
        width: fit-content;
        background-color: unset;
        border: unset;
        cursor: pointer;

        &:focus {
            outline: 0.1rem solid var(--dark-brown);
            border-radius: 2px;
        }
    }

    .nav-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
}

</style>