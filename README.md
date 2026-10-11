# 中文樂

A Traditional Chinese learning app for children aged 4 to 8, with a Cantonese voice. It runs in Chrome on an Android tablet, installs to the home screen and works offline.

## Files

| File | Purpose |
|---|---|
| index.html | The whole app |
| manifest.webmanifest | App name, icon and full-screen setting for installing |
| sw.js | Saves the app on the tablet so it works offline |
| icon-192.png, icon-512.png, icon-maskable-512.png | Home-screen icons |

## Put it on GitHub (one time)

1. On github.com, create a new **public** repository (e.g. `zhongwenle`).
2. **Add file → Upload files**, drag in all the files above, then **Commit changes**.
3. **Settings → Pages**: Source **Deploy from a branch**, branch **main**, folder **/ (root)**, **Save**.
4. After about a minute the app is at `https://<your-username>.github.io/zhongwenle/`.

## Install on the tablet

1. Open the link in **Chrome** (not Samsung Internet).
2. Menu **⋮ → Install app** (or **Add to Home screen**).
3. Open it once while online so everything is saved; after that it works offline.
4. Parent mode → **Test voice** should speak Cantonese. If it reports no Cantonese voice, install "Chinese (Hong Kong)" in Google text-to-speech (Settings → General management → Text-to-speech).

## Updating

Upload the new `index.html` over the old one. The tablet picks it up the next time the app is opened online. Progress is kept.

## Progress and privacy

- Progress, names and settings are stored only in Chrome on that tablet. Nothing is sent anywhere.
- Clearing Chrome's data or uninstalling the app deletes progress. Use Parent mode → **Download backup** now and then, and **Restore backup** to bring it back.
- The repository is public, but it contains only the app code and no personal data.

## Credits

Stroke data: Make Me a Hanzi (Arphic Public License) via Hanzi Writer (MIT). Pictures and music are original.
