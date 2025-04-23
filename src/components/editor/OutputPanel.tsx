
import React, { useState, useEffect, useRef } from 'react';

interface OutputPanelProps {
  output: string;
  isRunning: boolean;
  className?: string;
}

export function OutputPanel({ output, isRunning, className }: OutputPanelProps) {
  const outputRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom when output changes
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);
  
  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="p-2 border-b text-sm font-medium flex items-center">
        <span>Output</span>
        {isRunning && (
          <div className="ml-2 flex items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse mr-1"></div>
            <span className="text-xs text-muted-foreground">Running...</span>
          </div>
        )}
      </div>
      
      <div 
        ref={outputRef}
        className="flex-1 p-4 font-mono text-sm overflow-y-auto whitespace-pre bg-secondary/30"
      >
        {output || (
          <span className="text-muted-foreground italic">
            Run your code to see output here
          </span>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;
