# React & Tailwind CSS starter kit

A React/Tailwind CSS initialized project with an authentication system and message management system.

## Available Scripts

`npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

`npm run pretty`
Runs the prettier script with the configuration defines in `prettier.config.js` you can run it anytime you want to prettify your code.

`npm test`
Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.The build is minified and the filenames include the hashes. **Your app is ready to be deployed!**

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!** If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Dependencies
```JSON
{
    "@tailwindcss/postcss7-compat": "^2.2.17",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.27.2",
    "bcryptjs": "^2.4.3",
    "prettier": "^2.7.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.2",
    "react-router-hash-link": "2.4.3",
    "react-scripts": "5.0.0",
    "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.2.17",
    "web-vitals": "^1.1.2"
}
```

## Components

Components are sorted with the `atomic design pattern` for more informations you can read this article https://tealfeed.com/structure-reactjs-d15co.

### Atoms

Here are every usefull elements : 
* Buttons
* Headings
* Cards
* Inputs
* Links

### Molecules
Here are every composed elements :
* Form

### Organisms 
Here are every complex elements :
* Navbar
* Footer

## Tailwind CSS

The project use tailwindcss for styles. Every UI elements (css) are defined in the file `tailwind.config.js` : colors, fontSize, shadow, animations, etc.
For more informations you can read this article https://tealfeed.com/react-tailwind-css-orqur.

## Context

On this project you can work with global states defined in contexts folder. It is initialzed with a `UxContext` for message and errors and a `AuthContext` for authentication system. 

### UxContext
This allow to display messages from everywhere in the code 
```JS
{
    error: [],
    message: [],
    setError: (value) => {},
    setMessage: (value) => {},
    removeError: (index) => {},
    removeMessage: (index) => {},
}
```
You can import `import { useUx } from './contexts'` and call the function you want. Messages and errors are displayed in the `App.jsx`.

```JSX
<div className="fixed w-screenAbsolute grid gap-2 justify-center pt-2 z-50">
    {uxContext.error.length !== 0 &&
        uxContext.error.map((error, index) => (
            <div className="grid grid-cols-12 w-screen p-3 max-w-card md:max-w-sm bg-red-300 border border-red-500">
                <div className="col-span-11">{error}</div>
                <div
                    className="material-icons left"
                    onClick={() => {
                        uxContext.removeError(index)
                    }}
                >
                    close
                </div>
            </div>
        ))}

    {uxContext.message.length !== 0 &&
        uxContext.message.map((message, index) => (
            <div className="grid grid-cols-12 w-screen p-3 max-w-card md:max-w-sm bg-green-300 border border-green-500">
                <div className="col-span-11">{message}</div>
                <div
                    className="material-icons left"
                    onClick={() => {
                        uxContext.removeMessage(index)
                    }}
                >
                    close
                </div>
            </div>
        ))}
</div>
```

### AuthContext

This allow to manage the user state from everywhere in the code.
```JS
{
    isLogged: false,
    _id: null,
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    type: 'user',
    token: null,
    loading: false,
    register: (email, password, confirmPassword, firstName, lastName) => {},
    loggedIn: (email, password) => {},
    loggedOut: () => {},
    editProfil: (firstName, lastName) => {},
    request: (method, path, body, callback, contentType) => {},
}
```
You can import `import { useAuth } from './contexts'` and call the function you want. Authentication system allow to send authenticated request.

```JSX
import { useAuth, useUx } from '../../../contexts'

const Components = () => {
    const authContext = useAuth()

    const handleFetchAuthenticated = () => {
        authContext.request(
            'get',
            `profil/${authContext._id}`,
            null,
            (response) => {console.log(response)},
            null
        )
    }
```