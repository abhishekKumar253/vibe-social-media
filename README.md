<h1 align="center">✨ Vibe - A Social Media Application ✨</h1>

Vibe is a modern social media platform that leverages the power of **Next.js**, **Postgres**, **Prisma**, and **Clerk** for a highly scalable and user-friendly experience. Whether you're posting updates, engaging with friends, or managing your profile, Vibe brings a seamless experience with real-time updates and optimized performance.

---

## **Highlights:**
- 🚀 **Tech Stack**: Next.js, Postgres, Prisma, Clerk, TypeScript
- 💻 **Server Components**, Layouts, Route Handlers, Server Actions
- 🔥 **loading.tsx**, **error.tsx**, **not-found.tsx** for error handling and loading states
- 📡 **API Integration** using Route Handlers for flexible and scalable backend architecture
- 🔄 **Data Fetching**, **Caching**, and **Revalidation** for optimized data flow
- 🎭 Seamless integration of **Client & Server Components** for dynamic rendering
- 🛣️ **Dynamic & Static Routes** to support both user-driven and pre-rendered pages
- 🎨 **Styling** with Tailwind CSS & Shadcn for a clean and responsive UI
- 🔒 Robust **Authentication & Authorization** with Clerk to ensure secure user management
- 📤 **File Uploads** with UploadThing for managing user-generated content
- 🗃️ **Database Integration** using Prisma ORM for seamless data management
- 🚀 **Server Actions & Forms** for efficient data handling
- ⚡ **Optimistic Updates** for smoother, faster user interactions

---

## **Deployed on Vercel**

Vibe is successfully deployed and live on [Vercel](https://vercel.com). You can check out the live version of the app by visiting:

- **Vibe Live Demo**: [https://vibe.vercel.app](https://vibe.vercel.app)

---

## **Features**

- **User Authentication**: Secure login and registration with Clerk.
- **Profile Management**: Users can manage their profiles, including their **name**, **bio**, **location**, and **website**.
- **Post Creation**: Users can create posts with text and media (image upload via **UploadThing**).
- **Likes & Comments**: Users can **like** and **comment** on posts, interacting with other users' content.
- **Delete Posts**: Users can delete their own posts.
- **Image Uploads**: Upload images to posts with **UploadThing** for a smooth media handling experience.
- **Notifications**: Users receive notifications for activities like likes, comments, and follows.
- **Suggested Users**: Suggestions for new users to follow based on activity and interests.
- **Profile Page**: Each user has a dedicated profile page that displays their **name**, **bio**, **location**, and **website**.
  
---

## **Setup** .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
UPLOADTHING_TOKEN=
```

### Run the app

```shell
npm run dev
```

```bash
git clone https://github.com/abhishekKumar253
cd vibe
