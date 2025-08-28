#!/bin/bash

# Deploy script for GitHub Pages
# This script builds the project and deploys it to the gh-pages branch

set -e  # Exit on any error

echo "🚀 Starting deployment to GitHub Pages..."

# Store current branch
CURRENT_BRANCH=$(git branch --show-current)
TEMP_DIR=$(mktemp -d)

# Ensure we're on the main branch and build
echo "📋 Ensuring we're on main branch..."
git checkout main

echo "🔨 Building the project..."
npm run build

# Copy build files to temp directory
echo "📁 Copying build files to temporary directory..."
cp -r out/* "$TEMP_DIR/"
cp out/.nojekyll "$TEMP_DIR/" 2>/dev/null || touch "$TEMP_DIR/.nojekyll"

# Switch to gh-pages branch
echo "📋 Switching to gh-pages branch..."
git checkout gh-pages

# Remove old files (except .git)
echo "🧹 Cleaning gh-pages branch..."
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} +

# Copy new build files from temp
echo "📋 Copying new build files..."
cp -r "$TEMP_DIR"/* .
cp "$TEMP_DIR/.nojekyll" . 2>/dev/null || touch .nojekyll

# Clean up temp directory
rm -rf "$TEMP_DIR"

# Commit and push
echo "📤 Committing and pushing to gh-pages..."
git add -A
if git diff --staged --quiet; then
    echo "No changes to commit"
else
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin gh-pages
fi

# Return to original branch
echo "🔄 Returning to $CURRENT_BRANCH branch..."
git checkout "$CURRENT_BRANCH"

echo "✅ Deployment complete! Your site should be available at:"
echo "   https://guillemperdigo.github.io/essentis-website/"
echo ""
echo "Note: It may take a few minutes for GitHub Pages to update."
