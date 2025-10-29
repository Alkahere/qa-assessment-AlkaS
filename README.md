# QA Assessment - Alka S

This repository contains a **QA assessment project** using **Playwright** and **TypeScript**. It demonstrates a structured testing framework using the **Page Object Model (POM)** design pattern, organized test scripts, and utilities for reusable code.

## Project Structure

- `tests/` – Contains all test scripts.  
- `utils/pages/` – Page Object Model files for reusable page interactions.  
- `reports/` – Stores test execution reports.  
- `.env` – Environment variables (not committed to GitHub).  
- `node_modules/`, `test-results/`, `storageState.json` – Ignored by Git.

## Features

- **Playwright + TypeScript**: End-to-end testing framework with type safety.  
- **Page Object Model**: Maintainable and reusable code structure.  
- **Reports**: Test execution results saved in `reports/`.  
- **Environment Management**: `.env` used for secrets and configuration.  

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Alkahere/qa-assessment-AlkaS.git
cd qa-assessment-AlkaS

2. Install dependencies:

Install all required Node.js packages:

```bash
npm install

npx playwright install

3. Set up environment variables:

EMAIL=your-username
PASSWORD=your-password

5. Run tests:
npx playwright test


