const PUBLISHED_STORAGE_KEY = "quest-forge-published-v1";
const PUBLISHED_PROJECTS_STORAGE_KEY = "quest-forge-published-projects-v1";
const PUBLISHED_MAPS_STORAGE_KEY = "quest-forge-published-maps-v1";
const PUBLISHED_DIGESTS_STORAGE_KEY = "quest-forge-published-digests-v1";
const READER_LANGUAGE_KEY = "quest-forge-reader-language-v1";
const READER_VOLUME_KEY = "quest-forge-reader-volume-v1";
const READER_SESSION_STORAGE_PREFIX = "quest-engine-reader-session:";
const READER_MAP_PROGRESS_STORAGE_PREFIX = "quest-engine-reader-map-progress:";
const BROWSER_DB_NAME = "quest-forge-browser-storage";
const BROWSER_DB_VERSION = 1;
const BROWSER_DB_STORE = "entries";
const SECRET_MARKER = "{{secret}}";

const icons = {
  rotate: '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
  flag: '<path d="M4 22V4"/><path d="M4 4h13l-1 5 1 5H4"/>',
  key: '<path d="M21 2 11 12"/><path d="M15 6l3 3"/><path d="M11 12a5 5 0 1 1-3.5-3.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h.01"/><path d="M16 8h.01"/><path d="M8 16h.01"/><path d="M16 16h.01"/><path d="M12 12h.01"/>',
  package: '<path d="m7.5 4.3 9 5.2"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  volume: '<path d="M11 5 6 9H2v6h4l5 4Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z"/>',
  scan: '<path d="M7 3H5a2 2 0 0 0-2 2v2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
  puzzle: '<path d="M14 3v4a2 2 0 1 0 4 0V3h3v7h-4a2 2 0 1 0 0 4h4v7h-7v-4a2 2 0 1 0-4 0v4H3v-7h4a2 2 0 1 0 0-4H3V3h7"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  sigma: '<path d="M18 4H7l6 8-6 8h11"/>',
  medal: '<circle cx="12" cy="15" r="5"/><path d="M9 10 7 2h10l-2 8"/><path d="M9.5 4 12 10l2.5-6"/><path d="m10.5 16 1.2 1.1 2-2.3"/>',
};

const readerMessages = {
  ru: {
    quest: "Квест",
    map: "Карта",
    digest: "Дайджест",
    points: "баллов",
    pointsLabel: "Баллы",
    scale: "Масштаб",
    mapFullscreen: "На весь экран",
    mapExitFullscreen: "Выйти из полноэкранного режима",
    mapMenu: "Меню",
    mapHideMenu: "Скрыть",
    pointLocked: "Точка закрыта",
    needPoints: "Нужно баллов",
    pointCompleted: "Активность уже пройдена.",
    pointSuccess: "Точка засчитана, баллы добавлены.",
    pointFailure: "Попробуйте еще раз.",
    loading: "Загрузка",
    language: "Язык",
    restart: "Сначала",
    music: "Музыка",
    volumeLevel: "Громкость",
    hideTopMenu: "Скрыть верхнее меню",
    showTopMenu: "Показать верхнее меню",
    noQuestTitle: "Нет квеста",
    start: "Начать",
    untitled: "Без названия",
    showAll: "Показать все",
    continue: "Продолжить",
    close: "Закрыть",
    answer: "Ответ",
    answerButton: "Ответить",
    answerAccepted: "Ответ принят.",
    answerRejected: "Ответ не принят.",
    ready: "Готово.",
    needItem: "Нужен предмет",
    hasItem: "Есть предмет",
    inventory: "Инвентарь",
    takeItem: "Нажмите, чтобы забрать",
    found: "Найдено",
    foundPlace: "Вы нашли нужное место.",
    roll: "Бросить",
    showResult: "Показать итог",
    imageMissing: "Изображение не задано",
    inspectImage: "Осмотрите картинку",
    qteStart: "Начать испытание",
    qteField: "Поле QTE",
    errors: "Ошибки",
    qteSuccess: "Испытание пройдено.",
    qteFailure: "Не успели.",
    character: "Персонаж",
    inspect: "Осмотреть",
    open: "Открыть",
    next: "Дальше",
    previous: "Предыдущий символ",
    nextValue: "Следующий символ",
    repliesMissing: "Ответы не настроены",
    puzzleStart: "Собрать пазл",
    puzzleSuccess: "Пазл собран.",
    puzzleFailure: "Время вышло.",
    cipherPrompt: "Соберите правильную комбинацию",
    confirm: "Подтвердить",
    cipherSuccess: "Код принят.",
    cipherFailure: "Механизм заблокирован.",
    error: "Ошибка",
    rolled: "Выпало",
    transition: "Переход...",
    noDiceTarget: "Для этого результата нет перехода.",
    scoreResolved: "Итог определен.",
    noScenes: "В квесте нет сцен.",
    loadError:
      "Квест не удалось загрузить. Проверьте путь в параметре ?src= или экспортированный JSON.",
    publishedMissing:
      "Опубликованный проект не найден. Проверьте ссылку, опубликуйте проект заново или передайте JSON через ?src=quest.json.",
    publicNotFoundTitle: "Публикация не найдена",
    publicNotFoundBody: "Эта публичная ссылка недоступна или была набрана неверно. Попросите автора опубликовать проект заново.",
    publicLoadFailedTitle: "Не удалось открыть публикацию",
    publicLoadFailedBody: "Сервер временно недоступен. Обновите страницу или попробуйте позже.",
    backToHome: "На главную",
    rotateMapTitle: "\u041f\u043e\u0432\u0435\u0440\u043d\u0438\u0442\u0435 \u044d\u043a\u0440\u0430\u043d",
    rotateMapBody: "\u041a\u0430\u0440\u0442\u0430 \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0438 \u0442\u043e\u0447\u043d\u0435\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u0438. \u041f\u043e\u0432\u0435\u0440\u043d\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c.",
    participantTitle: "Перед стартом",
    participantName: "Имя",
    participantEmail: "Email",
    participantOrganization: "Организация",
    participantExtra: "Дополнительное поле",
    participantSubmit: "Продолжить",
    participantNameTaken: "Такое имя уже есть в лидерборде. Введите другое имя.",
    leaderboard: "Лидерборд",
    leaderboardTitle: "Лидерборд",
    leaderboardEmpty: "Результатов пока нет.",
    pointsShort: "Баллы",
  },
  en: {
    quest: "Quest",
    map: "Map",
    digest: "Digest",
    points: "points",
    pointsLabel: "Points",
    scale: "Scale",
    mapFullscreen: "Fullscreen",
    mapExitFullscreen: "Exit fullscreen mode",
    mapMenu: "Menu",
    mapHideMenu: "Hide",
    pointLocked: "Point locked",
    needPoints: "Points needed",
    pointCompleted: "This activity is already complete.",
    pointSuccess: "Point completed, score added.",
    pointFailure: "Try again.",
    loading: "Loading",
    language: "Language",
    restart: "Restart",
    music: "Music",
    volumeLevel: "Volume",
    hideTopMenu: "Hide top menu",
    showTopMenu: "Show top menu",
    noQuestTitle: "No quest",
    start: "Start",
    untitled: "Untitled",
    showAll: "Show all",
    continue: "Continue",
    close: "Close",
    answer: "Answer",
    answerButton: "Submit",
    answerAccepted: "Answer accepted.",
    answerRejected: "Answer rejected.",
    ready: "Done.",
    needItem: "Requires item",
    hasItem: "Item available",
    inventory: "Inventory",
    takeItem: "Tap to collect",
    found: "Found",
    foundPlace: "You found the right spot.",
    roll: "Roll",
    showResult: "Show result",
    imageMissing: "Image is missing",
    inspectImage: "Inspect the image",
    qteStart: "Start challenge",
    qteField: "QTE field",
    errors: "Errors",
    qteSuccess: "Challenge completed.",
    qteFailure: "Time ran out.",
    character: "Character",
    inspect: "Inspect",
    open: "Open",
    next: "Next",
    previous: "Previous symbol",
    nextValue: "Next symbol",
    repliesMissing: "No replies configured",
    puzzleStart: "Assemble puzzle",
    puzzleSuccess: "Puzzle complete.",
    puzzleFailure: "Time ran out.",
    cipherPrompt: "Enter the correct combination",
    confirm: "Confirm",
    cipherSuccess: "Code accepted.",
    cipherFailure: "The mechanism is locked.",
    error: "Error",
    rolled: "Rolled",
    transition: "Next...",
    noDiceTarget: "No branch is set for this result.",
    scoreResolved: "Result resolved.",
    noScenes: "This quest has no scenes.",
    loadError: "The quest could not be loaded. Check the ?src= path or exported JSON.",
    publishedMissing:
      "No published project was found. Check the link, publish the project again, or pass JSON via ?src=quest.json.",
    publicNotFoundTitle: "Publication not found",
    publicNotFoundBody: "This public link is unavailable or was typed incorrectly. Ask the author to publish the project again.",
    publicLoadFailedTitle: "Could not open publication",
    publicLoadFailedBody: "The server is temporarily unavailable. Refresh the page or try again later.",
    backToHome: "Back to home",
    rotateMapTitle: "Rotate your screen",
    rotateMapBody: "The interactive map works best in landscape orientation. Rotate your device to continue.",
    participantTitle: "Before you start",
    participantName: "Name",
    participantEmail: "Email",
    participantOrganization: "Organization",
    participantExtra: "Extra field",
    participantSubmit: "Continue",
    participantNameTaken: "This name is already in the leaderboard. Choose another name.",
    leaderboard: "Leaderboard",
    leaderboardTitle: "Leaderboard",
    leaderboardEmpty: "No results yet.",
    pointsShort: "Points",
  },
};

let quest = null;
let interactiveMap = null;
let digest = null;
let contentKind = "quest";
let playState = createPlayState("");
let mapPlayState = createMapPlayState();
let digestPlayState = createDigestPlayState();
let mapReaderTicker = null;
let musicAudio = null;
let webMusic = null;
let musicSyncToken = 0;
let audioEnabled = true;
let audioContext = null;
const audioBufferCache = new Map();
let readerMapResizeBound = false;
let readerLang = readReaderLanguage();
let readerVolume = readReaderVolume();
let readerLoadFailure = null;
let readerPublicationMeta = null;
let readerAnalyticsSessionId = "";
let readerParticipant = null;
let readerAnalyticsCompleted = false;

function readReaderLanguage() {
  try {
    return localStorage.getItem(READER_LANGUAGE_KEY) || "ru";
  } catch (error) {
    return "ru";
  }
}

function readReaderVolume() {
  try {
    const raw = localStorage.getItem(READER_VOLUME_KEY);
    if (raw === null) return null;
    const saved = Number(raw);
    return Number.isFinite(saved) ? Math.max(0, Math.min(1, saved)) : null;
  } catch (error) {
    return null;
  }
}

function openBrowserStorageDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is not available"));
      return;
    }
    const request = indexedDB.open(BROWSER_DB_NAME, BROWSER_DB_VERSION);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(BROWSER_DB_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("IndexedDB open failed"));
  });
}

async function readBrowserStorageValue(key) {
  const db = await openBrowserStorageDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BROWSER_DB_STORE, "readonly");
    const request = tx.objectStore(BROWSER_DB_STORE).get(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("IndexedDB read failed"));
    tx.oncomplete = () => db.close();
    tx.onerror = () => {
      const error = tx.error || new Error("IndexedDB read failed");
      db.close();
      reject(error);
    };
  });
}

function t(key) {
  return readerMessages[readerLang]?.[key] || readerMessages.ru[key] || key;
}

function systemText(value, ruDefault, key) {
  const text = String(value || "");
  if (!text || text === ruDefault || text === readerMessages.en[key]) return t(key);
  return text;
}

function setReaderLanguage(lang) {
  readerLang = readerMessages[lang] ? lang : "ru";
  try {
    localStorage.setItem(READER_LANGUAGE_KEY, readerLang);
  } catch (error) {}
  document.documentElement.lang = readerLang;
  renderStaticReaderLabels();
  if (contentKind === "map" && interactiveMap) {
    renderMapReader();
    return;
  }
  if (contentKind === "digest" && digest) {
    renderDigestReader();
    return;
  }
  if (quest) renderScene();
}

function renderStaticReaderLabels() {
  document.body.classList.toggle("is-map-reader-page", contentKind === "map");
  const label = document.getElementById("readerLabel");
  const title = document.getElementById("readerTitle");
  const restartButton = document.getElementById("readerRestart");
  const audioButton = document.getElementById("readerAudio");
  const volumeInput = document.getElementById("readerVolume");
  const language = document.getElementById("readerLanguage");
  const headerToggle = document.getElementById("readerHeaderToggle");
  const orientationTitle = document.querySelector("[data-map-orientation-title]");
  const orientationBody = document.querySelector("[data-map-orientation-body]");
  if (label) label.textContent = contentKind === "map" ? t("map") : contentKind === "digest" ? t("digest") : t("quest");
  if (title && !quest && !interactiveMap && !digest) title.textContent = t("loading");
  if (restartButton) {
    restartButton.title = t("restart");
    restartButton.setAttribute("aria-label", t("restart"));
  }
  if (audioButton) {
    audioButton.title = t("music");
    audioButton.setAttribute("aria-label", t("music"));
  }
  if (volumeInput) {
    volumeInput.setAttribute("aria-label", t("volumeLevel"));
    volumeInput.title = t("volumeLevel");
  }
  if (language) {
    language.value = readerLang;
    language.setAttribute("aria-label", t("language"));
  }
  if (headerToggle) {
    const collapsed = document.querySelector(".reader-app")?.classList.contains("is-reader-header-collapsed");
    headerToggle.title = collapsed ? t("showTopMenu") : t("hideTopMenu");
    headerToggle.setAttribute("aria-label", collapsed ? t("showTopMenu") : t("hideTopMenu"));
    headerToggle.setAttribute("aria-expanded", String(!collapsed));
  }
  if (orientationTitle) orientationTitle.textContent = t("rotateMapTitle");
  if (orientationBody) orientationBody.textContent = t("rotateMapBody");
}

document.addEventListener("DOMContentLoaded", async () => {
  document.documentElement.lang = readerLang;
  document.body.innerHTML = `
    <main class="reader-app">
      <header class="reader-header">
        <div>
          <span class="reader-label" id="readerLabel">${t("quest")}</span>
          <strong id="readerTitle">${t("loading")}</strong>
          <small id="readerInventory"></small>
        </div>
        <div class="reader-controls">
          <select class="reader-language" id="readerLanguage" aria-label="${t("language")}">
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <button class="icon-button" type="button" id="readerRestart" title="${t("restart")}" aria-label="${t("restart")}">
            <span class="icon">${iconSvg("rotate")}</span>
          </button>
          <button class="icon-button" type="button" id="readerAudio" title="${t("music")}" aria-label="${t("music")}">
            <span class="icon">${iconSvg("volume")}</span>
          </button>
          <label class="reader-volume" title="${t("volumeLevel")}">
            <input id="readerVolume" type="range" min="0" max="1" step="0.05" aria-label="${t("volumeLevel")}" />
          </label>
        </div>
        <button class="reader-header-toggle" type="button" id="readerHeaderToggle" aria-label="${t("hideTopMenu")}" title="${t("hideTopMenu")}" aria-expanded="true">
          <span class="icon">${iconSvg("arrow")}</span>
        </button>
      </header>
      <section class="reader-shell">
        <article id="readerStage" class="play-stage"></article>
      </section>
      <aside class="map-orientation-gate" role="status" aria-live="polite">
        <div class="map-orientation-card">
          <span class="map-orientation-icon">${iconSvg("rotate")}</span>
          <h2 data-map-orientation-title>${t("rotateMapTitle")}</h2>
          <p data-map-orientation-body>${t("rotateMapBody")}</p>
        </div>
      </aside>
      <footer class="qe-footer reader-footer">
        <img src="brand/qe-mini.png" alt="" />
        <span>Quest Engine · 2026</span>
      </footer>
    </main>
  `;
  setupBackgroundParallax();
  renderStaticReaderLabels();
  document.getElementById("readerLanguage").addEventListener("change", (event) => setReaderLanguage(event.target.value));
  document.getElementById("readerHeaderToggle")?.addEventListener("click", () => {
    const app = document.querySelector(".reader-app");
    const collapsed = app?.classList.toggle("is-reader-header-collapsed");
    document.getElementById("readerHeaderToggle")?.setAttribute("aria-expanded", String(!collapsed));
    renderStaticReaderLabels();
  });

  let loaded = null;
  try {
    loaded = await loadQuest();
  } catch (error) {
    showError(publicLoadErrorOptions() || { title: t("noQuestTitle"), message: t("loadError") });
    return;
  }
  if (!loaded) {
    showError(publicLoadErrorOptions() || { title: t("noQuestTitle"), message: t("publishedMissing") });
    return;
  }
  readerPublicationMeta = loaded.__publication || readerPublicationMeta;
  readerParticipant = null;
  readerAnalyticsSessionId = "";
  restoreReaderSessionState();

  if (isInteractiveMapData(loaded)) {
    contentKind = "map";
    interactiveMap = normalizeInteractiveMap(loaded);
    quest = null;
    digest = null;
    mapPlayState = createMapPlayState();
    restoreReaderMapProgress();
    applyTheme();
    document.getElementById("readerTitle").textContent = interactiveMap.title;
    document.title = `${interactiveMap.title || t("map")} · Quest Engine`;
    document.getElementById("readerRestart").addEventListener("click", restart);
    document.getElementById("readerAudio").addEventListener("click", () => {
      audioEnabled = !audioEnabled;
      syncBackgroundMusic();
      renderAudioButton();
    });
    document.getElementById("readerVolume").addEventListener("input", (event) => {
      readerVolume = Math.max(0, Math.min(1, Number(event.target.value)));
      try {
        localStorage.setItem(READER_VOLUME_KEY, String(readerVolume));
      } catch (error) {}
      syncBackgroundMusic();
      renderAudioButton();
    });
    renderStaticReaderLabels();
    recordAnalyticsOpen(readerParticipant, currentAnalyticsPayload());
    renderMapReader();
    return;
  }

  if (isDigestData(loaded)) {
    contentKind = "digest";
    digest = normalizeDigest(loaded);
    quest = null;
    interactiveMap = null;
    digestPlayState = createDigestPlayState();
    applyTheme();
    document.getElementById("readerTitle").textContent = digest.title;
    document.title = `${digest.title || t("digest")} · Quest Engine`;
    document.getElementById("readerRestart").addEventListener("click", restart);
    document.getElementById("readerAudio").addEventListener("click", () => {
      audioEnabled = !audioEnabled;
      syncBackgroundMusic();
      renderAudioButton();
    });
    document.getElementById("readerVolume").addEventListener("input", (event) => {
      readerVolume = Math.max(0, Math.min(1, Number(event.target.value)));
      try {
        localStorage.setItem(READER_VOLUME_KEY, String(readerVolume));
      } catch (error) {}
      syncBackgroundMusic();
      renderAudioButton();
    });
    renderStaticReaderLabels();
    recordAnalyticsOpen(readerParticipant, currentAnalyticsPayload());
    renderDigestReader();
    return;
  }

  quest = loaded;
  quest = normalizeQuest(quest);
  digest = null;
  interactiveMap = null;
  applyTheme();
  playState = createPlayState(quest.start);
  document.getElementById("readerTitle").textContent = quest.title;
  document.title = `${quest.title || t("quest")} · Quest Engine`;
  document.getElementById("readerRestart").addEventListener("click", restart);
  document.getElementById("readerAudio").addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    syncBackgroundMusic();
    renderAudioButton();
  });
  document.getElementById("readerVolume").addEventListener("input", (event) => {
    readerVolume = Math.max(0, Math.min(1, Number(event.target.value)));
    try {
      localStorage.setItem(READER_VOLUME_KEY, String(readerVolume));
    } catch (error) {}
    syncBackgroundMusic();
    renderAudioButton();
  });
  recordAnalyticsOpen(readerParticipant, currentAnalyticsPayload());
  renderScene();
});

