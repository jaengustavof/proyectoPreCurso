        /*Seleccionamos los elementos e imprimimos los casilleros*/
        let barcoDiv = "";
        let boxDiv = ""
        for(let i = 1; i <=100; i++){
            barcoDiv += "<div class='barco' value="+i+"></div>";
            boxDiv += "<div class='box' value="+i+"></div>";
        }

        let barcodiv = document.getElementById("barco")
        barcodiv.innerHTML = barcoDiv;

        let principal = document.getElementById("principal")
        principal.innerHTML = boxDiv;

        /* Guardamos los casilleros en variables */
        const barcos = document.querySelectorAll(".barco");
        const boxes = document.querySelectorAll(".box");

        function Barco(a,b,c){
            this.position = [a,b,c];
            this.hits = 0;
            this.sink = function(intentos){
                       if(this.position.includes(intentos.slice(-1)[0])) {
                           this.hits++;
                           barcos[(intentos.slice(-1)[0])-1].style.background = "red";
                           this.hits >= this.position.length ? hundido(Barcos.indexOf(this)) : console.log("tocado");
                           //console.log(this.hits)
                       }
                   };
        }

        function hundido(num){
            cruces[num].style.opacity = 1;
        }

        /*Se crea el array que llevará a los objetos y sus respectivos objetos*/
        const Barcos = [];

        const Barcon1 = new Barco(1,2,3);
        const Barcon2 = new Barco(55,56,57);
        const Barcon3 = new Barco(7,17,27);
        const Barcon4 = new Barco(31,41,51);
        Barcos.push(Barcon1,Barcon2,Barcon3,Barcon4)

        /*Agregamos las imagenes de los barcos y sus iconos*/
        let imagenBarco = ""
        for(let j = 0; j < Barcos.length; j++){
            imagenBarco += "<div class='contenedorBarco'><i class='fas fa-skull-crossbones'></i><img src='./assets/img/barco.svg' alt=''></div>";
        }
        let shipConainer = document.getElementById("shipContainer")
        shipConainer.innerHTML += imagenBarco;

        /*se guardan los iconos en un array*/
        const cruces = document.getElementsByClassName("fa-skull-crossbones");

        const intentos = []
        let contador = 101
        for(let i =0; i<boxes.length; i++){
            boxes[i].onclick = function(){
                //console.log(this.getAttribute("value"))
                intentos.push(parseInt(this.getAttribute("value")))
                const distinctIntentos = [...new Set(intentos)]
                console.log(distinctIntentos);
                this.setAttribute("value", contador++)
                barcos[(intentos.slice(-1)[0])-1].style.background = "blue";
                //Barco.sink(distinctIntentos)
               for(let Barco of Barcos){
                   Barco.sink(distinctIntentos);
               }
            }
        }
