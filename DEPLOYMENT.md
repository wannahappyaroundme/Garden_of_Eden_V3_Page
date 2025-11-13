# Deployment Guide

## Automatic Deployment with GitHub Actions

This project is configured for automatic deployment to Vercel when you push to the `main` branch.

### Setup Instructions

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Your GitHub Repository**
   - Click "Add New Project" in Vercel dashboard
   - Select this repository: `Garden_of_Eden_V3_Page`
   - Vercel will auto-detect Next.js settings

3. **Get Your Vercel Tokens**

   After importing your project:

   - **VERCEL_TOKEN**:
     - Go to Account Settings → Tokens
     - Create a new token
     - Copy the token value

   - **VERCEL_ORG_ID**:
     - Found in your project settings
     - Or run: `vercel --token=YOUR_TOKEN` locally

   - **VERCEL_PROJECT_ID**:
     - Found in your project settings under "Project ID"

4. **Add Secrets to GitHub**

   Go to your GitHub repository:
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add these three secrets:
     - `VERCEL_TOKEN` = your Vercel token
     - `VERCEL_ORG_ID` = your Vercel organization ID
     - `VERCEL_PROJECT_ID` = your Vercel project ID

5. **Done!**

   Now every time you push to `main`, GitHub Actions will:
   - ✅ Install dependencies
   - ✅ Build the project
   - ✅ Deploy to Vercel automatically
   - ✅ Provide you with a live URL

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deployment Status

You can check deployment status:
- GitHub: Actions tab in your repository
- Vercel: Deployments page in your project

### Environment Variables

No environment variables are required for this static site.

### Troubleshooting

**Build fails?**
- Check `npm run build` runs locally first
- Verify all dependencies are in `package.json`

**Deployment not triggering?**
- Verify secrets are correctly set in GitHub
- Check the Actions tab for error logs

**Need help?**
- GitHub Actions logs: Actions tab in repository
- Vercel logs: Deployments → Select deployment → View logs
