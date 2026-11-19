export interface DSAStats {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  globalRanking: string;
  leetcodeUrl: string;
  gfgUrl: string;
  preferredLanguages: string[];
  coreTopics: {
    name: string;
    description: string;
    keyProblems: string[];
  }[];
  methodology: string[];
}

export const dsaStatsData: DSAStats = {
  username: "raahul_12",
  totalSolved: 435,
  easySolved: 170,
  mediumSolved: 220,
  hardSolved: 45,
  globalRanking: "Top ~285K Global",
  leetcodeUrl: "https://leetcode.com/u/raahul_12/",
  gfgUrl: "https://www.geeksforgeeks.org/user/rahulnishad5708/",
  preferredLanguages: ["Java", "C++", "JavaScript"],
  coreTopics: [
    {
      name: "Dynamic Programming",
      description: "Breaking complex optimization problems into overlapping subproblems with memoization & tabulation.",
      keyProblems: ["0/1 Knapsack", "Longest Common Subsequence", "Coin Change", "Word Break"],
    },
    {
      name: "Trees & Binary Search Trees",
      description: "Mastering recursive and iterative tree traversals, height-balanced validation, and path sum queries.",
      keyProblems: ["Lowest Common Ancestor", "Binary Tree Level Order", "Validate BST", "Serialize & Deserialize"],
    },
    {
      name: "Graphs & Grid Traversals",
      description: "Breadth-First and Depth-First Search for connected components, shortest paths, and topological ordering.",
      keyProblems: ["Number of Islands", "Course Schedule", "Rotting Oranges", "Word Ladder"],
    },
    {
      name: "Two Pointers & Sliding Window",
      description: "Optimal sub-array and string window queries minimizing space and bounding time complexity to O(N).",
      keyProblems: ["3Sum", "Container With Most Water", "Longest Substring Without Repeating", "Trapping Rain Water"],
    },
    {
      name: "Binary Search & Monotonic Stacks",
      description: "Searching logarithmic answer spaces and finding next greater elements with linear time constraints.",
      keyProblems: ["Search in Rotated Sorted Array", "Daily Temperatures", "Koko Eating Bananas"],
    },
  ],
  methodology: [
    "Always clarify edge cases (empty inputs, integer overflow, negatives) before writing code.",
    "Formulate the brute-force time and space complexity as an initial baseline.",
    "Identify optimal data structure trade-offs (e.g. Hash Map vs Trie, Heap vs BST).",
    "Dry-run logic with sample test cases to eliminate off-by-one errors before submission.",
    "Document the final Big-O time and space complexity with clear rationale.",
  ],
};