async function loadQuest() {
  if (window.__QUEST__) return window.__QUEST__;

  const params = new URLSearchParams(window.location.search);
  const publicId = publicIdFromLocation(params);
  if (publicId) {
    return loadPublicPublishedProject(publicId, params.get("api"));
  }

  const src = params.get("src");
  if (src) {
    const response = await fetch(src);
    if (!response.ok) throw new Error(`Не удалось загрузить ${src}`);
    return response.json();
  }

  const projectId = params.get("project");
  if (projectId) {
    const fromProject = await loadPublishedProject(projectId);
    if (fromProject) return fromProject;
    const fromMap = await loadPublishedMap(projectId);
    if (fromMap) return fromMap;
    const fromDigest = await loadPublishedDigest(projectId);
    if (fromDigest) return fromDigest;
    const hashData = decodeQuestHash(window.location.hash);
    if (hashData) return hashData;
    if (window.__QUEST_PACKAGE_TYPE__ === "map") {
      const packagedMap = await loadPackagedMap();
      if (packagedMap) return packagedMap;
    }
    if (window.__QUEST_PACKAGE_TYPE__ === "digest") {
      const packagedDigest = await loadPackagedDigest();
      if (packagedDigest) return packagedDigest;
    }
    const packaged = await loadPackagedQuest();
    if (packaged) return packaged;
    const packagedMap = await loadPackagedMap();
    if (packagedMap) return packagedMap;
    const packagedDigest = await loadPackagedDigest();
    if (packagedDigest) return packagedDigest;
    return null;
  }

  const hashQuest = decodeQuestHash(window.location.hash);
  if (hashQuest) return hashQuest;
  if (window.__QUEST_PACKAGE_TYPE__ === "map") {
    const packagedMap = await loadPackagedMap();
    if (packagedMap) return packagedMap;
  }
  if (window.__QUEST_PACKAGE_TYPE__ === "digest") {
    const packagedDigest = await loadPackagedDigest();
    if (packagedDigest) return packagedDigest;
  }
  try {
    const saved = localStorage.getItem(PUBLISHED_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    const backup = await readBrowserStorageValue(PUBLISHED_STORAGE_KEY).catch(() => null);
    if (backup) return backup;
  } catch (error) {
    const backup = await readBrowserStorageValue(PUBLISHED_STORAGE_KEY).catch(() => null);
    if (backup) return backup;
  }
  const packagedQuest = await loadPackagedQuest();
  if (packagedQuest) return packagedQuest;
  const packagedMap = await loadPackagedMap();
  if (packagedMap) return packagedMap;
  return loadPackagedDigest();
}

function publicIdFromLocation(params = new URLSearchParams(window.location.search)) {
  const explicit = params.get("public");
  if (explicit) return explicit;
  const match = window.location.pathname.match(/\/p\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : "";
}

async function loadPublicPublishedProject(publicId, apiBase = "") {
  const base = normalizeReaderApiBase(apiBase);
  readerLoadFailure = null;
  if (!base) {
    readerLoadFailure = { type: "public-load-failed", publicId };
    return null;
  }
  try {
    const response = await fetch(`${base}/api/public/${encodeURIComponent(publicId)}`);
    if (response.status === 404) {
      readerLoadFailure = { type: "public-not-found", publicId };
      return null;
    }
    if (!response.ok) {
      readerLoadFailure = { type: "public-load-failed", publicId };
      return null;
    }
    const data = await response.json();
    if (!data?.snapshot) {
      readerLoadFailure = { type: "public-not-found", publicId };
      return null;
    }
    readerPublicationMeta = {
      publicId: data.publicId || publicId,
      type: data.type || data.snapshot?.publishedType || "",
      projectId: data.projectId || data.snapshot?.projectId || "",
      publishedAt: data.publishedAt || data.snapshot?.publishedAt || "",
      apiBase: base,
    };
    return { ...data.snapshot, __publication: readerPublicationMeta };
  } catch (error) {
    readerLoadFailure = { type: "public-load-failed", publicId };
    return null;
  }
}

function publicLoadErrorOptions() {
  if (!readerLoadFailure) return null;
  if (readerLoadFailure.type === "public-not-found") {
    return {
      title: t("publicNotFoundTitle"),
      message: t("publicNotFoundBody"),
      publicId: readerLoadFailure.publicId,
    };
  }
  return {
    title: t("publicLoadFailedTitle"),
    message: t("publicLoadFailedBody"),
    publicId: readerLoadFailure.publicId,
  };
}

function normalizeReaderApiBase(value = "") {
  const explicit = String(value || "").trim().replace(/\/+$/g, "");
  if (explicit) return explicit;
  if (/^https?:$/i.test(window.location.protocol)) return window.location.origin;
  return "";
}

function analyticsSettings() {
  const source = contentKind === "map" ? interactiveMap : contentKind === "digest" ? digest : quest;
  const fields = source?.analytics?.fields && typeof source.analytics.fields === "object" ? source.analytics.fields : {};
  const labels = source?.analytics?.labels && typeof source.analytics.labels === "object" ? source.analytics.labels : {};
  return {
    authRequired: Boolean(source?.analytics?.authRequired),
    fields: {
      name: fields.name !== false,
      email: Boolean(fields.email),
      organization: Boolean(fields.organization),
      extra: Boolean(fields.extra),
    },
    authTitle: String(source?.analytics?.authTitle || ""),
    authDescription: String(source?.analytics?.authDescription || ""),
    submitLabel: String(source?.analytics?.submitLabel || ""),
    labels: {
      name: String(labels.name || ""),
      email: String(labels.email || ""),
      organization: String(labels.organization || ""),
      extra: String(labels.extra || ""),
    },
    leaderboard: Boolean(source?.analytics?.leaderboard),
  };
}

function participantRequired() {
  const settings = analyticsSettings();
  return Boolean(settings.authRequired && !hasReaderParticipant());
}

function hasReaderParticipant() {
  if (!analyticsSettings().authRequired) return true;
  const fields = analyticsSettings().fields || {};
  if (!readerParticipant) return false;
  if (fields.name && !String(readerParticipant.name || "").trim()) return false;
  if (fields.email && !String(readerParticipant.email || "").trim()) return false;
  if (fields.organization && !String(readerParticipant.organization || "").trim()) return false;
  if (fields.extra && !String(readerParticipant.extra || "").trim()) return false;
  return true;
}

function participantGateHtml() {
  const settings = analyticsSettings();
  if (!settings.authRequired || hasReaderParticipant()) return "";
  const fields = settings.fields || {};
  const labels = settings.labels || {};
  const title = settings.authTitle || t("participantTitle");
  const submit = settings.submitLabel || t("participantSubmit");
  return `
    <form class="participant-gate" data-participant-form>
      <strong>${escapeHtml(title)}</strong>
      ${settings.authDescription ? `<p>${escapeHtml(settings.authDescription)}</p>` : ""}
      ${fields.name !== false ? `<label><span>${escapeHtml(labels.name || t("participantName"))}</span><input name="name" type="text" autocomplete="name" required /></label>` : ""}
      ${fields.email ? `<label><span>${escapeHtml(labels.email || t("participantEmail"))}</span><input name="email" type="email" autocomplete="email" required /></label>` : ""}
      ${fields.organization ? `<label><span>${escapeHtml(labels.organization || t("participantOrganization"))}</span><input name="organization" type="text" autocomplete="organization" required /></label>` : ""}
      ${fields.extra ? `<label><span>${escapeHtml(labels.extra || t("participantExtra"))}</span><input name="extra" type="text" autocomplete="off" required /></label>` : ""}
      <div class="participant-error" data-participant-error hidden></div>
      <button class="tool-button primary" type="submit"><span>${escapeHtml(submit)}</span></button>
    </form>
  `;
}

function bindParticipantGate(root, onReady) {
  root?.querySelector("[data-participant-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    readerParticipant = {
      name: String(form.elements.name?.value || "").trim(),
      email: String(form.elements.email?.value || "").trim(),
      organization: String(form.elements.organization?.value || "").trim(),
      extra: String(form.elements.extra?.value || "").trim(),
    };
    const submitButton = form.querySelector("button[type='submit']");
    const errorBox = form.querySelector("[data-participant-error]");
    if (errorBox) errorBox.hidden = true;
    if (submitButton) submitButton.disabled = true;
    const result = await recordAnalyticsOpen(readerParticipant, currentAnalyticsPayload());
    if (!result?.ok) {
      if (errorBox) {
        errorBox.hidden = false;
        errorBox.textContent = result?.code === "participant_name_taken" ? t("participantNameTaken") : result?.message || t("loadError");
      }
      if (submitButton) submitButton.disabled = false;
      readerParticipant = null;
      return;
    }
    saveReaderSessionState();
    form.closest("[data-participant-popup]")?.remove();
    onReady?.();
  });
}

function showParticipantGate(onReady) {
  if (!participantRequired()) {
    onReady?.();
    return;
  }
  const stage = document.getElementById("readerStage");
  if (!stage) return;
  stage.querySelector("[data-participant-popup]")?.remove();
  const popup = document.createElement("div");
  popup.className = "found-popup participant-popup is-visible";
  popup.dataset.participantPopup = "";
  popup.innerHTML = `
    <div class="found-card participant-card">
      <button class="icon-button modal-close map-modal-close" type="button" data-participant-close aria-label="${t("close")}"><span class="icon">${iconSvg("x")}</span></button>
      ${participantGateHtml()}
    </div>
  `;
  stage.appendChild(popup);
  popup.querySelector("[data-participant-close]")?.addEventListener("click", () => popup.remove());
  bindParticipantGate(popup, onReady);
  requestAnimationFrame(() => popup.querySelector("input, button[type='submit']")?.focus());
}

function readerStoragePublicId() {
  return readerPublicationMeta?.publicId || "";
}

function readerSessionStorageKey() {
  const publicId = readerStoragePublicId();
  return publicId ? `${READER_SESSION_STORAGE_PREFIX}${publicId}` : "";
}

function restoreReaderSessionState() {
  const key = readerSessionStorageKey();
  if (!key) return;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "null");
    if (!saved || typeof saved !== "object") return;
    readerAnalyticsSessionId = String(saved.sessionId || "");
    readerParticipant = saved.participant && typeof saved.participant === "object" ? {
      name: String(saved.participant.name || ""),
      email: String(saved.participant.email || ""),
      organization: String(saved.participant.organization || ""),
      extra: String(saved.participant.extra || ""),
    } : null;
  } catch (error) {}
}

function clearReaderSessionState() {
  const key = readerSessionStorageKey();
  readerAnalyticsSessionId = "";
  readerParticipant = null;
  readerAnalyticsCompleted = false;
  if (!key) return;
  try {
    localStorage.removeItem(key);
  } catch (error) {}
}

function saveReaderSessionState() {
  const key = readerSessionStorageKey();
  if (!key || !readerAnalyticsSessionId || !readerParticipant) return;
  try {
    localStorage.setItem(key, JSON.stringify({
      sessionId: readerAnalyticsSessionId,
      participant: readerParticipant,
      savedAt: new Date().toISOString(),
    }));
  } catch (error) {}
}

function readerMapProgressStorageKey() {
  const publicId = readerStoragePublicId();
  return publicId ? `${READER_MAP_PROGRESS_STORAGE_PREFIX}${publicId}` : "";
}

function restoreReaderMapProgress() {
  const key = readerMapProgressStorageKey();
  if (!key || !mapPlayState) return;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "null");
    if (!saved || typeof saved !== "object") return;
    const completed = Array.isArray(saved.completed) ? saved.completed.map(String) : [];
    const validIds = new Set((interactiveMap?.points || []).map((point) => point.id));
    mapPlayState.completed = completed.filter((id) => validIds.has(id));
    const scoreFromPoints = (interactiveMap?.points || [])
      .filter((point) => mapPlayState.completed.includes(point.id))
      .reduce((sum, point) => sum + Math.max(0, Number(point.points || 0)), 0);
    mapPlayState.score = Math.max(0, Number.isFinite(Number(saved.score)) ? Number(saved.score) : scoreFromPoints);
    mapPlayState.startedAt = Number(saved.startedAt || Date.now());
  } catch (error) {}
}

function saveReaderMapProgress() {
  const key = readerMapProgressStorageKey();
  if (!key || !mapPlayState) return;
  try {
    localStorage.setItem(key, JSON.stringify({
      score: Number(mapPlayState.score || 0),
      completed: Array.isArray(mapPlayState.completed) ? mapPlayState.completed : [],
      startedAt: Number(mapPlayState.startedAt || Date.now()),
      savedAt: new Date().toISOString(),
    }));
  } catch (error) {}
}

function clearReaderMapProgress() {
  const key = readerMapProgressStorageKey();
  if (!key) return;
  try {
    localStorage.removeItem(key);
  } catch (error) {}
}

function ensureReaderAnalyticsSessionId() {
  const publicId = readerStoragePublicId();
  if (!publicId) return "";
  if (readerAnalyticsSessionId) return readerAnalyticsSessionId;
  readerAnalyticsSessionId = `visit_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
  return readerAnalyticsSessionId;
}

async function recordAnalyticsOpen(participant = readerParticipant, payload = {}) {
  if (!readerPublicationMeta?.publicId || !readerPublicationMeta.apiBase) return { ok: false, message: t("loadError") };
  const sessionId = ensureReaderAnalyticsSessionId();
  try {
    const response = await fetch(`${readerPublicationMeta.apiBase}/api/public/${encodeURIComponent(readerPublicationMeta.publicId)}/analytics/open`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, participant: participant || null, ...payload }),
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      if (data?.code === "analytics_session_deleted") {
        handleDeletedReaderAnalyticsSession();
      }
      return { ok: false, status: response.status, code: data?.code || "", message: data?.message || "" };
    }
    if (data?.sessionId && data.sessionId !== readerAnalyticsSessionId) {
      readerAnalyticsSessionId = data.sessionId;
    }
    if (participant) saveReaderSessionState();
    return { ok: true, data };
  } catch (error) {}
  return { ok: false, message: t("loadError") };
}

function recordAnalyticsProgress(payload = currentAnalyticsPayload()) {
  return recordAnalyticsOpen(readerParticipant, payload);
}

function handleDeletedReaderAnalyticsSession() {
  clearReaderSessionState();
  if (contentKind === "map") {
    mapPlayState = createMapPlayState();
    clearReaderMapProgress();
    renderMapReader();
    return;
  }
  if (contentKind === "digest") {
    digestPlayState = createDigestPlayState();
    renderDigestReader();
    return;
  }
  if (quest) {
    playState = createPlayState(quest.start || quest.scenes?.[0]?.id || "");
    renderScene();
  }
}

function currentAnalyticsPayload() {
  if (contentKind === "map" && interactiveMap && mapPlayState) {
    const score = Number(mapPlayState.score || 0);
    const maxScore = maxMapScore();
    return {
      score,
      maxScore,
      scores: { points: score },
      durationSec: mapPlayState.startedAt ? Math.max(0, Math.round((Date.now() - mapPlayState.startedAt) / 1000)) : 0,
    };
  }
  if (contentKind === "digest" && digestPlayState) {
    const score = Number(digestPlayState.points || 0);
    return {
      score,
      maxScore: maxDigestScore(),
      scores: { points: score },
    };
  }
  return {};
}

function completeAnalyticsOnce(payload = {}) {
  if (readerAnalyticsCompleted || !readerPublicationMeta?.publicId || !readerPublicationMeta.apiBase) return;
  readerAnalyticsCompleted = true;
  const sessionId = ensureReaderAnalyticsSessionId();
  fetch(`${readerPublicationMeta.apiBase}/api/public/${encodeURIComponent(readerPublicationMeta.publicId)}/analytics/complete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, participant: readerParticipant || null, ...payload }),
  })
    .then(async (response) => {
      if (response.ok) return;
      const data = await response.json().catch(() => null);
      if (data?.code === "analytics_session_deleted") {
        handleDeletedReaderAnalyticsSession();
      }
    })
    .catch(() => {});
}

async function showLeaderboard() {
  if (!readerPublicationMeta?.publicId || !readerPublicationMeta.apiBase) return;
  let items = [];
  try {
    const response = await fetch(`${readerPublicationMeta.apiBase}/api/public/${encodeURIComponent(readerPublicationMeta.publicId)}/leaderboard`);
    const data = response.ok ? await response.json() : null;
    items = Array.isArray(data?.items) ? data.items : [];
  } catch (error) {}
  const stage = document.getElementById("readerStage");
  const popup = stage.querySelector("[data-found-popup]") || document.createElement("div");
  popup.className = "found-popup is-visible";
  popup.dataset.foundPopup = "";
  popup.hidden = false;
  popup.innerHTML = `
    <div class="found-card leaderboard-card">
      <button class="icon-button modal-close map-modal-close" type="button" data-leaderboard-close aria-label="${t("close")}"><span class="icon">${iconSvg("x")}</span></button>
      <h2>${escapeHtml(t("leaderboardTitle"))}</h2>
      ${items.length ? `<div class="leaderboard-list">${items.map((item) => `
        <div class="leaderboard-row">
          <b>${Number(item.rank || 0)}. ${escapeHtml(item.name || "Участник")}</b>
          <span>${escapeHtml(formatScoreMetric(item.score, item.maxScore))}</span>
        </div>
      `).join("")}</div>` : `<p>${escapeHtml(t("leaderboardEmpty"))}</p>`}
      <button class="answer-button" type="button" data-leaderboard-close><span>${t("close")}</span></button>
    </div>
  `;
  if (!popup.parentElement) stage.appendChild(popup);
  popup.querySelectorAll("[data-leaderboard-close]").forEach((button) => button.addEventListener("click", () => popup.remove()));
}

async function loadPublishedProject(projectId) {
  try {
    const projects = JSON.parse(localStorage.getItem(PUBLISHED_PROJECTS_STORAGE_KEY) || "{}");
    if (projects[projectId]) return projects[projectId];
  } catch (error) {}
  const backupProjects = await readBrowserStorageValue(PUBLISHED_PROJECTS_STORAGE_KEY).catch(() => null);
  return backupProjects?.[projectId] || null;
}

async function loadPublishedMap(projectId) {
  try {
    const maps = JSON.parse(localStorage.getItem(PUBLISHED_MAPS_STORAGE_KEY) || "{}");
    if (maps[projectId]) return maps[projectId];
  } catch (error) {}
  const backupMaps = await readBrowserStorageValue(PUBLISHED_MAPS_STORAGE_KEY).catch(() => null);
  return backupMaps?.[projectId] || null;
}

async function loadPublishedDigest(projectId) {
  try {
    const digests = JSON.parse(localStorage.getItem(PUBLISHED_DIGESTS_STORAGE_KEY) || "{}");
    if (digests[projectId]) return digests[projectId];
  } catch (error) {}
  const backupDigests = await readBrowserStorageValue(PUBLISHED_DIGESTS_STORAGE_KEY).catch(() => null);
  return backupDigests?.[projectId] || null;
}

async function loadPackagedQuest() {
  return fetch("quest.json")
    .then((response) => (response.ok ? response.json() : null))
    .catch(() => null);
}

async function loadPackagedMap() {
  return fetch("map.json")
    .then((response) => (response.ok ? response.json() : null))
    .catch(() => null);
}

async function loadPackagedDigest() {
  return fetch("digest.json")
    .then((response) => (response.ok ? response.json() : null))
    .catch(() => null);
}

function decodeQuestHash(hash) {
  const match = String(hash || "").match(/^#quest=(.+)$/);
  if (!match) return null;
  try {
    const base64 = match[1].replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch (error) {
    return null;
  }
}

function createPlayState(current, options = {}) {
  return {
    current,
    history: [],
    inventory: [],
    usedItems: [],
    foundSearch: [],
    scores: {},
    cover: options.cover ?? true,
  };
}

function snapshotState() {
  return {
    current: playState.current,
    inventory: structuredCloneSafe(playState.inventory || []),
    usedItems: structuredCloneSafe(playState.usedItems || []),
    foundSearch: structuredCloneSafe(playState.foundSearch || []),
    scores: structuredCloneSafe(playState.scores || {}),
    cover: false,
  };
}

function restoreSnapshot(snapshot) {
  playState.current = snapshot.current;
  playState.inventory = structuredCloneSafe(snapshot.inventory || []);
  playState.usedItems = structuredCloneSafe(snapshot.usedItems || []);
  playState.foundSearch = structuredCloneSafe(snapshot.foundSearch || []);
  playState.scores = structuredCloneSafe(snapshot.scores || {});
  playState.cover = snapshot.cover ?? false;
}

function renderScene() {
  document.body.classList.remove("is-reader-map-fullscreen");
  document.getElementById("readerStage")?.classList.remove("is-map-fullscreen-stage");
  if (playState.cover) {
    renderCoverStage();
    return;
  }
  const scene = findScene(playState.current) || findScene(quest.start) || quest.scenes[0];
  const stage = document.getElementById("readerStage");
  if (!scene) {
    showError(t("noScenes"));
    return;
  }
  playState.current = scene.id;
  if (scene.mode === "ending") {
    completeAnalyticsOnce(questAnalyticsPayload());
  }
  if (!scene.rewardCollect) grantSceneItem(scene);
  syncBackgroundMusic();
  renderInventory();
  const reveal = shouldRevealText(scene);
  const image = renderStoryImageShell(scene);
  const skip = reveal ? `<button class="small-button reveal-skip" type="button" data-skip-reveal>${t("showAll")}</button>` : "";
  stage.innerHTML = `
    ${renderInventoryBar()}
    ${image}
    <div class="story-body">
      <div class="story-kicker">
        <span>${escapeHtml(quest.title || t("quest"))}</span>
        <div class="kicker-actions">
          ${skip}
        </div>
      </div>
      <h1>${escapeHtml(scene.title || scene.id)}</h1>
      ${renderRewardPrompt(scene)}
      <div class="story-text">${renderStoryText(scene)}</div>
      ${renderInteraction(scene, reveal)}
    </div>
  `;
  enhanceClientImages(stage);
  setupImageLoadingStates(stage);
  attachSceneEvents(scene);
  startTextReveal(reveal);
  renderAudioButton();
}

function renderStoryImageShell(scene) {
  if (!scene.image || ["search", "dialogue", "puzzle"].includes(scene.mode)) return "";
  return `
    <div class="story-image-shell is-loading" data-image-shell>
      <div class="image-loading-placeholder" aria-hidden="true">
        <span class="image-spinner"></span>
        <span>${t("loading")}</span>
      </div>
      <img class="story-image" src="${escapeAttr(scene.image)}" alt="${escapeAttr(scene.title)}" />
    </div>
  `;
}

function renderCoverStage() {
  const stage = document.getElementById("readerStage");
  const cover = quest.coverImage || quest.scenes.find((scene) => scene.image)?.image || "";
  const description = renderFormattedTextBlock(quest.description, "cover-description-block");
  stage.innerHTML = `
    <section class="cover-stage"${cover ? ` style="background-image:url('${escapeAttr(cover)}')"` : ""}>
      <div class="cover-overlay">
        <span>${t("quest")}</span>
        <h1>${escapeHtml(quest.title || t("untitled"))}</h1>
        ${description ? `<div class="cover-description">${description}</div>` : ""}
        <button class="tool-button primary" type="button" data-start-cover>
          <span>${t("start")}</span>
        </button>
      </div>
    </section>
  `;
  stage.querySelector("[data-start-cover]").addEventListener("click", startQuestFromCover);
  syncBackgroundMusic();
  renderInventory();
  renderAudioButton();
}

function startQuestFromCover() {
  if (participantRequired()) {
    showParticipantGate(startQuestFromCover);
    return;
  }
  playState.cover = false;
  playState.current = quest.start;
  renderScene();
  scrollReaderToSceneTop();
}

function renderStoryText(scene) {
  const raw = scene.text || "";
  const reveal = shouldRevealText(scene);
  let secretUsed = false;
  const paragraphs = raw.split(/\n{2,}/).filter((item) => item.trim().length);
  let html = paragraphs
    .map((paragraph) => {
      const block = parseStoryBlock(paragraph);
      const chunks = reveal ? splitTextChunks(block.text) : [block.text];
      const className = [block.className, reveal ? "reveal-block" : ""].filter(Boolean).join(" ");
      return `<${block.tag} class="${className}">${chunks
        .map((chunk) => {
          const formatted = formatStoryInline(chunk, scene, {
            get used() {
              return secretUsed;
            },
            set used(value) {
              secretUsed = value;
            },
          });
          return reveal ? `<span class="reveal-unit">${formatted}</span>` : formatted;
        })
        .join(reveal ? " " : "")}</${block.tag}>`;
    })
    .join("");
  if (scene.hidden?.enabled && !secretUsed) {
    const button = secretButtonHtml(scene);
    html += reveal ? `<p><span class="reveal-unit">${button}</span></p>` : `<p>${button}</p>`;
  }
  return html || "<p></p>";
}

function renderChoiceButtons(scene) {
  return (scene.choices || [])
    .map((choice, index) => {
      const locked = !hasRequiredItem(choice);
      return `
        <button class="choice-button ${escapeAttr(choice.tone || "neutral")} ${choice.image ? "with-image" : ""}" type="button" data-choice="${index}" ${locked ? "disabled" : ""}>
          ${choice.image ? `<img src="${escapeAttr(choice.image)}" alt="" />` : ""}
          <span>
            <b>${escapeHtml(systemText(choice.label, "Продолжить", "continue"))}</b>
            ${choice.requiresItem ? `<small>${locked ? t("needItem") : t("hasItem")}: ${escapeHtml(choice.requiresItem)}</small>` : ""}
          </span>
          <span class="icon">${iconSvg(locked ? "package" : "arrow")}</span>
        </button>
      `;
    })
    .join("");
}

function puzzleGeometry(pieces) {
  const requested = Math.max(4, Math.min(36, Number(pieces || 9)));
  let cols = Math.ceil(Math.sqrt(requested));
  let rows = Math.ceil(requested / cols);
  while (cols * rows < requested) rows += 1;
  return { cols, rows, total: cols * rows };
}

function puzzlePiecesHtml(geometry) {
  return shuffleArray(Array.from({ length: geometry.total }, (_, index) => index))
    .map((index) => {
      const col = index % geometry.cols;
      const row = Math.floor(index / geometry.cols);
      const x = geometry.cols === 1 ? 50 : (col / (geometry.cols - 1)) * 100;
      const y = geometry.rows === 1 ? 50 : (row / (geometry.rows - 1)) * 100;
      return `<button class="puzzle-piece" type="button" data-puzzle-piece="${index}" style="--piece-x:${x}%;--piece-y:${y}%;--puzzle-bg-width:${geometry.cols * 100}%;--puzzle-bg-height:${geometry.rows * 100}%"></button>`;
    })
    .join("");
}

function shuffleArray(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const next = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[next]] = [copy[next], copy[index]];
  }
  return copy;
}

