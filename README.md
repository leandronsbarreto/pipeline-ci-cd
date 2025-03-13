# Pipeline CI/CD Example Project

This project demonstrates a simple Continuous Integration and Continuous Deployment (CI/CD) pipeline using **Mocha** and **Chai** for testing in a **Node.js** environment. The pipeline is set up using **GitHub Actions** to automatically run tests whenever code is pushed to the repository.

## Features

- **Mocha** for running unit tests.
- **Chai** for assertions in the tests.
- CI/CD pipeline configuration using **GitHub Actions**.
- The project structure includes tests located in the **`test/`** directory.

## Prerequisites

Before getting started, you need to have **Node.js** and **npm** installed on your machine.

1. Install [Node.js](https://nodejs.org/) (which includes npm).
2. Ensure you have access to the GitHub repository and GitHub Actions is enabled for this project.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/pipeline-ci-cd.git

2. Navigate to the project directory:

   ```bash
   cd pipeline-ci-cd

3. Install the project dependencies:

   ```bash
   npm install

## Running Tests Locally

To run the tests locally, use the following command: npm test

This will execute Mocha and run all the test files located in the test/ directory. The tests will use Chai for assertions.

## CI/CD Pipeline

This project is integrated with GitHub Actions to automate testing. The configuration is located in the .github/workflows/ci.yml file.

## Key Steps in the CI Pipeline:

1. **Checkout the Code**: The latest code is checked out from the repository.
2. **Setup Node.js**: The Node.js environment is set up using actions/setup-node.
3. **Install Dependencies**: The project dependencies are installed using npm.
4. **Run Tests**: The tests are run using Mocha to ensure the code is correct.

## Workflow Trigger

The workflow is triggered on any push to the main branch or pull requests targeting the main branch.

/D:/DevOps/pipeline-ci-cd/
├── node_modules/         # Node.js dependencies
├── .github/              # GitHub Actions workflow files
│   └── workflows/
│       └── ci.yml        # GitHub Actions CI configuration
├── test/                 # Folder for test files
│   └── calculations.test.js  # Example test file
├── package.json          # Project dependencies and scripts
├── index.js              # Main entry point for the app
└── .gitignore            # Files to be ignored by Git

