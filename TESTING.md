# Test & CI Summary

This project includes automated testing and CI/CD via GitHub Actions.

## Running Tests Locally

```powershell
# Install test dependencies (if not already done)
npm install

# Run tests once
npm test

# Run tests in watch mode (re-run on file changes)
npm run test:watch
```

## Test Coverage

Tests are located in `src/__tests__/`:

1. **api.test.js** (7 tests)
   - Fetch lessons from `/api/lessons`
   - Fallback to local data on network error
   - Post progress with userId to server
   - Save to localStorage on network error
   - Fetch progress from `/api/progress`
   - Fallback to localStorage on error

2. **Progress.test.jsx** (5 tests)
   - Render empty state
   - Display user ID
   - Render progress entries with scores
   - Handle back/refresh button clicks
   - Verify export button exists

3. **quiz.test.js** (3 tests)
   - User ID generation and persistence
   - Score calculation logic
   - Mixed correct/incorrect answers

4. **userId.test.js** (3 tests)
   - Valid user ID format (user_[9chars]_[timestamp])
   - Persistence across sessions
   - New ID creation after clear

## GitHub Actions CI

Workflow: `.github/workflows/ci.yml`

Runs on:
- Push to `main` branch
- Pull requests to `main` branch

Matrix: Node.js 18.x and 20.x

Steps:
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Run tests
5. Build project
6. Install backend dependencies
7. Verify backend starts

## Adding More Tests

Create new test files in `src/__tests__/` with `.test.js` or `.test.jsx` extension:

```javascript
import { describe, it, expect, vi } from 'vitest'

describe('Feature name', () => {
  it('should do something', () => {
    expect(result).toBe(expected)
  })
})
```

## Test Framework

- **Vitest**: Fast unit test runner (Vite-native)
- **@testing-library/react**: Component testing utilities
- **@testing-library/jest-dom**: DOM matchers

## CI/CD Improvements

To further improve:
- Add code coverage reports (via nyc/c8)
- Add linting (ESLint)
- Add code formatting checks (Prettier)
- Deploy to staging on successful CI
- Add E2E tests (Playwright, Cypress)