function cipherSlotHtml(index, option) {
  return `
    <div class="cipher-stepper" data-cipher-stepper="${index}">
      <button class="cipher-arrow" type="button" data-cipher-step="-1" aria-label="${t("previous")}">▲</button>
      <button class="cipher-slot" type="button" data-cipher-slot="${index}" data-cipher-index="0" tabindex="-1">
        ${option?.image ? `<img src="${escapeAttr(option.image)}" alt="" />` : `<b>${escapeHtml(option?.label || "?")}</b>`}
      </button>
      <button class="cipher-arrow" type="button" data-cipher-step="1" aria-label="${t("nextValue")}">▼</button>
    </div>
  `;
}

function formatTime(seconds) {
  const total = Math.max(0, Number(seconds || 0));
  const minutes = Math.floor(total / 60);
  const rest = Math.floor(total % 60);
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function formatScoreMetric(score, maxScore) {
  const current = Number.isFinite(Number(score)) ? Math.round(Number(score) * 10) / 10 : 0;
  const max = Number.isFinite(Number(maxScore)) && Number(maxScore) > 0 ? Math.round(Number(maxScore) * 10) / 10 : 0;
  return max ? `${current} / ${max}` : String(current);
}

function renderInteraction(scene, delayed) {
  const delayedAttrs = delayed ? ' delayed-interaction" data-delayed-interaction aria-hidden="true"' : '"';
  if (scene.mode === "ending") {
    return `
      <div class="ending-panel${delayedAttrs}>
        ${analyticsSettings().leaderboard ? `<button class="tool-button" type="button" data-leaderboard><span class="icon">${iconSvg("medal")}</span><span>${t("leaderboard")}</span></button>` : ""}
        <button class="tool-button" type="button" data-restart>
          <span class="icon">${iconSvg("rotate")}</span>
          <span>${t("restart")}</span>
        </button>
      </div>
    `;
  }

  if (scene.mode === "answer") {
    return `
      <div class="answer-panel${delayedAttrs}>
        <form class="answer-form" data-answer-form>
          <label>
            <span>${escapeHtml(systemText(scene.answer?.prompt, "Ответ", "answer"))}</span>
            <input type="text" autocomplete="off" data-answer-input />
          </label>
          <button class="answer-button" type="submit">
            <span>${t("answerButton")}</span>
            <span class="icon">${iconSvg("arrow")}</span>
          </button>
        </form>
        <div class="answer-status" data-answer-status hidden></div>
      </div>
    `;
  }

  if (scene.mode === "dice") {
    const label = scene.dice?.buttonLabel?.trim() || `${t("roll")} d${Number(scene.dice?.sides || 6)}`;
    return `
      <div class="dice-panel${delayedAttrs}>
        <button class="dice-button" type="button" data-roll-dice>
          <span class="icon">${iconSvg("dice")}</span>
          <span>${escapeHtml(label)}</span>
        </button>
        <div class="dice-visual" data-dice-visual>?</div>
        <div class="dice-result" data-dice-result hidden></div>
      </div>
    `;
  }

  if (scene.mode === "score") {
    const label = scene.score?.buttonLabel?.trim() || t("showResult");
    return `
      <div class="score-panel${delayedAttrs}>
        <button class="answer-button" type="button" data-score-result>
          <span>${escapeHtml(label)}</span>
        </button>
        <div class="answer-status" data-score-status hidden></div>
      </div>
    `;
  }

  if (scene.mode === "search") {
    const image = scene.image || "";
    const points = searchPoints(scene);
    const prompt = systemText(scene.search?.prompt, "Осмотрите картинку и найдите предмет", "inspectImage");
    return `
      <div class="search-play${delayedAttrs}>
        <p class="search-prompt">${escapeHtml(prompt)}</p>
        <div class="search-image">
          ${image ? `<img src="${escapeAttr(image)}" alt="${escapeAttr(scene.title)}" />` : `<div class="empty">${t("imageMissing")}</div>`}
          ${image
            ? points
                .map((point, index) => {
                  const found = playState.foundSearch?.includes(searchPointKey(scene, point));
                  const radius = Math.max(4, Math.min(30, Number(point.radius || 10)));
                  return `<button class="search-hotspot ${found ? "is-found" : ""}" type="button" data-search-hotspot="${escapeAttr(point.id)}" style="left:${clampPercent(point.x)}%;top:${clampPercent(point.y)}%;--spot-size:${radius * 2}px" aria-label="${escapeAttr(point.label || `${t("found")} ${index + 1}`)}">${index + 1}</button>`;
                })
                .join("")
            : ""}
        </div>
        <div class="found-popup" data-found-popup hidden></div>
      </div>
    `;
  }

  if (scene.mode === "qte") {
    const label = systemText(scene.qte?.buttonLabel?.trim(), "Начать испытание", "qteStart");
    const count = Math.max(1, Number(scene.qte?.count || 4));
    const allowed = Math.max(0, Number(scene.qte?.allowedMisses ?? 1));
    const fieldStyle = scene.qte?.image ? ` style="--qte-image:url('${escapeAttr(scene.qte.image)}')"` : "";
    return `
      <div class="qte-panel${delayedAttrs}>
        <button class="answer-button" type="button" data-qte-start>
          <span>${escapeHtml(label)}</span>
          <span class="icon">${iconSvg("arrow")}</span>
        </button>
        <div class="qte-arena click-qte" data-qte-arena hidden>
          <div class="qte-meta">
            <b data-qte-progress>0/${count}</b>
            <span data-qte-misses>${t("errors")}: 0/${allowed}</span>
          </div>
          <div class="qte-field" data-qte-field aria-label="${t("qteField")}"${fieldStyle}></div>
          <div class="qte-timer"><i data-qte-timer></i></div>
        </div>
        <div class="answer-status" data-qte-status hidden></div>
      </div>
    `;
  }

  if (scene.mode === "puzzle") {
    const puzzle = normalizePuzzle(scene.puzzle);
    const geometry = puzzleGeometry(puzzle.pieces);
    const label = systemText(puzzle.buttonLabel?.trim(), "Собрать пазл", "puzzleStart");
    return `
      <div class="puzzle-play${delayedAttrs}>
        <button class="answer-button" type="button" data-puzzle-start>
          <span>${escapeHtml(label)}</span>
          <span class="icon">${iconSvg("puzzle")}</span>
        </button>
        <div class="puzzle-arena" data-puzzle-arena hidden style="--puzzle-image:url('${escapeAttr(scene.image || "")}');--puzzle-cols:${geometry.cols};--puzzle-rows:${geometry.rows};--puzzle-board-width:${Math.min(560, geometry.cols * 104)}px">
          <div class="puzzle-meta">
            <b data-puzzle-count>0/${geometry.total}</b>
            <span data-puzzle-time>${formatTime(puzzle.timeLimit)}</span>
          </div>
          <div class="puzzle-board" data-puzzle-board>
            ${Array.from({ length: geometry.total }, (_, index) => `<div class="puzzle-cell" data-puzzle-cell="${index}"></div>`).join("")}
          </div>
          <div class="puzzle-tray" data-puzzle-tray>
            ${puzzlePiecesHtml(geometry)}
          </div>
        </div>
        <div class="answer-status" data-puzzle-status hidden></div>
      </div>
    `;
  }

  if (scene.mode === "cipher") {
    const cipher = normalizeCipher(scene.cipher);
    const options = cipher.options.length ? cipher.options : [{ label: "A", image: "" }];
    return `
      <div class="cipher-play${delayedAttrs} data-cipher-options="${escapeAttr(JSON.stringify(options))}">
        <p class="cipher-prompt">${escapeHtml(systemText(cipher.prompt, "Соберите правильную комбинацию", "cipherPrompt"))}</p>
        <div class="cipher-row" data-cipher-row>
          ${Array.from({ length: cipher.length }, (_, index) => cipherSlotHtml(index, options[0])).join("")}
        </div>
        <button class="answer-button" type="button" data-cipher-confirm>
          <span>${escapeHtml(systemText(cipher.buttonLabel, "Подтвердить", "confirm"))}</span>
          <span class="icon">${iconSvg("lock")}</span>
        </button>
        <div class="answer-status" data-cipher-status hidden></div>
      </div>
    `;
  }

  if (scene.mode === "dialogue") {
    const dialogue = normalizeDialogue(scene.dialogue);
    const lines = dialogue.lines.map((line) => line.trim()).filter(Boolean);
    const stageStyle = scene.image ? ` style="--dialogue-bg:url('${escapeAttr(scene.image)}')"` : "";
    const hasSecret = dialogue.secretItem.trim() && !hasInventoryItem(dialogue.secretItem) && !playState.usedItems.includes(dialogue.secretItem);
    return `
      <div class="dialogue-play${delayedAttrs}>
        <div class="dialogue-stage" data-dialogue-stage data-dialogue-lines="${escapeAttr(JSON.stringify(lines))}"${stageStyle}>
          <div class="dialogue-backdrop" aria-hidden="true"></div>
          ${hasSecret
            ? `<button class="dialogue-secret" type="button" data-dialogue-secret title="${escapeAttr(dialogue.secretText || dialogue.secretItem)}">
                <span class="icon">${iconSvg("scan")}</span>
                <span>${escapeHtml(systemText(dialogue.secretLabel, "Осмотреть", "inspect"))}</span>
              </button>`
            : ""}
          <div class="dialogue-bubble">
            <span class="dialogue-speaker">${escapeHtml(systemText(dialogue.characterName, "Персонаж", "character"))}</span>
            <p class="dialogue-text" data-dialogue-text></p>
            <div class="dialogue-controls">
              <button class="small-button" type="button" data-dialogue-next>${t("next")}</button>
            </div>
            <div class="dialogue-replies" data-dialogue-replies hidden>
              ${scene.choices?.length ? renderChoiceButtons(scene) : `<div class="empty compact">${t("repliesMissing")}</div>`}
            </div>
          </div>
          ${dialogue.characterImage
            ? `<img class="dialogue-character" src="${escapeAttr(dialogue.characterImage)}" alt="${escapeAttr(systemText(dialogue.characterName, "Персонаж", "character"))}" />`
            : `<div class="dialogue-character-placeholder" aria-hidden="true">${escapeHtml(systemText(dialogue.characterName, "Персонаж", "character").slice(0, 1).toUpperCase())}</div>`}
        </div>
        <div class="found-popup" data-found-popup hidden></div>
      </div>
    `;
  }

  if (!scene.choices?.length) return "";
  return `
    <div class="choice-panel${delayedAttrs}>
      ${renderChoiceButtons(scene)}
    </div>
  `;
}

function attachSceneEvents(scene) {
  const stage = document.getElementById("readerStage");
  bindInventoryEvents(stage);
  stage.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const choice = scene.choices[Number(button.dataset.choice)];
      if (!hasRequiredItem(choice)) return;
      const before = snapshotState();
      playSound("clickSound");
      applyChoiceEffects(choice);
      goToScene(choice?.target, before);
    });
  });
  const answerForm = stage.querySelector("[data-answer-form]");
  if (answerForm) {
    answerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = answerForm.querySelector("[data-answer-input]");
      const status = stage.querySelector("[data-answer-status]");
      if (answerMatches(input.value, scene.answer)) {
        playSound("successSound");
        showInlineResult(status, t("answerAccepted"), scene.answer?.success, "good");
      } else if (scene.answer?.failure) {
        playSound("failSound");
        showInlineResult(status, t("answerRejected"), scene.answer.failure, "bad");
      } else {
        playSound("failSound");
        status.hidden = false;
        status.textContent = t("answerRejected");
      }
    });
  }
  stage.querySelector("[data-roll-dice]")?.addEventListener("click", () => rollDice(scene));
  stage.querySelector("[data-score-result]")?.addEventListener("click", () => resolveScoreScene(scene));
  stage.querySelector("[data-collect-item]")?.addEventListener("click", () => {
    collectSceneReward(scene);
  });
  stage.querySelector("[data-secret]")?.addEventListener("click", () => {
    playSound("clickSound");
    handleHiddenClick(scene);
  });
  stage.querySelectorAll("[data-search-hotspot]").forEach((button) => {
    button.addEventListener("click", () => handleSearchFound(scene, button.dataset.searchHotspot));
  });
  stage.querySelector("[data-qte-start]")?.addEventListener("click", () => startQte(scene));
  stage.querySelector("[data-puzzle-start]")?.addEventListener("click", () => startPuzzle(scene));
  stage.querySelector("[data-dialogue-secret]")?.addEventListener("click", () => handleDialogueSecret(scene));
  setupDialogueScene(scene);
  setupCipherScene(scene);
  stage.querySelector("[data-restart]")?.addEventListener("click", restart);
  stage.querySelector("[data-leaderboard]")?.addEventListener("click", showLeaderboard);
}

function startTextReveal(enabled) {
  const stage = document.getElementById("readerStage");
  const units = Array.from(stage.querySelectorAll(".reveal-unit"));
  const delayed = stage.querySelector("[data-delayed-interaction]");
  const skip = stage.querySelector("[data-skip-reveal]");
  let timer = null;

  const finish = () => {
    if (timer) window.clearInterval(timer);
    units.forEach((unit) => {
      unit.classList.add("is-visible");
      unit.closest(".reveal-block")?.classList.add("is-visible");
    });
    if (delayed) {
      delayed.setAttribute("aria-hidden", "false");
      requestAnimationFrame(() => delayed.classList.add("is-visible"));
    }
    if (skip) skip.hidden = true;
  };

  if (!enabled || !units.length) {
    finish();
    return;
  }

  let index = 0;
  const showNext = () => {
    if (index >= units.length) {
      finish();
      return;
    }
    units[index].classList.add("is-visible");
    units[index].closest(".reveal-block")?.classList.add("is-visible");
    index += 1;
  };
  skip?.addEventListener("click", finish);
  showNext();
  timer = window.setInterval(showNext, Number(quest.settings?.revealSpeed || 420));
}

function setupBackgroundParallax() {
  let ticking = false;
  const update = () => {
    ticking = false;
    const offset = Math.max(-28, Math.min(28, window.scrollY * -0.025));
    document.documentElement.style.setProperty("--qe-parallax-y", `${offset.toFixed(2)}px`);
  };
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };
  window.addEventListener("scroll", requestUpdate, { passive: true });
  update();
}

