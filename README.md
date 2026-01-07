# MegaBlog

A modern, full-featured blogging platform built with React and Appwrite. MegaBlog offers a seamless writing and reading experience with a focus on performance, security, and clean design.

## 🚀 Features

- **Production-Ready Authentication**: Secure user registration and login flows powered by Appwrite.
- **Rich Text Editing**: comprehensive WYSIWYG editor for creating beautiful content with formatting support.
- **Responsive Design**: Fully mobile-responsive interface built with Tailwind CSS.
- **Image Management**: Seamless image upload, storage, and optimization.
- **Real-time Updates**: Instant content updates and state management using Redux Toolkit.
- **Secure Backend**: robust data handling and privacy protection.

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, React Router DOM
- **Styling**: Tailwind CSS
- **Backend as a Service**: Appwrite (Database, Auth, Storage)
- **Build Tool**: Vite
- **Form Handling**: React Hook Form

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/megablog.git
   cd megablog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory with your Appwrite credentials:
   ```env
   VITE_APPWRITE_URL=your_appwrite_url
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 📝 License

This project is licensed under the MIT License.