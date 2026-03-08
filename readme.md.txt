# Campus Info Hub

### 1. Ce este o resursă?
O resursă este un obiect de date care reprezintă o locație din campus (ex: bibliotecă). Este definită în JSON prin nume, tip, locație și orar.

### 2. Exemplu de URI
`https://tatarciprian.github.io/campus-info-hub/pagini/biblioteca.html#orar`
- **Protocol**: https
- **Host**: github.io
- **Path**: /pagini/biblioteca.html
- **Fragment**: #orar

### 3. Părți statice vs dinamice
- **Statice**: Codul HTML al paginilor și stilurile CSS.
- **Dinamice**: Lista de carduri din pagina principală, generată prin fetch din JSON.

### 4. Tipul aplicației
Este și **document-centrică** (oferă informații) și **interactivă** (permite filtrarea live a resurselor prin JavaScript).