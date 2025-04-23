
export interface Language {
  id: string;
  name: string;
  extension: string;
  defaultCode: string;
}

export const languages: Language[] = [
  {
    id: "javascript",
    name: "JavaScript",
    extension: "js",
    defaultCode: `function solution(input) {
  // Write your code here
  return input;
}

// Example usage
console.log(solution([1, 2, 3]));
`,
  },
  {
    id: "typescript",
    name: "TypeScript",
    extension: "ts",
    defaultCode: `function solution(input: any): any {
  // Write your code here
  return input;
}

// Example usage
console.log(solution([1, 2, 3]));
`,
  },
  {
    id: "python",
    name: "Python",
    extension: "py",
    defaultCode: `def solution(input):
    # Write your code here
    return input

# Example usage
print(solution([1, 2, 3]))
`,
  },
  {
    id: "go",
    name: "Go",
    extension: "go",
    defaultCode: `package main

import "fmt"

func solution(input []interface{}) interface{} {
    // Write your code here
    return input
}

func main() {
    fmt.Println(solution([]interface{}{1, 2, 3}))
}
`,
  },
  {
    id: "php",
    name: "PHP",
    extension: "php",
    defaultCode: `<?php
function solution($input) {
    // Write your code here
    return $input;
}

// Example usage
print_r(solution([1, 2, 3]));
`,
  },
  {
    id: "swift",
    name: "Swift",
    extension: "swift",
    defaultCode: `func solution(input: [Any]) -> Any {
    // Write your code here
    return input
}

// Example usage
print(solution([1, 2, 3]))
`,
  },
  {
    id: "rust",
    name: "Rust",
    extension: "rs",
    defaultCode: `fn solution<T>(input: Vec<T>) -> Vec<T> {
    // Write your code here
    input
}

fn main() {
    println!("{:?}", solution(vec![1, 2, 3]));
}
`,
  },
  {
    id: "cpp",
    name: "C++",
    extension: "cpp",
    defaultCode: `#include <iostream>
#include <vector>

template <typename T>
std::vector<T> solution(const std::vector<T>& input) {
    // Write your code here
    return input;
}

int main() {
    std::vector<int> result = solution(std::vector<int>{1, 2, 3});
    for (int i : result) {
        std::cout << i << " ";
    }
    return 0;
}
`,
  },
];

export const getLanguage = (id: string): Language | undefined => {
  return languages.find((lang) => lang.id === id);
};
