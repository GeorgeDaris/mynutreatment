<template>
  <form @submit.prevent="submitForm(form)">
    <h2>Επικοινωνία</h2>
    <label>
      <span>
        Όνομα
      </span>
      <input type="text" required v-model="form.name">
    </label>
    <label>
      <span>
        Επώνυμο
      </span>
      <input type="text" required v-model="form.lastName">
    </label>
    <label>
      <span>
        Email
      </span>
      <input type="email" required v-model="form.email">
    </label>
    <label>
      <span>
        Τηλέφωνο
      </span>
      <input type="tel" v-model="form.phoneNumber">
    </label>
    <label>
      <span>
        Μήνυμα
      </span>
      <textarea required v-model="form.message"></textarea>
    </label>

    <MainButton class="btn-wrapper">
      <button type="submit">
        <p v-if="sending">Περιμένετε</p> 
        <p v-if="!sending">Αποστολή</p> 
      </button>
    </MainButton>

    <p v-if="success" class="message">Το μήνυμα σας στάλθηκε επιτυχώς!</p>

    <!-- <pre>
      {{ form }}
    </pre> -->
  </form>
</template>

<script setup>
const form = reactive({
  subject: "Μήνυμα απο πελάτη",
  name: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: ""
})

let sending = ref(false)
let errors = ref(false)
let success = ref(false)

const submitForm = (async(form) => {
  sending.value = true
  await $fetch('/api/contact', {
    method: 'POST',
    body: form,
  }).then(() => {
    errors.value = false
    success.value = true
    sending.value = false
    form.subject = "Μήνυμα απο πελάτη"
    form.name =  ""
    form.lastName = ""
    form.email = ""
    form.phoneNumber = ""
    form.message = ""

    setTimeout(() => {
      success.value = false
    }, 5000)
  }).catch(() => {
    errors.value = true,
    success.value = false,
    sending.value = false
  })
})
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
  border-top-left-radius: var(--radius-md);

  position: relative;
  top: -6rem;

  h2 {
    text-align: center
  }

  label {
    width: 100%;
    font-size: larger;

    &:has(input:required, textarea:required) {
      span::after {
        content: "*"
      }
    }

    input, textarea {
      width: 100%;
      padding-block: 0.5rem;
      padding-inline: 0.25rem;
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

.message {
  margin-inline: auto;
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