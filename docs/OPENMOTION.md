# OpenMotion integration plan

Official upstream: https://github.com/nexu-io/openmotion

OpenMotion is a separate video studio, not a drop-in Remotion package. Its source installation currently documents Git, npm, Node.js 26.11.1, a Studio build, Chrome/Chromium and FFmpeg/ffprobe for export.

## Source installation (in an execution environment)
Follow https://github.com/nexu-io/openmotion/blob/main/docs/install.md rather than guessing an npm package.

```bash
git -c filter.lfs.process= -c filter.lfs.smudge= -c filter.lfs.required=false clone --depth 1 --single-branch --branch main https://github.com/nexu-io/openmotion.git
cd openmotion
npm ci
npm run build:studio
npm start
```

Open the Studio URL printed by the process. The upstream guide specifies Node.js 26.11.1 for source validation and requires browser/FFmpeg dependencies for video export.

## This repository
- Motion.md contains the shot-by-shot production brief for the documentary.
- src/ remains the prior Remotion prototype; it is NOT an OpenMotion-native composition.
- .github/workflows/render.yml is the older Remotion workflow and does NOT render OpenMotion.
- Next step: initialize a native OpenMotion project in a runnable environment, translate Motion.md into scenes, export and verify a silent MP4.
- Do not claim OpenMotion is installed or that a render succeeded until the Studio and exporter are actually run.
