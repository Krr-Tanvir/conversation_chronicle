# 🛡️ Chronicle: Absolute Audit Dashboard v2.1 (SSoT)

A high-fidelity, standalone transparency engine for tracking AI-agent interactions, tactical reasoning, and technical tool executions in real-time.

## 🚀 Quick Start
No `npm install` or complex build tools required.

1.  Open **`chronicle.html`** in any modern web browser.
2.  Refresh the page to see live updates from the AI session.

## 🏗️ Architecture: Lite & Standalone
This project has been optimized for **Zero-Dependency Transparency**.

- **Dashboard (`chronicle.html`)**: A standalone HTML5/Vanilla JS app. It uses Tailwind CSS and Lucide Icons via CDN for a premium, IDE-like interface.
- **Single Source of Truth (`activity_log.js`)**: A script-based data bridge that stores the entire session history. This architecture bypasses local browser CORS restrictions (via `file://` protocol), enabling "Live Hydration" without a local server.
- **Safety Protocol**: Every significant change is backed up in the `versions/` directory (ignored by Git) to ensure rollback protection.

## 🧪 Literacy Protocol
This Chronicle follows a **Literal Reflection Protocol**:
- **Thinking Process**: Displays the exact duration and logic of the AI's internal thoughts.
- **Tool Activity**: Categorizes actions into Analyzed (Purple), Edited (Blue), Synced (Green), and Executed (Amber) blocks.
- **Full Capture**: Includes the literal user prompt and the AI's final response for total session auditability.

---
*Maintained by Kona • (c) 2026 MediaFlow Enhancements*
