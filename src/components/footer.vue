<template>
  <footer class="IndFooter">
    <section>
      <article class="prod">
        <p>
          <router-link to="/">Home</router-link>
        </p>
        <p>
          <router-link to="/sklep">Produkty</router-link>
        </p>
      </article>
      <article class="prod">
        <p>
          <router-link to="/koszyk">Koszyk</router-link>
        </p>
        <p>
          <router-link to="/kontakt">Kontakt</router-link>
        </p>
      </article>
      <article class="question">
        <p>
          Masz pytanie?
          <br />+48 503 800 372
          <br />kiru@info.pl
        </p>
      </article>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* FOOTER */

footer {
  background-color: #bea2c2;
  margin-top: 13%;
}

footer > section > article > p > a,
footer > section > article > p {
  color: white;
  font-size: 15px;
  font-weight: 200;
}

footer > section {
  display: flex;
  justify-content: space-around;
}

.prod > p {
  margin: 20px;
}

.question {
  margin: 20px;
}

@media (max-width: 590px) and (orientation: portrait) {
  .IndFooter {
    //position: absolute;
    width: 100%;
    //bottom: 0px;
  }
}
@media (max-width: 500px) {
  .prod > p > a {
    font-size: 10px;
  }

  .question > p {
    font-size: 10px;
  }

  .prod > p {
    margin: 6px;
  }

  .question {
    margin: 10px;
  }
}
@media (min-width: 1000px) {
  footer > section > article > p > a,
  footer > section > article > p {
    font-size: 20px;
  }
}

@media (min-width: 1200px) {
  footer > section > article > p > a,
  footer > section > article > p {
    font-size: 25px;
  }

  footer > section {
    display: flex;
    justify-content: space-around;
  }

  .prod > p {
    margin: 20px;
  }

  .question {
    margin: 15px;
  }
}
</style>