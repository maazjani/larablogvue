## Introduction
LaraBlogVue is the project for creating an online blog using Laravel 11 and Vue JS 3.

## Steps

- Installed Laravel 11 using ```composer create-project laravel/laravel larablogvue```
- Turned on the API module is laravel using ```php artisan install:api```
- Then installed Vue JS and Vue Router V4 using ```npm install vue@latest vue-router@4```
- Then installed the vitejs Vue Plugin using ```npm install @vitejs/plugin-vue```
- Then added the vue plugin in the vite.config.js file ```import vue from '@vitejs/plugin-vue';```
- Then I removed all the extra code form the welcome.blade.php file and added the ```<div id="app"></div>``` This will be our entry point. I renamed welcome file to app.blade.php
- Then I added the following code to routes/web.php ```Route::get('/{any}', function () {return view('app');})->where('any','.*');```. This will handle all the routes.
- Then I added some Vue code in the app.js file
    ```import { createApp } from 'vue'; import App from './App.vue'; const app = createApp(App);app.mount('#app');```
- Then I created App.vue file in the resources/js folder and imported it into app.js file.
- Then I installed Laravel 11 Fortify package ```composer require laravel/fortify``` and ```php artisan fortify:install```
- In the config/fortify.php file I made the view false and commented the features other than registration

