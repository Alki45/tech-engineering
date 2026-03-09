#!/bin/bash

# tech-engineering Dev Script
# Runs both frontend and backend development servers.

set -e

echo "🚀 Starting tech-engineering development servers..."

# Function to check for node_modules and install if missing
check_modules() {
    local dir=$1
    if [ ! -d "$dir/node_modules" ]; then
        echo "⚠️ $dir/node_modules not found."
        read -p "Do you want to install dependencies in $dir? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo "📦 Installing dependencies in $dir..."
            (cd "$dir" && npm install)
        else
            echo "❌ Cannot proceed without dependencies in $dir. Exiting."
            exit 1
        fi
    fi
}

# Check root dependencies
check_modules "."

# Check client dependencies
check_modules "client"

# Check server dependencies
check_modules "server"

echo "✨ All dependencies verified. Starting servers..."

# Run the dev script from package.json
npm run dev
