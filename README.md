# Interactive Story Generator

A dynamic "Choose Your Own Adventure" web application that uses AI to generate personalized interactive stories based on user-provided themes. Players can make choices that influence the story direction, creating a unique narrative experience every time.

## ✨ Features

- **AI-Powered Story Generation**: Creates unique stories using OpenAI's language models, or LLM of your choice
- **Interactive Gameplay**: Make choices that dynamically shape your story's progression
- **Modern UI**: Clean, responsive interface with a warm tan color palette
- **Real-time Updates**: Seamless story progression with loading indicators
- **Story Sharing**: Share your completed stories with others via unique URLs
- **Cross-Platform**: Works on desktop and mobile devices

## 🛠 Tech Stack

### Backend
- **FastAPI**: High-performance Python web framework
- **SQLAlchemy**: Database ORM for story persistence
- **OpenAI API**: LLM powered story generation
- **PostgreSQL**: Database for storing stories and game states
- **Pydantic**: Data validation and settings management

### Frontend
- **React 19**: Modern React with TypeScript
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Axios**: HTTP client for API communication
- **CSS3**: Custom styling with CSS variables and animations

## 🚀 Getting Started

### Prerequisites

- **Python 3.12+** (for backend)
- **Node.js 18+** (for frontend)
- **PostgreSQL** (for database)
- **OpenAI/LLM API Key** (for story generation)

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChiefVishPat/interactive-story-generator.git
   cd interactive-story-generator
   ```

2. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   # OpenAI Configuration
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Database Configuration
   DATABASE_URL=postgresql://username:password@localhost:5432/story_generator
   
   # API Configuration
   API_PREFIX=/api/v1
   ALLOWED_ORIGINS=["http://localhost:5173", "http://localhost:3000"]
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies using uv (recommended)**
   ```bash
   # Install uv if you haven't already
   pip install uv
   
   # Install dependencies
   uv sync
   ```

   **Or using pip**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up the database**
   ```bash
   # Make sure PostgreSQL is running
   # Create database (replace with your database name)
   createdb story_generator
   ```

4. **Run the backend server**
   ```bash
   # Using uv
   uv run python main.py
   
   # Or using python directly
   python main.py
   ```

   The backend will be available at `http://localhost:8000`
   - API Documentation: `http://localhost:8000/docs`
   - Alternative docs: `http://localhost:8000/redoc`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

## 🎮 How to Use

1. **Start a New Story**
   - Enter a theme or concept for your story (e.g., "space exploration", "medieval fantasy", "detective mystery")
   - Click "Generate Story" to begin

2. **Play Your Adventure**
   - Read the generated story segment
   - Choose from the provided options to continue
   - Each choice influences the direction of your story

3. **Complete Your Journey**
   - Stories conclude when you reach an ending
   - Share your completed story using the generated URL

## 📁 Project Structure

```
interactive-story-generator/
├── backend/
│   ├── core/           # Core configuration and utilities
│   ├── db/             # Database models and connection
│   ├── models/         # Pydantic models
│   ├── routes/         # API route handlers
│   ├── schemas/        # Request/response schemas
│   └── main.py         # FastAPI application entry point
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── types/      # TypeScript type definitions
│   │   └── utils.ts    # Utility functions
│   ├── public/         # Static assets
│   └── package.json    # Frontend dependencies
└── README.md
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vishal Patel**
- GitHub: [@ChiefVishPat](https://github.com/ChiefVishPat)
- LinkedIn: [vishalpatel2003](https://www.linkedin.com/in/vishalpatel2003)

## 🙏 Acknowledgments

- OpenAI for providing the powerful language models
- The React and FastAPI communities for excellent documentation
- All contributors and testers who helped improve this project
- Tech With Tim (https://youtu.be/_1P0Uqk50Ps?si=-CJsI078oqpc1e87)

---