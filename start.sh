#!/usr/bin/env bash

# Run Laravel stuff
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Start the PHP server (or use nginx/apache depending on setup)
php -S 0.0.0.0:10000 -t public