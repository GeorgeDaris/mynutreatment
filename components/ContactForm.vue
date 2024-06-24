<template>
  <form @submit.prevent="">
    <h2>Επικοινωνία</h2>
    <label>
      <span>
        Όνομα
      </span>
      <input type="text" required>
    </label>
    <label>
      <span>
        Επώνυμο
      </span>
      <input type="email" required>
    </label>
    <label>
      <span>
        Email
      </span>
      <input type="email" required>
    </label>
    <label>
      <span>
        Τηλέφωνο
      </span>
      <input type="phone">
    </label>
    <label>
      <span>
        Μύνημα
      </span>
      <textarea required></textarea>
    </label>

    <MainButton class="btn-wrapper">
      <button type="submit">
        Αποστολή
      </button>
    </MainButton>

    <p></p>
  </form>
</template>

<script setup>


</script>

<style scoped>
form {
  background-color: var(--pure-white);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  width: 90vw;
  max-width: 40rem;
  margin-inline: auto;
  padding: 2rem;
  border: var(--card-border);
  border-radius: var(--radius-sm);

  position: relative;
  top: -6rem;

  h2 {
    text-align: center
  }

  label {
    width: 100%;
    font-size: larger;

    input, textarea {
      width: 100%;
      padding-block: 0.5rem;
      margin-top: 0.5rem;
      display: block;
      background-color: inherit;
      border: 0.1rem solid var(--dark-blue);
      border-radius: 0.4rem;
    }

    textarea {
      resize: vertical;
      min-height: 15rem;
    }

  }
  button {
    appearance: none;
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
}

@media screen and (max-width: 767px) {
  form {
    top: 0;
  }
}

.btn-wrapper {
  margin-inline: auto;
}
</style>