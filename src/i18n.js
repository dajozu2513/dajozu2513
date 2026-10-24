import { content, LANGUAGES, DEFAULT_LANGUAGE } from './content.js';

// Same key as the inline script in index.html that prevents a flash of the wrong language.
const STORAGE_KEY = 'portfolio-lang';

let current = DEFAULT_LANGUAGE;
const listeners = new Set();

function readStoredLanguage() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(value) ? value : null;
  } catch {
    return null;
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage unavailable (private mode, blocked site data): the choice lasts for this visit only.
  }
}

function lookup(lang, key) {
  return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), content[lang]);
}

// Returns the text for `key` in the active language. A missing entry renders a visible
// marker instead of silently falling back, so gaps in the content are easy to spot.
export function t(key) {
  const value = lookup(current, key);
  return value ?? `[missing ${current}: ${key}]`;
}

// Returns structured content (lists, objects) for `key` in the active language, or null if missing.
export function data(key) {
  return lookup(current, key) ?? null;
}

export function getLanguage() {
  return current;
}

// Calls `listener(lang)` after every language change; returns an unsubscribe function.
export function onLanguageChange(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Translates static markup: data-i18n="key" sets the text, and
// data-i18n-attr="aria-label:key; title:key" sets attributes.
export function applyTranslations(root = document) {
  for (const el of root.querySelectorAll('[data-i18n]')) {
    el.textContent = t(el.dataset.i18n);
  }

  for (const el of root.querySelectorAll('[data-i18n-attr]')) {
    for (const pair of el.dataset.i18nAttr.split(';')) {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    }
  }
}

function applyDocument() {
  document.documentElement.lang = current;
  document.title = t('meta.title');
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));

  for (const button of document.querySelectorAll('.lang-toggle [data-lang]')) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === current));
  }

  applyTranslations();
  document.documentElement.classList.remove('i18n-pending');
}

export function setLanguage(lang) {
  if (!LANGUAGES.includes(lang)) return;
  const changed = lang !== current;
  current = lang;
  storeLanguage(lang);
  applyDocument();
  if (changed) {
    for (const listener of listeners) listener(current);
  }
}

export function initI18n() {
  current = readStoredLanguage() ?? DEFAULT_LANGUAGE;
  applyDocument();

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.lang-toggle [data-lang]');
    if (button) setLanguage(button.dataset.lang);
  });
}
