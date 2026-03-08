// Variabilă globală în care salvăm datele după ce le luăm din JSON
let dateResurse = [];

// 1. Funcția care "trage" datele din fișierul JSON de pe server
async function incarcaDate() {
    try {
        // Calea către fișierul tău conform imaginii cu folderul 'data'
        const raspuns = await fetch('./data/resources.json');
        
        if (!raspuns.ok) {
            throw new Error("Fișierul JSON nu a putut fi găsit!");
        }

        dateResurse = await raspuns.json();
        
        // Afișăm toate resursele imediat ce se încarcă pagina
        rendereaza(dateResurse);
    } catch (eroare) {
        console.error("Eroare la încărcarea datelor:", eroare);
        document.getElementById('lista-resurse').innerHTML = "<p>Eroare la încărcarea resurselor.</p>";
    }
}

// 2. Funcția care creează HTML-ul pentru fiecare card (vizualizarea datelor)
function rendereaza(date) {
    const container = document.getElementById('lista-resurse');
    if (!container) return; // Siguranță în caz că ID-ul nu există în HTML
    
    container.innerHTML = ""; // Ștergem ce era înainte (curățăm lista)

    date.forEach(item => {
        const card = document.createElement('div');
        card.className = "card"; // Clasa pentru stilul din style.css
        
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>📍 Locație:</strong> ${item.location}</p>
            <p><strong>🕒 Program:</strong> ${item.program}</p>
            <div style="margin-top:10px;">
                ${item.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
            </div>
        `;
        container.appendChild(card);
    });
}

// 3. Funcția pentru butonul "Doar Locuri de Studiu"
function afiseazaDoarStudiu() {
    // Filtrează obiectele care au tipul "Studiu"
    const filtrate = dateResurse.filter(r => r.type === "Studiu");
    rendereaza(filtrate);
}

// 4. Funcția pentru butonul "Toate Resursele"
function incarcaToate() {
    rendereaza(dateResurse);
}

// 5. Spunem browserului să ruleze 'incarcaDate' automat când se deschide pagina
window.onload = incarcaDate;