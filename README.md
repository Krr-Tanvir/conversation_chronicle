# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ZeLuf1jAVH2qiKxXAWba1NXLCSCya6pg

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Architecture Note
This application now runs in **Live Chronicle Mode**.
- **Database**: `activity_log.json` (Root)
- **UI**: Fetches and renders the log in real-time (polls every 2s).
- **Updates**: The AI Agent updates `activity_log.json` with every action, ensuring an immutable audit trail.
