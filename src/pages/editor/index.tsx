
import React, { useState } from 'react';
import { CodeEditor } from '@/components/editor/CodeEditor';
import { OutputPanel } from '@/components/editor/OutputPanel';
import { ProblemPanel } from '@/components/editor/ProblemPanel';
import { ThemeToggle } from '@/components/editor/ThemeToggle';
import { Timer } from '@/components/editor/Timer';

export default function EditorPage() {
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  
  // Function to handle running the code
  const handleRunCode = async (code: string, language: string) => {
    setIsRunning(true);
    setOutput('');
    
    // Simulate running code with a fake delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Mock output based on language
    const mockOutputs: Record<string, string> = {
      javascript: '[0, 1]\n// Time complexity: O(n)\n// Space complexity: O(n)',
      typescript: '[0, 1]\n// Time complexity: O(n)\n// Space complexity: O(n)',
      python: '[0, 1]\n# Time complexity: O(n)\n# Space complexity: O(n)',
      go: '[0 1]\n// Time complexity: O(n)\n// Space complexity: O(n)',
      php: 'Array ([0] => 0 [1] => 1)\n// Time complexity: O(n)\n// Space complexity: O(n)',
      swift: '[0, 1]\n// Time complexity: O(n)\n// Space complexity: O(n)',
      rust: '[0, 1]\n// Time complexity: O(n)\n// Space complexity: O(n)',
      cpp: '0 1\n// Time complexity: O(n)\n// Space complexity: O(n)',
    };
    
    setOutput(mockOutputs[language] || 'Execution complete.');
    setIsRunning(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      {/* Header */}
      <header className="border-b px-4 h-14 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Code Arena</h1>
        <div className="flex items-center gap-4">
          <Timer />
          <ThemeToggle />
        </div>
      </header>
      
      {/* Main content - responsive layout */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-0">
        {/* Problem statement - left panel */}
        <div className="w-full lg:w-[400px] border-r lg:max-h-screen lg:overflow-y-auto">
          <ProblemPanel />
        </div>
        
        {/* Code editor and output - center and bottom panels */}
        <div className="flex flex-col flex-1 min-h-0">
          {/* Code editor */}
          <div className="flex-1 min-h-0">
            <CodeEditor onRun={handleRunCode} />
          </div>
          
          {/* Output console */}
          <div className="h-64 border-t">
            <OutputPanel output={output} isRunning={isRunning} />
          </div>
        </div>
      </div>
    </div>
  );
}
