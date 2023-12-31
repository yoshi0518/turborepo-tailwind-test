export const fallbackLng = 'ja';
export const labels = {
  ja: '日本語',
  en: 'English',
  // zh: '中国語',
};
export const languages = Object.keys(labels);
export const defaultNS = 'index';

export const getOptions = (lng = fallbackLng, ns = defaultNS) => ({
  supportedLngs: languages,
  fallbackLng,
  lng,
  fallbackNS: defaultNS,
  defaultNS,
  ns,
});
