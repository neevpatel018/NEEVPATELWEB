# NEEVPATELWEB

## Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/NEEVPATELWEB.git
cd NEEVPATELWEB
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and go to:
```
http://localhost:3001
```

## Quick Start
- Double-click `start.bat` to start the server
- The application will be available at `http://localhost:3001`

## Production Build
To create a production build:
```bash
npm run build
npm start
```

## Deployment Instructions

### Deploying to Vercel (Recommended)

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy your project:
```bash
vercel
```

5. Follow the prompts to complete deployment

Your site will be available at: `https://your-project-name.vercel.app`

### Alternative Deployment Options

1. **Netlify**
   - Create account at https://netlify.com
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist/public`

2. **GitHub Pages**
   - Add this to package.json scripts:
     ```json
     "deploy": "gh-pages -d dist/public"
     ```
   - Run:
     ```bash
     npm install gh-pages --save-dev
     npm run deploy
     ```

3. **Firebase Hosting**
   - Install Firebase CLI:
     ```bash
     npm install -g firebase-tools
     ```
   - Login:
     ```bash
     firebase login
     ```
   - Initialize project:
     ```bash
     firebase init hosting
     ```
   - Deploy:
     ```bash
     firebase deploy
     ```