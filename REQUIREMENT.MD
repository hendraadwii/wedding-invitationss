# Wedding Invitation - Hendra Dwi & Wonyoung

## Project Overview

Membangun aplikasi Wedding Invitation berbasis web yang modern, cute, responsive, mobile-first, dan memiliki performa tinggi.

Target utama:

* Tampilan lucu dan elegan
* Loading cepat di perangkat mobile
* SEO Friendly
* Responsive untuk semua ukuran layar
* Mudah di-maintain
* Mudah digunakan kembali untuk client lain
* Deploy menggunakan Vercel
* Database menggunakan Supabase

---

# Tech Stack

## Frontend

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React
* Supabase Client

## Backend

* Node.js
* Express.js
* TypeScript
* Supabase Admin SDK

## Database

* Supabase PostgreSQL

## Deployment

Frontend:

* Vercel

Backend:

* Railway / Render / VPS

Database:

* Supabase

---

# Design Guidelines

## Theme

Cute Korean Wedding

## Color Palette

Primary:

* #F8D7DA

Secondary:

* #FFF5E4

Accent:

* #FFB6C1

Text:

* #333333

Background:

* #FFFDF8

---

# UI Principles

* Clean
* Minimal
* Cute
* Romantic
* Soft Animation
* Mobile First

---

# Required Sections

## 1. Opening Hero

Display:

* Bride Name
* Groom Name
* Wedding Date
* Open Invitation Button

Animation:

* Fade In
* Floating Hearts

---

## 2. Couple Section

Display:

* Groom Information
* Bride Information
* Parent Information

---

## 3. Love Story

Timeline Section

Example:

* First Meet
* Relationship
* Engagement
* Wedding

---

## 4. Event Information

Display:

* Akad
* Resepsi
* Date
* Time
* Location

Features:

* Open Google Maps

---

## 5. Countdown

Realtime countdown timer.

---

## 6. Gallery

Requirements:

* Masonry Layout
* Lazy Loading
* Optimized Images

---

## 7. RSVP

Fields:

* Name
* Attendance
* Message

Attendance:

* Hadir
* Tidak Hadir

Store data to Supabase.

---

## 8. Wishes

Display all guest wishes.

Realtime update preferred.

---

## 9. Gift Section

Display:

* Bank Account
* E-Wallet
* QRIS

Features:

* Copy Account Number

---

## 10. Footer

Display:

* Wedding Couple Name
* Copyright

---

# Performance Requirements

Target Lighthouse:

Performance:

> = 90

Accessibility:

> = 90

Best Practices:

> = 90

SEO:

> = 90

---

# Image Optimization

Requirements:

* WebP Format
* Lazy Loading
* Next Image Component

Avoid:

* Large PNG files
* Background videos

---

# Animation Guidelines

Use Framer Motion.

Allowed:

* Fade In
* Slide Up
* Floating Hearts
* Floating Flowers

Avoid:

* Heavy Particle Systems
* Large Lottie Files

---

# Database Tables

## rsvp

Columns:

* id
* name
* attendance
* message
* created_at

---

## gallery

Columns:

* id
* image_url
* created_at

---

## settings

Columns:

* id
* wedding_title
* groom_name
* bride_name
* event_date
* location
* map_url

---

# Security

Requirements:

* Environment Variables
* Supabase RLS
* API Validation
* Rate Limiting

---

# Coding Standards

Requirements:

* TypeScript Strict Mode
* ESLint
* Prettier
* Reusable Components

---

# Reusable Architecture

Project should support future multi-client wedding invitations.

Future Structure:

/invitation/hendra-wonyoung
/invitation/client-b
/invitation/client-c

without major code changes.
