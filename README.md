deployed at: https://chat-app-two-gules.vercel.app/
Architecture and Design Choices:
Tech Stack:
Next.js (14.0.4): Chosen for its ease of use, server-side rendering capabilities, and seamless integration with React.
Prisma (5.7.1): Used as the database toolkit for TypeScript and Node.js. Prisma simplifies database access with type-safe queries.
NextAuth (4.24.5): Implemented for authentication purposes. The Prisma adapter is utilized for integrating NextAuth with the Prisma database.
Tailwind CSS (3.3.0): A utility-first CSS framework for styling, providing a scalable and maintainable styling solution.
React Hook Form (7.49.2): Used for building performant and flexible forms with React.
Pusher (5.2.0 and 8.4.0-rc2): Utilized for real-time functionality, enabling features like live chat.
Features:
Authentication:

NextAuth is used for user authentication.
Prisma adapter facilitates seamless integration with the Prisma database for storing user information securely.
Real-time Chat:

Leveraging Pusher for real-time communication.
Pusher-js in the frontend to handle real-time updates.
Likely includes features such as instant messaging and live notifications.
File Uploads:

Next-Cloudinary (5.18.0) used for efficient and scalable cloud-based file uploads.
Integration with Next.js to handle file uploads seamlessly.
UI Components:

"@headlessui/react" and "react-icons" for UI components and icons.
"react-select" for enhanced dropdowns.
"react-spinners" for loading spinners.
"react-hot-toast" for toast notifications.
Form Handling:

React Hook Form for building and managing forms efficiently.
Utility Libraries:

"axios" for making HTTP requests.
"date-fns" for date manipulation.
"lodash" for utility functions (Note: There seems to be a typo in the dependency name; it should be "lodash" instead of "loadash").
Implementation Process:
Setting up Next.js:

Initialized the project with Next.js using the specified version.
Configured scripts for development, building, starting, and linting.
Database Setup:

Integrated Prisma for database access.
Used Prisma commands, including "prisma generate" in the post-install script to generate the Prisma client.
Authentication:

Integrated NextAuth for user authentication.
Configured the Prisma adapter to work with NextAuth.
Real-time Chat:

Implemented real-time chat using Pusher for instant messaging.
Utilized Pusher-js in the frontend to update the UI in real-time.
File Uploads:

Integrated Next-Cloudinary for efficient cloud-based file uploads.
Implemented the necessary logic to handle file uploads seamlessly.
UI and Forms:

Styled the application using Tailwind CSS for a responsive and visually appealing design.
Used "@headlessui/react" for building accessible UI components.
Leveraged "react-select" for enhanced dropdowns.
Implemented forms using React Hook Form for efficient form handling.
Other Utilities:

Integrated various utility libraries for tasks such as HTTP requests, date manipulation, and loading spinners.
Third-Party Libraries and APIs:
@headlessui/react (1.7.17): UI components library.
@next-auth/prisma-adapter (1.0.7): Prisma adapter for NextAuth.
@prisma/client (5.7.1): Prisma database toolkit.
@tailwindcss/forms (0.5.7): Tailwind CSS plugin for styling forms.
axios (1.6.5): HTTP client for making requests.
bcrypt (5.1.1): Library for hashing passwords.
clsx (2.1.0): Utility for conditionally joining class names.
date-fns (3.1.0): Library for date manipulation.
lodash (4.17.21): Utility library for common programming tasks.
next-cloudinary (5.18.0): Next.js plugin for Cloudinary integration.
pusher (5.2.0): Library for building real-time applications.
pusher-js (8.4.0-rc2): JavaScript client for Pusher.
react (18) and react-dom (18): React library and DOM bindings.
react-hook-form (7.49.2): Library for building forms with React.
react-hot-toast (2.4.1): Toast notifications library.
react-icons (4.12.0): Library for popular icons.
react-select (5.8.0): Customizable dropdown component for React.
react-spinners (0.13.8): Loading spinners library.
typescript (5): Typed JavaScript.
