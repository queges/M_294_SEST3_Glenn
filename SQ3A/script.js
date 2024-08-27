const modulNameInput = document.getElementById('modulName');
const bewertungInput = document.getElementById('bewertung');
const sendButton = document.getElementById('send');
const bewertungenTable = document.getElementById('bewertungen').querySelector('tbody');
 
sendButton.addEventListener('click', () => {
  const modulName = modulNameInput.value;
  const bewertung = parseInt(bewertungInput.value);
 
  if (modulName.trim() === '' || isNaN(bewertung) || bewertung < 1 || bewertung > 5) {
    alert('Bitte geben Sie einen gültigen Modulnamen und eine Bewertung zwischen 1 und 5 ein.');
    return;
  }
 
  const newRow = bewertungenTable.insertRow();
  const modulNameCell = newRow.insertCell();
  const bewertungCell = newRow.insertCell();
  modulNameCell.textContent = modulName;
  bewertungCell.textContent = bewertung;
 
  // Sortierung der Bewertung
  const rows = bewertungenTable.rows;
  for (let i = 0; i < rows.length - 1; i++) {
    for (let j = 0; j < rows.length - i - 1; j++) {
      const currentRow = rows[j];
      const nextRow = rows[j + 1];
      if (parseInt(currentRow.cells[1].textContent) < parseInt(nextRow.cells[1].textContent)) {
        bewertungenTable.insertBefore(nextRow, currentRow);
      }
    }
  }
 
  modulNameInput.value = '';
  bewertungInput.value = '';
});