<template>
  <main class="formMAIN">
    <p class="sendmail">WYŚLIJ MAIL</p>

    <form>
      <article>
        <p>Imię:</p>
        <input type="text" name="imie" required/>
      </article>
      <article>
        <p>Nazwisko:</p>
        <input type="text" name="nazwisko" required/>
      </article>
      <article>
        <p>e-mail:</p>
        <input type="text" name="email" required/>
      </article>
      <article>
        <p>Temat:</p>
        <input type="text" name="temat" required />
      </article>
      <article>
        <p>Treść:</p>
        <input type="text" class="tresc" name="tresc" required/>
      </article>
      <button type="submit" class="submit">
        <img src="../assets/icons/MAIL/email.png" />
      </button>
    </form>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* FORM */

form {
  display: block;
  margin-top: 8%;
  > article {
    width: 100%;
    display: flex;
    margin-bottom: 5%;
    .tresc {
      height: 100px;
    }
    input {
      margin-left: 5%;
      width: 60%;
      border: #bea2c2 1px solid;
    }
    p {
      color: #28262c;
      font-size: 28px;
      font-weight: 200;
      width: 20%;
      text-align: right;
    }
  }
  .submit {
    border: none;
    margin-top: 5%;
    margin-bottom: 10%;
    margin-left: 70%;
    background: none;
    img {
      width: 120px;
    }
  }
}
.sendmail {
  color: #28262c;
  text-align: center;
  margin-top: 4%;
  font-size: 40px;
  font-weight: 200;
}

@media (max-width: 524px) {
  .submit {
    margin-bottom: 20%;
    img {
      width: 80px;
    }
  }
  form {
    article {
      p {
        font-size: 14px;
      }
    }
  }
}
</style>