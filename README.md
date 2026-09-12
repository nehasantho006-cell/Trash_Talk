<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />
# 🗑️ Trash Talk

### Team Name: **Trash Talk**

---

## 👥 Team Members

* **Neha Santhosh** - Sahrdaya college of engineering and technology
* **Taniya Thomson** - Sahrdaya college of engineering and technology

---

## 📌 Project Description

**Trash Talk** is an AI-powered web application that does something nobody asked for — it judges your garbage.

Simply upload or capture a picture of your waste, and our AI identifies the object, analyzes it, gives you a completely unnecessary waste score, and generates a hilarious judgment based on your trash.

**Because apparently, throwing something in a bin wasn't stressful enough.** 🗑️💀

---

## 🤨 The Problem (that doesn't exist)

People throw away garbage every day without receiving any immediate feedback, criticism, or emotional damage.

This creates a serious problem:

> **What if your trash could judge you?**

Millions of people throw away chips packets, plastic bottles, coffee cups, and other waste without ever knowing how disappointed their garbage bin is in them.

We decided this problem was far too important to ignore.

---

## 💡 The Solution (that nobody asked for)

Introducing **Trash Talk** — an unnecessarily intelligent AI waste judge.

Users upload a picture of their waste, and our system:

1. 📸 Analyzes the uploaded image
2. 🤖 Identifies the waste item
3. 🧠 Uses AI to generate a personalized judgment
4. 📊 Gives the user fictional waste and shame scores
5. 🎭 Lets users choose different AI personalities
6. 🏆 Tracks their waste history and leaderboard ranking
7. 💀 Determines their completely unnecessary "Waste Personality"

Our solution combines **AI + computer vision + data visualization + humor** to solve a problem that never existed.

---

# ⚙️ Technical Details

## Technologies/Components Used

### For Software:

**Languages Used**

* TypeScript
* JavaScript
* HTML
* CSS

**Frameworks**

* React
* Vite

**Libraries**

* Tailwind CSS
* Framer Motion
* shadcn/ui
* Lucide Icons

**AI**

* AI Vision API for image recognition
* Generative AI for personalized judgments
* Demo/fallback mode for testing without an API key

**Database / Backend**

* Supabase
* Local storage for demo/history functionality where required

**Browser APIs**

* Camera API
* File Upload API
* Web Speech API / Text-to-Speech

**Development Tools**

* VS Code
* Git
* GitHub
* npm

---

# 🛠️ Implementation

## For Software:

The application follows this basic workflow:

```text
                 USER
                   │
                   ▼
           Upload / Capture Image
                   │
                   ▼
             Image Processing
                   │
                   ▼
          AI Vision Analysis
                   │
                   ▼
          Waste Identification
                   │
                   ▼
          Judgment Generator
                   │
          ┌────────┴────────┐
          ▼                 ▼
     Waste Score       Funny Judgment
          │                 │
          └────────┬────────┘
                   ▼
             Result Screen
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
      Dashboard  Share   Leaderboard
```

### AI Analysis

The uploaded image is processed by the AI vision system to identify the waste.

Example:

```text
Input:
📷 Image of a plastic bottle

AI Detection:
Object: Plastic Bottle
Category: Plastic
Material: PET
Confidence: 94%
```

The detected object is then passed to the judgment-generation system.

### AI Judgment

The AI generates a humorous response based on:

* Waste type
* Material
* Recyclability
* Selected personality
* Previous user activity

Example:

> **"Another plastic bottle? The ocean would like to have a word with you."**

### Entertainment Scores

The application generates:

* Waste Score
* Eco Score
* Shame Level
* AI Confidence

These scores are explicitly designed for entertainment and are **not scientific environmental measurements**.

---

# 📥 Installation

Clone the repository:

```bash
git clone https://github.com/nehasantho006-cell/Trash_Talk.git
```

Move into the project directory:

```bash
cd Trash_Talk
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add the required API keys/configuration.

Example:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_AI_API_KEY=your_ai_api_key
```

> Never commit API keys or other secrets to GitHub.

---

# ▶️ Run

Start the development server:

```bash
npm run dev
```

The application will be available at the local development address shown in the terminal.

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

# 📚 Project Documentation

## Screenshots

### 1. Landing Page

![Landing Page](screenshots/landing-page.png)

