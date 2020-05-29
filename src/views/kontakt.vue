<template>
  <main class="contactMAIN">
    <figure class="contactphoto">
      <img src="../assets/icons/ABOUT/zdjecie.png" />
    </figure>

    <p class="cdescription">
      Naszym celem jest uszczęśliwianie psów oraz ich właścicieli
      <br />Naszym celem jest
      wspieranie tysięcy
      schronisk w Polsce
      <br />Naszym hobby są zwierzęta, stąd powstał ten sklep.
    </p>

    <section class="contactInfo">
      <p>
        <a href="tel:530800372">+48 503 800 372</a>
      </p>
      <article>
        <p class="mail">
          <router-link to="/form">kiru@info.pl</router-link>
        </p>
        <figure>
          <img src="../assets/icons/ABOUT/left-click.png" />
        </figure>
      </article>
      <p>pracujemy codziennie 9 - 18</p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contactMAIN {
  width: 100%;
  margin:auto;
}

.contactphoto {
  width: 50%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 3%;
}

.contactphoto > img {
  width: 100%;
}

.cdescription {
  color: #28262c;
  font-weight: 100;
  font-size: 23px;
  width: 100%;
  text-align: center;
}

.contactInfo {
  margin-top: 7%;
  margin-bottom: 20%;
}

.contactInfo > p,
.contactInfo > article {
  font-size: 35px;
  color: #28262c;
  font-weight: 200;
  margin-bottom: 4%;
  text-align: center;
}

.contactInfo > p > a {
  color: #28262c;
}

.contactInfo > article {
  position: relative;
  height: 80px;
}

.contactInfo > article > p,
.contactInfo > article > figure {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.contactInfo > article > figure {
  width: 10%;
  display: inline-block;
  transform: translate(90px, -50px);
}

.contactInfo > article > figure > img {
  border: none;
  width: 100%;
}

.mail {
  width: 30%;
  display: inline-block;
}

.mail > a {
  color: #28262c;
}

@media (max-width: 410px) {
  .contactInfo > p,
  .contactInfo > article {
    font-size: 20px;
  }

  .cdescription {
    font-size: 13px;
  }

  .contactInfo > article > figure {
    transform: translate(70px, -30px);
  }
}

@media (max-width: 600px) AND (min-width: 410) {
  .contactInfo > p,
  .contactInfo > article {
    font-size: 23px;
  }

  .cdescription {
    font-size: 18px;
  }
}

@media (min-width: 1000px) {
  .contactInfo > p,
  .contactInfo > article {
    font-size: 40px;
  }

  .cdescription {
    font-size: 30px;
  }

  .contactMAIN {
    width: 60%;
  }

  .formMAIN {
    width: 60%;
  }
}

@media (min-width: 1300px) {
  .contactInfo > article > figure {
    transform: translate(100px, -90px);
  }
}
</style>