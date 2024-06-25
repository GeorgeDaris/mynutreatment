<template>
  <div class="container card-stack">
        <!-- <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div> -->
        <NuxtPicture src="images/services/slideshow/composition.jpeg" alt="post.alt"  width="400" height="200" sizes="sm:800" placeholder fit="cover" class="card"/>
        <NuxtPicture src="/images/services/slideshow/scale.jpeg" alt="post.alt"  width="400" height="200" sizes="sm:800" placeholder fit="cover" class="card" />
        <NuxtPicture src="images/services/slideshow/slideshow.jpg" alt="post.alt"  width="400" height="200" sizes="sm:800" placeholder fit="cover" class="card"/>
      </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.card-stack {
      display: flex;
      position: relative;
      transform: translateX(2.5rem);
      transition: all 0.3s ease-in-out;
      transition-delay: 0.2s;

      &:hover {
        display: flex;
        transform: translateY(1.5rem) translateX(4.5rem);

        
        .card {
          /* display: flex; */
          /* flex-wrap: wrap; */
          /* position: relative; */
          /* width: 15rem;
          height: 10rem; */
          width: 20rem;
          height: 15rem;
          transform: unset;
          transform: translateY(2.5rem) translateX(2.5rem);
          /* rotate: unset; */

          &:nth-of-type(2) {
            transform: translateY(12.5rem) translateX(10.5rem);
          /* rotate: unset; */

          }

          &:nth-of-type(3) {
            transform: translateY(-6.7rem) translateX(-4.7rem);

          /* rotate: unset; */

          }

        }

        
      }

      .card {
        position: absolute;
        /* background-color: var(--white); */
        width: 28rem;
        height: 22rem;
        border-radius: var(--radius-sm);
        box-shadow: .1rem .1rem 1rem #CFC8C4;
        rotate: 10deg;
        z-index: 3;
        transition: all 0.3s ease-in-out;
        transition-delay: 0.2s;
        /* animation: cardstack2 3s linear infinite; */

        &:deep(img) {
          width: 100%;
          height: 100%;
        }
        

        &:nth-of-type(2) {
          rotate: 12deg;
          transform: translateY(.5rem) translateX(.5rem);
          z-index: 2;
          animation-delay: 1s;

          /* animation: cardstack2 2s linear infinite;
          animation-delay: 4s; */
          /* animation-direction: alternate; */
        }

        &:nth-of-type(3) {
          rotate: 14deg;
          transform: translateY(.7rem) translateX(.7rem);
          z-index: 1;
          animation-delay: 2s;
        }
      }
}

@media screen and (max-width: 767px) {
  .card-stack {
    position: relative;
    transform: translateX(2rem) translateY(2rem);

    .card {
      position: relative;
      transform: unset;
      width: 72%;
      height: 12rem;

      &:nth-of-type(2) {
            transform: translateY(-6rem) translateX(1rem);
          /* rotate: unset; */

          }

          &:nth-of-type(3) {
            display: none;
            transform: translateY(-28rem) translateX(-8rem);
          }
    }
  }  
}

@media screen and (max-width: 767px) {
  .card-stack {
    pointer-events: none;
  }
}

    @keyframes cardstack2 {
    0% { z-index: 20; transform: translateY(0px) rotate(-4deg); }
  50% { transform: translateY(-120%) rotate(-5deg) translateX(-40px); }
  60% { z-index: 1; }
  100% { transform: translateY(-50px) rotate(8deg) translateX(55px) scale(0.95); }
}
</style>