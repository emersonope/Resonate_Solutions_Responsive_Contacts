# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# The FrontEnd App was deployed to Vercel

##### In the free Heroku account, when the back is not being used, it will be temporarily inactive. When accessing the link, the back data will take about 1 minute to return to the front.

### Access by clicking here:  <a href="https://resonate-solutions-responsive-contacts.vercel.app/" target="_blank" rel="noopener noreferrer">ContactsPage</a>.</p>

# Checklist

## Requirements to run the project:
- NodeJs installed
- Git installed
- download the project in this repository
- VS Code
  - `IntelliCode`
  - `ESLint`
  - `JSX HTML <tags/>`

## The ReactJS project was created using vite (https://vitejs.dev/guide/)

```
npm init vite@latest contacts-app --template react
```

```
cd Resonate_Solutions_Responsive_Contacts
```

## Dependences used in the front end project:

#### Adding axios to make request with Axios and useEffect

```
npm install axios@0.27.2
```

## Listing Users

Definição da BASE_URL:

```javascript
export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "https://jsonplaceholder.typicode.com/users"; 
```

## Adding toast to receive confirmation message

```
yarn add react-toastify@9.0.5
```

In App.tsx:
```javascript
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
```

#### To solve a black screen issue in Netlify, it was triggered `window.React = React` in main.tsx as below

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

window.React = React

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

# To run locally you need to download this project and follow this step:

## Inside the frontend folder:

### Install dependences
```
npm install 
```

### Run the project

```
npm run dev
```

### Build the project:


```
npm run build
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