function scrollReaderToSceneTop() {
  window.requestAnimationFrame(() => {
    const target = document.querySelector(".reader-shell") || document.getElementById("readerStage");
    target?.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

function goToScene(targetId, previousState = snapshotState()) {
  if (!targetId || !findScene(targetId)) return;
  playState.history.push(previousState);
  playState.current = targetId;
  playState.cover = false;
  renderScene();
  scrollReaderToSceneTop();
}

function showInlineResult(node, text, target, tone = "neutral", buttonLabel = t("continue")) {
  if (!node) return;
  node.hidden = false;
  node.classList.toggle("is-good", tone === "good");
  node.classList.toggle("is-bad", tone === "bad");
  triggerOutcomeAnimation(tone);
  node.innerHTML = `
    <span>${escapeHtml(text || t("ready"))}</span>
    ${
      target
        ? `<button class="answer-button result-button" type="button" data-result-target="${escapeAttr(target)}">
            <span>${escapeHtml(buttonLabel)}</span>
            <span class="icon">${iconSvg("arrow")}</span>
          </button>`
        : ""
    }
  `;
  node.querySelector("[data-result-target]")?.addEventListener("click", (event) => {
    goToScene(event.currentTarget.dataset.resultTarget);
  });
}

function triggerOutcomeAnimation(tone) {
  if (!["good", "bad"].includes(tone)) return;
  const preset = tone === "good" ? quest.theme?.successAnimation : quest.theme?.failureAnimation;
  if (!preset || preset === "none") return;
  const node = document.getElementById("readerStage");
  if (!node) return;
  const classes = ["outcome-good-glow", "outcome-good-pulse", "outcome-good-spark", "outcome-bad-shake", "outcome-bad-red-glow", "outcome-bad-dim"];
  node.classList.remove(...classes);
  void node.offsetWidth;
  const className = tone === "good" ? `outcome-good-${preset}` : `outcome-bad-${preset}`;
  node.classList.add(className);
  window.setTimeout(() => node.classList.remove(className), 1000);
}

function handleHiddenClick(scene) {
  const item = scene.hidden?.rewardItem?.trim();
  const text = scene.hidden?.rewardText?.trim();
  const image = scene.hidden?.rewardImage || "";
  if (item) {
    grantItem({
      name: item,
      image,
      text: text || "",
    });
    refreshInventoryBar();
    showFoundPopup(text || `${t("found")}: ${item}`, image, scene.hidden?.target);
    return;
  }
  if (text || image) {
    showFoundPopup(text || t("ready"), image, scene.hidden?.target);
    return;
  }
  if (scene.hidden?.target) goToScene(scene.hidden.target);
  else showFoundPopup(t("ready"), "", "");
}

function handleSearchFound(scene, pointId) {
  playSound("successSound");
  const point = searchPoints(scene).find((item) => item.id === pointId) || searchPoints(scene)[0];
  if (!point) return;
  const key = searchPointKey(scene, point);
  if (!playState.foundSearch.includes(key)) playState.foundSearch.push(key);
  const item = point.type === "item" ? point.rewardItem?.trim() : "";
  if (item) {
    grantItem({
      name: item,
      image: point.rewardImage || "",
      text: point.rewardText || "",
    });
    refreshInventoryBar();
  }
  showFoundPopup(point.rewardText || (item ? `${t("found")}: ${item}` : t("foundPlace")), point.rewardImage || "", point.target);
}

function showFoundPopup(text, image, target) {
  const stage = document.getElementById("readerStage");
  const popup = stage.querySelector("[data-found-popup]") || document.createElement("div");
  popup.className = "found-popup is-visible";
  popup.dataset.foundPopup = "";
  popup.hidden = false;
  popup.innerHTML = `
    <div class="found-card">
      ${image ? `<img src="${escapeAttr(image)}" alt="" />` : ""}
      <p>${escapeHtml(text || t("ready"))}</p>
      <button class="answer-button" type="button" data-found-continue>
        <span>${target ? t("continue") : t("close")}</span>
        <span class="icon">${iconSvg("arrow")}</span>
      </button>
    </div>
  `;
  if (!popup.parentElement) stage.appendChild(popup);
  enhanceClientImages(popup);
  popup.querySelector("[data-found-continue]").addEventListener("click", () => {
    if (target) goToScene(target);
    else {
      popup.remove();
      refreshInventoryBar();
    }
  });
}

function setupDialogueScene(scene) {
  const stage = document.getElementById("readerStage").querySelector("[data-dialogue-stage]");
  if (!stage) return;
  const text = stage.querySelector("[data-dialogue-text]");
  const next = stage.querySelector("[data-dialogue-next]");
  const replies = stage.querySelector("[data-dialogue-replies]");
  if (!text || !next || !replies) return;
  let lines = [];
  try {
    lines = JSON.parse(stage.dataset.dialogueLines || "[]");
  } catch (error) {
    lines = [];
  }
  lines = lines.map((line) => String(line || "").trim()).filter(Boolean);
  if (!lines.length) lines = ["..."];
  let index = 0;

  const showLine = () => {
    replies.hidden = true;
    replies.classList.remove("is-visible");
    text.classList.remove("is-visible");
    text.textContent = lines[index] || "";
    next.textContent = index >= lines.length - 1 ? (scene.choices?.length ? t("answerButton") : t("ready")) : t("next");
    next.hidden = false;
    window.requestAnimationFrame(() => text.classList.add("is-visible"));
  };

  const showReplies = () => {
    next.hidden = true;
    replies.hidden = false;
    window.requestAnimationFrame(() => replies.classList.add("is-visible"));
  };

  next.addEventListener("click", () => {
    playSound("clickSound");
    if (index < lines.length - 1) {
      index += 1;
      showLine();
      return;
    }
    showReplies();
  });

  showLine();
}

function handleDialogueSecret(scene) {
  const dialogue = normalizeDialogue(scene.dialogue);
  const item = dialogue.secretItem.trim();
  if (!item) return;
  playSound("successSound");
  grantItem({
    name: item,
    image: dialogue.secretImage || "",
    text: dialogue.secretText || "",
  });
  refreshInventoryBar();
  showFoundPopup(dialogue.secretText || `${t("found")}: ${item}`, dialogue.secretImage || "", "");
}

function startQte(scene) {
  const stage = document.getElementById("readerStage");
  const arena = stage.querySelector("[data-qte-arena]");
  const startButton = stage.querySelector("[data-qte-start]");
  const field = stage.querySelector("[data-qte-field]");
  const progress = stage.querySelector("[data-qte-progress]");
  const missesNode = stage.querySelector("[data-qte-misses]");
  const timerNode = stage.querySelector("[data-qte-timer]");
  const status = stage.querySelector("[data-qte-status]");
  if (!arena || !field || !progress) return;
  const count = Math.max(1, Math.min(20, Number(scene.qte?.count || 4)));
  const speed = Math.max(500, Math.min(5000, Number(scene.qte?.speed || 1400)));
  const allowedMisses = Math.max(0, Math.min(20, Number(scene.qte?.allowedMisses ?? 1)));
  const totalTime = speed * count;
  let expected = 1;
  let misses = 0;
  let timer = null;
  const cleanup = () => {
    if (timer) window.clearTimeout(timer);
    field.removeEventListener("click", onFieldClick);
  };
  const finish = (ok) => {
    cleanup();
    field.classList.add("is-finished");
    if (ok) {
      playSound("successSound");
      showInlineResult(status, systemText(scene.qte?.successText, "Испытание пройдено.", "qteSuccess"), scene.qte?.success, "good");
    } else {
      playSound("failSound");
      showInlineResult(status, systemText(scene.qte?.failureText, "Не успели.", "qteFailure"), scene.qte?.failure, "bad");
    }
  };
  const updateStatus = () => {
    progress.textContent = `${expected - 1}/${count}`;
    if (missesNode) missesNode.textContent = `${t("errors")}: ${misses}/${allowedMisses}`;
  };
  const registerMiss = () => {
    misses += 1;
    playSound("failSound");
    updateStatus();
    if (misses > allowedMisses) finish(false);
  };
  function onFieldClick(event) {
    const target = event.target.closest("[data-qte-circle]");
    if (!target || !field.contains(target)) {
      registerMiss();
      return;
    }
    const number = Number(target.dataset.qteCircle);
    if (number !== expected) {
      registerMiss();
      return;
    }
    target.classList.add("is-hit");
    window.setTimeout(() => target.remove(), 170);
    expected += 1;
    playSound("clickSound");
    updateStatus();
    if (expected > count) finish(true);
  }
  startButton.hidden = true;
  arena.hidden = false;
  if (status) status.hidden = true;
  field.innerHTML = qteCirclesHtml(count, field);
  field.classList.remove("is-finished");
  field.addEventListener("click", onFieldClick);
  updateStatus();
  if (timerNode) {
    timerNode.style.animation = "none";
    void timerNode.offsetWidth;
    timerNode.style.animation = `qte-timeout ${totalTime}ms linear forwards`;
  }
  timer = window.setTimeout(() => finish(false), totalTime);
}

function startPuzzle(scene) {
  const stage = document.getElementById("readerStage");
  const puzzle = normalizePuzzle(scene.puzzle);
  const arena = stage.querySelector("[data-puzzle-arena]");
  const board = stage.querySelector("[data-puzzle-board]");
  const tray = stage.querySelector("[data-puzzle-tray]");
  const start = stage.querySelector("[data-puzzle-start]");
  const status = stage.querySelector("[data-puzzle-status]");
  const countNode = stage.querySelector("[data-puzzle-count]");
  const timeNode = stage.querySelector("[data-puzzle-time]");
  if (!arena || !board || !tray) return;
  const geometry = puzzleGeometry(puzzle.pieces);
  let fixed = 0;
  let finished = false;
  let remaining = puzzle.timeLimit;
  let timer = null;

  const updateMeta = () => {
    if (countNode) countNode.textContent = `${fixed}/${geometry.total}`;
    if (timeNode) timeNode.textContent = formatTime(remaining);
  };
  const finish = (ok) => {
    if (finished) return;
    finished = true;
    window.clearInterval(timer);
    arena.classList.add("is-finished");
    playSound(ok ? "successSound" : "failSound");
    showInlineResult(
      status,
      ok ? systemText(puzzle.successText, "Пазл собран.", "puzzleSuccess") : systemText(puzzle.failureText, "Время вышло.", "puzzleFailure"),
      ok ? puzzle.success : puzzle.failure,
      ok ? "good" : "bad",
    );
  };
  const tick = () => {
    remaining -= 1;
    updateMeta();
    if (remaining <= 0) finish(false);
  };

  start.hidden = true;
  arena.hidden = false;
  if (status) status.hidden = true;
  updateMeta();
  timer = window.setInterval(tick, 1000);

  tray.querySelectorAll("[data-puzzle-piece]").forEach((piece) => {
    piece.addEventListener("pointerdown", (event) => {
      if (finished || piece.classList.contains("is-fixed")) return;
      event.preventDefault();
      const rect = piece.getBoundingClientRect();
      const shiftX = event.clientX - rect.left;
      const shiftY = event.clientY - rect.top;
      const home = piece.parentElement;
      const homeNext = piece.nextElementSibling;
      piece.classList.add("is-dragging");
      piece.style.width = `${rect.width}px`;
      piece.style.height = `${rect.height}px`;
      piece.style.left = `${rect.left}px`;
      piece.style.top = `${rect.top}px`;
      piece.style.position = "fixed";
      piece.style.zIndex = "40";
      document.body.appendChild(piece);
      piece.setPointerCapture(event.pointerId);

      const move = (moveEvent) => {
        piece.style.left = `${moveEvent.clientX - shiftX}px`;
        piece.style.top = `${moveEvent.clientY - shiftY}px`;
      };
      const done = (upEvent) => {
        piece.removeEventListener("pointermove", move);
        piece.removeEventListener("pointerup", done);
        piece.removeEventListener("pointercancel", done);
        const targetIndex = piece.dataset.puzzlePiece;
        const cell = board.querySelector(`[data-puzzle-cell="${targetIndex}"]`);
        const cellRect = cell?.getBoundingClientRect();
        const centerX = upEvent.clientX;
        const centerY = upEvent.clientY;
        const inside = cellRect && centerX >= cellRect.left && centerX <= cellRect.right && centerY >= cellRect.top && centerY <= cellRect.bottom;
        piece.classList.remove("is-dragging");
        piece.style.position = "";
        piece.style.zIndex = "";
        piece.style.left = "";
        piece.style.top = "";
        piece.style.width = "";
        piece.style.height = "";
        if (inside && cell && !cell.firstElementChild) {
          cell.appendChild(piece);
          piece.classList.add("is-fixed");
          piece.disabled = true;
          fixed += 1;
          playSound("successSound");
          updateMeta();
          if (fixed >= geometry.total) finish(true);
        } else if (homeNext && homeNext.parentElement === home) {
          home.insertBefore(piece, homeNext);
        } else {
          home.appendChild(piece);
        }
      };
      piece.addEventListener("pointermove", move);
      piece.addEventListener("pointerup", done);
      piece.addEventListener("pointercancel", done);
    });
  });
}

function setupCipherScene(scene) {
  const root = document.getElementById("readerStage").querySelector(".cipher-play");
  if (!root) return;
  const cipher = normalizeCipher(scene.cipher);
  let options = cipher.options;
  try {
    options = JSON.parse(root.dataset.cipherOptions || "[]");
  } catch (error) {
    options = cipher.options;
  }
  if (!options.length) options = [{ label: "A", image: "" }];
  let errors = 0;
  const status = root.querySelector("[data-cipher-status]");
  const renderSlot = (slot, optionIndex) => {
    const option = options[optionIndex] || options[0];
    slot.dataset.cipherIndex = String(optionIndex);
    slot.innerHTML = option.image ? `<img src="${escapeAttr(option.image)}" alt="" />` : `<b>${escapeHtml(option.label || "?")}</b>`;
  };
  root.querySelectorAll("[data-cipher-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const slot = button.closest(".cipher-stepper")?.querySelector("[data-cipher-slot]");
      if (!slot) return;
      const direction = Number(button.dataset.cipherStep || 1);
      const next = (Number(slot.dataset.cipherIndex || 0) + direction + options.length) % options.length;
      renderSlot(slot, next);
      playSound("clickSound");
    });
  });
  root.querySelector("[data-cipher-confirm]")?.addEventListener("click", () => {
    const value = Array.from(root.querySelectorAll("[data-cipher-slot]")).map((slot) => options[Number(slot.dataset.cipherIndex || 0)]?.label || "");
    const answer = cipher.answer.slice(0, cipher.length);
    const ok = answer.length === value.length && answer.every((item, index) => item === value[index]);
    if (ok) {
      playSound("successSound");
      showInlineResult(status, systemText(cipher.successText, "Код принят.", "cipherSuccess"), cipher.success, "good");
      return;
    }
    errors += 1;
    playSound("failSound");
    if (errors >= cipher.maxErrors) {
      showInlineResult(status, systemText(cipher.failureText, "Механизм заблокирован.", "cipherFailure"), cipher.failure, "bad");
    } else {
      status.hidden = false;
      status.classList.add("is-bad");
      status.textContent = `${t("error")} ${errors}/${cipher.maxErrors}.`;
    }
  });
}

function rollDice(scene) {
  const sides = Math.max(2, Number(scene.dice?.sides || 6));
  const resultBox = document.getElementById("readerStage").querySelector("[data-dice-result]");
  const visual = document.getElementById("readerStage").querySelector("[data-dice-visual]");
  const button = document.getElementById("readerStage").querySelector("[data-roll-dice]");
  playSound("diceSound");
  button.disabled = true;
  if (resultBox) resultBox.hidden = true;
  let ticks = 0;
  const timer = window.setInterval(() => {
    ticks += 1;
    const interim = Math.floor(Math.random() * sides) + 1;
    if (visual) {
      visual.textContent = String(interim);
      visual.classList.toggle("is-rolling", ticks % 2 === 0);
    }
  }, 110);
  window.setTimeout(() => {
    window.clearInterval(timer);
    const result = Math.floor(Math.random() * sides) + 1;
    const outcome = scene.dice?.outcomes?.find((item) => result >= Number(item.from) && result <= Number(item.to));
    if (visual) {
      visual.textContent = String(result);
      visual.classList.remove("is-rolling");
      visual.classList.add("is-final");
    }
    if (resultBox) {
      const text = outcome
        ? `${t("rolled")} ${result}. ${outcome.label || t("transition")}`
        : `${t("rolled")} ${result}. ${t("noDiceTarget")}`;
      showInlineResult(resultBox, text, outcome?.target, outcome?.tone || "neutral");
    }
    if (!outcome?.target) {
      button.disabled = false;
    }
  }, 1200);
}

function goBack() {
  const previous = playState.history.pop();
  if (!previous) return;
  restoreSnapshot(previous);
  renderScene();
}

function restart() {
  if (contentKind === "map") {
    mapPlayState = createMapPlayState();
    clearReaderMapProgress();
    saveReaderMapProgress();
    readerAnalyticsCompleted = false;
    recordAnalyticsProgress(currentAnalyticsPayload());
    renderMapReader();
    return;
  }
  if (contentKind === "digest") {
    digestPlayState = createDigestPlayState();
    readerAnalyticsCompleted = false;
    renderDigestReader();
    return;
  }
  playState = createPlayState(quest.start);
  readerAnalyticsCompleted = false;
  renderScene();
}

function resolveScoreScene(scene) {
  const variable = scene.score?.variable || "score";
  const value = Number(playState.scores?.[variable] || 0);
  const outcome = scene.score?.outcomes?.find((item) => value >= Number(item.from) && value <= Number(item.to));
  const status = document.getElementById("readerStage").querySelector("[data-score-status]");
  if (outcome?.target) {
    playSound(outcome.tone === "bad" ? "failSound" : "successSound");
    triggerOutcomeAnimation(outcome.tone || "neutral");
    goToScene(outcome.target);
    return;
  }
  showInlineResult(status, outcome?.label || t("noDiceTarget"), "", outcome?.tone || "neutral");
}

