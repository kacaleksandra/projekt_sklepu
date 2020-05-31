<template>
  <main id="sklep">
    <main class="forms">
      <form class="formSklep">
        <section class="formS">
          Sortuj po:
          <select name="sortowanie">
            <option>NAJNOWSZE</option>
            <option>NAJTAŃSZE</option>
            <option>NAJDROŻSZE</option>
          </select>
        </section>
        <section class="formS">
          Sortuj po kategorii:
          <select name="sortowanie">
            <option>WSZYSTKIE</option>
            <option>ZABAWKI</option>
            <option>KARMA</option>
            <option>AKCESORIA</option>
          </select>
        </section>
      </form>
    </main>

    <main class="mainSKLEP">
      <section>
        <router-link to="/product">
          <figure class="productIN">
            <img src="../assets/icons/GLOWNA/kaczka.png" alt="produkt" />
          </figure>
        </router-link>
        <article>
          <router-link to="/product">
            <p class="nazwa">Kaczka</p>
          </router-link>
          <p class="cena">29.99 zł</p>
        </article>
      </section>

      <section>
        <router-link to="/product">
          <figure class="productIN">
            <img src="../assets/icons/GLOWNA/kaczka.png" alt="produkt" />
          </figure>
        </router-link>
        <article>
          <router-link to="/product">
            <p class="nazwa">Kaczka</p>
          </router-link>
          <p class="cena">29.99 zł</p>
        </article>
      </section>

      <section>
        <router-link to="/product">
          <figure class="productIN">
            <img src="../assets/icons/GLOWNA/kaczka.png" alt="produkt" />
          </figure>
        </router-link>
        <article>
          <router-link to="/product">
            <p class="nazwa">Kaczka</p>
          </router-link>
          <p class="cena">29.99 zł</p>
        </article>
      </section>

      <section>
        <router-link to="/product">
          <figure class="productIN">
            <img src="../assets/icons/GLOWNA/kaczka.png" alt="produkt" />
          </figure>
        </router-link>
        <article>
          <router-link to="/product">
            <p class="nazwa">Kaczka</p>
          </router-link>
          <p class="cena">29.99 zł</p>
        </article>
      </section>

      <section>
        <router-link to="/product">
          <figure class="productIN">
            <img src="../assets/icons/GLOWNA/kaczka.png" alt="produkt" />
          </figure>
        </router-link>
        <article>
          <router-link to="/product">
            <p class="nazwa">Kaczka</p>
          </router-link>
          <p class="cena">29.99 zł</p>
        </article>
      </section>

      <section>
        <router-link to="/product">
          <figure class="productIN">
            <img src="../assets/icons/GLOWNA/kaczka.png" alt="produkt" />
          </figure>
        </router-link>
        <article>
          <router-link to="/product">
            <p class="nazwa">Kaczka</p>
          </router-link>
          <p class="cena">29.99 zł</p>
        </article>
      </section>

      <section>
        <router-link to="/product">
          <figure class="productIN">
            <img src="../assets/icons/GLOWNA/kaczka.png" alt="produkt" />
          </figure>
        </router-link>
        <article>
          <router-link to="/product">
            <p class="nazwa">Kaczka</p>
          </router-link>
          <p class="cena">29.99 zł</p>
        </article>
      </section>

      <section>
        <router-link to="/product">
          <figure class="productIN">
            <img src="../assets/icons/GLOWNA/kaczka.png" alt="produkt" />
          </figure>
        </router-link>
        <article>
          <router-link to="/product">
            <p class="nazwa">Kaczka</p>
          </router-link>
          <p class="cena">29.99 zł</p>
        </article>
      </section>

      <section>
        <router-link to="/product">
          <figure class="productIN">
            <img src="../assets/icons/GLOWNA/kaczka.png" alt="produkt" />
          </figure>
        </router-link>
        <article>
          <router-link to="/product">
            <p class="nazwa">Kaczka</p>
          </router-link>
          <p class="cena">29.99 zł</p>
        </article>
      </section>
    </main>

    <section class="clicks">
      <router-link to="previousPage.html" class="click">
        <img src="../assets/icons/PRODUKTY/dog2.png" />
      </router-link>

      <router-link to="nextPage.html" class="click">
        <img src="../assets/icons/PRODUKTY/dog.png" />
      </router-link>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* .mainSKLEP>section>figure{
      border: 1px solid #bea2c2;
  } */
.mainSKLEP {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: ". . ." ". . ." ". . .";
  margin-top: 5%;
  > section {
    width: 70%;
    margin: auto;
    padding: 6%;
  }
}
.clicks {
  display: flex;
  margin: auto;
  width: 100%;
  .click {
    width: 1000%;
    cursor: pointer;
    > img {
      width: 20%;
      display: block;
      margin: auto;
    }
  }
}

.formSklep {
  display: flex;
  margin-top: 4%;
  color: #28262c;
  justify-content: space-around;
  .formS {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 19px;
    select {
      font-size: 19px;
      border: 2px solid #bea2c2;
      outline: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      padding: 1%;
      margin: 0 1% 0 1%;
      text-align: center;
      text-align-last: center;
      -moz-text-align-last: center;
    }
  }
}
.productIN {
  width: 100%;
  > img {
    width: 100%;
    border: 3px solid #bea2c2;
    &:hover {
      border: dashed 3px #bea2c2;
    }
  }
}
.nazwa {
  color: #28262c;
  text-align: center;
  font-size: 20px;
  font-weight: 200;
}
.cena {
  margin-top: 2%;
  color: #bea2c2;
  text-align: center;
  font-weight: 200;
  font-size: 18px;
}
@media (max-width: 670px) and (orientation: portrait) {
  .formS {
    font-size: 17px;
  }
  select {
    font-size: 15px;
    margin-top: 1%;
  }
  .mainSKLEP {
    display: block;
    margin-top: 5%;
  }
}
@media (min-width: 413px) and (orientation: portrait) {
  .formS {
    font-size: 18px;
  }
  select {
    font-size: 18px;
    margin-top: 1%;
  }
}
</style>