*The Trash Talk landing page introducing the AI-powered waste judging experience.*

### 2. AI Analysis / Upload Page

![Upload Page](screenshots/upload-page.png)

*Users can upload or capture an image of their waste and select an AI personality.*

### 3. Judgment Result

![Judgment Result](screenshots/judgment-result.png)

*AI identifies the waste and generates a humorous judgment along with fictional waste and shame scores.*

### 4. Dashboard

![Dashboard](screenshots/dashboard.png)

*User dashboard displaying waste statistics, history, and scores.*

### 5. Leaderboard

![Leaderboard](screenshots/leaderboard.png)

*Leaderboard showing users competing to become the most judged person.*

---

# 🔀 Diagrams

## System Architecture

![Workflow](diagrams/workflow.png)

*Overall workflow showing how the user input moves through image analysis, AI judgment generation, scoring, and result presentation.*

### Architecture

```text
┌─────────────────────────┐
│       User / Browser    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   React Frontend        │
│                         │
│ Upload / Camera / UI    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│     AI Vision Layer     │
│                         │
│ Identify Waste Object   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   Judgment Engine       │
│                         │
│ Generate AI Roast       │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│    Score Generator      │
│                         │
│ Waste / Eco / Shame     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│      Result Page        │
└────────────┬────────────┘
             │
       ┌─────┼──────┐
       ▼     ▼      ▼
   Dashboard Share Leaderboard
```

---

# 🎥 Project Demo

## Video

[Add your demo video link here]

*The demo demonstrates the complete Trash Talk experience, including image upload, AI waste detection, personality selection, judgment generation, scoring, and leaderboard functionality.*

---

# 🔗 Additional Demos

* **Live Website:** [Add deployed website link]
* **GitHub Repository:** https://github.com/nehasantho006-cell/Trash_Talk
* **Demo Video:** [Add video link]

---

# 👥 Team Contributions

### Neha Santhosh

* Project concept and ideation
* Frontend development
* User interface and user experience design
* AI integration
* Upload and image-analysis workflow
* Result and judgment interface

### Taniya Thomson

* Backend and application logic
* Database integration
* Waste scoring system
* Dashboard and leaderboard
* Testing and debugging
* Project documentation and presentation

---

# 🎯 Key Features

### 📸 AI Waste Scanner

Upload or capture an image and let AI identify the waste.

### 🤖 AI Judge

Receive a unique AI-generated judgment based on your trash.

### 🎭 Multiple Personalities

Choose your judge:

* 😐 Polite AI
* 😈 Savage AI
* 👵 Indian Mom
* 🧑‍🏫 Teacher
* 💀 Villain
* 🤓 Nerd

### 📊 Completely Unnecessary Scores

Get:

* Waste Score
* Eco Score
* Shame Level
* AI Confidence

### 🧠 Waste Personality

Discover whether you are:

* 🍟 The Snack Goblin
* 🥤 The Plastic Menace
* ☕ The Caffeine Machine
* ♻️ The Fake Environmentalist
* 🍌 The Eco Warrior
* 💀 The Waste Legend

### 🏆 Leaderboard

Compete with other users to become the most judged person.

### 🪪 Shareable Results

Generate a result card showing your waste score and AI judgment.

### 🔊 Voice Judgment

Listen to the AI literally tell you how disappointed it is.

---

# 😂 Example

### User uploads:

🍟 A chips packet

### AI detects:

**CHIPS PACKET**

### AI says:

> **"Another packet? At this point, the chips are eating you."**

### Your scores:

```text
WASTE SCORE       82/100
ECO SCORE         31/100
SHAME LEVEL       HIGH 💀
AI CONFIDENCE     96%
```

### Your Waste Personality:

🍟 **THE SNACK GOBLIN**

> "You have a concerning relationship with packaged snacks."

---

# ⚠️ Disclaimer

Trash Talk is an entertainment-focused hackathon project.

The waste, eco, shame, and environmental scores generated by the application are **fictional and intended purely for entertainment**. They should not be interpreted as scientific environmental assessments.

---

# 🏁 Conclusion

Trash Talk proves that AI can be used to solve problems that nobody actually has.

We combined computer vision, generative AI, web development, data visualization, and questionable decision-making to create:

> **A dustbin that talks trash about your trash.**

### 🗑️ Trash Talk

**Because your trash deserves an opinion.**



