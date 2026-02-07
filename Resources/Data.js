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
                        <li>Line 1: An integer <code>n</code> (number of elements)</li>
                        <li>Line 2: The target value</li>
                        <li>Line 3: <code>n</code> space-separated integers (the sorted array)</li>
                    </ul>
                    
                    <strong>Output Format:</strong>
                    <ul>
                        <li>Print the index of the target (0-indexed). If not found, print <code>-1</code>.</li>
                    </ul>
                    
                    <strong>Requirement:</strong>
                    <ul>
                        <li>Time complexity must be <strong>O(log n)</strong> (Binary Search)</li>
                    </ul>
                `,
                examples: [
                    { 
                        input: "n = 6, arr[] = {-1, 0, 3, 5, 9, 12}, target = 9", 
                        output: "4", 
                        explain: "Explanation: The number 9 exists at index 4 in the array." 
                    },
                    { 
                        input: "n = 6, arr[] = {-1, 0, 3, 5, 9, 12}, target = 2", 
                        output: "-1", 
                        explain: "Explanation: The number 2 does not exist in the array, so return -1." 
                    }
                ],

                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)",
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
                    {
                        input: "4",
                        expectedOutput: "2",
                        description: "Test case 1: n = 4"
                    },
                    {
                        input: "8",
                        expectedOutput: "92",
                        description: "Test case 3: Standard n = 8 (Classic)"
                    },
                    {
                        input: "5",
                        expectedOutput: "10",
                        description: "Test case 4: n = 5"
                    },
                    {
                        input: "9",
                        expectedOutput: "352",
                        description: "Test case 5: Max constraint n = 9"
                    },
                    {
                        input: "1",
                        expectedOutput: "1",
                        description: "Test case 2: n = 1"
                    }
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
                        <li>A single line containing three integers: <code>n</code>, <code>k</code>, <code>s</code></li>
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
                    }
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
                        description: "Test case 1: Example maze with obstacles"
                    },
                    {
                        input: "2\n1 0\n0 1",
                        expectedOutput: "-1",
                        description: "Test case 2: No valid path"
                    },
                    {
                        input: "3\n1 1 1\n1 1 1\n1 1 1",
                        expectedOutput: "DDRR\nDRDR\nDRRD\nRDDR\nRDRD\nRRDD",
                        description: "Test case 3: All cells accessible"
                    },
                    {
                        input: "1\n1",
                        expectedOutput: "",
                        description: "Test case 4: Single cell (already at destination)"
                    },
                    {
                        input: "5\n1 1 1 1 1\n1 0 0 0 1\n1 1 1 0 1\n1 0 1 1 1\n1 1 1 1 1",
                        expectedOutput: "DDDDRRRR\nDDRRDDRR\nDDRRDRDR\nDDRRDRRD\nRRRRDDDD",
                        description: "Test case 5: Larger maze with limited paths"
                    }
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