<template>
  <footer>
    <img src="../assets/icons/white-logo.svg" alt="logo" class="logo" width="200" height="200">
    <div class="container">
      <!-- <div>
        <h3>Μάθετε περισσότερα</h3>
          <ul>
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
      </div> -->
      <div>
        <h3>Επικοινωνια</h3>
        <ul>
          <li>
            <a href="tel:+30 6978312684">+30 6978312684</a>
          </li>
          <li>
            <a href="mailto:info@mynutreatment.com">info@mynutreatment.com</a>
          </li>
        </ul>
        <!-- <a href="https://" target="_blank" rel="noopener noreferrer"></a> -->
      </div>
      <img src="../assets/icons/wheat-stems.svg"  alt="wheat-stacks" class="wheat">
      <!-- <img loading="lazy" src="../assets/icons/wheat-stems.svg"  alt="wheat-stacks" class="wheat"> -->
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
footer {
  position: relative;
  background-color: var(--dark-brown);
  color: var(--pure-white);
  border-top-left-radius: var(--radius-md);
  border-top-right-radius: var(--radius-md);
  display: flex;
  padding: 1rem;
  padding-block: 4rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  overflow-x: clip;
  margin-inline: auto;
  margin-top: 4rem;
  max-width: calc(var(--max-width) + 8rem);
}

.logo {
  padding-block: 2rem;
  border-right: .2rem solid var(--pure-white);
}

.container {
  display: flex;
  gap: 2rem;

}

ul {
  padding-left: 0rem;

  li {
    list-style-type: none;
    margin-block: .5rem;
  }
} 

footer:deep(a) {
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.8;
  }
}

.wheat {
  position: absolute;
  /* bottom: -6rem; */
  top: -8rem;
  right: -1rem;
  max-width: 20rem;
  /* max-height: 24rem; */
}


@media screen and (max-width: 767px) {
  footer {
    flex-direction: column;
    justify-content: center
  }

  .logo {
    /* padding-block: 2rem; */
    border-right: 0rem;
    border-bottom: .2rem solid var(--pure-white);
  }

  .wheat {
    max-width: 13rem;
  }
}
</style>