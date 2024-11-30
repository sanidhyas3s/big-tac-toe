// Get all cells
const cells = document.querySelectorAll("[data-cell]");
let isXTurn = true; // X starts first

// Add click events to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Prevent overriding a cell
    if (cell.textContent) return;

    // Add ❌ or ⭕ based on the turn
    cell.textContent = isXTurn ? "❌" : "⭕";
    isXTurn = !isXTurn; // Switch turn
  });
});
