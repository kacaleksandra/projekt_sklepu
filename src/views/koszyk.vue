<template>
  <main class="basketMAIN">
    <section class="topBask">
      <h2>Podsumowanie</h2>
    </section>

    <section class="mainSection">
      <article>
        <img src="../assets/icons/GLOWNA/boberek.png" />
        <p>Pilka dla psa</p>
        <p>29.99 zł</p>
        <div class="muchcontain">
          <input class="howmuch" type="text" value="1" />
          <p>szt.</p>
        </div>
        <img src="../assets/icons/KOSZYK/cross.png" />
      </article>
      <article>
        <img src="../assets/icons/GLOWNA/boberek.png" />
        <p>Pilka dla psa</p>
        <p>29.99 zł</p>
        <div class="muchcontain">
          <input class="howmuch" type="text" value="1" />
          <p>szt.</p>
        </div>
        <img src="../assets/icons/KOSZYK/cross.png" />
      </article>
      <article>
        <img src="../assets/icons/GLOWNA/boberek.png" />
        <p>Pilka dla psa</p>
        <p>29.99 zł</p>
        <div class="muchcontain">
          <input class="howmuch" type="text" value="1" />
          <p>szt.</p>
        </div>
        <img src="../assets/icons/KOSZYK/cross.png" />
      </article>
    </section>

    <section class="botBasket">
      <p>Idźmy dalej!</p>
      <img src="../assets/icons/KOSZYK/next-3.png" />
    </section>

    <figure class="footdog">
      <img src="../assets/icons/KOSZYK/piesek.png" />
    </figure>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.basketMAIN {
  margin-bottom: 0px;
  .topBask {
    h2 {
      color: #bea2c2;
      font-weight: 400;
      margin-left: 6%;
      margin-top: 5%;
      font-size: 30px;
    }
  }
  .mainSection {
    article {
      display: flex;
      height: 20%;
      width: 100%;
      justify-content: space-around;
      margin-top: 5%;
      .muchcontain {
        margin-top: auto;
        margin-bottom: auto;

        .howmuch {
          color: #28262c;
          margin-top: auto;
          margin-bottom: auto;
          width: 30px;
          font-size: 25px;
        }
      }
      img {
        &:first-of-type {
          width: 17%;
          height: 17%;
          text-align: center;
          border: 3px solid #bea2c2;
          padding: 0.5%;
        }
        &:last-of-type {
          width: 7%;
          height: 7%;
          margin-top: auto;
          margin-bottom: auto;
          cursor: pointer;
        }
      }
      p {
        color: #28262c;
        margin-top: auto;
        margin-bottom: auto;
      }
    }
  }

  .botBasket {
    display: flex;
    justify-content: right;
    flex-direction: row-reverse;
    margin-top: 5%;
    p {
      font-size: 30px;
      color: #28262c;
      font-weight: 200;
      margin-top: auto;
      margin-bottom: auto;
      text-align: right;
      padding-right: 10%;
    }
    img {
      width: 10%;
      height: 10%;
      margin-right: 5%;
      cursor: pointer;
    }
  }
  .footdog {
    width: 100%;
    margin-bottom: -13.5%;
    img {
      width: 100%;
      margin: 0px;
    }
  }
  @media (max-width: 415px) {
    .mainSection {
      article {
        p {
          color: #28262c;
          margin-top: auto;
          margin-bottom: auto;
          font-size: 14px;
        }
      }
    }
    .howmuch {
      font-size: 14px;
    }
    .botBasket {
      img {
        width: 15%;
        height: 15%;
        margin-right: 5%;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 700px) {
    .mainSection {
      article {
        p {
          color: #28262c;
          margin-top: auto;
          margin-bottom: auto;
          font-size: 23px;
          font-weight: 300;
          color: #28262c;
          margin-top: auto;
          margin-bottom: auto;
          font-size: 30px;
        }
        img {
          &:last-of-type {
            width: 5%;
            height: 5%;
          }
        }
      }
    }
    .howmuch {
      font-size: 23px;
      font-size: 30px;
    }
    .topBask {
      h2 {
        color: #bea2c2;
        font-weight: 400;
        margin-left: 6%;
        margin-top: 5%;
        font-size: 40px;
        color: #bea2c2;
        font-weight: 400;
        margin-left: 6%;
        margin-top: 5%;
        font-size: 50px;
      }
    }
  }
}
</style>