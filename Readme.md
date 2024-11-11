## How to run the app

To run the application, you need to use the following scripts defined in the `package.json` file.

### Development Mode

To start the application in development mode, run the following command:

```bash
npm run dev
```

This command will start the development server using Webpack, open the app in your default browser, and run it in development mode. It will also automatically reload the application when you make changes to the code.

Build for Development
If you need to build the application for development (without starting the server), use this command:
```bash
npm run build:dev
```

This will generate the development build of the application, optimized for local development.

Build for Production
To build the application for production, use this command:
```bash
npm run build:prod
```

This will generate a production-ready build, with optimizations for performance and smaller file sizes.
Linting
To check the code for linting issues, run:
```bash
npm run lint
```
This command will lint the entire codebase and report any issues. It also ensures there are no unused disable directives and limits the number of warnings to 0.

To automatically format the code using Prettier, run the following:
```bash
npm run format:fix
```

This will fix any code formatting issues across your project files.

## Project Structure

The project is organized as follows:

### `./src/`
This is the main directory for the application code. It contains both the project’s HTML markup and JavaScript files.

- **`./src/`**: The core application files, including HTML and JavaScript, are located here. It is the directory where all development work should happen.

### `./src/styles/`
This folder contains the styles for the project. All CSS or preprocessor files (like SCSS) should be placed here.

- **`./src/styles/`**: Stylesheets used throughout the application, including global styles and component-specific styles.

### `./webpack.config.js`
This is the Webpack configuration file. It defines how Webpack should bundle and serve the project during development, as well as how the production build should be created.

### `./eslint.config.js`
This file contains the ESLint configuration for the project. It defines the rules and settings for linting JavaScript code to ensure consistent code quality.

### `./dist/`
This is the directory where the production-ready build of the application is generated after running the `npm run build:prod` command.

- **`./dist/`**: The folder where all compiled, minified, and optimized files are output, ready for deployment.



## Task
[Link](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0)
