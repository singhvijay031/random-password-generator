

# Random Password Generator

This project is a Random Password Generator web application built with Vite + React for the frontend and Node.js + Express for the backend. The application allows users to generate random passwords based on selected criteria such as length, inclusion of uppercase letters, lowercase letters, numbers, symbols, exclusion of duplicate characters, and inclusion of spaces.

## Features

- Generate random passwords with customizable settings.
- Options to include/exclude lowercase letters, uppercase letters, numbers, symbols, and spaces.
- Option to exclude duplicate characters.
- Set password length (up to 64 characters).
- Copy generated password to clipboard.

## Demo

![Password Generator Demo](demo.gif)

## Installation

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/singhvijay031/random-password-generator.git
   cd random-password-generator
   ```

2. Navigate to the backend directory:
   ```sh
   cd backend
   ```

3. Install backend dependencies:
   ```sh
   npm install
   ```

4. Start the backend server:
   ```sh
   npm start
   ```
   The backend server will run on `http://localhost:8000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The frontend application will run on `http://localhost:5173`.

## Usage

1. Open the frontend application in your browser (`http://localhost:5173`).
2. Customize the password settings:
   - Set the password length using the input field.
   - Check/uncheck the options for including lowercase letters, uppercase letters, numbers, symbols, excluding duplicate characters, and including spaces.
3. Click the "Generate Password" button to generate a random password.
4. Click the "Copy" button to copy the generated password to the clipboard.

## Project Structure

```
random-password-generator
│
├── server
│   ├── node_modules
|   ├── package-lock.json
│   ├── package.json
│   ├── index.js
│
├── client
│   ├── node_modules
│   ├── public
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── ...
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── ...
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## Contact

For any inquiries or feedback, feel free to contact me at [bijaymahato031@gmail.com](mailto:bijaymahato031@gmail.com).

---

This README provides a comprehensive guide for setting up, using, and contributing to your password generator project.