function answerMatches(value, answer) {
  const values = String(answer?.values || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const normalize = (item) => {
    const base = item.trim();
    return answer?.caseSensitive ? base : base.toLocaleLowerCase("ru-RU");
  };
  return values.some((item) => normalize(item) === normalize(value));
}

function clampPercent(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 50;
  return Math.max(0, Math.min(100, number));
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.max(min, Math.min(max, number));
}

function isInteractiveMapData(data) {
  return Boolean(data && Array.isArray(data.points) && (data.mapImage !== undefined || data.type === "map" || data.theme));
}

function isDigestData(data) {
  return Boolean(data && (Array.isArray(data.blocks) || data.content !== undefined || data.reward) && !Array.isArray(data.scenes) && !Array.isArray(data.points));
}

function createMapPlayState() {
  return { score: 0, completed: [], zoom: 1, panX: 0, panY: 0, cover: true, fullscreen: false, fullscreenMenuOpen: false, startedAt: Date.now(), visibleSignature: "" };
}

function createDigestPlayState() {
  return { cover: true, points: 0, solved: [], results: {}, rewardOpen: false };
}

function normalizeDigest(data = {}) {
  return {
    title: String(data?.title || t("digest")),
    description: String(data?.description || ""),
    coverImage: String(data?.coverImage || ""),
    backgroundImage: String(data?.backgroundImage || ""),
    backgroundOpacity: Number.isFinite(Number(data?.backgroundOpacity)) ? Math.max(0, Math.min(1, Number(data.backgroundOpacity))) : 0.72,
    theme: normalizeTheme(data?.theme),
    analytics: normalizeReaderAnalyticsSettings(data?.analytics),
    content: sanitizeRichTextHtml(data?.content || ""),
    blocks: Array.isArray(data?.blocks) ? data.blocks.map(normalizeDigestBlock) : [],
    reward: {
      requiredPoints: Math.max(0, Number(data?.reward?.requiredPoints ?? 0)),
      buttonLabel: String(data?.reward?.buttonLabel || t("open")),
      title: String(data?.reward?.title || t("ready")),
      content: sanitizeRichTextHtml(data?.reward?.content || ""),
    },
  };
}

function normalizeDigestBlock(block = {}) {
  const type = ["choice", "answer", "dice", "puzzle", "cipher", "qte", "dialogue"].includes(block.type) ? block.type : "choice";
  const options = Array.isArray(block.options) ? block.options : [];
  const cipherOptions = Array.isArray(block?.cipher?.options) ? block.cipher.options : [];
  return {
    id: String(block.id || `block-${Math.random().toString(36).slice(2, 8)}`),
    type,
    title: String(block.title || digestBlockLabel(type)),
    prompt: String(block.prompt || ""),
    image: String(block.image || ""),
    buttonLabel: String(block.buttonLabel || ""),
    successText: String(block.successText || t("ready")),
    failureText: String(block.failureText || t("answerRejected")),
    points: Math.max(0, Number(block.points || 0)),
    options: options.length ? options.map((option) => ({
      label: String(option?.label || t("continue")),
      points: Math.max(0, Number(option?.points ?? block.points ?? 0)),
      message: String(option?.message || ""),
    })) : [{ label: t("continue"), points: Math.max(0, Number(block.points || 0)), message: "" }],
    answerValues: Array.isArray(block.answerValues) ? block.answerValues.map(String) : parseMapList(block.answerValues || block.answer || ""),
    caseSensitive: Boolean(block.caseSensitive),
    dice: {
      sides: Math.max(2, Number(block?.dice?.sides || 6)),
      from: Math.max(1, Number(block?.dice?.from || 4)),
      to: Math.max(1, Number(block?.dice?.to || 6)),
    },
    puzzle: {
      size: Math.max(2, Math.min(6, Number(block?.puzzle?.size || Math.sqrt(Number(block?.puzzle?.pieces || 9)) || 3))),
    },
    cipher: {
      length: Math.max(1, Math.min(8, Number(block?.cipher?.length || 3))),
      options: cipherOptions.length ? cipherOptions.map((option) => ({ label: String(option?.label || ""), image: String(option?.image || "") })).filter((option) => option.label || option.image) : [{ label: "A", image: "" }, { label: "B", image: "" }, { label: "C", image: "" }],
      answer: Array.isArray(block?.cipher?.answer) ? block.cipher.answer.map(String) : parseMapList(block?.cipher?.answer || block.answer || "A,B,C"),
    },
    qte: {
      count: Math.max(1, Math.min(20, Number(block?.qte?.count || 4))),
    },
  };
}

function normalizeReaderAnalyticsSettings(settings = {}) {
  const fields = settings?.fields && typeof settings.fields === "object" ? settings.fields : {};
  const labels = settings?.labels && typeof settings.labels === "object" ? settings.labels : {};
  return {
    authRequired: Boolean(settings?.authRequired),
    fields: {
      name: fields.name !== false,
      email: Boolean(fields.email),
      organization: Boolean(fields.organization),
      extra: Boolean(fields.extra),
    },
    authTitle: String(settings?.authTitle || ""),
    authDescription: String(settings?.authDescription || ""),
    submitLabel: String(settings?.submitLabel || ""),
    labels: {
      name: String(labels.name || ""),
      email: String(labels.email || ""),
      organization: String(labels.organization || ""),
      extra: String(labels.extra || ""),
    },
    leaderboard: Boolean(settings?.leaderboard),
  };
}

function digestBlockLabel(type) {
  return {
    choice: readerLang === "en" ? "Choice" : "Выбор",
    answer: t("answer"),
    dice: t("roll"),
    puzzle: readerLang === "en" ? "Puzzle" : "Пазл",
    cipher: readerLang === "en" ? "Cipher" : "Шифр",
    qte: "QTE",
    dialogue: readerLang === "en" ? "Dialogue" : "Диалог",
  }[type] || t("continue");
}

function digestPuzzlePieces(block) {
  const size = Math.max(2, Number(block.puzzle?.size || 3));
  const total = size * size;
  return shuffleArray(Array.from({ length: total }, (_, index) => index))
    .map((current, index) => `<button class="digest-puzzle-piece" type="button" data-digest-puzzle-piece data-correct="${index}" data-current="${current}" style="background-image:url('${escapeAttr(block.image)}');background-size:${size * 100}% ${size * 100}%;background-position:${puzzlePosition(current, size)}">${current + 1}</button>`)
    .join("");
}

function digestCipherSlot(block, index) {
  const option = block.cipher.options[0] || { label: "A", image: "" };
  return `
    <div class="cipher-stepper">
      <button class="cipher-arrow" type="button" data-block="${escapeAttr(block.id)}" data-digest-cipher-step="-1">${readerLang === "en" ? "Up" : "▲"}</button>
      <button class="cipher-slot" type="button" data-digest-cipher-slot="${index}" data-index="0" tabindex="-1">${option.image ? `<img src="${escapeAttr(option.image)}" alt="" />` : `<b>${escapeHtml(option.label)}</b>`}</button>
      <button class="cipher-arrow" type="button" data-block="${escapeAttr(block.id)}" data-digest-cipher-step="1">${readerLang === "en" ? "Down" : "▼"}</button>
    </div>
  `;
}

function sanitizeRichTextHtml(value = "") {
  const template = document.createElement("template");
  template.innerHTML = String(value || "");
  template.content.querySelectorAll("script, style, iframe, object, embed").forEach((node) => node.remove());
  template.content.querySelectorAll("*").forEach((node) => {
    Array.from(node.attributes).forEach((attr) => {
      const name = attr.name.toLowerCase();
      if (name.startsWith("on")) node.removeAttribute(attr.name);
      if (["href", "src"].includes(name) && /^\s*javascript:/i.test(attr.value)) node.removeAttribute(attr.name);
    });
  });
  return template.innerHTML;
}

function cssEscape(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function renderDigestReader() {
  const stage = document.getElementById("readerStage");
  document.querySelector(".reader-shell")?.classList.remove("is-map-reader");
  document.body.classList.remove("is-reader-map-fullscreen");
  stage.classList.remove("map-reader-stage-shell", "is-map-fullscreen-stage");
  if (digestPlayState.cover) {
    renderDigestCover();
    return;
  }
  const { html, missing } = renderDigestContentWithBlocksReader();
  stage.style.setProperty("--digest-bg-image", digest.backgroundImage ? `url("${digest.backgroundImage.replace(/"/g, "%22")}")` : "none");
  stage.style.setProperty("--digest-bg-opacity", String(digest.backgroundOpacity ?? 0.72));
  stage.innerHTML = `
    <article class="digest-reader">
      <section class="digest-content">${html}</section>
      ${missing.length ? `<section class="digest-interactive-stack">${missing.map(renderDigestBlockReader).join("")}</section>` : ""}
      ${renderDigestRewardGateReader()}
    </article>
  `;
  enhanceClientImages(stage);
  stage.onclick = handleDigestReaderClick;
  renderAudioButton();
  syncBackgroundMusic();
}

function renderDigestCover() {
  const stage = document.getElementById("readerStage");
  const cover = digest.coverImage || digest.backgroundImage || "";
  stage.innerHTML = `
    <section class="cover-stage digest-cover-stage"${cover ? ` style="background-image:url('${escapeAttr(cover)}')"` : ""}>
      ${cover ? `<button class="media-zoom-button cover-zoom-button" type="button" data-media-zoom-src="${escapeAttr(cover)}" aria-label="${t("inspect")}" title="${t("inspect")}"><span class="icon">${iconSvg("search")}</span></button>` : ""}
      <div class="cover-overlay">
        <span>${t("digest")}</span>
        <h1>${escapeHtml(digest.title || t("digest"))}</h1>
        ${digest.description ? `<p>${escapeHtml(digest.description)}</p>` : ""}
        <button class="tool-button primary" type="button" data-digest-start>
          <span class="icon">${iconSvg("book")}</span>
          <span>${t("start")}</span>
        </button>
      </div>
    </section>
  `;
  bindMediaZoomButtons(stage);
  stage.querySelector("[data-digest-start]")?.addEventListener("click", startDigestFromCover);
  renderAudioButton();
  syncBackgroundMusic();
}

function startDigestFromCover() {
  if (participantRequired()) {
    showParticipantGate(startDigestFromCover);
    return;
  }
  digestPlayState.cover = false;
  renderDigestReader();
}

function renderDigestContentWithBlocksReader() {
  const template = document.createElement("template");
  template.innerHTML = sanitizeRichTextHtml(digest.content || "");
  const used = new Set();
  template.content.querySelectorAll("[data-digest-block-ref]").forEach((node) => {
    const block = digest.blocks.find((item) => item.id === node.dataset.digestBlockRef);
    if (!block) {
      node.remove();
      return;
    }
    used.add(block.id);
    const holder = document.createElement("div");
    holder.innerHTML = renderDigestBlockReader(block);
    node.replaceWith(holder.firstElementChild);
  });
  return { html: template.innerHTML, missing: digest.blocks.filter((block) => !used.has(block.id)) };
}

function renderDigestBlockReader(block) {
  const solved = digestPlayState.solved.includes(block.id);
  const result = digestPlayState.results[block.id];
  const status = solved ? `<div class="answer-status ${result?.ok ? "is-good" : "is-bad"}"><span>${escapeHtml(result?.message || block.successText || t("ready"))}</span></div>` : "";
  const points = block.points ? `<span class="digest-points">+${Number(block.points || 0)}</span>` : "";
  const shell = (inner) => `
    <section class="digest-block" data-block="${escapeAttr(block.id)}">
      <header><span>${escapeHtml(digestBlockLabel(block.type))}</span>${points}</header>
      <h2>${escapeHtml(block.title || digestBlockLabel(block.type))}</h2>
      ${block.prompt ? `<p>${escapeHtml(block.prompt)}</p>` : ""}
      ${inner}
    </section>
  `;
  if (block.type === "choice" || block.type === "dialogue") {
    return shell(`<div class="choice-panel">${block.options.map((option, index) => `<button class="choice-button" type="button" data-digest-choice="${escapeAttr(block.id)}" data-index="${index}" ${solved ? "disabled" : ""}><span>${escapeHtml(option.label)}</span><small>${Number(option.points ?? block.points ?? 0)}</small></button>`).join("")}</div>${status}`);
  }
  if (block.type === "answer") {
    return shell(`<div class="answer-form"><input type="text" data-digest-answer-input="${escapeAttr(block.id)}" ${solved ? "disabled" : ""} /><button class="answer-button" type="button" data-digest-answer="${escapeAttr(block.id)}" ${solved ? "disabled" : ""}>${escapeHtml(block.buttonLabel || t("answerButton"))}</button></div>${status}`);
  }
  if (block.type === "dice") {
    return shell(`<div class="dice-panel"><div class="dice-visual" data-digest-dice-visual="${escapeAttr(block.id)}">?</div><button class="dice-button" type="button" data-digest-dice="${escapeAttr(block.id)}" ${solved ? "disabled" : ""}>${escapeHtml(block.buttonLabel || t("roll"))}</button></div>${status}`);
  }
  if (block.type === "cipher") {
    return shell(`<div class="cipher-row">${Array.from({ length: block.cipher.length }, (_, index) => digestCipherSlot(block, index)).join("")}</div><button class="answer-button" type="button" data-digest-cipher="${escapeAttr(block.id)}" ${solved ? "disabled" : ""}>${escapeHtml(block.buttonLabel || t("confirm"))}</button>${status}`);
  }
  if (block.type === "puzzle") {
    return shell(`${block.image ? `<div class="digest-puzzle-board" data-size="${block.puzzle.size}">${digestPuzzlePieces(block)}</div>` : `<div class="empty compact">${t("imageMissing")}</div>`}<button class="answer-button" type="button" data-digest-puzzle="${escapeAttr(block.id)}" ${solved ? "disabled" : ""}>${escapeHtml(block.buttonLabel || t("puzzleStart"))}</button>${status}`);
  }
  if (block.type === "qte") {
    return shell(`<button class="answer-button" type="button" data-digest-qte="${escapeAttr(block.id)}" ${solved ? "disabled" : ""}>${escapeHtml(block.buttonLabel || t("qteStart"))}</button>${status}`);
  }
  return shell(status);
}

function renderDigestRewardGateReader() {
  const reward = digest.reward || {};
  const canOpen = Number(digestPlayState.points || 0) >= Number(reward.requiredPoints || 0);
  const missing = Math.max(0, Number(reward.requiredPoints || 0) - Number(digestPlayState.points || 0));
  return `
    <section class="digest-reward">
      <button class="answer-button" type="button" data-digest-reward ${canOpen ? "" : "disabled"}>
        ${escapeHtml(reward.buttonLabel || t("open"))}${canOpen ? "" : ` (${missing})`}
      </button>
      ${digestPlayState.rewardOpen ? `<div class="digest-reward-content"><h2>${escapeHtml(reward.title || t("ready"))}</h2>${sanitizeRichTextHtml(reward.content || "")}</div>` : ""}
      ${digestPlayState.rewardOpen && analyticsSettings().leaderboard ? `<button class="tool-button" type="button" data-leaderboard><span class="icon">${iconSvg("medal")}</span><span>${t("leaderboard")}</span></button>` : ""}
    </section>
  `;
}

function handleDigestReaderClick(event) {
  const choice = event.target.closest("[data-digest-choice]");
  if (choice) return completeDigestChoiceReader(choice.dataset.digestChoice, Number(choice.dataset.index));
  const answer = event.target.closest("[data-digest-answer]");
  if (answer) return checkDigestAnswerReader(answer.dataset.digestAnswer);
  const dice = event.target.closest("[data-digest-dice]");
  if (dice) return rollDigestDiceReader(dice.dataset.digestDice);
  const cipherStep = event.target.closest("[data-digest-cipher-step]");
  if (cipherStep) return stepDigestCipherReader(cipherStep);
  const cipher = event.target.closest("[data-digest-cipher]");
  if (cipher) return checkDigestCipherReader(cipher.dataset.digestCipher);
  const puzzlePiece = event.target.closest("[data-digest-puzzle-piece]");
  if (puzzlePiece) return selectDigestPuzzlePieceReader(puzzlePiece);
  const puzzle = event.target.closest("[data-digest-puzzle]");
  if (puzzle) return checkDigestPuzzleReader(puzzle.dataset.digestPuzzle);
  const qte = event.target.closest("[data-digest-qte]");
  if (qte) return completeDigestBlockReader(findDigestBlock(qte.dataset.digestQte), true, Number(findDigestBlock(qte.dataset.digestQte)?.points || 0), findDigestBlock(qte.dataset.digestQte)?.successText || t("qteSuccess"));
  const reward = event.target.closest("[data-digest-reward]");
  if (reward) {
    digestPlayState.rewardOpen = true;
    completeAnalyticsOnce(digestAnalyticsPayload());
    return renderDigestReader();
  }
  const leaderboard = event.target.closest("[data-leaderboard]");
  if (leaderboard) return showLeaderboard();
}

function completeDigestChoiceReader(blockId, index) {
  const block = findDigestBlock(blockId);
  const option = block?.options?.[index] || block?.options?.[0];
  if (!block || !option) return;
  completeDigestBlockReader(block, true, Number(option.points ?? block.points ?? 0), option.message || block.successText || t("ready"));
}

function checkDigestAnswerReader(blockId) {
  const block = findDigestBlock(blockId);
  if (!block) return;
  const input = document.getElementById("readerStage").querySelector(`[data-digest-answer-input="${cssEscape(blockId)}"]`);
  const value = String(input?.value || "").trim();
  const answers = block.answerValues.map((item) => block.caseSensitive ? item : item.toLocaleLowerCase("ru-RU"));
  const current = block.caseSensitive ? value : value.toLocaleLowerCase("ru-RU");
  const ok = answers.includes(current);
  completeDigestBlockReader(block, ok, ok ? Number(block.points || 0) : 0, ok ? block.successText : block.failureText);
}

function rollDigestDiceReader(blockId) {
  const block = findDigestBlock(blockId);
  if (!block) return;
  const result = Math.floor(Math.random() * Number(block.dice.sides || 6)) + 1;
  const ok = result >= Number(block.dice.from || 1) && result <= Number(block.dice.to || block.dice.sides || 6);
  completeDigestBlockReader(block, ok, ok ? Number(block.points || 0) : 0, `${ok ? block.successText : block.failureText} ${t("rolled")} ${result}.`);
}

function stepDigestCipherReader(button) {
  const block = findDigestBlock(button.dataset.block);
  const slot = button.parentElement.querySelector("[data-digest-cipher-slot]");
  if (!block || !slot) return;
  const next = (Number(slot.dataset.index || 0) + Number(button.dataset.digestCipherStep || 1) + block.cipher.options.length) % block.cipher.options.length;
  slot.dataset.index = String(next);
  const option = block.cipher.options[next] || block.cipher.options[0];
  slot.innerHTML = option.image ? `<img src="${escapeAttr(option.image)}" alt="" />` : `<b>${escapeHtml(option.label)}</b>`;
}

function checkDigestCipherReader(blockId) {
  const block = findDigestBlock(blockId);
  if (!block) return;
  const slots = Array.from(document.getElementById("readerStage").querySelectorAll(`[data-block="${cssEscape(blockId)}"] [data-digest-cipher-slot]`));
  const value = slots.map((slot) => block.cipher.options[Number(slot.dataset.index || 0)]?.label || "");
  const ok = value.join(",") === block.cipher.answer.join(",");
  completeDigestBlockReader(block, ok, ok ? Number(block.points || 0) : 0, ok ? block.successText : block.failureText);
}

function selectDigestPuzzlePieceReader(piece) {
  const board = piece.closest(".digest-puzzle-board");
  const selected = board?.querySelector(".is-selected");
  if (!board) return;
  if (!selected) {
    piece.classList.add("is-selected");
    return;
  }
  if (selected === piece) {
    piece.classList.remove("is-selected");
    return;
  }
  const current = selected.dataset.current;
  selected.dataset.current = piece.dataset.current;
  piece.dataset.current = current;
  selected.style.backgroundPosition = puzzlePosition(Number(selected.dataset.current), Number(board.dataset.size));
  piece.style.backgroundPosition = puzzlePosition(Number(piece.dataset.current), Number(board.dataset.size));
  selected.classList.remove("is-selected");
}

function checkDigestPuzzleReader(blockId) {
  const block = findDigestBlock(blockId);
  const board = document.getElementById("readerStage").querySelector(`[data-block="${cssEscape(blockId)}"] .digest-puzzle-board`);
  const ok = Array.from(board?.querySelectorAll("[data-digest-puzzle-piece]") || []).every((piece) => piece.dataset.current === piece.dataset.correct);
  completeDigestBlockReader(block, ok, ok ? Number(block?.points || 0) : 0, ok ? block?.successText : block?.failureText);
}

function completeDigestBlockReader(block, ok, points, message) {
  if (!block || digestPlayState.solved.includes(block.id)) return;
  digestPlayState.solved.push(block.id);
  digestPlayState.points += Math.max(0, Number(points || 0));
  digestPlayState.results[block.id] = { ok, message: message || (ok ? block.successText : block.failureText) };
  if (digestPlayState.solved.length >= digest.blocks.length && Number(digest.reward?.requiredPoints || 0) <= 0) {
    completeAnalyticsOnce(digestAnalyticsPayload());
  }
  renderDigestReader();
}

function digestAnalyticsPayload() {
  return {
    score: Number(digestPlayState.points || 0),
    maxScore: maxDigestScore(),
    scores: { points: Number(digestPlayState.points || 0) },
  };
}

function maxDigestScore() {
  return (digest?.blocks || []).reduce((sum, block) => {
    if (Array.isArray(block.options) && block.options.length) {
      return sum + Math.max(0, ...block.options.map((option) => Number(option.points ?? block.points ?? 0)));
    }
    return sum + Math.max(0, Number(block.points || 0));
  }, 0);
}

function findDigestBlock(id) {
  return digest?.blocks?.find((block) => block.id === id);
}

function normalizeInteractiveMap(data = {}) {
  const rawPoints = Array.isArray(data?.points) ? data.points.map(createMapPoint) : [];
  if (!rawPoints.some((point) => Number(point.unlockScore || 0) > 0) && (data?.finalTitle || data?.finalText || data?.finalImage || data?.final)) {
    rawPoints.push(createMapPoint({
      id: "bonus-point",
      title: data?.finalTitle || data?.final?.title || "Финальная награда",
      kind: data?.finalImage || data?.final?.image ? "image" : "pin",
      icon: "package",
      pointImage: data?.finalImage || data?.final?.image || "",
      activity: "popup",
      x: 88,
      y: 18,
      scale: 1.15,
      text: data?.finalText || data?.final?.text || "Вы открыли финальную точку карты.",
      points: 0,
      unlockScore: Math.max(0, Number(data?.requiredPoints ?? 3)),
      color: "#ad7b18",
      glowColor: "#ad7b18",
    }));
  }
  return {
    title: String(data?.title || "Интерактивная карта"),
    description: String(data?.description || ""),
    mapImage: String(data?.mapImage || data?.coverImage || ""),
    coverImage: String(data?.coverImage || ""),
    startButtonLabel: String(data?.startButtonLabel || t("start")),
    theme: normalizeTheme(data?.theme),
    analytics: normalizeReaderAnalyticsSettings(data?.analytics),
    points: rawPoints,
  };
}

function createMapPoint(data = {}) {
  const title = String(data?.title || "Точка");
  const kind = data?.kind === "image" ? "image" : "pin";
  const rawActivity = data?.activity === "dialogue" ? "choice" : data?.activity;
  return {
    id: slugify(data?.id || title) || `point-${Math.random().toString(36).slice(2, 8)}`,
    title,
    kind,
    activity: ["popup", "puzzle", "cipher", "answer", "choice", "dice"].includes(rawActivity) ? rawActivity : "popup",
    x: clampPercent(data?.x ?? 50),
    y: clampPercent(data?.y ?? 50),
    scale: kind === "image" ? 1 : Math.max(0.3, Math.min(3, Number(data?.scale || 1))),
    icon: mapIconName(data?.icon || "map"),
    size: Math.max(20, Math.min(kind === "image" ? 320 : 140, Number(data?.size || (kind === "image" ? 82 : 34)))),
    color: validColor(data?.color, "#0f766e"),
    glowColor: validColor(data?.glowColor || data?.color, "#0f766e"),
    unlockScore: Math.max(0, Number(data?.unlockScore || 0)),
    pulseEnabled: Boolean(data?.pulseEnabled),
    pulseDisableCompleted: data?.pulseDisableCompleted !== false,
    pulseColor: validColor(data?.pulseColor || data?.glowColor || data?.color, "#0f766e"),
    pulseFrequency: Math.max(1.2, Math.min(8, Number(data?.pulseFrequency || 3.2))),
    pulseSize: Math.max(1, Math.min(3, Number(data?.pulseSize || 1.6))),
    appearanceMode: data?.appearanceMode === "timed" ? "timed" : "always",
    spawnInterval: Math.max(3, Math.min(3600, Number(data?.spawnInterval || 20))),
    spawnDuration: Math.max(2, Math.min(3600, Number(data?.spawnDuration || 8))),
    pointImage: String(data?.pointImage || data?.image || ""),
    contentImage: String(data?.contentImage || ""),
    puzzleImage: String(data?.puzzleImage || ""),
    text: String(data?.text || ""),
    points: Math.max(0, Number(data?.points ?? 1)),
    dimWhenCompleted: data?.dimWhenCompleted !== false,
    buttonLabel: String(data?.buttonLabel || defaultMapButtonLabel(rawActivity)),
    successText: String(data?.successText || t("pointSuccess")),
    failureText: String(data?.failureText || t("pointFailure")),
    answer: String(data?.answer || ""),
    cipherLength: Math.max(1, Math.min(8, Number(data?.cipherLength || parseMapList(data?.answer || "").length || 3))),
    cipherOptions: String(data?.cipherOptions || "A, B, C, D"),
    choiceOptions: normalizeMapChoiceOptions(data?.choiceOptions || data?.dialogueLines),
    correctChoice: Math.max(0, Math.min(3, Number(data?.correctChoice || 0))),
    diceSides: Math.max(2, Math.min(100, Number(data?.diceSides || 6))),
    diceFrom: Math.max(1, Number(data?.diceFrom || 4)),
    diceTo: Math.max(1, Number(data?.diceTo || 6)),
    puzzlePieces: Math.max(4, Math.min(36, Number(data?.puzzlePieces || 9))),
    puzzleShowPreview: data?.puzzleShowPreview !== false,
  };
}

function renderMapReader() {
  const stage = document.getElementById("readerStage");
  document.querySelector(".reader-shell")?.classList.add("is-map-reader");
  stage.classList.add("map-reader-stage-shell");
  ensureReaderMapResizeListener();
  scheduleMapReaderTick();
  if (mapPlayState.cover) {
    renderMapCover();
    return;
  }
  const maxUnlock = Math.max(0, ...interactiveMap.points.map((point) => Number(point.unlockScore || 0)));
  const maxScore = Math.max(maxUnlock, interactiveMap.points.reduce((sum, point) => sum + Math.max(0, Number(point.points || 0)), 0));
  const zoom = clampNumber(Number(mapPlayState.zoom || 1), 1, 2.8);
  const panX = Number(mapPlayState.panX || 0);
  const panY = Number(mapPlayState.panY || 0);
  const isFullscreen = Boolean(mapPlayState.fullscreen);
  const isFullscreenMenuOpen = Boolean(mapPlayState.fullscreenMenuOpen);
  const scoreValue = maxScore ? `${mapPlayState.score} / ${maxScore}` : String(mapPlayState.score);
  const scoreHtml = `<span class="map-score-label">${t("pointsLabel")}</span><span class="map-score-star" aria-hidden="true">★</span><span>${scoreValue}</span>`;
  const audioVolume = getMasterAudioVolume();
  document.body.classList.toggle("is-reader-map-fullscreen", isFullscreen);
  stage.classList.toggle("is-map-fullscreen-stage", isFullscreen);
  stage.style.setProperty("--imap-image", interactiveMap.mapImage ? `url("${interactiveMap.mapImage.replace(/"/g, "%22")}")` : "none");
  stage.style.setProperty("--imap-backdrop-image", mapBackdropCss(interactiveMap.theme));
  stage.style.setProperty("--quest-font", fontStack(interactiveMap.theme?.font));
  stage.innerHTML = `
    <section class="imap-reader-stage reader-map-stage${isFullscreen ? " is-map-fullscreen" : ""}">
      <div class="imap-reader-info">
        <span>${t("map")}</span>
        <h1>${escapeHtml(interactiveMap.title || t("map"))}</h1>
        ${interactiveMap.description ? `<p>${escapeHtml(interactiveMap.description)}</p>` : ""}
      </div>
      <div class="reader-map-toolbar">
        <strong class="map-score-pill">${scoreHtml}</strong>
        ${analyticsSettings().leaderboard ? `<button class="small-button reader-map-leaderboard-button" type="button" data-leaderboard><span class="icon">${iconSvg("medal")}</span><span>${t("leaderboard")}</span></button>` : ""}
        <label class="map-preview-zoom">
          <span>${t("scale")}</span>
          <input data-reader-map-zoom type="range" min="1" max="2.8" step="0.1" value="${zoom}" />
        </label>
        <button class="small-button reader-map-fullscreen-button" type="button" data-reader-map-fullscreen>
          <span class="icon">${iconSvg("scan")}</span>
          <span>${t("mapFullscreen")}</span>
        </button>
      </div>
      <div class="imap-reader-board" data-reader-map-board style="--imap-zoom:${zoom};--imap-pan-x:${panX}px;--imap-pan-y:${panY}px">
        <div class="reader-map-floating-shell${isFullscreenMenuOpen ? " is-open" : ""}" aria-label="${t("map")}">
          <button class="small-button reader-map-menu-toggle" type="button" data-reader-map-menu-toggle aria-expanded="${isFullscreenMenuOpen ? "true" : "false"}">
            <span class="icon">${iconSvg("menu")}</span>
            <span>${t("mapMenu")}</span>
          </button>
          <div class="reader-map-floating-controls">
            <button class="icon-button reader-map-menu-close" type="button" data-reader-map-menu-toggle aria-label="${t("mapHideMenu")}" title="${t("mapHideMenu")}">
              <span class="icon">${iconSvg("x")}</span>
            </button>
            <div class="reader-map-control-row">
              <span>${t("pointsLabel")}</span>
              <strong class="map-score-pill"><span class="map-score-star" aria-hidden="true">★</span><span>${scoreValue}</span></strong>
            </div>
            ${analyticsSettings().leaderboard ? `<button class="small-button reader-map-leaderboard-button" type="button" data-leaderboard><span class="icon">${iconSvg("medal")}</span><span>${t("leaderboard")}</span></button>` : ""}
            <label class="reader-map-control-row reader-map-floating-zoom">
              <span>${t("scale")}</span>
              <input data-reader-map-zoom type="range" min="1" max="2.8" step="0.1" value="${zoom}" />
            </label>
            <div class="reader-map-control-row reader-map-volume-row">
              <span>${t("volumeLevel")}</span>
              <div>
                <button class="icon-button reader-map-audio-toggle" type="button" data-reader-map-audio-toggle title="${t("music")}" aria-label="${t("music")}">
                  <span class="icon">${iconSvg("volume")}</span>
                </button>
                <input data-reader-map-volume type="range" min="0" max="1" step="0.05" value="${audioVolume}" aria-label="${t("volumeLevel")}" />
              </div>
            </div>
            <button class="small-button reader-map-fullscreen-exit" type="button" data-reader-map-fullscreen-exit title="${t("mapExitFullscreen")}" aria-label="${t("mapExitFullscreen")}">
              <span class="icon">${iconSvg("scan")}</span>
              <span>${t("mapExitFullscreen")}</span>
            </button>
          </div>
        </div>
        <div class="imap-map-layer">
          ${mapOverlayHtml(interactiveMap.theme)}
          ${interactiveMap.points.map(mapPointHtml).join("")}
        </div>
      </div>
    </section>
  `;
  mapPlayState.visibleSignature = mapVisiblePointsSignature();
  stage.querySelectorAll("[data-reader-map-zoom]").forEach((input) => input.addEventListener("input", (event) => {
    mapPlayState.zoom = clampNumber(Number(event.target.value || 1), 1, 2.8);
    if (mapPlayState.zoom <= 1.05) {
      mapPlayState.zoom = 1;
      mapPlayState.panX = 0;
      mapPlayState.panY = 0;
      event.target.value = "1";
    }
    updateReaderMapZoomView(stage);
  }));
  stage.querySelector("[data-reader-map-fullscreen]")?.addEventListener("click", () => {
    mapPlayState.fullscreen = true;
    mapPlayState.fullscreenMenuOpen = false;
    renderMapReader();
  });
  stage.querySelector("[data-reader-map-fullscreen-exit]")?.addEventListener("click", () => {
    mapPlayState.fullscreen = false;
    mapPlayState.fullscreenMenuOpen = false;
    renderMapReader();
  });
  stage.querySelectorAll("[data-reader-map-menu-toggle]").forEach((button) => button.addEventListener("click", () => {
    mapPlayState.fullscreenMenuOpen = !mapPlayState.fullscreenMenuOpen;
    renderMapReader();
  }));
  stage.querySelectorAll("[data-reader-map-audio-toggle]").forEach((button) => button.addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    syncBackgroundMusic();
    renderAudioButton();
  }));
  stage.querySelectorAll("[data-reader-map-volume]").forEach((input) => input.addEventListener("input", (event) => {
    readerVolume = Math.max(0, Math.min(1, Number(event.target.value)));
    try {
      localStorage.setItem(READER_VOLUME_KEY, String(readerVolume));
    } catch (error) {}
    syncBackgroundMusic();
    renderAudioButton();
  }));
  stage.querySelectorAll("[data-leaderboard]").forEach((button) => button.addEventListener("click", showLeaderboard));
  attachReaderMapPan(stage);
  renderAudioButton();
  syncBackgroundMusic();
  requestAnimationFrame(() => updateReaderMapZoomView(stage));
}

