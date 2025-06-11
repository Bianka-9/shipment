import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open'; // automatikus böngészőnyitáshoz

const app = express();
const PORT = 3001;

// __dirname helyettesítése ES Modules alatt
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// statikus fájlok kiszolgálása a public mappából
app.use(express.static(path.join(__dirname, 'public')));

// szerver indítása és böngésző megnyitása
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`Frontend szerver fut a ${url} címen`);
  open(url); // automatikusan megnyitja a böngészőt
});
