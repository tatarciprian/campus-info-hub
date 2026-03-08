let dateResurse = [];

// Funcția de încărcare date (Fetch) - Cerința 7
async function incarcaDate() {
    try {
        const raspuns = await fetch('./data/resources.json');
        dateResurse = await raspuns.json();
        rendereaza(dateResurse);
    } catch (eroare) {
        console.error("Eroare la încărcarea datelor:", eroare);
    }
}

function rendereaza(date) {
    const container = document.getElementById('lista-resurse');
    container.innerHTML = ""; 

    date.forEach(item => {
        const card = document.createElement('div');
        card.style.border = "1px solid #ccc";
        card.style.margin = "10px 0";
        card.style.padding = "10px";
        
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Tip:</strong> ${item.type}</p>
            <p><strong>Locație:</strong> ${item.location}</p>
            <p><strong>Orar:</strong> ${item.program}</p>
            <p><small>Tags: ${item.tags.join(', ')}</small></p>
        `;
        container.appendChild(card);
    });
}

// Filtrare (Cerința 7b)
function afiseazaDoarStudiu() {
    const filtrate = dateResurse.filter(r => r.type === "Studiu");
    rendereaza(filtrate);
}

function incarcaToate() {
    rendereaza(dateResurse);
}

window.onload = incarcaDate;