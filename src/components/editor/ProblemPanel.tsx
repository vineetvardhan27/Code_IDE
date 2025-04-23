
import React from 'react';

interface ProblemPanelProps {
  className?: string;
}

export function ProblemPanel({ className }: ProblemPanelProps) {
  return (
    <div className={`p-4 overflow-y-auto ${className}`}>
      <h1 className="text-xl font-bold mb-4">Two Sum</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-lg font-semibold">Problem Description</h2>
        <p>
          Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
        </p>
        <p>
          You may assume that each input would have exactly one solution, and you may not use the same element twice.
        </p>
        <p>
          You can return the answer in any order.
        </p>
        
        <h3 className="font-semibold mt-4">Example 1:</h3>
        <pre className="bg-secondary p-3 rounded-md overflow-auto">
          <code>
            Input: nums = [2,7,11,15], target = 9{'\n'}
            Output: [0,1]{'\n'}
            Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
          </code>
        </pre>
        
        <h3 className="font-semibold mt-4">Example 2:</h3>
        <pre className="bg-secondary p-3 rounded-md overflow-auto">
          <code>
            Input: nums = [3,2,4], target = 6{'\n'}
            Output: [1,2]
          </code>
        </pre>
        
        <h3 className="font-semibold mt-4">Example 3:</h3>
        <pre className="bg-secondary p-3 rounded-md overflow-auto">
          <code>
            Input: nums = [3,3], target = 6{'\n'}
            Output: [0,1]
          </code>
        </pre>
        
        <h3 className="font-semibold mt-4">Constraints:</h3>
        <ul className="list-disc pl-5">
          <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
          <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
          <li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
          <li><strong>Only one valid answer exists.</strong></li>
        </ul>
        
        <h3 className="font-semibold mt-4">Follow-up:</h3>
        <p>
          Can you come up with an algorithm that is less than <code>O(n²)</code> time complexity?
        </p>
      </div>
    </div>
  );
}

export default ProblemPanel;