function renderMapCover() {
  const stage = document.getElementById("readerStage");
  document.body.classList.remove("is-reader-map-fullscreen");
  stage.classList.remove("is-map-fullscreen-stage");
  const cover = interactiveMap.coverImage || interactiveMap.mapImage || interactiveMap.theme?.backgroundImage || "";
  stage.innerHTML = `
    <section class="cover-stage imap-cover-stage"${cover ? ` style="background-image:url('${escapeAttr(cover)}')"` : ""}>
      ${cover ? `<button class="media-zoom-button cover-zoom-button" type="button" data-media-zoom-src="${escapeAttr(cover)}" aria-label="${t("inspect")}" title="${t("inspect")}"><span class="icon">${iconSvg("search")}</span></button>` : ""}
      <div class="cover-overlay">
        <span>${t("map")}</span>
        <h1>${escapeHtml(interactiveMap.title || t("map"))}</h1>
        ${interactiveMap.description ? `<p>${escapeHtml(interactiveMap.description)}</p>` : ""}
        <button class="tool-button primary" type="button" data-reader-map-start>
          <span class="icon">${iconSvg("map")}</span>
          <span>${escapeHtml(interactiveMap.startButtonLabel || t("start"))}</span>
        </button>
      </div>
    </section>
  `;
  bindMediaZoomButtons(stage);
  stage.querySelector("[data-reader-map-start]")?.addEventListener("click", startMapFromCover);
  renderAudioButton();
  syncBackgroundMusic();
}

function startMapFromCover() {
  if (participantRequired()) {
    showParticipantGate(startMapFromCover);
    return;
  }
  mapPlayState.cover = false;
  mapPlayState.fullscreen = false;
  mapPlayState.startedAt = Date.now();
  mapPlayState.zoom = 1;
  mapPlayState.panX = 0;
  mapPlayState.panY = 0;
  renderMapReader();
}

function mapPointHtml(point) {
  if (!isMapPointVisible(point)) return "";
  const completed = mapPlayState.completed.includes(point.id);
  const dimCompleted = completed && point.dimWhenCompleted !== false;
  const locked = !isMapPointUnlocked(point);
  const pulseEnabled = point.pulseEnabled && !(completed && point.pulseDisableCompleted !== false);
  const className = ["imap-point", `is-${point.kind || "pin"}`, dimCompleted ? "is-completed" : completed ? "is-completed-soft" : "", locked ? "is-locked" : "", pulseEnabled ? "has-pulse" : "", point.appearanceMode === "timed" ? "is-timed-event" : ""].filter(Boolean).join(" ");
  const scale = point.kind === "image" ? 1 : Number(point.scale || 1);
  const content = point.kind === "image" && point.pointImage
    ? `<img src="${escapeAttr(point.pointImage)}" alt="" draggable="false" />`
    : `<span class="icon">${iconSvg(mapIconName(point.icon))}</span>`;
  return `
    <button class="${className}" type="button" data-reader-map-point="${escapeAttr(point.id)}" ${locked ? `data-reader-map-locked="${Number(point.unlockScore || 0)}"` : ""} style="left:${clampPercent(point.x)}%;top:${clampPercent(point.y)}%;--imap-point-scale:${scale};--imap-point-size:${Number(point.size || 34)}px;--imap-point-color:${escapeAttr(validColor(point.color, "#0f766e"))};--imap-point-glow:${escapeAttr(validColor(point.glowColor, point.color || "#0f766e"))};--imap-pulse-color:${escapeAttr(validColor(point.pulseColor, point.glowColor || point.color || "#0f766e"))};--imap-pulse-size:${Number(point.pulseSize || 1.6)};--imap-pulse-duration:${Number(point.pulseFrequency || 3.2)}s" title="${escapeAttr(point.title)}">
      ${content}
    </button>
  `;
}

function attachReaderMapPan(stage) {
  stage.querySelectorAll("[data-reader-map-point]").forEach((button) => {
    button.addEventListener("click", () => {
      const point = interactiveMap.points.find((item) => item.id === button.dataset.readerMapPoint);
      playSound("clickSound");
      if (!point) return;
      if (!isMapPointUnlocked(point)) {
        showReaderMapModal(`
          <div class="found-card">
            <button class="icon-button modal-close map-modal-close" type="button" data-reader-map-close aria-label="${t("close")}"><span class="icon">${iconSvg("x")}</span></button>
            <h2>${t("pointLocked")}</h2>
            <p>${t("needPoints")}: ${Number(point.unlockScore || 0)}</p>
            <button class="answer-button" type="button" data-reader-map-close><span>${t("close")}</span></button>
          </div>
        `);
        return;
      }
      showReaderMapActivity(point);
    });
  });
  let drag = null;
  const board = stage.querySelector("[data-reader-map-board]");
  board?.addEventListener("dragstart", (event) => {
    if (event.target.closest?.(".imap-point img")) event.preventDefault();
  });
  board?.addEventListener("wheel", (event) => {
    if (event.target.closest(".found-popup")) return;
    event.preventDefault();
    const direction = event.deltaY > 0 ? -1 : 1;
    const nextZoom = clampNumber(Number(mapPlayState.zoom || 1) + direction * 0.12, 1, 2.8);
    mapPlayState.zoom = nextZoom <= 1.04 ? 1 : Number(nextZoom.toFixed(2));
    if (mapPlayState.zoom === 1) {
      mapPlayState.panX = 0;
      mapPlayState.panY = 0;
    }
    updateReaderMapZoomView(stage);
  }, { passive: false });
  board?.addEventListener("pointerdown", (event) => {
    if (Number(mapPlayState.zoom || 1) <= 1 || event.target.closest("button, input, select, textarea, a")) return;
    drag = { x: event.clientX, y: event.clientY, panX: mapPlayState.panX || 0, panY: mapPlayState.panY || 0 };
    board.setPointerCapture?.(event.pointerId);
    board.classList.add("is-panning");
  });
  board?.addEventListener("pointermove", (event) => {
    if (!drag) return;
    mapPlayState.panX = drag.panX + event.clientX - drag.x;
    mapPlayState.panY = drag.panY + event.clientY - drag.y;
    board.style.setProperty("--imap-pan-x", `${mapPlayState.panX}px`);
    board.style.setProperty("--imap-pan-y", `${mapPlayState.panY}px`);
  });
  const stop = () => {
    drag = null;
    board?.classList.remove("is-panning");
  };
  board?.addEventListener("pointerup", stop);
  board?.addEventListener("pointercancel", stop);
}

function updateReaderMapZoomView(stage = document.getElementById("readerStage")) {
  const board = stage?.querySelector("[data-reader-map-board]");
  if (!board) return;
  updateReaderMapViewportScale(stage);
  board.style.setProperty("--imap-zoom", String(mapPlayState.zoom || 1));
  board.style.setProperty("--imap-pan-x", `${Number(mapPlayState.panX || 0)}px`);
  board.style.setProperty("--imap-pan-y", `${Number(mapPlayState.panY || 0)}px`);
  stage.querySelectorAll("[data-reader-map-zoom]").forEach((slider) => {
    slider.value = String(mapPlayState.zoom || 1);
  });
}

function updateReaderMapViewportScale(stage = document.getElementById("readerStage")) {
  const board = stage?.querySelector("[data-reader-map-board]");
  const layer = board?.querySelector(".imap-map-layer");
  if (!board || !layer) return;
  if (!mapPlayState.fullscreen) {
    board.style.setProperty("--imap-board-scale", "1");
    return;
  }
  const layerWidth = Number(layer.offsetWidth || board.clientWidth || 0);
  const referenceWidth = Math.max(320, Math.min(window.innerWidth - 24, 1180));
  const scale = clampNumber(layerWidth / referenceWidth, 0.68, 1.55);
  board.style.setProperty("--imap-board-scale", scale.toFixed(3));
}

function ensureReaderMapResizeListener() {
  if (readerMapResizeBound) return;
  readerMapResizeBound = true;
  window.addEventListener("resize", () => {
    if (contentKind !== "map" || !mapPlayState?.fullscreen) return;
    requestAnimationFrame(() => updateReaderMapZoomView());
  });
}

function showReaderMapActivity(point) {
  const completed = mapPlayState.completed.includes(point.id);
  const activityImage = point.activity === "puzzle" ? "" : point.contentImage;
  showReaderMapModal(`
    <form class="found-card imap-activity-card" data-reader-map-activity="${escapeAttr(point.id)}">
      <button class="icon-button modal-close map-modal-close" type="button" data-reader-map-close aria-label="${t("close")}"><span class="icon">${iconSvg("x")}</span></button>
      ${activityImage ? `<img class="imap-activity-image" src="${escapeAttr(activityImage)}" alt="" />` : ""}
      <h2>${escapeHtml(point.title || t("map"))}</h2>
      ${point.text ? formatMapRichText(point.text) : ""}
      ${mapActivityControls(point, completed)}
    </form>
  `);
}

function mapActivityControls(point, completed) {
  if (completed) return `<div class="answer-status is-good"><span>${t("pointCompleted")}</span></div><button class="answer-button" type="button" data-reader-map-close><span>${t("close")}</span></button>`;
  const buttonLabel = escapeHtml(point.buttonLabel || defaultMapButtonLabel(point.activity));
  if (point.activity === "answer") {
    return `<label class="imap-answer-field"><span>${t("answer")}</span><input data-reader-map-answer type="text" autocomplete="off" /></label><button class="answer-button" type="submit"><span>${buttonLabel}</span></button>`;
  }
  if (point.activity === "choice") {
    return `<div class="imap-choice-grid">${normalizeMapChoiceOptions(point.choiceOptions).map((option, index) => `<button class="choice-button neutral" type="button" data-reader-map-choice="${index}"><span><b>${escapeHtml(option)}</b></span></button>`).join("")}</div>`;
  }
  if (point.activity === "cipher") {
    const options = parseMapList(point.cipherOptions || "A, B, C, D");
    if (!options.length) options.push("A");
    const slots = Array.from({ length: Number(point.cipherLength || parseMapList(point.answer || "A, B, C").length || 3) });
    return `<div class="cipher-row imap-cipher-row">${slots.map((_, index) => mapCipherSlotHtml(index, options[0] || "A")).join("")}</div><button class="answer-button" type="submit"><span>${buttonLabel}</span></button>`;
  }
  if (point.activity === "dice") {
    return `<button class="answer-button" type="button" data-reader-map-roll><span>${buttonLabel}</span></button><div class="dice-result" data-reader-map-result hidden></div><button class="answer-button result-button" type="button" data-reader-map-roll-next hidden><span>${t("next")}</span></button>`;
  }
  if (point.activity === "puzzle") {
    const size = Math.ceil(Math.sqrt(Math.max(4, Math.min(36, Number(point.puzzlePieces || 9)))));
    const image = point.puzzleImage;
    return `${point.puzzleShowPreview !== false && image ? `<img class="imap-puzzle-reference" src="${escapeAttr(image)}" alt="" />` : ""}<div class="imap-mini-puzzle is-playable" data-reader-map-puzzle-board style="--imap-puzzle-size:${size};${image ? `--puzzle-image:url('${escapeAttr(image)}')` : ""}">${mapPuzzlePieces(point)}</div><button class="answer-button" type="button" data-reader-map-puzzle-check><span>${buttonLabel}</span></button><div class="answer-status" data-reader-map-puzzle-status hidden></div>`;
  }
  if (point.activity === "popup") {
    return `<button class="answer-button" type="button" data-reader-map-close data-reader-map-read-complete><span>${t("close")}</span></button>`;
  }
  return `<button class="answer-button" type="submit"><span>${buttonLabel}</span></button>`;
}

function mapPuzzlePieces(point) {
  const size = Math.ceil(Math.sqrt(Math.max(4, Math.min(36, Number(point.puzzlePieces || 9)))));
  const total = size * size;
  return shuffledPuzzleOrder(total)
    .map((current, index) => `<button class="imap-puzzle-tile" type="button" data-reader-map-puzzle-tile data-current="${current}" data-correct="${index}" style="background-position:${puzzlePosition(current, size)}" aria-label="Fragment ${index + 1}"></button>`)
    .join("");
}

function mapCipherSlotHtml(index, option) {
  return `
    <div class="cipher-stepper">
      <button class="cipher-arrow" type="button" data-reader-map-cipher-step="-1" data-cipher-slot-index="${index}" aria-label="${t("previous")}">▲</button>
      <button class="cipher-slot" type="button" data-reader-map-cipher data-cipher-index="0" data-cipher-value="${escapeAttr(option)}" tabindex="-1">
        <span>${escapeHtml(option)}</span>
      </button>
      <button class="cipher-arrow" type="button" data-reader-map-cipher-step="1" data-cipher-slot-index="${index}" aria-label="${t("nextValue")}">▼</button>
    </div>
  `;
}

function shuffledPuzzleOrder(total) {
  const order = shuffleArray(Array.from({ length: total }, (_, index) => index));
  if (order.length > 1 && order.every((item, index) => item === index)) {
    [order[0], order[1]] = [order[1], order[0]];
  }
  return order;
}

function showReaderMapModal(innerHtml) {
  const stage = document.getElementById("readerStage");
  stage.querySelector(".found-popup")?.remove();
  stage.insertAdjacentHTML("beforeend", `<div class="found-popup is-visible">${innerHtml}</div>`);
  const modal = stage.querySelector(".found-popup");
  enhanceClientImages(modal);
  modal.querySelectorAll("[data-reader-map-close]").forEach((button) => button.addEventListener("click", () => {
    const form = button.closest("[data-reader-map-activity]");
    const point = interactiveMap.points.find((item) => item.id === form?.dataset.readerMapActivity);
    if (point?.activity === "popup" && !mapPlayState.completed.includes(point.id)) {
      completeReaderMapPoint(point, true, { silent: true });
      return;
    }
    modal.remove();
  }));
  modal.querySelector("[data-reader-map-activity]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const point = interactiveMap.points.find((item) => item.id === event.currentTarget.dataset.readerMapActivity);
    if (point) resolveReaderMapActivity(point, event.currentTarget);
  });
  modal.querySelectorAll("[data-reader-map-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = button.closest("[data-reader-map-activity]");
      const point = interactiveMap.points.find((item) => item.id === form?.dataset.readerMapActivity);
      if (point) completeReaderMapPoint(point, Number(button.dataset.readerMapChoice) === Number(point.correctChoice || 0));
    });
  });
  modal.querySelectorAll("[data-reader-map-cipher-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = button.closest("[data-reader-map-activity]");
      const point = interactiveMap.points.find((item) => item.id === form?.dataset.readerMapActivity);
      const options = parseMapList(point?.cipherOptions || "A, B, C, D");
      if (!options.length) options.push("A");
      const slot = button.closest(".cipher-stepper")?.querySelector("[data-reader-map-cipher]");
      if (!slot || !options.length) return;
      const direction = Number(button.getAttribute("data-reader-map-cipher-step") || 1);
      const next = (Number(slot.dataset.cipherIndex || 0) + direction + options.length) % options.length;
      updateReaderMapCipherSlot(slot, options, next);
    });
  });
  bindReaderMapPuzzleModal(modal);
  modal.querySelector("[data-reader-map-roll]")?.addEventListener("click", (event) => {
    const form = event.currentTarget.closest("[data-reader-map-activity]");
    const point = interactiveMap.points.find((item) => item.id === form?.dataset.readerMapActivity);
    if (!point) return;
    const sides = Math.max(2, Number(point.diceSides || 6));
    const roll = Math.floor(Math.random() * sides) + 1;
    const ok = roll >= Number(point.diceFrom || 1) && roll <= Number(point.diceTo || sides);
    const result = form.querySelector("[data-reader-map-result]");
    if (result) {
      result.hidden = false;
      result.textContent = `${t("rolled")} ${roll}`;
    }
    event.currentTarget.hidden = true;
    const next = form.querySelector("[data-reader-map-roll-next]");
    if (next) {
      next.hidden = false;
      next.onclick = () => completeReaderMapPoint(point, ok);
    }
  });
}

function updateReaderMapCipherSlot(slot, options, index) {
  const option = options[index] || options[0] || "";
  slot.dataset.cipherIndex = String(index);
  slot.dataset.cipherValue = option;
  slot.innerHTML = `<span>${escapeHtml(option)}</span>`;
}

function bindReaderMapPuzzleModal(modal) {
  const board = modal.querySelector("[data-reader-map-puzzle-board]");
  if (!board) return;
  let selected = null;
  board.querySelectorAll("[data-reader-map-puzzle-tile]").forEach((tile) => {
    tile.addEventListener("click", () => {
      if (tile.classList.contains("is-fixed")) return;
      if (!selected) {
        selected = tile;
        tile.classList.add("is-selected");
        return;
      }
      if (selected === tile) {
        selected.classList.remove("is-selected");
        selected = null;
        return;
      }
      swapReaderMapPuzzleTiles(selected, tile);
      selected.classList.remove("is-selected");
      selected = null;
    });
  });
  modal.querySelector("[data-reader-map-puzzle-check]")?.addEventListener("click", () => {
    const solved = Array.from(board.querySelectorAll("[data-reader-map-puzzle-tile]")).every((item) => item.dataset.current === item.dataset.correct);
    if (solved) board.querySelectorAll("[data-reader-map-puzzle-tile]").forEach((item) => item.classList.add("is-fixed"));
    const form = board.closest("[data-reader-map-activity]");
    const point = interactiveMap.points.find((item) => item.id === form?.dataset.readerMapActivity);
    if (point) completeReaderMapPoint(point, solved);
  });
}

function swapReaderMapPuzzleTiles(first, second) {
  const current = first.dataset.current;
  const position = first.style.backgroundPosition;
  first.dataset.current = second.dataset.current;
  first.style.backgroundPosition = second.style.backgroundPosition;
  second.dataset.current = current;
  second.style.backgroundPosition = position;
}

function resolveReaderMapActivity(point, form) {
  let ok = true;
  if (point.activity === "answer") {
    ok = parseMapList(point.answer).some((answer) => answer.toLocaleLowerCase("ru-RU") === String(form.querySelector("[data-reader-map-answer]")?.value || "").trim().toLocaleLowerCase("ru-RU"));
  }
  if (point.activity === "cipher") {
    const value = Array.from(form.querySelectorAll("[data-reader-map-cipher]")).map((slot) => slot.dataset.cipherValue || "");
    const answer = parseMapList(point.answer).slice(0, Number(point.cipherLength || value.length));
    ok = answer.length === value.length && answer.every((item, index) => item === value[index]);
  }
  completeReaderMapPoint(point, ok);
}

function completeReaderMapPoint(point, ok, options = {}) {
  const silent = Boolean(options.silent);
  if (!silent) playSound(ok ? "successSound" : "failSound");
  if (ok && !mapPlayState.completed.includes(point.id)) {
    mapPlayState.completed.push(point.id);
    mapPlayState.score += Math.max(0, Number(point.points || 0));
  }
  saveReaderMapProgress();
  recordAnalyticsProgress(currentAnalyticsPayload());
  maybeCompleteMapAnalytics();
  renderMapReader();
  if (silent) return;
  showReaderMapModal(`
    <div class="found-card">
      <button class="icon-button modal-close map-modal-close" type="button" data-reader-map-close aria-label="${t("close")}"><span class="icon">${iconSvg("x")}</span></button>
      <h2>${ok ? t("qteSuccess") : t("qteFailure")}</h2>
      ${formatMapRichText(ok ? point.successText || t("pointSuccess") : point.failureText || t("pointFailure"))}
      <button class="answer-button" type="button" data-reader-map-close><span>${t("close")}</span></button>
    </div>
  `);
}

function maybeCompleteMapAnalytics() {
  const maxScore = maxMapScore();
  if (maxScore > 0 && Number(mapPlayState.score || 0) >= maxScore) {
    completeAnalyticsOnce({ score: mapPlayState.score, maxScore, scores: { points: mapPlayState.score } });
  }
}

function maxMapScore() {
  const points = Array.isArray(interactiveMap?.points) ? interactiveMap.points : [];
  const unlock = Math.max(0, ...points.map((point) => Number(point.unlockScore || 0)));
  const total = points.reduce((sum, point) => sum + Math.max(0, Number(point.points || 0)), 0);
  return Math.max(unlock, total);
}

function isMapPointUnlocked(point) {
  return Number(mapPlayState.score || 0) >= Number(point?.unlockScore || 0);
}

function isMapPointVisible(point) {
  if (point?.appearanceMode !== "timed") return true;
  const interval = Math.max(3, Number(point.spawnInterval || 20));
  const duration = Math.max(2, Number(point.spawnDuration || 8));
  const elapsed = Math.max(0, (Date.now() - Number(mapPlayState.startedAt || Date.now())) / 1000);
  const cycle = interval + duration;
  const position = elapsed % cycle;
  return position >= interval;
}

function mapVisiblePointsSignature(points = interactiveMap?.points || []) {
  return points
    .filter((point) => point.appearanceMode === "timed")
    .map((point) => `${point.id}:${isMapPointVisible(point) ? 1 : 0}`)
    .join("|");
}

