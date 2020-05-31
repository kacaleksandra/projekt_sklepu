<template>
  <main id="home">
    <section>
      <figure>
        <img
          src="../assets/icons/GLOWNA/agnieszka-boeske--24ByctJ12s-unsplash.jpg"
          alt="zdjecie psa z czapka"
        />
      </figure>
    </section>
    <section>
      <p class="pr">
        PROMOCJE
        <img src="../assets/icons/GLOWNA/animal-kingdom.png" class="piesek" />
      </p>

      <hr class="line" />
      <section class="produkty">
        <article>
          <figure class="produkt">
            <router-link to="/product">
              <img src="../assets/icons/GLOWNA/obroza.jpg" alt="obroza" />
            </router-link>
          </figure>
          <p class="nazwa">OBROŻA</p>
          <p class="cena">29.99 zł</p>
          <p class="Scena">z 38.99!</p>
        </article>
        <article>
          <figure class="produkt">
            <router-link to="/product">
              <img src="../assets/icons/GLOWNA/kaczka.png" alt="kaczka" />
            </router-link>
          </figure>
          <p class="nazwa">KACZKA</p>
          <p class="cena">32.99 zł</p>
          <p class="Scena">z 39.99!</p>
        </article>
        <article>
          <figure class="produkt">
            <router-link to="/product">
              <img src="../assets/icons/GLOWNA/boberek.png" alt="boberek" />
            </router-link>
          </figure>
          <p class="nazwa">BOBEREK</p>
          <p class="cena">23.99 zł</p>
          <p class="Scena">z 29.99!</p>
        </article>
      </section>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* MAIN */
/* MEDIA */
main {
	margin-bottom: 5%;
	margin-left: auto;
	margin-right: auto;
	>section {
		>figure {
			height: 80%;
			>img {
				width: 100%;
				border-bottom: solid 2px #bea2c2;
			}
		}
		>section {
			display: flex;
		}
	}
}
section {
	>p {
		text-align: center;
		font-size: 60px;
		margin-top: 1.5%;
		color: #bea2c2;
		width: 100%;
	}
}
.piesek {
	width: 5%;
}
.line {
	color: #bea2c2;
	width: 60%;
	margin: auto;
	margin-top: 2%;
	border: 2px solid #bea2c2;
}
.produkty {
	display: flex;
	margin: 2%;
	margin-top: 5%;
}
.produkt {
	&:hover {
		border: dashed 3px #bea2c2;
	}
	border: 3px solid #bea2c2;
	margin: 4%;
	>a {
		>img {
			width: 100%;
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
.Scena {
	color: #bea2c2;
	text-align: center;
	font-weight: 200;
	font-size: 14px;
}
@media (max-width: 500px) {
	.piesek {
		display: none;
	}
	.pr {
		font-size: 30px;
	}
}
@media (min-width: 501px) and(max-width:700px) {
	main {
		padding-bottom: 40px;
	}
}
@media (min-width: 1000px) {
	.nazwa {
		color: #28262c;
		text-align: center;
		font-size: 25px;
		font-weight: 200;
	}
	.cena {
		margin-top: 2%;
		color: #bea2c2;
		text-align: center;
		font-weight: 200;
		font-size: 23px;
	}
	.Scena {
		color: #bea2c2;
		text-align: center;
		font-weight: 200;
		font-size: 20px;
	}
	.piesek {
		width: 4%;
	}
}
@media (min-width: 1200px) {
	.nazwa {
		color: #28262c;
		text-align: center;
		font-size: 30px;
		font-weight: 200;
	}
	.cena {
		margin-top: 2%;
		color: #bea2c2;
		text-align: center;
		font-weight: 200;
		font-size: 27px;
	}
	.Scena {
		color: #bea2c2;
		text-align: center;
		font-weight: 200;
		font-size: 23px;
	}
	.piesek {
		width: 4%;
	}
}

</style>