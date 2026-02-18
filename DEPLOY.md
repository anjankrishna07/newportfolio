# Deploying to Vercel

## Quick Deploy (CLI Method)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to vercel.com and sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

## Configuration

The project includes `vercel.json` with:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- SPA routing support (all routes redirect to index.html)

## Environment Variables

If you need environment variables:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables

## Custom Domain

After deployment:
1. Go to project settings
2. Click "Domains"
3. Add your custom domain

