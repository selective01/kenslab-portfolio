---
title: "From Zero to Production: Deploying a Next.js + Node.js App on Vercel & Render"
date: "2026-01-15"
excerpt: "The exact steps I use to deploy a full-stack app — React/Next.js frontend on Vercel, Node.js backend on Render — with CI/CD, environment variables, and zero downtime."
tags: ["Next.js", "Vercel", "Render", "DevOps"]
readTime: "6 min read"
---

## The Stack

After trying several combinations, I've settled on this deployment setup for all my projects:

- **Frontend**: Next.js → Vercel (free tier handles most projects)
- **Backend**: Node.js/Express → Render (free tier spins down, paid tier stays warm)
- **Database**: MongoDB Atlas (free tier for MVPs)
- **Files**: Cloudinary (images, PDFs, documents)

## Setting Up CI/CD

Connect your GitHub repo to both Vercel and Render. Every push to `main` triggers an automatic deploy. No manual FTP, no SSH commands.

The key is your environment variables — never commit `.env` files. Set them in the Vercel and Render dashboards directly.

## The Cold Start Problem

Render's free tier spins down after 15 minutes of inactivity. The first request after that takes 30-50 seconds. For client projects, I always use the paid tier ($7/month) or set up a cron job to ping the server every 10 minutes.

## What I Learned

The hardest part isn't deployment — it's managing environment variables across local, staging, and production. Create a `.env.example` file with all required keys (but no values) and commit it to your repo. It saves hours when onboarding or moving to a new machine.
