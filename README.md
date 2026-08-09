# Ranjidam Group Trust (RGT) — Website POC & GitHub Pages Deployment Guide

This directory contains the modernized, high-performance, responsive website proof-of-concept for **Ranjidam Group Trust (RGT)**, migrated from Weebly for hosting on **GitHub Pages** with custom domain integration via **BigRock**.

---

## 📁 File Structure

```text
rgt/
├── index.html        # Modern Home Page (Replaces home.html)
├── about-us.html     # Modern About Us Page (Replaces old about-us.html)
├── reach-us.html     # Modern Contact, Map, & Donation Page (Replaces reach-us.html)
├── CNAME             # Custom Domain file for GitHub Pages (rgforhelp.org.in)
├── css/
│   └── style.css     # Unified Modern Design System Stylesheet
├── js/
│   └── main.js       # Responsive Navbar & Form Handler
├── docs/             # Documentation & Content reference files
├── home.html         # Legacy Weebly export reference
├── about-us.html     # Legacy Weebly export reference
└── reach-us.html     # Legacy Weebly export reference
```

---

## 🚀 How to Publish to GitHub Pages

### Step 1: Initialize Git & Push to GitHub
1. Open your terminal in this directory (`rgt`):
   ```bash
   git init
   git add .
   git commit -m "Initialize modern Ranjidam Group Trust website POC"
   ```
2. Create a repository on GitHub (e.g., `ranjidam-trust` or `rgforhelp`).
3. Link your local repo and push:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages** (under Code and automation).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` / `root`.
4. Save the settings. GitHub will generate a URL like `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

---

## 🌐 Connecting your BigRock Custom Domain (`rgforhelp.org.in`)

Because your domain is registered in **BigRock**, follow these simple DNS setup steps:

### 1. Configure BigRock DNS Management
Log in to your [BigRock Control Panel](https://www.bigrock.in):
1. Go to **Domain Management** > Select `rgforhelp.org.in`.
2. Click on **DNS Management** > **Manage DNS**.

### 2. Add A Records (for Apex Domain `@`)
Add four **A Records** pointing your root domain (`rgforhelp.org.in`) to GitHub's server IPs:

| Host Name | Type | Value / Points To |
| :--- | :--- | :--- |
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |

### 3. Add CNAME Record (for `www`)
Add a **CNAME Record** for the `www` subdomain:

| Host Name | Type | Value / Points To |
| :--- | :--- | :--- |
| `www` | CNAME | `YOUR_GITHUB_USERNAME.github.io` |

### 4. Enable HTTPS in GitHub Settings
1. Back in GitHub Repository **Settings** > **Pages**.
2. Verify that **Custom domain** displays `rgforhelp.org.in`.
3. Check **Enforce HTTPS** (TLS/SSL certificate will be automatically issued free of charge by GitHub/Let's Encrypt).

---

## 🔒 Trust Registration & Contact Summary
- **Organization**: Ranjidam Group Trust (RGT)
- **Trust Reg No**: `677/2011` (Indian Trust Act)
- **Tax Status**: `80G & 12AA` Tax Exemption Status
- **Address**: Karpagavirutcham, Plot No 2, Sree Padmavathy Nagar Main Road, Kathirvedu, Chennai, TN - 600066
- **Phone**: +91-9841489184
- **Emails**: `contact@rgforhelp.org.in` | `rgtrustteam@gmail.com`
