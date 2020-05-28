<template form>
  <main class="formMAIN">
    <p class="sendmail">WYŚLIJ MAIL</p>

    <form>
      <article>
        <p>Imię:</p>
        <input type="text" name="imie" />
      </article>
      <article>
        <p>Nazwisko:</p>
        <input type="text" name="nazwisko" />
      </article>
      <article>
        <p>e-mail:</p>
        <input type="text" name="email" />
      </article>
      <article>
        <p>Temat:</p>
        <input type="text" name="temat" />
      </article>
      <article>
        <p>Treść:</p>
        <input type="text" class="tresc" name="tresc" />
      </article>

      <input type="image" src="icons/MAIL/email.png" class="submit" />
    </form>
  </main>
</template>