<template>
  <div>
    <section class="meeting-grid">
      <h2>Συνεδρίες</h2>

      <NuxtPicture src="/images/services/meeting.jpg" width="550" height="260" sizes="sm:500"/>
      <div class="container">
        <h3 class="remove-pseudo">Τι περιλαμβάνει μια συνεδρία;</h3>
        <p>Ξεκινάμε με την λήψη διατροφικού ιστορικού ώστε να μπορέσουμε να εντοπίσουμε τις υπάρχουσες συνήθειες και μαζί να ανακαλύψουμε πώς αυτές μπορούν να προσαρμοστούν. Λαμβάνουμε υπόψιν τις ιατρικές εξετάσεις, την φαρμακευτική αγωγή και τις σωματομετρικές μετρήσεις.</p>
      </div>

      <p>Μαθαίνουμε καινούργιες τεχνικές που αφορούν την οργάνωση των γευμάτων και δημιουργούμε ένα εξατομικευμένο πρόγραμμα διατροφής, προσαρμοσμένο στις προτιμήσεις και στους ρυθμούς ζωής του ατόμου.</p>
      <div class="container card-stack">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>

      <NuxtPicture src="/images/services/measuring.jpg" width="350" height="450" sizes="sm:500" loading="lazy"/>
      <p class="measure-para">Σε κάθε συνεδρία πραγματοποιούμε αξιολόγηση σωματικού βάρους, ανάλογα τον διαιτώμενο και τις ανάγκες του. Τα εργαλεία μας είναι ο λιπομετρητής για την ανάλυση σύστασης σώματος και η μεζούρα για την παρακολούθηση πόντων σε συγκεκριμένα σημεία στο σώμα.</p>

      <div class="container">
        <h3 class="remove-pseudo">Τι περιλαμβάνει μια εξ αποστάσεως (online) συνεδρία;</h3>
        <p>Εφόσον δεν υπάρχει δυνατότητα για μια δια ζώσης συνεδρία, το ραντεβού μας μπορεί να πραγματοποιηθεί διαδικτυακά. Τα στάδια που ακολουθούμε είναι ακριβώς τα ίδια καθώς με την σωστή καθοδήγηση ο διαιτώμενος μαθαίνει να μετράει τους πόντους και το βάρος μόνος του.</p>
        
        <MainButton size="small">
          <NuxtLink to="/contact">Κλείσε ραντεβού</NuxtLink>
        </MainButton>
      </div>
      <NuxtPicture src="/images/services/online-meeting.jpg" width="525" height="400"  sizes="sm:500" loading="lazy"/>


    </section>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  /* h3 {
    margin-bottom: 1rem;
  } */
  .meeting-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem 2rem;

    h2 {
      grid-column: span 2;
    }

    .container {
      display: grid;
      /* align-content: space-between; */

      &:deep(.button) {
        margin-left: auto;
      }
    }
    p {
      /* max-width: 27rem; */
    }

    .measure-para {
      align-self: flex-end;
    }

    .card-stack {
      display: flex;
      position: relative;

      .card {
        position: absolute;
        background-color: var(--white);
        width: 100%;
        height: 25rem;
        border-radius: var(--radius-sm);
        box-shadow: .1rem .1rem 1rem #CFC8C4;
        rotate: 10deg;
        z-index: 3;
        /* animation: cardstack2 3s linear infinite; */
        

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
  }

  @keyframes cardstack2 {
    0% { z-index: 20; transform: translateY(0px) rotate(-4deg); }
  50% { transform: translateY(-120%) rotate(-5deg) translateX(-40px); }
  60% { z-index: 1; }
  100% { transform: translateY(-50px) rotate(8deg) translateX(55px) scale(0.95); }
}

  :deep(img) {
    border-radius: var(--radius-sm);
    object-fit: cover;
  }

  picture:nth-of-type(3) {
    &:deep(img) {
      width: 100%;
      height: 100%;
    }
  }
  

  @media screen and (max-width: 767px) {
    .meeting-grid {
      /* display: grid; */
      position: relative;
      grid-template-columns: 1fr;
      gap: 2.5rem;

      h2 {
        grid-column: unset;
      }

      .container {
        gap: 1rem;
      }

      .container:last-of-type {
        grid-row: 8;
        gap: 1rem
      }

      picture:first-of-type {
        position: relative;
        left: -1rem;
        

        &:deep(img) {
          width: 100%;
          height: 100%;
          border-top-left-radius: 0rem;
          border-bottom-left-radius: 0rem;
        }
      }

      picture:nth-of-type(2) {
        

        &:deep(img) {
          margin-inline: auto;
        }
      }

      picture:nth-of-type(3) {
        

        position: relative;
        right: -1rem;

        &:deep(img) {
          width: 100%;
          height: 100%;
          border-top-right-radius: 0rem;
          border-bottom-right-radius: 0rem;
        }
      }

      .card-stack {
        display: none;
      }
    }
  }
</style>