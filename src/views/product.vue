<template>
    <main class="productMAIN">
        <section class="represent">
            <article class="productIN">
                <img src="../assets/icons/GLOWNA/obroza.jpg" alt="obroza">
            </article>
            <article>
                <p class="name">
                    Obroża dla zwierząt
                </p>
                <p class="cenaP">29.99 zł</p>
                <p class="descrUcena">Stylowa obroża w kwiatowym stylu sprawi, że nawet uparte kocie lub psie księżniczki będą chwalić się nią wśród zwierzęcych przyjaciół! </p>
                
                <img src="../assets/icons/PRODUKT/basket-2.png" alt="doKoszyka" class="toShop">

            </article>
        </section>
        <section>
            <p class="description">
                Obroża ta jest wymarzonym elementem ubioru Twojego psa lub kota! Jej różne kolory i kwiatowy wzór
                sprawią, że
                nawet największa psia (lub kocia) księżniczka będzie się w niej prezentować elegancko i uroczo. Nie
                sposób zapomnieć też wspomnieć o adresówce, która jest zawarta na zamknięciu obroży.
            </p>
            <p class="description">
                <ul class="description">

                    <li>Materiał: poliester</li>
                    <li>Smycz 2m w zestawie</li>

                </ul>
            </p>
        </section>
        <section class="whatOthers">
            <p class="othersD">Inni oglądali też:</p>
            <hr class="line">
            <section class="others">
                <article>
                    <figure class="produkt">
                        <router-link to="/product">
                            <img src="../assets/icons/GLOWNA/kaczka.png" alt="kaczka"></router-link>
                    </figure>
                    <p class="nazwa">KACZKA</p>
                    <p class="cena">32.99 zł</p>
                </article>
                <article>
                    <figure class="produkt">
                        <router-link to="/product">
                            <img src="../assets/icons/GLOWNA/boberek.png" alt="boberek"></router-link>
                    </figure>
                    <p class="nazwa">BOBEREK</p>
                    <p class="cena">23.99 zł</p>
                </article>
            </section>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.productIN {
    width: 100%;
}

.productIN>img {
    width: 100%;
    border: 3px solid #bea2c2;
}

.represent {
    display: flex;
    margin-top: 3%;
    margin-bottom: 2%;
}

.represent>article {
    width: 50%;
    padding: 4%;
}

.represent>article>p:first-of-type {
    text-align: center;
    font-size: 30px;
    font-weight: 300;
    color: #28262c;
}

.cenaP {
    text-align: center;
    font-size: 30px;
    font-weight: 200;
    color: #bea2c2;
}

.line {
    color: #bea2c2;
    width: 60%;
    margin: auto;
    margin-top: 2%;
    border: 2px solid #bea2c2
}

.descrUcena {
    color: #28262c;
    margin: 2%;
    margin-top: 10%;
    font-weight: 300;
    font-size: 18px;
}

.toShop {
    width: 13%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    display: block;
    cursor: pointer;
}

.description {
    font-size: 19px;
    font-weight: 300;
    color: #28262c;
    text-align: left;
    margin-left: 4%;
    margin-right: 4%;
    width: 90%;
}

section>.description>li {
    margin-left: 3%;
}

.others {
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.othersD {
    margin-top: 2%;
    font-size: 26px;
    text-align:center;
    color:#bea2c2;
}


.others>article>.produkt {
    border: 3px solid #bea2c2;
    margin: auto;
    margin-top: 5%;
    width: 50%;
}



.others>article>.produkt {
    width: 52%;
}

.produkt:hover {
    /* filter: blur(2px); */
    /* transition:0.4s; */
    border: dashed 3px #bea2c2;
}

.produkt {
    border: 3px solid #bea2c2;
    margin: 4%;
}

.produkt>a>img {
    width: 100%;
}

.others>article>.nazwa {
    color: #28262c;
    text-align: center;
    font-size: 20px;
    font-weight: 200;
}

.others>article>.produkt:hover {
    border: dashed 3px #bea2c2;
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


/* MEDIA */

@media (max-width:600px) {
    .represent>article>p {
        font-size: 23px;
    }

    .toShop {
        width: 35%;
    }

    .description {
        font-size: 16px;
    }

    .descrUcena {
        display: none;
    }

}

@media (max-width:700px) {

    .descrUcena {
        font-size: 15px;
    }

    .toShop {
        width: 25%;
    }
}

@media(min-width:501px) and (orientation:landscape) {
    .toShop {
        width: 30%;
    }


}

@media(min-width:650px) {
    .toShop {
        width: 25%;
    }

    .descrUcena {
        font-size: 18px;
    }
}

@media(min-width:1000px) {
    .toShop {
        width: 20%;
    }

    .cenaP {
        font-size: 38px;
    }

    .description {
        font-size: 24px;
    }

    .descrUcena {
        font-size: 20px;
    }

}

@media(min-width:1300px) {
    .toShop {
        width: 20%;
    }

    .name {
        font-size: 30px;
    }

    .cenaP {
        font-size: 40px;
    }

    .description {
        font-size: 24px;
    }

    .descrUcena {
        font-size: 23px;
    }

}


</style>