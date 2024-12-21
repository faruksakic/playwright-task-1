# Playwright Task 1

This project is a test suite using Playwright JavaScript.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/yourusername/playwright-task-1.git
    ```
2. Navigate to the project directory:
    ```
    cd playwright-task-1
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Install Playwright browsers:
    ```
    npx playwright install
    ```

### Running Tests

To run the tests, use the following command:
```sh
npx playwright test
```

### Project Structure

- `tests/`: Contains all the test files.
- `playwright.config.js`: Playwright configuration file.
- `pages/`: Contains page object models for main tests
- `config.js`: Contains configurations for the tests
- `testData.js`: Contains test data for the tests

├── pages/
│   ├── loginPage.js          # Login page object
│   └── accountDashboard.js   # Dashoards page object
├── config/
│   └── config.js             # Configuration settings
├── tests/
│   └── tests.spec.js         # Test
├── testData.js               # Test data
└── playwright.config.js      # Playwright configuration

### Features

- Page Object Model: Organized test structure using page objects for better maintainability
- Data-Driven Testing: Configurable test data and scenarios
- Cross-Browser Testing: Support for Chromium, Firefox, and WebKit
- Detailed Reporting: HTML test reports with failure screenshots
- Configurable Settings: Environment configurations and timeouts

## Contributing

- Fork the repository
- Create your feature branch
- Commit your changes
- Push to the branch
- Create a Pull Request
