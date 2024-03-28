<script lang="ts" setup>

</script>
<template>
    <header>
        <NuxtLink to="/" class="has-image">
            <img src="/assets/icons/logo.svg" alt="" aria-hidden="true" width="70" height="70"
        </NuxtLink>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Αρχική</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/services">Υπηρεσίες</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">Σχετικά με εμάς</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">Επικοινωνια</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    
</template>
<style scoped>
header a:not(.has-image) {
    /* background-color: rgba(red, 0); */
    /* background-image: linear-gradient(to bottom, red, var(--primary-green)); */
    /* background-position: -20rem; */
    background-image: linear-gradient(to bottom, transparent 60%, var(--primary-green) 40%);
    background-repeat:no-repeat;
    /* background-position: unset; */
    background-position-x: -10rem;
    transition: all 0.7s ease-out;

    &:hover {
        background-position-x: 0rem;
    }
}

.router-link-active:not(.has-image) {
    background-image: linear-gradient(to bottom, transparent 60%, var(--primary-green) 40%);
    background-position-x: 0rem;
}


header {
    background-color: color-mix(in srgb, transparent 20%, var(--primary-off-white));
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

</style>