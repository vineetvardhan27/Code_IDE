
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Language, languages, getLanguage } from '@/lib/languages';
import { useLocalStorage } from '@/hooks/useLocalStorage';

// Import CodeMirror directly since we're using Vite, not Next.js
import CodeMirror from '@uiw/react-codemirror';

interface CodeEditorProps {
  onRun: (code: string, language: string) => void;
  className?: string;
}

export function CodeEditor({ onRun, className }: CodeEditorProps) {
  const [selectedLanguage, setSelectedLanguage] = useLocalStorage<string>('selected-language', 'javascript');
  const [code, setCode] = useLocalStorage<Record<string, string>>('editor-code', {
    javascript: getLanguage('javascript')?.defaultCode || '',
    typescript: getLanguage('typescript')?.defaultCode || '',
    python: getLanguage('python')?.defaultCode || '',
    go: getLanguage('go')?.defaultCode || '',
    php: getLanguage('php')?.defaultCode || '',
    swift: getLanguage('swift')?.defaultCode || '',
    rust: getLanguage('rust')?.defaultCode || '',
    cpp: getLanguage('cpp')?.defaultCode || '',
  });
  
  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };
  
  const handleCodeChange = (value: string) => {
    setCode({
      ...code,
      [selectedLanguage]: value
    });
  };
  
  const handleRun = () => {
    onRun(code[selectedLanguage], selectedLanguage);
  };
  
  const handleReset = () => {
    const defaultCode = getLanguage(selectedLanguage)?.defaultCode || '';
    setCode({
      ...code,
      [selectedLanguage]: defaultCode
    });
  };

  // Simple function for basic syntax highlighting
  const getLanguageExtension = (langId: string) => {
    // Basic handling for syntax highlighting
    // In a production app, we would dynamically import the correct extensions
    return [];
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="flex items-center justify-between p-2 border-b">
        <div className="w-40">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.id} value={lang.id}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleReset}
            title="Reset code"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
          <Button size="sm" onClick={handleRun}>
            <Play className="h-4 w-4 mr-1" />
            Run
          </Button>
        </div>
      </div>
      
      <div className="flex-1 min-h-0 font-mono">
        {/* We use a basic textarea initially for SSR compatibility */}
        <div className="h-full">
          {typeof window !== 'undefined' && (
            <CodeMirror
              value={code[selectedLanguage]}
              height="100%"
              onChange={handleCodeChange}
              theme="dark"
              extensions={getLanguageExtension(selectedLanguage)}
              className="h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
