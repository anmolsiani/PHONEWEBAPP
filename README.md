# ArtBid Hub 🎨

ArtBid Hub is a premium, full-stack web platform for artists and AI enthusiasts. It features real-time auctions, dual art galleries (Human & AI), developer blogs, and instant AI art generation.

## 🚀 Quick Start

### Prerequisites
- Node.js & npm
- MongoDB (running locally or via Docker)
- Git

### Installation

1.  **Clone the repository** (if applicable)
2.  **Install Application**:
    Simply run the startup script:
    ```bash
    ./RUN_ARTBIDHUB.bat
    ```
    OR manually:

    **Backend:**
    ```bash
    cd backend
    npm install
    npm run dev
    ```

    **Frontend:**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

3.  **Access the App**:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend: [http://localhost:5000](http://localhost:5000)

## 🛠 Tech Stack

- **Frontend**: Next.js 15, Tailwind CSS, Framer Motion, TypeScript
- **Backend**: Node.js, Express, Socket.io, Mongoose
- **Database**: MongoDB
- **Tools**: Docker, Cloudinary, Stripe, Replicate API

## 🔑 Environment Variables

Create a `.env` file in `backend/`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/artbidhub
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_key
REPLICATE_API_TOKEN=your_replicate_token
```

Create a `.env.local` file in `frontend/`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```
