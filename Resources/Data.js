const gen = (n, m) => {
    const row = Array(m).fill(1).join(" ");
    const matrix = Array(n).fill(row).join("\n");
    return `${n} ${m}\n${matrix}`;
};
const CHAPTERS = [
    {
        id: 1,
        title: "Sorting & Searching",
        problems: [
            {
                lcNumber: 704,
                customId: 1,
                title: "Binary Search",
                difficulty: "easy",
                tags: ["Array", "Binary Search"],
                lcUrl: "https://leetcode.com/problems/binary-search/",
                 description: `
                    <p>Write a C++ program to search for a <strong>target</strong> value in an ascending sorted array.</p>
                    
                    <strong>Input Format:</strong>
                    <ul>
                        <li>Line 1: An integer n (number of elements)</li>
                        <li>Line 2: The target value</li>
                        <li>Line 3: n space-separated integers (the sorted array)</li>
                    </ul>
                    
                    <strong>Output Format:</strong>
                    <ul>
                        <li>Print the index of the target (0-indexed). If not found, print -1.</li>
                    </ul>
                    
                    <strong>Requirement:</strong>
                    <ul>
                        <li>Time complexity must be <strong>O(log n)</strong> (Binary Search)</li>
                    </ul>
                `,
                examples: [
                    { 
                        input: "6 9\n1 -1 0 3 5 9 12", 
                        // 4\n1 1 0 1\n1 1 1 1\n1 0 1 1\n1 1 1 1
                        // 6 9\n -1 0 3 5 9 12
                        output: "5", 
                        explain: "Explanation: The number 9 exists at index 5 in the array." 
                    },
                    { 
                        input: "6 2\n1 -1 0 3 5 9 12", 
                        // 
                        output: "-1", 
                        explain: "Explanation: The number 2 does not exist in the array, so return -1." 
                    }
                ],

                testCases: [
                    { input: "6\n9\n-1 0 3 5 9 12", expectedOutput: "4" },
                    { input: "6\n2\n-1 0 3 5 9 12", expectedOutput: "-1" },
                    { input: "1\n5\n5", expectedOutput: "0" },
                    { input: "10\n10\n1 2 3 4 5 6 7 8 9 10", expectedOutput: "9" },
                    { input: "5\n1\n2 4 6 8 10", expectedOutput: "-1" },

                    { input: "3\n7\n5 7 9", expectedOutput: "1" },
                    { input: "3\n4\n5 7 9", expectedOutput: "-1" },
                    { input: "4\n-3\n-5 -3 -1 0", expectedOutput: "1" },
                    { input: "4\n-6\n-5 -3 -1 0", expectedOutput: "-1" },
                    { input: "5\n100\n10 20 30 40 50", expectedOutput: "-1" },

                    { input: "5\n10\n10 20 30 40 50", expectedOutput: "0" },
                    { input: "5\n50\n10 20 30 40 50", expectedOutput: "4" },
                    { input: "6\n4\n1 2 3 4 5 6", expectedOutput: "3" },
                    { input: "6\n5\n1 2 3 4 5 6", expectedOutput: "4" },
                    { input: "7\n1\n1 3 5 7 9 11 13", expectedOutput: "0" },

                    { input: "7\n13\n1 3 5 7 9 11 13", expectedOutput: "6" },
                    { input: "7\n8\n1 3 5 7 9 11 13", expectedOutput: "-1" },
                    { input: "8\n6\n1 2 3 4 5 6 7 8", expectedOutput: "5" },
                    { input: "8\n0\n1 2 3 4 5 6 7 8", expectedOutput: "-1" },
                    { input: "8\n9\n1 2 3 4 5 6 7 8", expectedOutput: "-1" },

                    { input: "10\n42\n1 5 10 20 30 40 42 50 60 70", expectedOutput: "6" },
                    { input: "10\n41\n1 5 10 20 30 40 42 50 60 70", expectedOutput: "-1" },
                    { input: "9\n15\n-20 -10 -5 0 5 10 15 20 25", expectedOutput: "6" },
                    { input: "9\n-15\n-20 -10 -5 0 5 10 15 20 25", expectedOutput: "-1" },
                    { input: "1\n0\n0", expectedOutput: "0" },

                    { input: "2\n1\n1 2", expectedOutput: "0" },
                    { input: "2\n2\n1 2", expectedOutput: "1" },
                    { input: "2\n3\n1 2", expectedOutput: "-1" },
                    { input: "9\n4\n1 2 3 4 5 6 7 8 9", expectedOutput: "3" },
                    { input: "8\n5\n1 2 3 4 5 6 7 8", expectedOutput: "4" },

                    { input: "0\n5\n", expectedOutput: "-1" },
                    { input: "7\n0\n0 0 0 0 0 0 0", expectedOutput: "3" },
                    { input: "5\n7\n1 3 5 7 9", expectedOutput: "3" },

                    { input: "4\n2\n2 4 6 8", expectedOutput: "0" },
                    { input: "4\n8\n2 4 6 8", expectedOutput: "3" },
                    { input: "4\n5\n2 4 6 8", expectedOutput: "-1" },
                    { input: "5\n3\n1 3 5 7 9", expectedOutput: "1" },
                    { input: "5\n7\n1 3 5 7 9", expectedOutput: "3" },

                    { input: "6\n-1\n-5 -3 -1 1 3 5", expectedOutput: "2" },
                    { input: "6\n0\n-5 -3 -1 1 3 5", expectedOutput: "-1" },
                    { input: "8\n15\n1 3 6 10 15 21 28 36", expectedOutput: "4" },
                    { input: "8\n14\n1 3 6 10 15 21 28 36", expectedOutput: "-1" },
                    { input: "3\n1000000000\n1 500000000 1000000000", expectedOutput: "2" },
                    { input: "4\n100\n10 20 30 40", expectedOutput: "-1" },
                    { input: "5\n-10\n-10 -5 0 5 10", expectedOutput: "0" },
                    { input: "10\n300\n50 100 150 200 250 300 350 400 450 500", expectedOutput: "5" },
                    { input: "8\n175\n25 75 125 175 225 275 325 375", expectedOutput: "3" },
                    { input: "7\n900\n100 200 300 400 500 600 700", expectedOutput: "-1" },
                    { input: "9\n700\n100 200 300 400 500 600 700 800 900", expectedOutput: "6" },
                    { input: "6\n50\n100 200 300 400 500 600", expectedOutput: "-1" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Backtracking",
        problems: [
            {
                lcNumber: 52,
                customId: 1,
                title: "N-Queens",
                difficulty: "hard",
                tags: ["Backtracking", "Matrix"],
                lcUrl: "https://leetcode.com/problems/n-queens-ii/",
                description: `
                    <p>The <strong>n-queens</strong> puzzle is the problem of placing <strong>n</strong> queens on an <strong>n × n</strong> chessboard such that no two queens attack each other.</p>
                    
                    <p>Given an integer <strong>n</strong>, return the <em>number of distinct solutions</em> to the n-queens puzzle.</p>
                    
                    <strong>Input Format:</strong>
                    <ul>
                        <li>A single line containing a positive integer <strong>n</strong></li>
                    </ul>
                    
                    <strong>Output Format:</strong>
                    <ul>
                        <li>Print a single integer: the total number of distinct solutions</li>
                    </ul>

                    <strong>Constraints:</strong>
                    <ul>
                        <li>1 ≤ n ≤ 12</li>
                    </ul>
                `,
                examples: [
                    {
                        input: "4", 
                        output: "2", 
                        explain: "Explanation: There are two distinct solutions for the 4-queens puzzle."
                    },
                    {
                        input: "1", 
                        output: "1", 
                        explain: "Explanation: There is only one position possible on a 1x1 board."
                    },
                    {
                        input: "8",
                        output: "92",
                        explain: "Explanation: For a standard 8x8 chessboard, there are 92 distinct ways to place the queens."
                    }
                ],
                timeComplexity: "O(N!)",
                spaceComplexity: "O(N)",
                testCases: [
                    { input: "1", expectedOutput: "1" },
                    { input: "2", expectedOutput: "0" },
                    { input: "3", expectedOutput: "0" },
                    { input: "4", expectedOutput: "2" },
                    { input: "5", expectedOutput: "10" },
                    { input: "6", expectedOutput: "4" },
                    { input: "7", expectedOutput: "40" },
                    { input: "8", expectedOutput: "92" },
                    { input: "9", expectedOutput: "352" },
                    { input: "10", expectedOutput: "724" },
                    { input: "11", expectedOutput: "2680" },
                    { input: "12", expectedOutput: "14200" },
                    { input: "13", expectedOutput: "73712" }
                ]
            },
            {
                lcNumber: 2000,
                customId: 2,
                title: "Find all sets of numbers with sum S",
                difficulty: "medium",
                tags: ["Backtracking", "Array"],
                lcUrl: "#",
                description: `
                    <p>Consider all sets of <strong>distinct positive integers</strong> whose elements are not greater than a given number <strong>n</strong>.</p>
                    
                    <p>Your task is to count how many such sets contain exactly <strong>k</strong> elements and have a total sum equal to <strong>s</strong>.</p>
                    
                    <p><em>Note: Two sets that differ only in the order of elements are considered the same set.</em></p>
                    
                    <strong>Input Format:</strong>
                    <ul>
                        <li>A single line containing three integers: n, k, s</li>
                    </ul>
                    
                    <strong>Output Format:</strong>
                    <ul>
                        <li>Print a single integer: the count of valid sets</li>
                    </ul>
                    
                    <strong>Constraints:</strong>
                    <ul>
                        <li>1 ≤ k ≤ n ≤ 20</li>
                        <li>1 ≤ s ≤ 1000</li>
                    </ul>
                `,
                examples: [
                    {
                        input: "16 8 91", 
                        output: "28", 
                        explain: "There are 28 different sets consisting of 8 distinct numbers from 1 to 16 whose total sum is exactly 91."
                    },
                    {
                        input: "9 3 23", 
                        output: "1", 
                        explain: "The only valid set is {6, 8, 9}."
                    }
                ],
                timeComplexity: "O(C(n, k))",
                spaceComplexity: "O(k)",
                testCases: [
                    {
                        input: "9 3 23",
                        expectedOutput: "1",
                        description: "Test case 1: Example (n=9, k=3, s=23)"
                    },
                    {
                        input: "16 8 91",
                        expectedOutput: "28",
                        description: "Test case 2: Larger inputs (n=16, k=8, s=91)"
                    },
                    {
                        input: "10 2 5",
                        expectedOutput: "2",
                        description: "Test case 3: Small inputs ({1,4}, {2,3})"
                    },
                    {
                        input: "5 3 20",
                        expectedOutput: "0",
                        description: "Test case 4: Impossible sum"
                    },
                    {
                        input: "20 10 155",
                        expectedOutput: "1",
                        description: "Test case 5: Max boundary ({11,12,...,20})"
                    },
                    { 
                        input: "7 3 6", 
                        expectedOutput: "1" 
                    },
                    { input: "7 3 6", expectedOutput: "1" },
                    { input: "7 3 9", expectedOutput: "3" },
                    // { input: "7 3 12", expectedOutput: "4" },
                    { input: "8 3 6", expectedOutput: "1" },
                    { input: "8 3 7", expectedOutput: "1" },
                    { input: "8 3 15", expectedOutput: "6" },
                    { input: "8 4 10", expectedOutput: "1" },
                    { input: "9 1 9", expectedOutput: "1" },
                    { input: "9 1 10", expectedOutput: "0" },
                    { input: "9 2 5", expectedOutput: "2" },
                    { input: "9 3 6", expectedOutput: "1" },
                    { input: "10 2 3", expectedOutput: "1" },
                    { input: "10 3 6", expectedOutput: "1" },
                    { input: "10 3 9", expectedOutput: "3" },
                    { input: "10 4 10", expectedOutput: "1" },
                    { input: "10 4 15", expectedOutput: "6" },
                    { input: "10 4 30", expectedOutput: "5" },
                    { input: "12 3 6", expectedOutput: "1" },
                    { input: "12 4 10", expectedOutput: "1" },
                    { input: "15 3 6", expectedOutput: "1" },
                ]
            },
            {
                lcNumber: 2001,
                customId: 3,
                title: "Rat in a Maze",
                difficulty: "medium",
                tags: ["Backtracking", "Matrix", "Recursion"],
                lcUrl: "#",
                description: `
                    <p>A maze is represented as a binary matrix of size <strong>N × N</strong>.</p>
                    
                    <p>A rat starts at cell <strong>(1, 1)</strong> and wants to reach cell <strong>(N, N)</strong>.</p>
                    
                    <p>The rat can only move <strong>down (D)</strong> or <strong>right (R)</strong>, and can only move to a cell if that cell has a value of <strong>1</strong>.</p>
                    
                    <p><strong>Note:</strong> On each path, the rat can visit each cell at most once.</p>
                    
                    <strong>Input Format:</strong>
                    <ul>
                        <li>First line: An integer <strong>N</strong> (size of the matrix)</li>
                        <li>Next <strong>N</strong> lines: Each line contains <strong>N</strong> integers (0 or 1)</li>
                    </ul>
                    
                    <strong>Output Format:</strong>
                    <ul>
                        <li>Print all valid paths in lexicographically increasing order, one path per line</li>
                        <li>If the rat cannot reach cell (N, N), print <code>-1</code></li>
                        <li>In the path: <strong>R</strong> = move right, <strong>D</strong> = move down</li>
                    </ul>
                    
                    <strong>Constraints:</strong>
                    <ul>
                        <li>1 ≤ N ≤ 12</li>
                        <li>The starting cell (1, 1) is guaranteed to be 1</li>
                    </ul>
                `,
                examples: [
                    {
                        input: "4\n1 1 0 1\n1 1 1 1\n1 0 1 1\n1 1 1 1", 
                        output: "DDDRRR\nDRRDDR\nDRRDRD\nDRRRDD\nRDRDDR\nRDRDRD\nRDRRDD", 
                        explain: "There are 7 valid paths from (1,1) to (4,4), sorted in lexicographical order."
                    },
                    {
                        input: "2\n1 0\n0 1", 
                        output: "-1", 
                        explain: "There is no valid path from (1,1) to (2,2)."
                    },
                    {
                        input: "3\n1 1 1\n1 1 1\n1 1 1", 
                        output: "DDRR\nDRDR\nDRRD\nRDDR\nRDRD\nRRDD", 
                        explain: "There are 6 valid paths in a matrix of all 1s."
                    }
                ],
                timeComplexity: "O(2^(N²))",
                spaceComplexity: "O(N²)",
                testCases: [
                    {
                        input: "4\n1 1 0 1\n1 1 1 1\n1 0 1 1\n1 1 1 1",
                        expectedOutput: "DDDRRR\nDRRDDR\nDRRDRD\nDRRRDD\nRDRDDR\nRDRDRD\nRDRRDD",
                    },
                    {
                        input: "2\n1 0\n0 1",
                        expectedOutput: "-1",
                    },
                    {
                        input: "3\n1 1 1\n1 1 1\n1 1 1",
                        expectedOutput: "DDRR\nDRDR\nDRRD\nRDDR\nRDRD\nRRDD",
                    },
                    {
                        input: "1\n1",
                        expectedOutput: "",
                    },
                    {
                        input: "5\n1 1 1 1 1\n1 0 0 0 1\n1 1 1 0 1\n1 0 1 1 1\n1 1 1 1 1",
                        expectedOutput: "DDDDRRRR\nDDRRDDRR\nDDRRDRDR\nDDRRDRRD\nRRRRDDDD",
                    },
                    {
                        input: "3\n1 1 0\n1 1 0\n0 1 1",
                        expectedOutput: "DRDR\nRDDR",
                    },
                    {
                        input: "3\n1 1 1\n1 0 1\n1 1 0",
                        expectedOutput: "-1",
                    },
                    {
                        input: "4\n1 0 0 0\n1 1 0 0\n0 1 1 0\n0 0 1 1",
                        expectedOutput: "DRDRDR",
                    },
                    {
                        input: "2\n1 1\n1 1",
                        expectedOutput: "DR\nRD",
                    },
                    {
                        input: "5\n1 1 1 0 0\n0 0 1 0 0\n0 0 1 1 0\n0 0 0 1 1\n0 0 0 0 1",
                        expectedOutput: "RRDDRDRD",
                    },
                    {
                        input: "3\n1 1 1\n1 1 1\n1 1 1",
                        expectedOutput: "DDRR\nDRDR\nDRRD\nRDDR\nRDRD\nRRDD",
                    },
                    {
                        input: "2\n1 1\n1 0",
                        expectedOutput: "-1",
                    },
                    {
                        input: "2\n1 0\n1 1",
                        expectedOutput: "DR",
                    },
                    {
                        input: "2\n1 1\n0 1",
                        expectedOutput: "RD",
                    },
                    {
                        input: "3\n1 0 0\n1 1 0\n0 1 1",
                        expectedOutput: "DRDR",
                    },
                    {
                        input: "3\n1 1 1\n0 1 0\n0 1 1",
                        expectedOutput: "RDDR",
                    },
                    {
                        input: "3\n1 1 1\n1 0 1\n1 1 1",
                        expectedOutput: "DDRR\nRRDD",
                    },
                    {
                        input: "4\n1 1 1 1\n1 0 0 1\n1 0 0 1\n1 1 1 1",
                        expectedOutput: "DDDRRR\nRRRDDD",
                    },
                    {
                        input: "4\n1 0 0 0\n1 1 0 0\n0 1 0 0\n0 1 1 1",
                        expectedOutput: "DRDDRR",
                    },
                    {
                        input: "4\n1 1 0 0\n0 1 1 0\n0 0 1 1\n0 0 0 1",
                        expectedOutput: "RDRDRD",
                    },
                    {
                        input: "5\n1 0 0 0 0\n1 1 0 0 0\n0 1 1 0 0\n0 0 1 1 0\n0 0 0 1 1",
                        expectedOutput: "DRDRDRDR",
                    },
                    {
                        input: "5\n1 0 0 0 1\n1 0 0 0 1\n1 0 0 0 1\n1 0 0 0 1\n1 1 1 1 1",
                        expectedOutput: "DDDDRRRR",
                    },
                    {
                        input: "4\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1",
                        expectedOutput: "DDDRRR\nDDRDRR\nDDRRDR\nDDRRRD\nDRDDRR\nDRDRDR\nDRDRRD\nDRRDDR\nDRRDRD\nDRRRDD\nRDDDRR\nRDDRDR\nRDDRRD\nRDRDDR\nRDRDRD\nRDRRDD\nRRDDDR\nRRDDRD\nRRDRDD\nRRRDDD",
                    },
                    {
                        input: "3\n1 0 1\n1 0 1\n1 1 1",
                        expectedOutput: "DDRR",
                    },
                    {
                        input: "3\n1 1 1\n0 0 1\n0 0 1",
                        expectedOutput: "RRDD",
                    },
                    {
                        input: "4\n1 1 0 0\n1 0 0 0\n1 1 1 0\n0 0 1 1",
                        expectedOutput: "DDRRDR",
                    },
                    {
                        input: "6\n1 1 0 0 0 0\n0 1 1 0 0 0\n0 0 1 1 0 0\n0 0 0 1 1 0\n0 0 0 0 1 1\n0 0 0 0 0 1",
                        expectedOutput: "RDRDRDRDRD",
                    }, 
                    {
                        input: "4\n1 1 1 1\n1 0 0 1\n1 0 0 1\n1 1 1 1",
                        expectedOutput: "DDDRRR\nRRRDDD",
                    },
                    {
                        input: "3\n1 1 1\n1 1 0\n1 0 1",
                        expectedOutput: "-1",
                    },
                    {
                        input: "3\n1 0 1\n0 1 0\n1 0 1",
                        expectedOutput: "-1",
                    },
                    {
                        input: "3\n1 1 1\n1 0 1\n1 1 1",
                        expectedOutput: "DDRR\nRRDD",
                    },
                    {
                        input: "3\n1 1 1\n0 1 0\n1 1 1",
                        expectedOutput: "RDDR",
                    },
                    {
                        input: "4\n1 0 0 0\n1 1 0 1\n1 1 0 0\n0 1 1 1",
                        expectedOutput: "DDRDRR\nDRDDRR",
                    },
                    {
                        input: "3\n1 1 1\n1 0 1\n1 1 1",
                        expectedOutput: "DDRR\nRRDD",
                    },
                   
                    {
                        input: "4\n1 0 0 0\n1 0 0 0\n1 0 0 0\n1 1 1 1",
                        expectedOutput: "DDDRRR",
                    }
                ]
            },
            {   
                
                lcNumber: 62,
                customId: 4,
                title: "Count All Paths",
                difficulty: "medium",
                tags: ["Backtracking", "Matrix", "Dynamic Programming"],
                lcUrl: "https://leetcode.com/problems/unique-paths/",
                description: `
                    <p>Given a matrix <strong>A</strong> with <strong>N</strong> rows and <strong>M</strong> columns. Your task is to count all possible paths from the top-left cell <strong>A[0][0]</strong> to the bottom-right cell <strong>A[N-1][M-1]</strong>.</p>
                    
                    <p>You are only allowed to move <strong>down</strong> or to the <strong>right</strong> to an adjacent cell.</p>
                    
                    <strong>Input Format:</strong>
                    <ul>
                        <li>Line 1: Two integers <strong>N</strong> and <strong>M</strong>.</li>
                        <li>Next N lines: The elements of the matrix <strong>A</strong> (space-separated).</li>
                    </ul>
                    
                    <strong>Output Format:</strong>
                    <ul>
                        <li>Print the total number of valid paths.</li>
                    </ul>
                    
                    <strong>Constraints:</strong>
                    <ul>
                        <li>1 ≤ N, M ≤ 10</li>
                        <li>A[i][j] ≤ 10000</li>
                    </ul>
                `,
                examples: [
                    {
                        input: "3 5\n4 6 8 3 1\n9 8 8 9 1\n10 6 3 4 5",
                        output: "15",
                        explain: "Explanation: There are 15 distinct paths from the top-left to the bottom-right in a 3x5 grid."
                    }
                ],
                timeComplexity: "O(2^(N+M))",
                spaceComplexity: "O(N*M)",
                testCases: [
                    {
                        input: "3 5\n4 6 8 3 1\n9 8 8 9 1\n10 6 3 4 5",
                        expectedOutput: "15",
                    },
                    {
                        input: "2 2\n1 2\n3 4",
                        expectedOutput: "2",
                    },
                    {
                        input: "1 5\n1 2 3 4 5",
                        expectedOutput: "1",
                    },
                    {
                        input: "5 1\n1\n2\n3\n4\n5",
                        expectedOutput: "1",
                    },
                    {
                        input: "3 3\n1 1 1\n1 1 1\n1 1 1",
                        expectedOutput: "6",
                    },
                    {
                        input: "3 7\n1 2 3 4 5 6 7\n8 9 10 11 12 13 14\n15 16 17 18 19 20 21",
                        expectedOutput: "28",
                    },
                    {
                        input: "7 3\n1 1 1\n1 1 1\n1 1 1\n1 1 1\n1 1 1\n1 1 1\n1 1 1",
                        expectedOutput: "28",
                    },
                    {
                        input: "10 10\n" + Array(10).fill(Array(10).fill(1).join(" ")).join("\n"),
                        expectedOutput: "48620",
                    },
                    { input: gen(1, 1), expectedOutput: "1" },
                    { input: gen(1, 2), expectedOutput: "1" },
                    { input: gen(1, 5), expectedOutput: "1" },
                    { input: gen(5, 1), expectedOutput: "1" },
                    { input: gen(1, 10), expectedOutput: "1" },
                    { input: gen(10, 1), expectedOutput: "1" },
                    { input: gen(2, 2), expectedOutput: "2" },
                    { input: gen(3, 3), expectedOutput: "6" },
                    { input: gen(4, 4), expectedOutput: "20" },
                    { input: gen(5, 5), expectedOutput: "70" },
                    { input: gen(2, 3), expectedOutput: "3" },
                    { input: gen(3, 2), expectedOutput: "3" },
                    { input: gen(2, 4), expectedOutput: "4" },
                    { input: gen(4, 2), expectedOutput: "4" },
                    { input: gen(2, 5), expectedOutput: "5" },
                    { input: gen(5, 2), expectedOutput: "5" },
                    { input: gen(2, 10), expectedOutput: "10" },
                    { input: gen(10, 2), expectedOutput: "10" },
                    { input: gen(3, 4), expectedOutput: "10" },
                    { input: gen(4, 3), expectedOutput: "10" },
                    { input: gen(3, 5), expectedOutput: "15" },
                    { input: gen(5, 3), expectedOutput: "15" },
                    { input: gen(3, 6), expectedOutput: "21" },
                    { input: gen(6, 3), expectedOutput: "21" },
                    { input: gen(3, 7), expectedOutput: "28" }, 
                    { input: gen(4, 5), expectedOutput: "35" },
                    { input: gen(5, 4), expectedOutput: "35" },
                    { input: gen(4, 6), expectedOutput: "56" },
                    { input: gen(6, 4), expectedOutput: "56" },
                    { input: gen(6, 6), expectedOutput: "252" },
                    { input: gen(8, 8), expectedOutput: "3432" },
                    { input: gen(10, 10), expectedOutput: "48620" },
                    
                ]
            }
        ]
    }
];


if (typeof CHAPTERS === 'undefined' || !Array.isArray(CHAPTERS)) {
    console.error('CHAPTERS data is invalid!');
}


if (typeof window !== 'undefined') {
    window.CHAPTERS = CHAPTERS;
}