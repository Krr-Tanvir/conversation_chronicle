# Changelog

All notable changes to the **Chronicle** project will be documented in this file.

## [v20260409.033100] - 2026-04-09
### Added
- **Python Build Phase**: Successfully packaged the Agent Audit Portal into a single-file EXE (`AgentAuditPortal.exe`).
- **Dependency Sync**: Updated `requirements.txt` with `pywebview` and `pyinstaller`.
- **Chronicle Synchronization**: Logged Turn 144 (Initiation) and 145 (Execution) for Audit transparency.

## [v20260218.040400] - 2026-02-18
### Added
- **Turn 44 Initialization**: Successfully logged turn 44 and synchronized the chronicle.
- **Excel Analysis Protocol**: Initiated mandatory protocol for the Excel analysis task, including project snapshot.


## [v20260213.103100] - 2026-02-13
### Fixed
- **Ruleset Restoration (v4.2)**: Merged original detailed safety/personality rules with the new Chronicle & Cloud-Sync automation after a condensation error in v4.1.
- **Protocol Integrity**: Ensured no legacy instructions were removed, only additive enhancements.

## [v20260213.102800] - 2026-02-13
### Added
- **Cloud-First Automation (v4.1)**: Formalized automated `git push` after every turn into the Global Ruleset.
- **Ruleset Synchronization**: Updated the mission protocol to ensure all project nodes are remote-synced in real-time.

## [v20260213.102500] - 2026-02-13
### Added
- **CSV Mirroring**: Launched `activity_log.csv` for Excel-native audit accessibility.
- **Ruleset v4 Integration**: Formalized Universal Chronicle Auto-Setup and SSoT Standard in global rules.
- **Consultation First Protocol**: Mandated architectural discussion before code generation.

## [v20260213.083100] - 2026-02-13
### Changed
- **Architecture Consolidation**: Standardized on `activity_log.js` as the Single Source of Truth (SSoT).
- **Redundancy Cleanup**: Deleted `activity_log.json` to prevent dual-file sync friction.
- **Bootstrapper Update**: Simplified `chronicle.html` to prioritize the Script-Bridge protocol.

### Reason
- User requested a more efficient workflow by avoiding redundant edits across two data files.
- `activity_log.js` provides both JSON structural compatibility and local `file://` protocol bypass (CORS solution).

---

## [v20260213.082200]
### Added
- **Dynamic Data Hydration**: Implemented `activity_log.json` fetch for real-time updates.
- **Script Bridge**: Added `activity_log.js` to bypass local browser security (CORS) when opening the dashboard from the filesystem.
- **Mutable State**: Changed `CHRONICLE_DATA` to `let` to allow runtime hydration.

### Fixed
- **TypeError**: Resolved dashboard crash caused by assigning data to a constant variable.
- **CORS Block**: Fixed the issue where local files couldn't fetch data, preventing updates from showing.

---

## [v20260213.075300]
### Changed
- **Minimalist Shift**: Purged legacy React/Vite/TypeScript codebase.
- **Standalone UI**: Refactored dashboard into single `chronicle.html` with CDN assets.
- **IDE Visual Parity**: Added Thinking Process blocks and Tool Activity cards (Analyzed, Edited, Synced).
- **Literal Logging**: Switched to a transparent, tool-based reflection protocol in `activity_log.json`.
