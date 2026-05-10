#!/bin/bash

# Vaishak Balachandra Portfolio - Setup Script
# This script sets up and builds the portfolio website

echo "🚀 Setting up Vaishak's Premium Portfolio Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully!"
echo ""

# Build the project
echo "🔨 Building production-ready website..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""

echo "🎉 Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Development: npm run dev (opens at http://localhost:3000)"
echo "2. Production: The 'out/' folder contains your static website"
echo "3. Deploy: Upload 'out/' folder to your hosting provider"
echo ""
echo "Recommended hosting:"
echo "  - Vercel: https://vercel.com (One-click deploy)"
echo "  - Netlify: https://netlify.com (Drag & drop deploy)"
echo "  - GitHub Pages: Free static hosting"
echo ""
echo "For detailed instructions, see README.md"
echo ""
echo "🎯 This $100,000-caliber portfolio is ready to impress recruiters!"
