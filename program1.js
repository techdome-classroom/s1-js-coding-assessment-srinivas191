const getTotalIsles = function (grid) {
  // Edge case: if the grid is empty, return 0
  if (grid.length === 0) return 0;

  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Helper function to perform DFS and mark visited land cells
  const dfs = (i, j) => {
    // Base case: out of bounds or water cell
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') return;

    // Mark the current cell as visited by setting it to 'W'
    grid[i][j] = 'W';

    // Explore all four directions (up, down, left, right)
    dfs(i + 1, j); // down
    dfs(i - 1, j); // up
    dfs(i, j + 1); // right
    dfs(i, j - 1); // left
  };

  // Loop through the grid to find islands
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L') {
        count++;
        dfs(i, j); // Start DFS to mark the entire island
      }
    }
  }

  return count;
};

module.exports = getTotalIsles;
