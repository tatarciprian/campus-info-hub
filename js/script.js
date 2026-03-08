let dateResurse = [];

async function incarcaDate() {
    try {
        // Cauta in folderul 'data' fisierul 'resources.json'
        const raspuns = await fetch('./data/resources.json');
        
        if (!raspuns.ok) throw new Error("JSON negasit");

        dateResurse = await raspuns.json();
        rendereaza(dateResurse);
    } catch (eroare) {
        console.error("Eroare la fetch:", eroare);
    }
}

function rendereaza(date) {
    const container = document.getElementById('lista-resurse');
    if (!container) return;
    container.innerHTML = ""; 

    date.forEach(item => {
        const card = document.createElement('div');
        card.className = "card";
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

function afiseazaDoarStudiu() {
    const filtrate = dateResurse.filter(r => r.type === "Studiu");
    rendereaza(filtrate);
}

function incarcaToate() {
    rendereaza(dateResurse);
}

// Porneste incarcarea la start
window.onload = incarcaDate;