function scheduleMapReaderTick() {
  window.clearTimeout(mapReaderTicker);
  if (!interactiveMap?.points?.some((point) => point.appearanceMode === "timed") || mapPlayState.cover) return;
  mapReaderTicker = window.setTimeout(() => {
    const stage = document.getElementById("readerStage");
    const blocked = stage?.querySelector(".found-popup") || stage?.querySelector(".imap-reader-board.is-panning");
    const signature = mapVisiblePointsSignature();
    if (!blocked && signature !== mapPlayState.visibleSignature) renderMapReader();
    else scheduleMapReaderTick();
  }, 1000);
}

function mapOverlayHtml(theme = {}) {
  const effect = ["clouds", "fog", "sparks", "rain"].includes(theme.overlayEffect) ? theme.overlayEffect : "none";
  if (effect === "none") return "";
  const opacity = Math.max(0, Math.min(1, Number(theme.overlayOpacity ?? 0.45)));
  const speed = Math.max(0.5, Math.min(3, Number(theme.overlaySpeed ?? 1)));
  return `<div class="imap-map-overlay is-${escapeAttr(effect)}" style="--imap-overlay-opacity:${opacity};--imap-overlay-speed:${speed}"></div>`;
}

function parseMapList(value) {
  return String(value || "").split(/[,;\n]+/).map((item) => item.trim()).filter(Boolean);
}

function normalizeMapChoiceOptions(value) {
  const source = Array.isArray(value) ? value : String(value || "").split(/\n+|[,;]+/);
  const options = source.map((item) => String(item || "").trim()).filter(Boolean).slice(0, 4);
  while (options.length < 4) options.push(`${readerLang === "en" ? "Option" : "Вариант"} ${options.length + 1}`);
  return options;
}

function formatMapRichText(value) {
  const paragraphs = String(value || "")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  if (!paragraphs.length) return "";
  const inline = (text) => escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.+?)__/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/_(.+?)_/g, "<em>$1</em>")
    .replace(/\+\+(.+?)\+\+/g, "<u>$1</u>")
    .replace(/~~(.+?)~~/g, "<s>$1</s>")
    .replace(/\[big\](.+?)\[\/big\]/g, '<span class="text-big">$1</span>')
    .replace(/\[small\](.+?)\[\/small\]/g, '<span class="text-small">$1</span>');
  return `<div class="imap-rich-text">${paragraphs.map((paragraph) => {
    if (paragraph.startsWith("## ")) return `<h3>${inline(paragraph.slice(3)).replace(/\n/g, "<br>")}</h3>`;
    if (paragraph.startsWith("> ")) return `<blockquote>${inline(paragraph.replace(/^>\s?/gm, "")).replace(/\n/g, "<br>")}</blockquote>`;
    return `<p>${inline(paragraph).replace(/\n/g, "<br>")}</p>`;
  }).join("")}</div>`;
}

const CLIENT_ZOOM_IMAGE_SELECTOR = [
  ".story-image",
  ".search-image > img",
  ".found-card > img",
  ".found-card .imap-activity-image",
  ".found-card .imap-puzzle-reference",
  ".inventory-detail-image",
  ".digest-content img",
].join(", ");

function enhanceClientImages(root) {
  bindMediaZoomButtons(root);
  root?.querySelectorAll?.(CLIENT_ZOOM_IMAGE_SELECTOR).forEach((image) => {
    if (!image.src || image.closest(".media-zoom-frame") || image.closest("button")) return;
    const frame = document.createElement("span");
    frame.className = "media-zoom-frame";
    if (image.classList.contains("story-image") || image.closest(".search-image") || image.closest(".digest-content")) frame.classList.add("is-block");
    image.insertAdjacentElement("beforebegin", frame);
    frame.appendChild(image);
    const button = document.createElement("button");
    button.className = "media-zoom-button";
    button.type = "button";
    button.title = t("inspect");
    button.setAttribute("aria-label", t("inspect"));
    button.innerHTML = `<span class="icon">${iconSvg("search")}</span>`;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openImageLightbox(image.currentSrc || image.src);
    });
    frame.appendChild(button);
  });
}

function setupImageLoadingStates(root) {
  root?.querySelectorAll?.("[data-image-shell]").forEach((shell) => {
    const image = shell.querySelector("img");
    const label = shell.querySelector(".image-loading-placeholder span:last-child");
    if (!image) return;
    const markLoaded = () => {
      shell.classList.remove("is-loading", "is-error");
      shell.classList.add("is-loaded");
    };
    const markError = () => {
      shell.classList.remove("is-loading");
      shell.classList.add("is-error");
      if (label) label.textContent = t("loadError");
    };
    if (image.complete && image.naturalWidth > 0) {
      markLoaded();
      return;
    }
    image.addEventListener("load", markLoaded, { once: true });
    image.addEventListener("error", markError, { once: true });
  });
}

function bindMediaZoomButtons(root) {
  root?.querySelectorAll?.("[data-media-zoom-src]").forEach((button) => {
    if (button.dataset.mediaZoomBound) return;
    button.dataset.mediaZoomBound = "true";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openImageLightbox(button.dataset.mediaZoomSrc || "");
    });
  });
}

function openImageLightbox(source) {
  if (!source) return;
  document.querySelector(".image-lightbox")?.remove();
  const overlay = document.createElement("div");
  overlay.className = "image-lightbox";
  overlay.innerHTML = `
    <button class="icon-button image-lightbox-close" type="button" aria-label="${t("close")}">
      <span class="icon">${iconSvg("x")}</span>
    </button>
    <div class="image-lightbox-card">
      <img src="${escapeAttr(source)}" alt="" />
    </div>
  `;
  const onKey = (event) => {
    if (event.key === "Escape") close();
  };
  const close = () => {
    document.removeEventListener("keydown", onKey);
    overlay.remove();
  };
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  overlay.querySelector(".image-lightbox-close").addEventListener("click", close);
  document.addEventListener("keydown", onKey);
  document.body.appendChild(overlay);
}

function mapBackdropCss(theme = {}) {
  const image = theme.mapBackdropImage || theme.backgroundImage || "";
  return image ? `url("${image.replace(/"/g, "%22")}")` : "none";
}

function defaultMapButtonLabel(type) {
  return {
    popup: t("open"),
    puzzle: readerLang === "en" ? "Check puzzle" : "Проверить пазл",
    cipher: t("confirm"),
    answer: t("answerButton"),
    choice: t("continue"),
    dice: t("roll"),
  }[type] || t("continue");
}

function mapIconName(name) {
  return ["map", "flag", "key", "lock", "dice", "puzzle", "search", "package"].includes(name) ? name : "map";
}

function searchPoints(scene) {
  if (!scene.search) scene.search = {};
  if (!Array.isArray(scene.search.points)) scene.search.points = [];
  return scene.search.points;
}

function searchPointKey(scene, point) {
  return `${scene.id}:${point.id}`;
}

function qteCirclesHtml(count, field) {
  return qteCirclePositions(count, field).map(({ left, top }, index) => {
    return `<button class="qte-click-circle" type="button" data-qte-circle="${index + 1}" style="left:${left}px;top:${top}px">${index + 1}</button>`;
  }).join("");
}

function qteCirclePositions(count, field) {
  const total = Math.max(1, Math.min(20, Number(count || 1)));
  const width = Math.max(280, Number(field?.clientWidth || 640));
  const height = Math.max(220, Number(field?.clientHeight || 320));
  const size = 52;
  const margin = size / 2 + 10;
  const minDistance = total > 14 ? 56 : total > 8 ? 64 : 74;
  const positions = [];
  const distance = (a, b) => Math.hypot(a.left - b.left, a.top - b.top);
  for (let index = 0; index < total; index += 1) {
    let best = null;
    let bestScore = -1;
    for (let attempt = 0; attempt < 260; attempt += 1) {
      const candidate = {
        left: margin + Math.random() * Math.max(1, width - margin * 2),
        top: margin + Math.random() * Math.max(1, height - margin * 2),
      };
      const nearest = positions.length ? Math.min(...positions.map((point) => distance(candidate, point))) : Infinity;
      if (nearest > bestScore) {
        best = candidate;
        bestScore = nearest;
      }
      if (nearest >= minDistance) break;
    }
    positions.push(best || { left: width / 2, top: height / 2 });
  }
  return positions;
}

function grantSceneItem(scene) {
  const name = scene.rewardItem?.trim();
  return grantItem({
    name,
    image: scene.rewardImage || "",
    text: scene.rewardText || "",
  });
}

function grantItem(item) {
  const name = item?.name?.trim();
  if (!name || hasInventoryItem(name) || playState.usedItems.includes(name)) return false;
  playState.inventory.push({
    name,
    image: item.image || "",
    text: item.text || "",
  });
  return true;
}

function renderInventory() {
  const node = document.getElementById("readerInventory");
  if (!node) return;
  node.textContent = "";
}

function hasRequiredItem(choice) {
  const item = choice.requiresItem?.trim();
  return !item || hasInventoryItem(item);
}

function hasInventoryItem(name) {
  return playState.inventory.some((item) => item.name === name);
}

function consumeItem(name) {
  if (!name) return;
  playState.inventory = playState.inventory.filter((item) => item.name !== name);
  if (!playState.usedItems.includes(name)) playState.usedItems.push(name);
}

function applyChoiceEffects(choice) {
  if (choice.scoreVar?.trim()) {
    const key = choice.scoreVar.trim();
    playState.scores[key] = Number(playState.scores[key] || 0) + Number(choice.scoreDelta || 0);
  }
  if (choice.consumesItem && choice.requiresItem?.trim()) {
    consumeItem(choice.requiresItem.trim());
  }
}

function questAnalyticsPayload() {
  const scores = structuredCloneSafe(playState.scores || {});
  const total = Object.values(scores).reduce((sum, value) => sum + Number(value || 0), 0);
  const maxScore = (quest?.scenes || [])
    .flatMap((scene) => Array.isArray(scene.choices) ? scene.choices : [])
    .reduce((sum, choice) => sum + Math.max(0, Number(choice.scoreDelta || 0)), 0);
  return {
    score: total,
    maxScore,
    scores,
  };
}

function renderInventoryBar() {
  if (!playState.inventory?.length) return "";
  return `
    <div class="inventory-bar">
      <span class="inventory-title">${t("inventory")}</span>
      ${playState.inventory
        .map(
          (item, index) => `
            <button class="inventory-item" type="button" data-inventory-item="${index}" aria-label="${escapeAttr(item.name)}">
              ${item.image ? `<img src="${escapeAttr(item.image)}" alt="" />` : `<span>${escapeHtml(item.name.slice(0, 1).toUpperCase())}</span>`}
              <b>${escapeHtml(item.name)}</b>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function refreshInventoryBar() {
  const stage = document.getElementById("readerStage");
  const current = stage.querySelector(".inventory-bar");
  const html = renderInventoryBar();
  if (current && html) {
    current.outerHTML = html;
  } else if (current) {
    current.remove();
  } else if (html) {
    stage.insertAdjacentHTML("afterbegin", html);
  }
  bindInventoryEvents(stage);
}

function bindInventoryEvents(stage = document.getElementById("readerStage")) {
  stage?.querySelectorAll("[data-inventory-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = playState.inventory[Number(button.dataset.inventoryItem)];
      if (item) showInventoryItemPopup(item);
    });
  });
}

function showInventoryItemPopup(item) {
  const stage = document.getElementById("readerStage");
  const popup = stage.querySelector("[data-found-popup]") || document.createElement("div");
  popup.className = "found-popup is-visible";
  popup.dataset.foundPopup = "";
  popup.hidden = false;
  popup.innerHTML = `
    <div class="found-card inventory-detail-card">
      ${item.image ? `<img class="inventory-detail-image" src="${escapeAttr(item.image)}" alt="" />` : `<span class="icon">${iconSvg("package")}</span>`}
      <h2>${escapeHtml(item.name || t("inventory"))}</h2>
      <p>${escapeHtml(item.text || t("ready"))}</p>
      <button class="answer-button" type="button" data-found-continue>
        <span>${t("close")}</span>
        <span class="icon">${iconSvg("arrow")}</span>
      </button>
    </div>
  `;
  if (!popup.parentElement) stage.appendChild(popup);
  enhanceClientImages(popup);
  popup.querySelector("[data-found-continue]").addEventListener("click", () => {
    popup.remove();
    refreshInventoryBar();
  });
}

function collectSceneReward(scene) {
  const stage = document.getElementById("readerStage");
  const button = stage.querySelector("[data-collect-item]");
  const added = grantSceneItem(scene);
  if (added) {
    playSound("successSound");
    refreshInventoryBar();
  }
  if (button) {
    button.disabled = true;
    button.classList.add("is-collected");
    window.setTimeout(() => button.remove(), 180);
  }
}

function renderRewardPrompt(scene) {
  if (!scene.rewardItem?.trim() || !scene.rewardCollect || hasInventoryItem(scene.rewardItem)) return "";
  return `
    <button class="reward-pickup" type="button" data-collect-item>
      ${scene.rewardImage ? `<img src="${escapeAttr(scene.rewardImage)}" alt="" />` : `<span class="icon">${iconSvg("package")}</span>`}
      <span>
        <b>${escapeHtml(scene.rewardItem)}</b>
        ${scene.rewardText ? `<small>${escapeHtml(scene.rewardText)}</small>` : `<small>${t("takeItem")}</small>`}
      </span>
    </button>
  `;
}

function applyTheme() {
  const theme = (contentKind === "map" ? interactiveMap?.theme : contentKind === "digest" ? digest?.theme : quest?.theme) || normalizeTheme();
  const root = document.documentElement;
  root.style.setProperty("--quest-bg", theme.background);
  root.style.setProperty("--quest-surface", theme.surface);
  root.style.setProperty("--quest-text", theme.text);
  root.style.setProperty("--quest-accent", theme.accent);
  root.style.setProperty("--quest-font", fontStack(theme.font));
  root.style.setProperty("--quest-bg-image", theme.backgroundImage ? `url("${theme.backgroundImage.replace(/"/g, "%22")}")` : "none");
  root.style.setProperty("--imap-backdrop-image", mapBackdropCss(theme));
  root.style.setProperty("--quest-bg-tint", rgbaFromHex(theme.background, theme.backgroundOpacity));
  root.style.setProperty("--quest-bg-tint-strong", rgbaFromHex(theme.background, Math.min(1, theme.backgroundOpacity * 1.18)));
  root.dataset.questFrame = theme.frame;
  syncBackgroundMusic();
}

function syncBackgroundMusic() {
  const music = currentBackgroundMusic();
  const token = ++musicSyncToken;
  if (!music || !audioEnabled) {
    stopBackgroundMusic(360);
    return;
  }
  const source = resolveMediaUrl(music);
  const volume = getAudioVolume("music");
  if (webMusic?.url === source) {
    fadeWebMusic(webMusic, volume, 260);
    stopHtmlMusic(260);
    return;
  }
  startWebMusic(music, volume, 520)
    .then((nextMusic) => {
      const stillCurrent = token === musicSyncToken && audioEnabled && resolveMediaUrl(currentBackgroundMusic()) === nextMusic.url;
      if (!stillCurrent) {
        stopWebMusic(0, nextMusic);
        return;
      }
      const previousWebMusic = webMusic;
      webMusic = nextMusic;
      fadeWebMusic(nextMusic, getAudioVolume("music"), 520);
      stopWebMusic(420, previousWebMusic);
      stopHtmlMusic(420);
    })
    .catch(() => {
      if (token === musicSyncToken && audioEnabled) syncHtmlBackgroundMusic(music, volume, token);
    });
}

function syncHtmlBackgroundMusic(music, volume, token = musicSyncToken) {
  if (token !== musicSyncToken || !audioEnabled || !music) return;
  const source = resolveMediaUrl(music);
  stopWebMusic(360);
  if (musicAudio?.src === source) {
    musicAudio.loop = true;
    if (audioEnabled) musicAudio.play().catch(() => {});
    fadeAudio(musicAudio, volume, 420);
    return;
  }
  const previous = musicAudio;
  const next = new Audio(music);
  next.loop = true;
  next.preload = "auto";
  next.playsInline = true;
  next.volume = 0;
  musicAudio = next;
  if (audioEnabled) {
    next.play().then(() => fadeAudio(next, volume, 680)).catch(() => {});
  }
  fadeAudio(previous, 0, 680, (audio) => audio.pause());
}

async function startWebMusic(url, volume, duration = 680) {
  const context = getAudioContext();
  if (!context) throw new Error("Web Audio unavailable");
  if (context.state === "suspended") await context.resume();
  if (context.state !== "running") throw new Error("Web Audio is locked");
  const sourceUrl = resolveMediaUrl(url);
  const buffer = await loadAudioBuffer(sourceUrl);
  const gain = context.createGain();
  gain.gain.value = 0;
  gain.connect(context.destination);
  const source = context.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  source.connect(gain);
  source.start(0);
  const music = { url: sourceUrl, source, gain };
  fadeWebMusic(music, 0, 0);
  return music;
}

function fadeWebMusic(music, targetVolume, duration = 500, done) {
  const context = audioContext;
  if (!context || !music?.gain) return;
  const gain = music.gain.gain;
  const now = context.currentTime;
  const target = Math.max(0, Math.min(1, Number(targetVolume)));
  gain.cancelScheduledValues(now);
  gain.setValueAtTime(gain.value, now);
  gain.linearRampToValueAtTime(target, now + Math.max(0.02, duration / 1000));
  if (done) window.setTimeout(done, duration + 40);
}

function stopWebMusic(duration = 500, target = webMusic) {
  if (!target) return;
  if (target === webMusic) webMusic = null;
  fadeWebMusic(target, 0, duration, () => {
    try {
      target.source.stop(0);
    } catch (error) {}
    try {
      target.source.disconnect();
      target.gain.disconnect();
    } catch (error) {}
  });
}

function stopHtmlMusic(duration = 360) {
  const audio = musicAudio;
  if (!audio) return;
  musicAudio = null;
  fadeAudio(audio, 0, duration, (item) => {
    item.pause();
    item.removeAttribute("src");
    item.load?.();
  });
}

function stopBackgroundMusic(duration = 360) {
  stopWebMusic(duration);
  stopHtmlMusic(duration);
}

function currentBackgroundMusic() {
  if (contentKind === "map") return interactiveMap?.theme?.music || "";
  if (contentKind === "digest") return digest?.theme?.music || "";
  if (!quest) return "";
  if (!playState.cover) {
    const sceneMusic = findScene(playState.current)?.music || "";
    if (sceneMusic) return sceneMusic;
  }
  return quest.theme?.music || "";
}

function resolveMediaUrl(url) {
  try {
    return new URL(url, window.location.href).href;
  } catch (error) {
    return String(url || "");
  }
}

function fadeAudio(audio, targetVolume, duration = 500, done) {
  if (!audio) return;
  window.clearInterval(audio._questFadeTimer);
  const from = Number(audio.volume || 0);
  const to = Math.max(0, Math.min(1, Number(targetVolume)));
  const started = performance.now();
  audio.muted = to <= 0;
  audio._questFadeTimer = window.setInterval(() => {
    const progress = Math.min(1, (performance.now() - started) / duration);
    audio.volume = from + (to - from) * progress;
    audio.muted = audio.volume <= 0.001;
    if (progress >= 1) {
      window.clearInterval(audio._questFadeTimer);
      done?.(audio);
    }
  }, 40);
}

function currentAudioTheme() {
  if (contentKind === "map") return interactiveMap?.theme || {};
  if (contentKind === "digest") return digest?.theme || {};
  return quest?.theme || {};
}

function getMasterAudioVolume(theme = currentAudioTheme()) {
  const value = readerVolume ?? theme?.volume ?? 0.35;
  return Math.max(0, Math.min(1, Number(value)));
}

function soundVolumeKey(name) {
  return {
    music: "musicVolume",
    clickSound: "clickVolume",
    successSound: "successVolume",
    failSound: "failVolume",
    diceSound: "diceVolume",
  }[name] || "";
}

function getAudioVolume(name = "music", theme = currentAudioTheme()) {
  const key = soundVolumeKey(name);
  const source = Number(key ? theme?.[key] : 1);
  const level = Number.isFinite(source) ? Math.max(0, Math.min(1, source)) : 1;
  return Math.max(0, Math.min(1, getMasterAudioVolume(theme) * level));
}

function hasAudioAssets() {
  const theme = currentAudioTheme();
  return Boolean(
    theme.music ||
      theme.clickSound ||
      theme.successSound ||
      theme.failSound ||
      theme.diceSound ||
      (contentKind !== "map" && quest?.scenes?.some((scene) => scene.music)),
  );
}

function renderAudioButton() {
  const button = document.getElementById("readerAudio");
  const volume = document.getElementById("readerVolume");
  const hasAudio = hasAudioAssets();
  if (button) {
    button.disabled = !hasAudio;
    button.classList.toggle("is-active", audioEnabled && hasAudio);
  }
  [volume, ...document.querySelectorAll("[data-reader-map-volume]")].filter(Boolean).forEach((input) => {
    input.value = String(getMasterAudioVolume());
    input.disabled = !hasAudio;
  });
  document.querySelectorAll("[data-reader-map-audio-toggle]").forEach((item) => {
    item.disabled = !hasAudio;
    item.classList.toggle("is-active", audioEnabled && hasAudio);
  });
}

function playSound(name) {
  if (!audioEnabled) return;
  const theme = currentAudioTheme();
  const url = theme?.[name];
  if (!url) return;
  const volume = getAudioVolume(name, theme);
  playBufferedSound(url, volume).catch(() => playHtmlSound(url, volume));
}

function playHtmlSound(url, volume) {
  const sound = new Audio(url);
  sound.preload = "auto";
  sound.playsInline = true;
  sound.volume = Math.max(0, Math.min(1, Number(volume)));
  sound.muted = sound.volume <= 0;
  sound.play().catch(() => {});
}

function getAudioContext() {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return null;
  if (!audioContext) audioContext = new AudioContextCtor();
  return audioContext;
}

async function playBufferedSound(url, volume) {
  const context = getAudioContext();
  if (!context) throw new Error("Web Audio unavailable");
  if (context.state === "suspended") await context.resume();
  if (context.state !== "running") throw new Error("Web Audio is locked");
  const sourceUrl = resolveMediaUrl(url);
  const buffer = await loadAudioBuffer(sourceUrl);
  const gain = context.createGain();
  gain.gain.value = Math.max(0, Math.min(1, Number(volume)));
  gain.connect(context.destination);
  const source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(gain);
  source.start(0);
}

