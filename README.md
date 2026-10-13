# 中文樂 v2.0: install guide

A Cantonese / Traditional Chinese learning app for young children. It runs in Chrome on the tablet, installs like a normal app, and works **offline** after the first visit.

## Files (upload all of them, keep them together)
| File | What it is |
|---|---|
| `index.html` | The whole app (pictures, stroke data, games) |
| `manifest.webmanifest` | Lets the tablet install it as an app |
| `sw.js` | Makes it work offline |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | App icons |

## 1. Put it on GitHub Pages (one time, about 5 minutes)
1. Sign in at **github.com**. Tap **+ → New repository**, name it e.g. `zhongwenle`, set it to **Public**, then **Create repository**.
   *Already have a repo from v1? Skip to step 2 and upload over the old files, using the same repo so saved progress is kept.*
2. In the repo, tap **Add file → Upload files**, drag in **all six files**, then **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
4. Wait 1–2 minutes. Your app address will be:
   `https://YOUR-USERNAME.github.io/zhongwenle/`

## 2. Install on the Samsung tablet
1. Open the address in **Chrome** while on Wi-Fi.
2. Wait until the front page appears (this saves the app for offline use).
3. Tap **⋮ → Add to home screen → Install**. The red 樂 icon appears on the home screen.
4. Open it from the icon. It runs full-screen and works without internet from now on.

**Cantonese voice:** if words are read in Mandarin or not at all, go to **Settings → General management → Text-to-speech → Preferred engine: Google**, then ⚙️ → **Install voice data → 中文 (香港)**.

## 3. Updating to a new version later
1. **Back up first:** Parent mode → **⬇️ Download backup**. This saves stars and progress to a file.
2. Upload the new `index.html` to the same repo, replacing the old one.
3. Open `sw.js` on GitHub (✏️ edit) and change `v2.0.0` to the new number (e.g. `v2.1.0`), then commit. This tells tablets there's an update.
4. On the tablet, open the app **while online**, close it fully, and open it again.

## Good to know
- **Progress is saved on the tablet**, separately for each child. It survives updates as long as the web address stays the same. If you ever change the repo name, use Parent mode → ⬇️ Download backup, then ⬆️ Restore backup on the new address.
- **🎙️ Song recordings** (Parent mode → 兒歌錄音) are stored on that tablet only and are **not** included in the backup file. Chrome asks for microphone permission the first time.
- The handwriting fonts load from Google Fonts on the first online visit and are cached after that. Offline before then, a standard Chinese font is used, which looks a little plainer but works fine.
- Parent mode is behind a simple maths question so the children don't wander in.

## Troubleshooting
| Problem | Fix |
|---|---|
| No "Install" option | Make sure you used the `https://….github.io` address in Chrome, and wait for the page to finish loading once |
| Old version still showing | Check you changed the version in `sw.js`; open the app online, close it fully, reopen |
| 404 page | Pages is still building (wait 2 minutes), or the files aren't in the repo's root folder |
| No sound | Tap the screen once (browsers need a tap before playing audio); check the 🎵 / 🔇 button and media volume |
