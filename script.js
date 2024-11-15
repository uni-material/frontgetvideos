// Función para obtener y mostrar los juegos desde la API
function fetchGames() {
    fetch("http://localhost:8080/game/")
        .then(response => response.json())
        .then(data => {
            const gameContainer = document.getElementById("game-container");

            data.forEach(game => {
                // Crear el contenedor de la tarjeta de juego
                const gameCard = document.createElement("div");
                gameCard.classList.add("game-card");

                // Crear la imagen del juego
                const img = document.createElement("img");
                img.src = `data:image/jpeg;base64,${game.fileBase64}`;
                img.alt = `${game.title} image`;

                // Crear el título del juego
                const title = document.createElement("p");
                title.classList.add("game-title");
                title.textContent = game.title;

                // Crear el desarrollador del juego
                const developer = document.createElement("p");
                developer.classList.add("game-developer");
                developer.textContent = `Developer: ${game.developer}`;

                // Agregar la imagen, título y desarrollador a la tarjeta de juego
                gameCard.appendChild(img);
                gameCard.appendChild(title);
                gameCard.appendChild(developer);

                // Agregar la tarjeta al contenedor principal
                gameContainer.appendChild(gameCard);
            });
        })
        .catch(error => console.error("Error fetching games:", error));
}

// Llamar a la función para cargar los juegos al cargar la página
document.addEventListener("DOMContentLoaded", fetchGames);
