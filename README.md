# 🚀 KatoPulse - URL Shortener & Analytics SaaS Platform

![License](https://img.shields.io/badge/Hackathon-Katomaran-blueviolet)
![React](https://img.shields.io/badge/Frontend-React-61DAFB)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)
![Status](https://img.shields.io/badge/Status-Live-success)

---

# 🌐 Live Demo

**Application:**
https://katomoran.vercel.app/

**GitHub Repository:**
https://github.com/Sarvesh2905/katomoran-

**Demo Video (Loom/YouTube):**
[ADD VIDEO LINK HERE]

---

# 📌 Project Overview

KatoPulse is a production-ready URL Shortener & Analytics SaaS platform built as part of the Katomaran Hackathon.

The platform allows users to create shortened URLs, generate QR codes, track visitor analytics, monitor engagement, and gain insights through an interactive analytics dashboard.

Unlike traditional URL shorteners, KatoPulse combines:

* URL Management
* Analytics
* QR Generation
* Referrer Tracking
* Device Analytics
* Geographic Insights
* SaaS Insight Engine
* Export Systems
* Interactive Dashboard

into a single modern SaaS application.

---

# 🎯 Problem Statement

Build a full-stack URL Shortener application where users can create short links for long URLs and track analytics such as click count, creation date, and recent visits.

The platform should allow authenticated users to manage their links and view performance insights.

---

# ✨ Features

## 🔐 Authentication

* User Signup
* User Login
* JWT Authentication
* Password Hashing (bcrypt)
* Protected Routes
* Session Validation
* Logout Functionality
* User Data Isolation

---

## 🔗 URL Shortening

* Long URL Creation
* Unique Short Code Generation
* Custom Alias Support
* URL Validation
* Duplicate Alias Prevention
* Server-Side Redirect Handling

Examples:

```text
https://amazon.com/product/123456

↓

https://katomoran.vercel.app/amazon-sale
```

---

## 📊 Dashboard

Displays:

* Original URL
* Short URL
* Alias
* Created Date
* Expiry Date
* Status
* Total Clicks
* Health Score

Actions:

* Copy URL
* Edit URL
* Delete URL
* Enable / Disable Link
* Generate QR
* View Analytics

---

## 📈 Analytics

Tracks:

* Total Clicks
* Timestamp
* Last Visited
* Recent Visits
* Device Type
* Browser
* Operating System
* Referrer Source
* Country
* State
* City

---

## 🎁 Bonus Features

### Custom Alias

Examples:

```text
/my-resume
/amazon-sale
/sarvesh
```

### QR Code Generation

* Generate QR
* Download QR
* Scan & Redirect

### Expiry Links

* Never Expire
* Custom Expiry Date

### Device Analytics

* Desktop
* Mobile
* Tablet

### Browser Analytics

* Chrome
* Firefox
* Safari
* Edge

### Geo Analytics

* Country
* State
* City

### Daily Click Trends

* 7 Days
* 30 Days
* 90 Days

### Public Statistics Page

```text
/stats/:shortCode
```

### Edit Destination URL

Update URL without changing shortcode.

### Bulk URL Creation

CSV Upload Support.

---

## 🚀 Advanced SaaS Features

### Referrer Analytics

Tracks:

* Direct
* Google
* Facebook
* Instagram
* LinkedIn
* WhatsApp
* Telegram
* Twitter/X

### SaaS Insight Engine

Automatically generates:

* Most Popular Link
* Fastest Growing Link
* Highest Engagement Link
* Top Country
* Top Browser
* Top Device
* Weekly Growth
* Monthly Growth

### Link Health Score

Calculated using:

* Click Activity
* Link Age
* Recent Activity
* Link Status

Ratings:

* Excellent
* Good
* Average
* Poor

---

## 📂 Export Features

### CSV Export

Export analytics data.

### PDF Export

Generate detailed analytics reports.

Includes:

* Link Information
* Click Count
* Device Analytics
* Browser Analytics
* Referrer Analytics
* Geo Analytics
* Daily Trends
* Health Score

---

## 🔎 Search & Discovery

### Search

Search by:

* Original URL
* Alias
* Short URL

### Filter

* Active
* Disabled
* Expired

### Sort

* Latest
* Oldest
* Most Clicked
* Least Clicked

---

## 🎨 UI/UX Features

### Theme System

* Dark Mode
* Light Mode
* Theme Persistence
* System Theme Detection

### Premium User Experience

* Skeleton Loading States
* Empty States
* Error States
* Success States
* Responsive Design

### 3D Cosmic Design System

Inspired By:

* Apple Vision Pro
* Stripe
* Linear
* Vercel
* Modern AI Platforms

Includes:

* Aurora Gradients
* Floating Cards
* Glassmorphism
* Animated KPI Counters
* Interactive Charts
* Micro Interactions
* Dynamic Shadows

---

# 🏗 Architecture Diagram

## System Architecture

[INSERT ERASER.IO ARCHITECTURE DIAGRAM IMAGE HERE]

## Architecture Description

Frontend (React + Vite)
↓
REST API Layer
↓
Express Backend
↓
MongoDB Atlas

Analytics Flow:

Visitor
↓
Short URL
↓
Redirect Controller
↓
Analytics Capture
↓
MongoDB
↓
Dashboard Insights

---

# 🤖 AI Planning Document

## Phase 1 - Requirement Analysis

The problem statement was analyzed and divided into:

* Authentication
* URL Shortening
* Dashboard
* Analytics
* Bonus Features
* Deployment Requirements

---

## Phase 2 - Architecture Design

Chosen Architecture:

Frontend
↓
REST APIs
↓
Express Backend
↓
MongoDB Atlas

Reasoning:

* Scalability
* Maintainability
* Security
* Clear Separation of Concerns

---

## Phase 3 - Feature Planning

Mandatory Features:

* Authentication
* URL Shortening
* Dashboard
* Analytics

Bonus Features:

* QR Code Generation
* Custom Alias
* Expiry Links
* Device Analytics
* Browser Analytics
* Geo Analytics
* Daily Trends
* Public Stats Page
* Bulk Upload

Advanced Features:

* Insight Engine
* Health Score
* Theme System
* CSV/PDF Export
* Search/Filter/Sort

---

## Phase 4 - Development

Features were implemented incrementally with:

* Backend Validation
* Security Checks
* Error Handling
* Production Readiness Verification

---

## Phase 5 - Deployment

Frontend:
Vercel

Backend:
Render

Database:
MongoDB Atlas

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Axios
* TanStack Query
* React Hook Form
* Zod
* Recharts
* Framer Motion

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* JWT
* bcrypt

## Deployment

* Vercel
* Render
* MongoDB Atlas

---

# ⚙️ Setup Instructions

## Clone Repository

```bash
git clone https://github.com/Sarvesh2905/katomoran-.git
```

```bash
cd katomoran-
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Frontend (.env)

```env
VITE_API_URL=
VITE_BASE_URL=
```

## Backend (.env)

```env
MONGODB_URI=
JWT_SECRET=
CLIENT_URL=
BASE_URL=
PORT=
```

---

# 📸 Sample Outputs

## Dashboard

[ADD SCREENSHOT]

## Analytics

[ADD SCREENSHOT]

## QR Generation

[ADD SCREENSHOT]

## MongoDB Collections

[ADD SCREENSHOT]

## PDF Export

[ADD SCREENSHOT]

## CSV Export

[ADD SCREENSHOT]

---

# 🧪 Assumptions Made

* Users manage only their own links.
* Each custom alias must be unique.
* Analytics are recorded on every successful redirect.
* Expired links should not redirect.
* Disabled links should not redirect.
* Public statistics pages expose only analytics information.
* MongoDB Atlas remains available during runtime.

---

# 🚀 Deployment

Frontend:
https://katomoran.vercel.app/

Backend:
[ADD RENDER URL]

Database:
MongoDB Atlas

---

# 🎥 Project Demonstration

Loom / YouTube Video:

[ADD VIDEO LINK HERE]

---

# 🔮 Future Enhancements

* Team Workspaces
* Custom Domains
* Scheduled Link Expiry
* Advanced AI Insights
* Email Reports
* Webhook Integrations
* Role Based Access Control

---

# 👨‍💻 Developer

Sarvesh P

GitHub:
https://github.com/Sarvesh2905

LinkedIn:
[ADD LINKEDIN PROFILE]

---

This project is a part of a hackathon run by https://katomaran.com
