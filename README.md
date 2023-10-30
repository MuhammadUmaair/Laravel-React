# Getting Started with Create Laravel 8 App

```
composer create-project laravel/laravel:^8.0 laravel-api
 
cd example-app
 
php artisan serve
```

### Hierarchy
```

📂 app
    📂 Http
        📂 Controllers
        📂 Middleware
    📂 Models
    📂 Providers
        🗏 AppServiceProvider.php
            //To set the defaultStringLength to 191 in the Laravel application.
            //This is necessary to ensure compatibility with the default character set used in the database.**

            
            use Illuminate\Support\Facades\Schema;
                public function boot()
                {
                    Schema::defaultStringLength(191);
                }
📂 routes
    🗏 web.php

```


### Connect

🔗 You can find me on Stack Overflow: [![Stack Overflow Profile](https://img.shields.io/badge/Stack%20Overflow-Profile-orange)](https://stackoverflow.com/users/10623148/muhammad-umair)

🌐 Connect with me on LinkedIn: [![LinkedIn Profile](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/muhammad-umair-fullstack/)



## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
