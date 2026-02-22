# Eco-Watch


Eco-Watch is a landing page that showcases an AI-powered drone surveillance system for detecting illegal dumping and litter in rural and semi-urban environments.

> **Note:** This repository contains the landing page front-end only. The ML model, training pipeline, and drone integration live in a separate repository.

---

## Problem Statement

Illegal dumping in rural and semi-urban areas often goes unnoticed due to the limitations of manual inspections. This results in significant cleanup efforts when waste piles grow into larger dumping sites. The project uses drone imagery combined with machine learning — specifically **YOLO object detection** — to automatically identify waste in outdoor environments, offering a more efficient method for early detection.

---

## ML Tech Stack

| Layer              | Technology                  |
| ------------------ | --------------------------- |
| Drone hardware     | DJI Mini 4 Pro              |
| Detection model    | YOLOv8 (You Only Look Once) |
| Training framework | PyTorch                     |
| Image annotation   | Roboflow & Label Studio     |
| GPU acceleration   | NVIDIA CUDA / AMD ROCm      |
| Data processing    | Python                      |

---

## Landing Page Tech Stack

| Layer      | Technology                     |
| ---------- | ------------------------------ |
| Framework  | React 18 + TypeScript (strict) |
| Build tool | Vite                           |
| Styling    | Tailwind CSS v3                |
| Routing    | React Router v6 (lazy-loaded)  |
| Linting    | ESLint + Prettier              |

---

## Screenshots

![Home](./screenshot/Screenshot%20from%202024-08-06%2015-06-12.png)
![How It Works](./screenshot/Screenshot%20from%202024-08-06%2015-06-21.png)
![Roadmap](./screenshot/Screenshot%20from%202024-08-06%2015-06-27.png)
![Contact](./screenshot/Screenshot%20from%202024-08-06%2015-06-31.png)

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/yaminsadik/eco-watch

# 2. Navigate into the project
cd eco-watch

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## License

Licensed under the MIT license.
