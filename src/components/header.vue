<template>
  <header>
    <section>
      <article>
        <figure>
          <img class="phone" src="../assets/icons/GLOWNA/phone.png" alt="ikona telefonu" />
        </figure>
        <a class="phoneNumber">+48 530 800 372</a>
      </article>
      <article>
        <figure>
          <img src="../assets/icons/GLOWNA/send.png" alt="ikona wyślij" />
        </figure>kiru@info.pl
      </article>
      <article>3-5 dni roboczych oczekiwania & darmowy zwrot</article>
    </section>
    <nav>
      <ul>
        <li>
          <img src="../assets/icons/LOGO/logo2 kopia.png" alt="logo" class="logoNAV" />
        </li>
        <li>
          <router-link to="/">HOME</router-link>
        </li>
        <li>
          <router-link to="/sklep">SKLEP</router-link>
        </li>
        <li>
          <router-link to="/kontakt">KONTAKT</router-link>
        </li>
        <li>
          <router-link to="/koszyk">
            <img src="../assets/icons/GLOWNA/basket.png" alt="ikona koszyka" class="koszykICON" />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* HEADER NAV */
/* HEADER */
header {
  > section {
    background-color: #bea2c2;
    display: flex;
    justify-content: space-around;
    color: white;
    padding: 0.7%;
    > article {
      display: flex;
      padding: 0;
      margin: 0;
      > figure {
        margin-right: 7%;
        width: 12%;
        > img {
          width: 100%;
        }
      }
    }
  }
  border-bottom: solid 2px #bea2c2;
}
.phoneNumber {
  color: white;
}
.phone {
  width: 80%;
}
.logoNAV {
  width: 100%;
}
.koszykICON {
  width: 75%;
}
nav {
  > ul {
    display: flex;
    justify-content: space-around;
    > li {
      list-style-type: none;
      margin-top: 4.5%;
      margin-left: 10%;
      font-size: 18px;
      &:first-of-type {
        width: 10%;
        margin: 0.8%;
        margin-left: 3%;
      }
      &:last-of-type {
        margin-top: 3%;
        width: 7%;
      }
    }
  }
}
a {
  color: #28262c;
}
@media (max-width: 375px) {
  nav {
    > ul {
      > li {
        > a {
          font-size: 15px;
        }
      }
    }
  }
}
@media (max-width: 590px) and (orientation: portrait) {
  header {
    > section {
      &:first-of-type {
        font-size: 11px;
      }
    }
  }
}
@media (max-width: 500px) {
  header {
    > section {
      &:first-of-type {
        font-size: 9px;
      }
    }
  }
  .logoNAV {
    display: none;
  }
  ul {
    > li {
      &:first-of-type {
        display: none;
      }
      &:last-of-type {
        margin-right: 10px;
      }
    }
  }
  .koszykICON {
    width: 100%;
  }
  nav {
    margin-bottom: 30px;
    margin-top: 10px;
  }
}
@media (min-width: 1200px) {
  nav {
    > ul {
      > li {
        font-size: 22px;
        margin-top: 3.5%;
        &:last-of-type {
          margin-top: 2.5%;
        }
      }
    }
  }
  .logoNAV {
    width: 70%;
  }
  .koszykICON {
    width: 60%;
  }
}
</style>