# Angular To-Do List

Welcome to the **Angular To-Do List** project! This application is a simple, interactive to-do list built using Angular. You can add, delete, and keep track of your tasks in an easy and intuitive way.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add To-Do**: Quickly add new to-do items.
- **Delete To-Do**: Remove tasks that are no longer needed.
- **Input Validation**: Prevents adding empty to-do items, with a clear error message.

## Technologies Used

- **Angular**: A powerful front-end framework for building dynamic web applications.
- **TypeScript**: For type-safe JavaScript programming.
- **HTML & CSS**: For designing the user interface.
- **Jasmine & Karma**: For unit testing the application.

## Getting Started

### Installation

To get started with this project, clone the repository to your local machine:

```bash
git clone https://github.com/JosephWElliott/angular-todo-list.git
cd angular-todo-list
```

### Running the App

1. Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200/` to view the app.

## Testing

This project includes unit tests for the core functionalities of the app. To run the tests, execute the following command:

```bash
ng test
```

### Unit Tests Covered

- **App Initialization**: Checks if the app loads successfully.
- **Adding a To-Do**: Verifies adding a new to-do item works as expected.
- **Deleting a To-Do**: Tests that a to-do item can be removed from the list.
- **Validation**: Ensures that adding an empty to-do shows an appropriate error message.

## Project Structure

- **src/app**
  - **app.module.ts**: Main module that declares and bootstraps the application.
  - **app.component.ts**: The main component that contains the to-do list logic.
  - **app.component.html**: Template for the UI.
  - **app.component.css**: Styling for the to-do list.
  - **app.component.spec.ts**: Unit tests for the component.

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request. All contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for checking out the Angular To-Do List project! Feel free to reach out if you have any questions or suggestions for improvement.
