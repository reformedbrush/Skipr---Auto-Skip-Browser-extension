


# Skipr 🎬

Skipr is a lightweight Chrome extension that automatically skips intros and plays the next episode on streaming platforms like Netflix, making your binge-watching experience seamless.

---

## 🚀 Features

- ⏭️ Auto Skip Intro
- ▶️ Auto Play Next Episode
- ⚡ Fast and lightweight
- 🎛️ Toggle controls (Enable/Disable features)
- 🧠 Smart DOM detection using MutationObserver

---

## 🛠️ Tech Stack

- JavaScript (Vanilla)
- Chrome Extension API (Manifest V3)
- HTML & CSS (for popup UI)

---

## 📁 Project Structure

```
skipr-extension/
│
├── manifest.json
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── styles.css
│
├── content/
│   └── content.js
│
├── assets/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
```

---

## ⚙️ Installation (Development)

1. Clone or download the repository
2. Open Chrome and go to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder

---

## 🧪 Usage

1. Open Netflix
2. Play any series
3. Skipr will automatically:
   - Skip intros
   - Play next episodes

Use the extension popup to toggle features ON/OFF.

---

## ⚠️ Notes

- Works best on Netflix (initial version)
- Selectors may break if Netflix updates UI
- No data is collected or stored externally

---

## 💡 Future Improvements

- Support for Prime Video & Disney+
- Skip recaps and credits
- Custom delay settings
- Time saved tracker
- Better UI/UX

---

## 📌 Author

Built by Akshai R Sangeeth 🚀