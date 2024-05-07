<template>
    <section>
        <!-- {{ data }} -->
        <!-- <NuxtPicture :src="data.image" :alt="data.alt"  width="886" height="420" sizes="sm:800" placeholder fit="cover" />
        <div>
            <h1>{{ data.title }}</h1>
            <div>
                <ContentRenderer :value="data" />
            </div>
        </div> -->
        <NuxtPicture src="/images/mynutreatment-resume.png" alt="resume"  width="480" height="686" sizes="sm:800" placeholder fit="cover" class="profile-picture" />
        <div class="text">
            <h1 class="remove-pseudo">Βιογραφικό</h1>
            <div class="prose">
                <p>Η Ιωάννα Παπατζανή  γεννήθηκε στο Ηράκλειο Κρήτης με καταγωγή από τα Χανιά και το Ρέθυμνο. Είναι απόφοιτη του τμήματος Διατροφής και Διαιτολογίας του Αλεξάνδρειου Τεχνολογικού Εκπαιδευτικού Ιδρύματος Θεσσαλονίκης.</p>
                <p>Η πτυχιακή εργασία που πραγματοποίησε είχε θέμα “Διατροφικές συμπεριφορές και εικόνα σώματος κατοίκων της Κρήτης”, η οποία παρουσιάστηκε στο 14ο Πανελλήνιο Συνέδριο Διατροφής και Διαιτολογίας στην Αθήνα το 2017. Η εργασία βασίστηκε σε ποσοτική έρευνα με χρήση επικυρωμένου ερωτηματολογίου και δείγμα 277 ατόμων. Σκοπός της έρευνας ήταν η μελέτη της εξωγενούς, της συναισθηματικής και της περιοριστικής διατροφικής συμπεριφοράς και η συσχέτισή τους με ανθρωπομετρικούς και κοινωνικούς παράγοντες.</p>
                <p>Κατά την διάρκεια της πρακτικής άσκησης που πραγματοποίησε στο Γενικό Πανεπιστημιακό Νοσοκομείο
Ηρακλείου, ήρθε σε επαφή με το εξωτερικό ιατρείο και παρακολούθησε πληθώρα κλινικών περιστατικών παχυσαρκίας, υπερλιπιδαιμίας, διαβήτη, υπέρτασης και νεφρικής νόσου.</p>
<p>Στα χρόνια που ακολούθησαν έχει παρακολουθήσει πλήθος συνεδριών με θέματα όπως: Μεσογειακή Διατροφή, Κλινική Διατροφή και Μεταβολισμός,  Σακχαρώδης Διαβήτης, Καρκίνος, Αθηροσκλήρωση, Παχυσαρκία κ.α.</p>
<p>Στο πλαίσιο διαρκούς εκπαίδευσης έχει παρακολουθήσει ποικίλα εκπαιδευτικά σεμινάρια όπως: «Διατροφικές διαταραχές και Παχυσαρκία» και «Διατροφικές παρεμβάσεις στα Νοσήματα Εντέρου».</p>
            </div>
        </div>
    </section>
</template>
<script setup>
// const route = useRoute();

// const {data} = await useAsyncData('about', () => queryContent('/main').findOne())
</script>
<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: auto auto;
    gap: 1rem;
    width: 100%;

    .text {
        transform: translateX(-5rem) translateY(5rem);
        width: 112%;
        grid-row: 1 / 3;
        background-color: var(--pure-white);
        padding: 1rem;
        padding-top: 4rem;
        padding-left: 10rem;
        padding-right: 4rem;
        padding-bottom: 8rem;
        border: var(--card-border);
        border-right: none;
        border-radius: var(--radius-sm);
        /* border-bottom-left-radius: var(--radius-sm);
        border-top-left-radius: var(--radius-sm); */

        h1 {
            text-align: right;
        }
    }

    .profile-picture {
        grid-row: 1;
        /* padding-inline: 1rem; */
        background-color: var(--pure-white);
        border-radius: var(--radius-sm);
        box-shadow:
            0.05rem 0rem 1px 0rem var(--shadow-color-1),
            0.7rem 0rem 0px -0.3rem var(--shadow-color-2),
            0.7rem 0rem 2px -0.3rem var(--shadow-color-1),
            1.3rem 0rem 0px -0.5rem var(--shadow-color-3),
            1.3rem 0rem 2px -0.5rem var(--shadow-color-1);
        z-index: 3;

        &:deep(img) {
            width: 100%;
            object-fit: cover;
            border-radius: var(--radius-sm);
        }
    }
}

@media screen and (max-width: 767px) {
    section {
        grid-template-columns: 1fr;

        .profile-picture {
            grid-row: 1;
            position: relative;
            left: -1rem;
            width: 95%;
            /* bottom: -2rem; */

            &:deep(img) {
                max-height: 27rem;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }

        .text {
            grid-row: 2 / 4;
            justify-self: end;
            width: 110%;
            transform: unset;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            position: relative;
            right: -1rem;
            bottom: 4rem;
            padding-left: 2rem;
            padding-right: 2rem;

            h1 {
                line-break: anywhere;
            }
        }
    }
}
    
</style>