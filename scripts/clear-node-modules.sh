#!/bin/bash

echo "🧹 Deleting all node_modules..."
find . -type d -name "node_modules" -prune -exec rm -rf '{}' +

echo "🧼 Removing yarn.lock..."
rm -f yarn.lock

echo "📦 Reinstalling dependencies with yarn..."
yarn install

echo "✅ Done!"
