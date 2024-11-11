const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;
  
  // dp[i][j] will be true if p[0...j-1] matches s[0...i-1]
  const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

  // Base case: empty pattern matches empty message
  dp[0][0] = true;

  // Fill the first row where the pattern has leading '*'
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  // Fill the dp table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        // '*' can match any sequence or be empty
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
        // '?' matches any single character, or characters match directly
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[m][n];
};

module.exports = decodeTheRing;
