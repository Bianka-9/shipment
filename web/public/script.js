/*
* File: script.js
* Author: Nagy Bianka
* Copyright: 2025, Nagy Bianka
* Group: Szoft I-N
* Date: 2025.06.11.
* Github: https://github.com/Bianka-9/
* Licenc: MIT
*/ 

async function fetchShipments() {
    try {
        const response = await fetch('http://localhost:8000/api/shipments');
        const data = await response.json();

        console.log('Kapott válasz:', data);

        // Ha a válasz egy tömb (pl. [ {...}, {...} ])
        if (Array.isArray(data)) {
            renderShipments(data);
        }
        // Ha a válasz objektum és van benne 'data' kulcs (pl. { data: [ ... ] })
        else if (Array.isArray(data.data)) {
            renderShipments(data.data);
        }
        // Egyéb esetben figyelmeztetés
        else {
            console.warn('Ismeretlen válaszformátum:', data);
        }
    } catch (error) {
        console.error('Hiba a hajórakományok lekérésekor:', error);
    }
}

function renderShipments(shipments) {
    const table = document.querySelector('#shipmentsTable tbody');
    table.innerHTML = '';

    shipments.forEach(shipment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${shipment.id}</td>
            <td>${shipment.shipmentId}</td>
            <td>${shipment.addressee}</td>
            <td>${shipment.targetCity}</td>
            <td>${shipment.sentDate}</td>
            <td>${shipment.endDate}</td>
        `;
        table.appendChild(row);
    });
}

function toggleAbout() {
    const about = document.getElementById('about');
    about.style.display = (about.style.display === 'none') ? 'block' : 'none';
}

window.onload = fetchShipments;
