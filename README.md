# Chromezy

A modern Next.js application with automated CI/CD pipeline.

## Tech Stack

- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Testing**: Jest with Next.js
- **Linting**: ESLint
- **CI/CD**: GitHub Actions
- **Package Manager**: npm

## Prerequisites

- Node.js 20.x or higher
- npm 9.x or higher

## Installation

1. Clone the repository:

```
git clone https://github.com/SushantKumar29/chromezy.git
cd chromezy
```

2. Install dependencies:

```
npm install
```

3. Set up environment variables:

```
cp .env.example .env.local
```

4. Running the application

```
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots

<details>
<summary><b> Click to view all screenshots</b></summary>

### Hero Section

<img src="/public/assets/screenshots/Hero.png" alt="Hero Section" width="800"/>

### Products Section

<img src="/public/assets/screenshots/Products.png" alt="Products Section" width="800"/>

### Clients Section

<img src="/public/assets/screenshots/Clients.png" alt="Clients Section" width="800"/>

### Stories Section

<img src="/public/assets/screenshots/Stories.png" alt="Stories Section" width="800"/>

### Technologies Section

<img src="/public/assets/screenshots/Technologies.png" alt="Technologies Section" width="800"/>

### Insights Section

<img src="/public/assets/screenshots/Insights.png" alt="Insights Section" width="800"/>

### Contact Section

<img src="/public/assets/screenshots/Contact.png" alt="Contact Section" width="800"/>

### Footer Section

<img src="/public/assets/screenshots/Footer.png" alt="Footer Section" width="800"/>

</details>

## Scripts

Available Scripts

```
npm run dev // Starts the development server with hot reload
npm run build // Creates an optimized production build
npm start // Starts the production server (requires build first)
npm run lint // Runs ESLint to check code quality
npm run test // Executes Jest test suite
npm run test:watch // Runs tests in watch mode for development

```

## Folder Structure:

```
chromezy/
├── .github/
│ └── workflows/
│ └── ci.yml # GitHub Actions CI/CD configuration
│
├── .husky/ # Git hooks
│ ├── pre-commit
│ └── pre-push
│
├── app
│   ├── layout.tsx # Root layout
│   ├── not-found.tsx # 404 page
│   ├── page.tsx # Home page
│   ├── globals.css # Global styles
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── components
│   │   ├── cards
│   │   ├── forms
│   │   ├── links
│   │   ├── sections
│   ├── lib
│   │   └── validations
│   ├── mock
│   │   └── constants
│   ├── shared
│   │   └── ui
│   ├── styles # Modular CSS styles
│   │   ├── cards
│   │   ├── sections
│   │   └── ui
│   ├── **tests** # Jest test files
│   │   ├── forms
│   │   ├── pages
│   │   ├── sections
│   │   └── ui
│   ├── types # TypeScript type definitions
│   └── utils # Utility functions
│
├── public/ # Static assets
│ └── assets/
│ └── screenshots/ # README screenshots
│
├── jest.config.ts # Jest configuration
├── next.config.ts # Next.js configuration
├── tsconfig.json # TypeScript configuration
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
```

**Note**: For the most up-to-date folder structure, run `tree -I 'node_modules' -L 3` in the project root.

## Testing

The project uses Jest with Next.js

Running Tests

# Run all tests

```

npm run test

```

# Run tests in watch mode

```

npm run test:watch

```

## CI/CD Pipeline

The GitHub Actions workflow automatically runs on:
Pushes to main and development branches
Pull requests targeting main and development

# Workflow steps:

- Checkout code
- Setup Node.js 20.x
- Install dependencies
- Run ESLint
- Execute test suite

## License

Copyright (c) 2026 Sushant Kumar.

Permission is hereby granted, free of charge, to any person obtaining a copy
