# 🧠 Problem Code Editor Challenge

A modern, minimal, and responsive code editor web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **CodeMirror**. This project was developed as part of an internship interview challenge, simulating a real-world coding platform like LeetCode or CodeSandbox.

---

## 🚀 Features

### 🖊️ Code Editor
- Built using **CodeMirror 6**
- Supports multiple programming languages:
  - Python
  - JavaScript
  - TypeScript
  - Go
  - PHP
  - Swift
  - Rust
  - C/C++
- Syntax highlighting for selected language
- Language toggle dropdown

### 📘 Problem Statement Panel
- Displays static mock problem:
  - Title
  - Description
  - Input/Output format
  - Constraints
  - Sample Input/Output

### 🖥️ Output Console
- Simulates code execution with fake delay
- Displays placeholder output
- Responsive positioning (bottom or side based on screen size)

### 🎨 Theme Toggle
- Light/Dark mode switcher
- Follows system preference by default

---

## ✨ Bonus Features
- Reset Button: Clears the editor
- `localStorage` to persist code per language
- Run All Test Cases (simulated output)
- Timer: Shows time elapsed since problem load

---

## 📂 Tech Stack

| Tool        | Description                         |
|-------------|-------------------------------------|
| Next.js 14  | React framework with App Router     |
| TypeScript  | Static typing for safer code        |
| Tailwind CSS| Utility-first styling               |
| CodeMirror  | Powerful, extensible code editor    |

---

## 📂 Project Structure

```
/app
  /editor
    page.tsx               # Main Editor Page
    components/
      CodeEditor.tsx       # CodeMirror instance
      ProblemPanel.tsx     # Static problem content
      OutputPanel.tsx      # Output console
      ThemeToggle.tsx      # Theme switcher
      Timer.tsx            # Optional timer component
    hooks/
      useLocalStorage.ts   # Persist code
      useTheme.ts          # Handle system theme
```

---

## 🛠️ How to Run the Application

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/code-editor-challenge.git
cd code-editor-challenge
```

### 2. Install dependencies
Make sure you have Node.js and npm installed, then run:
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open your browser
Visit: [http://localhost:3000](http://localhost:3000)

---
