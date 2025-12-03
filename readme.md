# Rayan Adlrdard – Front-end Developer Portfolio (Static Landing Page)

This project is a pixel-perfect, responsive implementation of a single-page portfolio website for a fictional front-end developer: **Rayan Adlrdard**.

It’s built with **HTML, CSS, and vanilla JavaScript** — no frameworks, no libraries — focusing on layout skills, component thinking, and small UI interactions (carousel, modal, smooth scrolling, active navigation, mobile menu, etc.).

---

## 🔍 Overview

The page is structured as a classic portfolio landing:

- Sticky header with navigation
- Hero section with intro and CTA
- Placeholder sections for Skills & Education
- Projects grid with interactive cards and a project details modal
- Recommendations (testimonials) carousel
- Contact form + contact information cards
- Footer with platforms, quick links, portfolio areas, and social links

Everything is contained in a single HTML file and styled via `css/style.css`, with interactions handled in `js/script.js`.

---

## ✨ Features

### 🧭 Sticky Navigation + Active Link Highlight
- The header stays fixed at the top while scrolling.
- Navigation links highlight automatically based on the section currently in view using **Intersection Observer**.
- Clicking a nav link smoothly scrolls to that section.
- On mobile:
  - A hamburger (`.menu-toggle`) toggles the navigation.
  - Menu closes automatically after clicking a link.

---

### 🎯 Hero Section with CTA
- Intro text: “I’m Rayan Adlrdard – Front-end Developer”.
- Subheading with supporting text.
- **“Hire Me” button** that smoothly scrolls the user down to the **Contact** section.

---

### 💼 Projects Grid + Modal
- 6 project cards shown in a **3-column grid on desktop**, responsive down to a single column on small screens.
- Each project card includes:
  - Preview image
  - Title
  - Short description
  - Tech stack tags (TypeScript, React, Next.js, CSS, HTML, MongoDB, etc.)
- Clicking a card:
  - Opens a **modal** (`#project-modal`) with:
    - Project title
    - Description
    - Tech tags
  - The modal is dynamically populated from the clicked card’s content.
- Modal supports:
  - Click to open (card)
  - Click overlay or close button to exit
  - `Esc` key to close
  - Cards are keyboard-focusable (`tabindex="0"`) and can open the modal with **Enter/Space**.

---

### 💬 Recommendations Carousel

- A horizontally sliding testimonials section with multiple “slides”.
- Controlled by:
  - Previous / Next buttons
  - Dots (indicators) that reflect current position and are clickable
- Features:
  - **Autoplay** every 3 seconds
  - Autoplay pauses on hover and resumes on mouse leave
  - Smooth `translateX` transitions
- Each testimonial card includes:
  - Star rating icons
  - Title (e.g. “Great Quality!”, “Amazing work!”)
  - Short feedback text
  - Avatar + name + role

---

### 📩 Contact Form + Info Cards

- Contact form includes:
  - Full Name (required)
  - Email (required)
  - Subject
  - Message
- Styled form with clear labels and large, accessible inputs.
- Contact info cards show:
  - **Location** (Bangladesh, Dhaka, address)
  - **Email / Skype / Telegram**
  - **Phone / Support / Office / Personal**

*(Form is currently front-end only — no real submission handling / backend.)*

---

### 🦶 Footer

- Logos for rating platforms
- “Quick Links” back to important sections
- “Portfolio” capabilities list
- Social links (LinkedIn, Instagram, Facebook)
- Simple copyright line

---

## 🧱 Tech Stack

- **HTML5** – semantic-ish structure for layout and sections
- **CSS3** – custom layout, grid, and responsive design with media queries
- **Vanilla JavaScript** – for:
  - Active nav highlighting
  - Mobile menu toggle
  - Smooth scroll on CTA
  - Carousel logic (slides, dots, autoplay)
  - Modal open/close, dynamic content

No external JS libraries or CSS frameworks are used.

---

## 📁 Project Structure

```bash
.
├── index.html
├── css
│   └── style.css
├── js
│   └── script.js
└── assets
    ├── Logo.svg
    ├── logo.png
    ├── triangle.svg
    ├── rect1.svg
    ├── rect2.svg
    ├── circle1.svg
    ├── circle2.svg
    ├── circle3.svg
    ├── circle4.svg
    ├── btn-icon.svg
    ├── project1.png
    ├── project2.png
    ├── project3.png
    ├── project4.png
    ├── project5.png
    ├── project6.png
    ├── Star.svg
    ├── user1.png
    ├── user2.png
    ├── user3.png
    ├── location.svg
    ├── mail.svg
    ├── phone.svg
    ├── footerlogo1.svg
    ├── footerlogo2.svg
    ├── footerlogo3.svg
    ├── footerlogo4.svg
    ├── plateform1.png
    ├── plateform2.png
    ├── plateform3.png
    ├── LinkedIn.svg
    ├── Instagram.svg
    └── facebook.svg
