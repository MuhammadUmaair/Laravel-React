# Getting Started with Create React App

# Version

```
node -v (v21.0.0)
npm -v (v10.2.0)

```

```
npx create-react-app reactecom
cd reactecom
npm start
```
### For React Router Dom

```npm install react-router-dom```

### For Install Axios

🗏 Install Axios: [![Axios](https://img.shields.io/badge/Install-Axios-red)](https://www.npmjs.com/package/axios)

```npm install axios```


### For Bootstrap

🗏 Install Bootstrap: [![Bootstrap](https://img.shields.io/badge/Install-Bootstrap-blueviolet)](https://getbootstrap.com/)

```npm install bootstrap@5.3.2```

### For Sweetalert

🗏 Install Sweetalert: [![Sweetalert](https://img.shields.io/badge/Install-Sweetalert-orange)](https://www.npmjs.com/package/sweetalert)

```npm install sweetalert --save```

**Usage:**

```
    import swal from 'sweetalert';
    swal("Hello world!");

```


### Authenticating

**CSRF Protection:To authenticate your SPA, your SPA's "login" page should first make a request to the /sanctum/csrf-cookie endpoint to initialize CSRF protection for the application:**

```
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`${constant.url}/api/register`, data).then((res) => {

      });
    });

```


### For Admin Panel 

📁 Admin Panel Download: [![Admin Panel](https://img.shields.io/badge/Download-Admin%20Panel-green)](https://startbootstrap.com/template/sb-admin)

### Hierarchy
```

📂 src
    📂 assets
        📂 admin
            📁 assets
            📁 css
            📁 javascript
        📂 frontend
    📂 components
        📂 admin
            🗏 Dashboard.js
            🗏 Profile.js
        📂 Frontend
            📂 auth
                🗏 Login.js
                🗏 Register.js
            🗏 Home.js
    📂 layouts
        📂 admin
            🗏 Footer.js
            🗏 MasterLayout.js
            🗏 Navbar.js
            🗏 Sidebar.js
        📂 frontend
            🗏 Navbar.js
    📂 routes
        🗏 Routes.js

```

### Errors:
![image](https://github.com/MuhammadUmaair/Laravel-React/assets/104490047/7b43e902-b25c-4d8a-9226-45caec1c100e)

**if your are facing this error, you should add in your `.env` file.**
```
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost

```


### Connect

🔗 You can find me on Stack Overflow: [![Stack Overflow Profile](https://img.shields.io/badge/Stack%20Overflow-Profile-orange)](https://stackoverflow.com/users/10623148/muhammad-umair)

🌐 Connect with me on LinkedIn: [![LinkedIn Profile](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/muhammad-umair-fullstack/)

