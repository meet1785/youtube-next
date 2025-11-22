# YouTube Next

A modern YouTube video search and preview application built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🔍 **Search YouTube Videos**: Real-time search functionality with the YouTube Data API
- 🎨 **Modern UI**: Beautiful, responsive interface with dark mode support
- 🖼️ **Video Previews**: Thumbnail previews with hover effects
- 🔒 **Secure API**: Server-side API routes protect your API key
- ⚡ **Fast Performance**: Server-side rendering and optimized images
- 🎭 **Demo Mode**: Works without API key using mock data
- 📱 **Responsive Design**: Works seamlessly on all devices

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/meet1785/youtube-next.git
cd youtube-next
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure YouTube API:
   - Create a project in [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the YouTube Data API v3
   - Create an API key
   - Copy `.env.example` to `.env` and add your API key:
   ```bash
   cp .env.example .env
   ```
   - Edit `.env` and replace `your_youtube_api_key_here` with your actual API key

   **Note**: The app works without an API key by providing mock data for demonstration purposes.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
youtube-next/
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.ts      # YouTube search API endpoint
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page with search interface
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Architecture

### Server-Side API Route
The application uses Next.js API routes to securely interact with the YouTube API, keeping your API key private and avoiding CORS issues.

### Client-Side Interface
The main page provides a clean, intuitive search interface with:
- Real-time search input
- Loading states
- Error handling
- Responsive grid layout for results

### Mock Data Support
For development and demonstration, the app can run without a YouTube API key by providing realistic mock data.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **YouTube Data API v3** - Video search functionality

## Security

- API keys are stored in environment variables and never exposed to the client
- Server-side API routes protect against unauthorized access
- External links open in new tabs with `noopener noreferrer`

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
