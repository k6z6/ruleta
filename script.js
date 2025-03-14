 // Ejecutar el script una vez que el DOM esté completamente cargado
        document.addEventListener("DOMContentLoaded", function() {
            let container = document.querySelector(".container");
            let btn = document.getElementById("spin");
            let numberDisplay = document.getElementById("number-display");

            btn.onclick = function () {
                // Generar un número aleatorio entre 0 y 999
                let number = Math.floor(Math.random() * 1000);

                // Establecer la rotación de la ruleta con un número aleatorio
                let rotationDegree = Math.floor(Math.random() * 360) + 3600; // Gira al menos 10 veces (3600 grados)

                // Asegurarse de que la propiedad 'transition' sea compatible con el navegador
                container.style.transition = "transform 8s ease-out"; // Aseguramos que la animación dure 8 segundos
                container.style.transform = "rotate(" + rotationDegree + "deg)";

                // Después de 8 segundos (cuando la ruleta se detenga), mostrar el número
                setTimeout(function() {
                    // Mostrar el número en formato de tres dígitos
                    if (numberDisplay) {  // Verificar si el elemento existe
                        numberDisplay.textContent = number.toString().padStart(3, '0');
                    }
                }, 8000); // 8000ms = 8 segundos (cuando la animación termina)

                // Después de 10 segundos (recargar la página)
                setTimeout(function() {
                    location.reload(); // Recargar la página
                }, 20000); // 20000ms = 20 segundos (tiempo después de la animación)
            };
        });