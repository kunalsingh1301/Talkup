deployed at: https://chat-app-two-gules.vercel.app/
# Chat App

## Overview

This project, named `chat_app`, is a real-time chat application built with Next.js and various supporting technologies. Below is a brief overview of the architecture, design choices, and implemented features.

## Tech Stack

- **Next.js (14.0.4):** React framework for server-side rendering.
- **Prisma (5.7.1):** Database toolkit for TypeScript and Node.js.
- **NextAuth (4.24.5):** Handles user authentication.
- **Tailwind CSS (3.3.0):** Utility-first CSS framework.
- **React Hook Form (7.49.2):** Manages forms in React.
- **Pusher (5.2.0 and 8.4.0-rc2):** Enables real-time communication.
- **Next-Cloudinary (5.18.0):** Facilitates cloud-based file uploads.

## Features

1. **Authentication:**
   - Utilizes NextAuth with Prisma adapter for secure user authentication.

2. **Real-time Chat:**
   - Implements real-time chat functionality using Pusher for instant messaging.

3. **File Uploads:**
   - Supports efficient cloud-based file uploads through Next-Cloudinary integration.

4. **UI Components:**
   - Utilizes "@headlessui/react" and "react-icons" for UI components.
   - Enhances dropdowns with "react-select."

5. **Form Handling:**
   - Implements forms efficiently with React Hook Form.

6. **Utilities:**
   - Utilizes various libraries for HTTP requests, date manipulation, and loading spinners.

## Setup and Usage

1. **Installation:**
   ```bash
   npm install
## Third-Party Libraries and APIs

This project relies on the following third-party libraries and APIs:

- **@headlessui/react (1.7.17):** UI components library.
- **@next-auth/prisma-adapter (1.0.7):** Prisma adapter for NextAuth.
- **@prisma/client (5.7.1):** Prisma database toolkit.
- **@tailwindcss/forms (0.5.7):** Tailwind CSS plugin for styling forms.
- **axios (1.6.5):** HTTP client for making requests.
- **bcrypt (5.1.1):** Library for hashing passwords.
- **clsx (2.1.0):** Utility for conditionally joining class names.
- **date-fns (3.1.0):** Library for date manipulation.
- **lodash (4.17.21):** Utility library for common programming tasks.
- **next-cloudinary (5.18.0):** Next.js plugin for Cloudinary integration.
- **pusher (5.2.0):** Library for building real-time applications.
- **pusher-js (8.4.0-rc2):** JavaScript client for Pusher.
- **react (18) and react-dom (18):** React library and DOM bindings.
- **react-hook-form (7.49.2):** Library for building forms with React.
- **react-hot-toast (2.4.1):** Toast notifications library.
- **react-icons (4.12.0):** Library for popular icons.
- **react-select (5.8.0):** Customizable dropdown component for React.
- **react-spinners (0.13.8):** Loading spinners library.
- **typescript (5):** Typed JavaScript.

Please ensure that the library versions specified are compatible with each other to avoid potential issues.

On HOW TO RUN