async function loadAudioBuffer(sourceUrl) {
  const context = getAudioContext();
  if (!context) throw new Error("Web Audio unavailable");
  let buffer = audioBufferCache.get(sourceUrl);
  if (buffer) return buffer;
  const response = await fetch(sourceUrl);
  if (!response.ok) throw new Error("Audio fetch failed");
  const data = await response.arrayBuffer();
  buffer = await context.decodeAudioData(data.slice(0));
  audioBufferCache.set(sourceUrl, buffer);
  return buffer;
}

function shouldRevealText(scene) {
  return Boolean(quest.settings?.revealText && scene?.text?.trim());
}

function splitTextChunks(text) {
  const source = String(text || "").replace(/\n/g, " <br> ");
  const chunks = [];
  let buffer = "";
  const state = { bold: false, italic: false, underline: false, strike: false, big: false, small: false };
  const hasOpenFormat = () => Object.values(state).some(Boolean);
  const pushIfReady = () => {
    if (hasOpenFormat()) return;
    if (!/[.!?…](?:[»”")\]]+)?(?:(?:\*\*)|\*|\+\+|~~|\[\/(?:big|small)\])*\s*$/u.test(buffer)) return;
    const chunk = buffer.trim();
    if (chunk) chunks.push(chunk);
    buffer = "";
  };
  for (let index = 0; index < source.length; index += 1) {
    const rest = source.slice(index);
    const token = ["[small]", "[/small]", "[big]", "[/big]", "**", "++", "~~"].find((item) => rest.startsWith(item));
    if (token) {
      buffer += token;
      if (token === "**") state.bold = !state.bold;
      else if (token === "++") state.underline = !state.underline;
      else if (token === "~~") state.strike = !state.strike;
      else if (token === "[big]") state.big = true;
      else if (token === "[/big]") state.big = false;
      else if (token === "[small]") state.small = true;
      else if (token === "[/small]") state.small = false;
      index += token.length - 1;
      pushIfReady();
      continue;
    }
    const char = source[index];
    buffer += char;
    if (char === "*") state.italic = !state.italic;
    pushIfReady();
  }
  const rest = buffer.trim();
  if (rest) chunks.push(rest);
  return chunks;
}

function parseStoryBlock(paragraph) {
  const text = String(paragraph || "").trim();
  if (text.startsWith("## ")) return { tag: "h2", className: "story-heading", text: text.slice(3) };
  if (text.startsWith("> ")) return { tag: "blockquote", className: "story-quote", text: text.slice(2) };
  return { tag: "p", className: "", text };
}

function formatStoryInline(value, scene, secretState) {
  let html = escapeHtml(value)
    .replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([\s\S]+?)\*/g, "<em>$1</em>")
    .replace(/_([\s\S]+?)_/g, "<em>$1</em>")
    .replace(/\+\+([\s\S]+?)\+\+/g, "<u>$1</u>")
    .replace(/~~([\s\S]+?)~~/g, "<s>$1</s>")
    .replace(/==([\s\S]+?)==/g, "<mark>$1</mark>")
    .replace(/\[big\]([\s\S]+?)\[\/big\]/g, '<span class="text-big">$1</span>')
    .replace(/\[small\]([\s\S]+?)\[\/small\]/g, '<span class="text-small">$1</span>')
    .replace(/&lt;br&gt;/g, "<br>");
  if (scene.hidden?.enabled && html.includes(escapeHtml(SECRET_MARKER))) {
    html = html.replace(escapeHtml(SECRET_MARKER), secretButtonHtml(scene));
    secretState.used = true;
  } else {
    html = html.replace(escapeHtml(SECRET_MARKER), "");
  }
  return html;
}

function renderFormattedTextBlock(value, className = "") {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const fakeScene = { hidden: { enabled: false } };
  return raw
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => {
      const block = parseStoryBlock(paragraph);
      const text = block.text.replace(/\n/g, " <br> ");
      const classes = [className, block.className].filter(Boolean).join(" ");
      return `<${block.tag}${classes ? ` class="${escapeAttr(classes)}"` : ""}>${formatStoryInline(text, fakeScene, { used: false })}</${block.tag}>`;
    })
    .join("");
}

function secretButtonHtml(scene) {
  const label = systemText(scene.hidden?.label, "Открыть", "open");
  return `<button class="secret-hotspot" type="button" data-secret>${escapeHtml(label)}</button>`;
}

function findScene(id) {
  return quest.scenes.find((scene) => scene.id === id);
}

function normalizeQuest(data) {
  const base = {
    title: String(data?.title || "Новый квест"),
    description: String(data?.description || ""),
    coverImage: String(data?.coverImage || ""),
    start: String(data?.start || ""),
    settings: normalizeSettings(data?.settings),
    theme: normalizeTheme(data?.theme),
    analytics: normalizeReaderAnalyticsSettings(data?.analytics),
    scenes: Array.isArray(data?.scenes) ? data.scenes : [],
  };
  base.scenes = base.scenes.map((raw, index) => ({
    id: String(raw?.id || `scene-${index + 1}`),
    title: String(raw?.title || `Сцена ${index + 1}`),
    image: String(raw?.image || ""),
    music: String(raw?.music || ""),
    text: String(raw?.text || ""),
    mode: ["story", "dialogue", "answer", "hidden", "dice", "score", "search", "qte", "puzzle", "cipher", "ending"].includes(raw?.mode)
      ? raw.mode === "hidden"
        ? "story"
        : raw.mode
      : "story",
    rewardItem: String(raw?.rewardItem || ""),
    rewardImage: String(raw?.rewardImage || ""),
    rewardText: String(raw?.rewardText || ""),
    rewardCollect: raw?.rewardCollect !== false,
    choices: Array.isArray(raw?.choices)
      ? raw.choices.map((choice) => ({
          label: String(choice?.label || "Продолжить"),
          target: String(choice?.target || ""),
          tone: ["good", "bad", "neutral"].includes(choice?.tone) ? choice.tone : "neutral",
          image: String(choice?.image || ""),
          requiresItem: String(choice?.requiresItem || ""),
          consumesItem: Boolean(choice?.consumesItem),
          scoreVar: String(choice?.scoreVar || ""),
          scoreDelta: Number(choice?.scoreDelta || 0),
        }))
      : [],
    answer: {
      prompt: String(raw?.answer?.prompt || "Ответ"),
      values: String(raw?.answer?.values || ""),
      success: String(raw?.answer?.success || ""),
      failure: String(raw?.answer?.failure || ""),
      caseSensitive: Boolean(raw?.answer?.caseSensitive),
    },
    hidden: {
      enabled: Boolean(raw?.hidden?.enabled || raw?.mode === "hidden"),
      label: String(raw?.hidden?.label || "Открыть"),
      target: String(raw?.hidden?.target || ""),
      rewardItem: String(raw?.hidden?.rewardItem || ""),
      rewardImage: String(raw?.hidden?.rewardImage || ""),
      rewardText: String(raw?.hidden?.rewardText || ""),
    },
    dice: {
      buttonLabel: String(raw?.dice?.buttonLabel || ""),
      sides: Math.max(2, Math.min(100, Number(raw?.dice?.sides || 6))),
      outcomes: Array.isArray(raw?.dice?.outcomes)
        ? raw.dice.outcomes.map((outcome) => ({
            label: String(outcome?.label || ""),
            from: Number(outcome?.from || 1),
            to: Number(outcome?.to || outcome?.from || 1),
            target: String(outcome?.target || ""),
            tone: ["good", "bad", "neutral"].includes(outcome?.tone) ? outcome.tone : "neutral",
          }))
        : [],
    },
    score: {
      variable: String(raw?.score?.variable || ""),
      buttonLabel: String(raw?.score?.buttonLabel || ""),
      outcomes: Array.isArray(raw?.score?.outcomes)
        ? raw.score.outcomes.map((outcome) => ({
            label: String(outcome?.label || ""),
            from: Number(outcome?.from ?? 0),
            to: Number(outcome?.to ?? outcome?.from ?? 0),
            target: String(outcome?.target || ""),
            tone: ["good", "bad", "neutral"].includes(outcome?.tone) ? outcome.tone : "neutral",
          }))
        : [],
    },
    search: normalizeSearch(raw?.search),
    qte: {
      buttonLabel: String(raw?.qte?.buttonLabel || "Начать испытание"),
      image: String(raw?.qte?.image || ""),
      speed: Math.max(500, Math.min(5000, Number(raw?.qte?.speed || 1400))),
      count: Math.max(1, Math.min(20, Number(raw?.qte?.count || 4))),
      allowedMisses: Math.max(0, Math.min(20, Number(raw?.qte?.allowedMisses ?? raw?.qte?.misses ?? 1))),
      successText: String(raw?.qte?.successText || "Испытание пройдено."),
      failureText: String(raw?.qte?.failureText || "Не успели."),
      success: String(raw?.qte?.success || ""),
      failure: String(raw?.qte?.failure || ""),
    },
    puzzle: normalizePuzzle(raw?.puzzle),
    cipher: normalizeCipher(raw?.cipher),
    dialogue: normalizeDialogue(raw?.dialogue),
    ending: {
      tone: ["good", "bad", "neutral"].includes(raw?.ending?.tone) ? raw.ending.tone : "neutral",
    },
  }));
  if (!base.scenes.length) {
    base.scenes.push({
      id: "start",
      title: "Начало",
      image: "",
      music: "",
      text: "",
      mode: "ending",
      rewardItem: "",
      rewardImage: "",
      rewardText: "",
      rewardCollect: true,
      choices: [],
      answer: { prompt: "Ответ", values: "", success: "", failure: "", caseSensitive: false },
      hidden: { enabled: false, label: "Открыть", target: "", rewardItem: "", rewardImage: "", rewardText: "" },
      dice: { buttonLabel: "", sides: 6, outcomes: [] },
      score: { variable: "", buttonLabel: "", outcomes: [] },
      search: { prompt: "Осмотрите картинку и найдите предмет", points: [] },
      qte: { buttonLabel: "Начать испытание", image: "", speed: 1400, count: 4, allowedMisses: 1, successText: "Испытание пройдено.", failureText: "Не успели.", success: "", failure: "" },
      puzzle: { pieces: 9, timeLimit: 90, buttonLabel: "Собрать пазл", successText: "Пазл собран.", failureText: "Время вышло.", success: "", failure: "" },
      cipher: { prompt: "Соберите правильную комбинацию", length: 4, maxErrors: 3, buttonLabel: "Подтвердить", options: [{ label: "A", image: "" }, { label: "B", image: "" }, { label: "C", image: "" }], answer: ["A", "B", "C", "A"], successText: "Код принят.", failureText: "Механизм заблокирован.", success: "", failure: "" },
      dialogue: { characterName: "Персонаж", characterImage: "", lines: ["..."], secretLabel: "Осмотреть", secretItem: "", secretImage: "", secretText: "" },
      ending: { tone: "neutral" },
    });
  }
  if (!base.start || !base.scenes.some((scene) => scene.id === base.start)) base.start = base.scenes[0].id;
  return base;
}

function normalizeSearch(search = {}) {
  const legacyPoint = {
    id: "point",
    label: String(search?.label || ""),
    type: search?.rewardItem ? "item" : "text",
    x: search?.x ?? 50,
    y: search?.y ?? 50,
    radius: search?.radius ?? 10,
    rewardItem: search?.rewardItem || "",
    rewardImage: search?.rewardImage || "",
    rewardText: search?.rewardText || "",
    target: search?.target || "",
  };
  const rawPoints = Array.isArray(search?.points) ? search.points : search && ("x" in search || "rewardText" in search || "rewardItem" in search) ? [legacyPoint] : [];
  const seen = new Set();
  const points = rawPoints.map((point, index) => {
    const baseId = String(point?.id || `point-${index + 1}`).trim() || `point-${index + 1}`;
    let id = baseId;
    let suffix = 2;
    while (seen.has(id)) {
      id = `${baseId}-${suffix}`;
      suffix += 1;
    }
    seen.add(id);
    return {
      id,
      label: String(point?.label || ""),
      type: point?.type === "item" ? "item" : "text",
      x: clampPercent(point?.x ?? 50),
      y: clampPercent(point?.y ?? 50),
      radius: Math.max(4, Math.min(30, Number(point?.radius || 10))),
      rewardItem: String(point?.rewardItem || ""),
      rewardImage: String(point?.rewardImage || ""),
      rewardText: String(point?.rewardText || ""),
      target: String(point?.target || ""),
    };
  });
  return {
    prompt: String(search?.prompt || "Осмотрите картинку и найдите предмет"),
    points,
  };
}

function normalizeDialogue(dialogue = {}) {
  const rawLines = Array.isArray(dialogue?.lines)
    ? dialogue.lines
    : String(dialogue?.text || "")
        .split(/\n+/)
        .filter((line) => line.trim());
  return {
    characterName: String(dialogue?.characterName || "Персонаж"),
    characterImage: String(dialogue?.characterImage || ""),
    lines: rawLines.map((line) => String(line || "")),
    secretLabel: String(dialogue?.secretLabel || "Осмотреть"),
    secretItem: String(dialogue?.secretItem || ""),
    secretImage: String(dialogue?.secretImage || ""),
    secretText: String(dialogue?.secretText || ""),
  };
}

function normalizePuzzle(puzzle = {}) {
  return {
    pieces: Math.max(4, Math.min(36, Number(puzzle?.pieces || 9))),
    timeLimit: Math.max(10, Math.min(600, Number(puzzle?.timeLimit || 90))),
    buttonLabel: String(puzzle?.buttonLabel || "Собрать пазл"),
    successText: String(puzzle?.successText || "Пазл собран."),
    failureText: String(puzzle?.failureText || "Время вышло."),
    success: String(puzzle?.success || ""),
    failure: String(puzzle?.failure || ""),
  };
}

function normalizeCipher(cipher = {}) {
  const options = Array.isArray(cipher?.options)
    ? cipher.options.map((option) => ({
        label: String(option?.label || ""),
        image: String(option?.image || ""),
      }))
    : String(cipher?.options || "A,B,C")
        .split(",")
        .map((label) => ({ label: label.trim(), image: "" }));
  const cleanOptions = options.filter((option) => option.label.trim() || option.image.trim());
  const length = Math.max(1, Math.min(8, Number(cipher?.length || 4)));
  return {
    prompt: String(cipher?.prompt || "Соберите правильную комбинацию"),
    length,
    maxErrors: Math.max(1, Math.min(20, Number(cipher?.maxErrors || 3))),
    buttonLabel: String(cipher?.buttonLabel || "Подтвердить"),
    options: cleanOptions.length ? cleanOptions : [{ label: "A", image: "" }],
    answer: parseCipherAnswer(cipher?.answer, length),
    successText: String(cipher?.successText || "Код принят."),
    failureText: String(cipher?.failureText || "Механизм заблокирован."),
    success: String(cipher?.success || ""),
    failure: String(cipher?.failure || ""),
  };
}

function parseCipherAnswer(answer, length) {
  const parts = Array.isArray(answer) ? answer : String(answer || "").split(",");
  const clean = parts.map((item) => String(item || "").trim()).filter(Boolean);
  while (clean.length < length) clean.push("");
  return clean.slice(0, length);
}

function normalizeSettings(settings) {
  const speed = Number(settings?.revealSpeed);
  return {
    revealText: settings?.revealText !== false,
    revealSpeed: Number.isFinite(speed) ? Math.min(900, Math.max(120, speed)) : 420,
    mapZoom: Number.isFinite(Number(settings?.mapZoom)) ? Math.min(140, Math.max(50, Number(settings.mapZoom))) : 100,
  };
}

function normalizeTheme(theme = {}) {
  const volume = Number(theme.volume);
  const soundVolume = (value, fallback = 1) => {
    const number = Number(value);
    return Number.isFinite(number) ? clampNumber(number, 0, 1) : fallback;
  };
  const frame = ["neutral", "detective", "mystic", "scifi", "fantasy", "adventure"].includes(theme.frame)
    ? theme.frame
    : ["paper", "glass", "dark"].includes(theme.frame)
      ? "neutral"
      : "neutral";
  const preset = themePreset(frame);
  return {
    background: validColor(theme.background, preset.background),
    surface: validColor(theme.surface, preset.surface),
    text: validColor(theme.text, preset.text),
    accent: validColor(theme.accent, preset.accent),
    font: ["system", "serif", "mono", "fantasy", "modern", "classic", "cinematic", "handwritten", "compact"].includes(theme.font) ? theme.font : preset.font,
    backgroundImage: String(theme.backgroundImage || ""),
    mapBackdropImage: String(theme.mapBackdropImage || ""),
    overlayEffect: ["none", "clouds", "fog", "sparks", "rain"].includes(theme.overlayEffect) ? theme.overlayEffect : "none",
    overlayOpacity: Number.isFinite(Number(theme.overlayOpacity)) ? Math.max(0, Math.min(1, Number(theme.overlayOpacity))) : 0.45,
    overlaySpeed: Number.isFinite(Number(theme.overlaySpeed)) ? Math.max(0.5, Math.min(3, Number(theme.overlaySpeed))) : 1,
    frame,
    music: String(theme.music || ""),
    clickSound: String(theme.clickSound || ""),
    successSound: String(theme.successSound || ""),
    failSound: String(theme.failSound || ""),
    diceSound: String(theme.diceSound || ""),
    backgroundOpacity: Number.isFinite(Number(theme.backgroundOpacity)) ? Math.max(0, Math.min(1, Number(theme.backgroundOpacity))) : 0.62,
    successAnimation: ["none", "glow", "pulse", "spark"].includes(theme.successAnimation) ? theme.successAnimation : "glow",
    failureAnimation: ["none", "shake", "red-glow", "dim"].includes(theme.failureAnimation) ? theme.failureAnimation : "shake",
    volume: Number.isFinite(volume) ? Math.max(0, Math.min(1, volume)) : 0.35,
    musicVolume: soundVolume(theme.musicVolume, 0.45),
    clickVolume: soundVolume(theme.clickVolume, 1),
    successVolume: soundVolume(theme.successVolume, 1),
    failVolume: soundVolume(theme.failVolume, 1),
    diceVolume: soundVolume(theme.diceVolume, 1),
  };
}

function themePreset(frame) {
  const presets = {
    neutral: { background: "#eef2ee", surface: "#ffffff", text: "#222523", accent: "#0f766e", font: "system" },
    detective: { background: "#1f211d", surface: "#f3ead7", text: "#211b14", accent: "#8a5a1f", font: "serif" },
    mystic: { background: "#171523", surface: "#f1ecff", text: "#211a32", accent: "#6554a8", font: "serif" },
    scifi: { background: "#09151a", surface: "#e8fbff", text: "#0b232b", accent: "#0aa6b5", font: "mono" },
    fantasy: { background: "#21341f", surface: "#fff4d8", text: "#2b2113", accent: "#2f7b4b", font: "fantasy" },
    adventure: { background: "#2b2419", surface: "#fff0cf", text: "#2b2113", accent: "#bd4b42", font: "serif" },
  };
  return presets[frame] || presets.neutral;
}

function validColor(value, fallback) {
  return /^#[0-9a-f]{6}$/i.test(String(value || "")) ? value : fallback;
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLocaleLowerCase("ru-RU")
    .replace(/[^a-zа-я0-9]+/giu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

function puzzlePosition(index, size) {
  const x = index % size;
  const y = Math.floor(index / size);
  const denom = Math.max(1, size - 1);
  return `${(x / denom) * 100}% ${(y / denom) * 100}%`;
}

function rgbaFromHex(value, alpha) {
  const color = validColor(value, "#ffffff").slice(1);
  const opacity = Math.max(0, Math.min(1, Number(alpha)));
  const red = parseInt(color.slice(0, 2), 16);
  const green = parseInt(color.slice(2, 4), 16);
  const blue = parseInt(color.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${Number.isFinite(opacity) ? opacity : 0})`;
}

function fontStack(font) {
  const fonts = {
    system: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
    mono: '"Cascadia Mono", "SFMono-Regular", Consolas, monospace',
    fantasy: '"Trebuchet MS", Georgia, serif',
    modern: '"Segoe UI Variable", Inter, ui-sans-serif, system-ui, sans-serif',
    classic: 'Iowan Old Style, Palatino, "Book Antiqua", Georgia, serif',
    cinematic: 'Optima, Candara, "Segoe UI", ui-sans-serif, sans-serif',
    handwritten: '"Segoe Print", "Bradley Hand ITC", "Comic Sans MS", cursive',
    compact: '"Arial Narrow", "Roboto Condensed", "Segoe UI", sans-serif',
  };
  return fonts[font] || fonts.system;
}

function sceneLabel(scene) {
  const labels = {
    story: "текст",
    dialogue: "диалог",
    answer: "ответ",
    hidden: "скрыто",
    dice: "кубик",
    score: "итог",
    search: "поиск",
    qte: "qte",
    puzzle: "пазл",
    cipher: "шифр",
    ending: "финал",
  };
  return labels[scene.mode] || "текст";
}

function badgeClass(scene) {
  if (scene.mode === "ending") return scene.ending?.tone || "neutral";
  return scene.mode || "story";
}

function showError(error) {
  const title = typeof error === "object" ? error.title || t("noQuestTitle") : t("noQuestTitle");
  const message = typeof error === "object" ? error.message || "" : String(error || "");
  const publicId = typeof error === "object" ? error.publicId || "" : "";
  document.body.classList.remove("is-reader-map-fullscreen");
  document.getElementById("readerStage")?.classList.remove("is-map-fullscreen-stage");
  document.title = `${title} · Quest Engine`;
  document.getElementById("readerTitle").textContent = title;
  document.getElementById("readerStage").innerHTML = `
    <section class="reader-error">
      <div class="reader-error-card">
        <div class="reader-error-icon">${iconSvg("x")}</div>
        <span class="reader-error-kicker">Quest Engine</span>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(message)}</p>
        ${publicId ? `<code>${escapeHtml(publicId)}</code>` : ""}
        ${/^https?:$/i.test(window.location.protocol) ? `<a class="primary-button" href="/">${escapeHtml(t("backToHome"))}</a>` : ""}
      </div>
    </section>
  `;
}

function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || ""}</svg>`;
}

function structuredCloneSafe(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

