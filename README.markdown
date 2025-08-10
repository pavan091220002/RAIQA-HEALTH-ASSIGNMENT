# RAIQA Health Assignment

This project is a React application built for the RAIQA Health assignment using JavaScript with JSX. It implements a counter with increment, decrement, and add-to-list functionalities, a list display with sorting capabilities, and a clean, responsive UI styled with Tailwind CSS. The application is deployed on Vercel and the source code is hosted on GitHub.

## Features

### Counter Functionality
- Displays a counter initialized to 0.
- Includes a "+" button to increment the counter.
- Includes a "−" button to decrement the counter (prevents going below 0).
- Includes an "Add" button to add the current counter value to a list (only if greater than 0).
- Resets the counter to 0 after adding the value to the list.

### List Display
- Shows all added numbers in a list below the counter.
- Prevents duplicate numbers from being added to the list.

### Sorting Feature
- Includes a "Sort" button that toggles between ascending and descending order.
- Updates the list display based on the selected sort order.

### Bonus Features
- Highlights the highest and lowest numbers in the list.
- Includes a "Reset" button to clear the list.
- Persists the list in `localStorage` to retain data across page refreshes.

## Tech Stack
- **Framework**: React (using Vite for fast development and build)
- **Language**: JavaScript (with JSX)
- **State Management**: React `useState` hook
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: GitHub

## Getting Started

### Prerequisites
- Node.js (preferably the latest version)
- Yarn or npm for package management

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/pavan091220002/RAIQA-HEALTH-ASSIGNMENT.git
   ```
2. Navigate to the project directory:
   ```bash
   cd RAIQA-HEALTH-ASSIGNMENT
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
   or
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   yarn dev
   ```
   or
   ```bash
   npm run dev
   ```
5. Open the app in your browser at `http://localhost:5173`.

### Building for Production
To ensure there are no build errors, run:
```bash
yarn build
```
or
```bash
npm run build
```

### Deployment
1. Push the code to a public GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
2. Deploy the project to Vercel:
   - Sign in to [Vercel](https://vercel.com) with the same email used for your GitHub account.
   - Import the project from the GitHub repository (`pavan091220002/RAIQA-HEALTH-ASSIGNMENT`).
   - Deploy the `main` branch.
   - The deployed URL is available at: [https://raiqa-health-assignment-tau-gilt.vercel.app/](https://raiqa-health-assignment-tau-gilt.vercel.app/).

## Project Structure
- `src/components/Counter.jsx`: Handles the counter functionality (increment, decrement, add, and reset) using JSX.
- `src/components/ListView.jsx`: Manages the list display, sorting, and highlighting of highest/lowest numbers using JSX.
- `src/App.jsx`: Main component that integrates `Counter` and `ListView` components.
- `src/index.css`: Global styles with Tailwind CSS setup.

## Usage
1. Use the "+" and "−" buttons to adjust the counter value.
2. Click the "Add" button to add the current counter value to the list (if > 0).
3. Click the "Sort" button to toggle between ascending and descending order.
4. Click the "Reset" button to clear the list.
5. The highest and lowest numbers in the list are highlighted for easy identification.
6. The list persists in `localStorage`, so it remains available after refreshing the page.

## Links
- **GitHub Repository**: [https://github.com/pavan091220002/RAIQA-HEALTH-ASSIGNMENT](https://github.com/pavan091220002/RAIQA-HEALTH-ASSIGNMENT)
- **Vercel Deployment**: [https://raiqa-health-assignment-tau-gilt.vercel.app/](https://raiqa-health-assignment-tau-gilt.vercel.app/)

## Notes
- The app is built with React and Vite for a lightweight and fast development experience.
- JavaScript with JSX is used for all components, ensuring simplicity and compatibility.
- Tailwind CSS is used for responsive and clean styling.
- ESLint is configured for code quality, following the Vite React template.
- The project adheres to the RAIQA Health assignment requirements and includes all bonus features.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is open-source and available under the [MIT License](LICENSE).