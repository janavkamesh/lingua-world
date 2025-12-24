export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸', locale: 'en-US' },
  { code: 'ta', name: 'Tamil', flag: '🇮🇳', locale: 'ta-IN' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸', locale: 'es-ES' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳', locale: 'hi-IN' },
  { code: 'fr', name: 'French', flag: '🇫🇷', locale: 'fr-FR' },
  { code: 'de', name: 'German', flag: '🇩🇪', locale: 'de-DE' }
];

export const translateText = async (text, sourceLang, targetLang) => {
  if (!text || text.trim().length < 2) return '';
  
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.responseStatus === 200) {
      return data.responseData.translatedText;
    } else {
      // Fallback if API gives a warning but still provides text
      return data.responseData.translatedText || "Translation unavailable"; 
    }
  } catch (error) {
    console.error("Translation Error:", error);
    return "Error: Check connection";
  }
};