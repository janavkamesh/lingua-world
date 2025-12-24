import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';
import InputCard from '../components/InputCard';
import OutputCard from '../components/OutputCard';
import MicButton from '../components/MicButton';
import VaultHistory from '../components/VaultHistory';
import { useSpeech } from '../hooks/useSpeech';
import { translateText, LANGUAGES } from '../utils/translate';

const Home = () => {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('ta');
  const [translatedText, setTranslatedText] = useState('');
  const [history, setHistory] = useState([]);

  const currentLocale = LANGUAGES.find(l => l.code === sourceLang)?.locale || 'en-US';
  const { isListening, transcript, toggleListening, setTranscript } = useSpeech(currentLocale);

  useEffect(() => {
    const saved = localStorage.getItem('lingua_v3_vault');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (transcript) {
        const result = await translateText(transcript, sourceLang, targetLang);
        setTranslatedText(result);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [transcript, sourceLang, targetLang]);

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setTranscript('');
    setTranslatedText('');
  };

  const saveToVault = () => {
    if (!transcript || !translatedText) return;
    const newEntry = { id: Date.now(), en: transcript, tr: translatedText, src: sourceLang, tgt: targetLang };
    const updatedHistory = [newEntry, ...history].slice(0, 15);
    setHistory(updatedHistory);
    localStorage.setItem('lingua_v3_vault', JSON.stringify(updatedHistory));
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center py-12 px-4 font-sans selection:bg-primary selection:text-black">
      {/* Background Animation */}
      <div className="bg-blob">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="blob-3"></div>
      </div>

      <div className="w-full max-w-lg relative z-10 flex flex-col items-center">
        <Header />
        
        <LanguageSelector 
          sourceLang={sourceLang} targetLang={targetLang} 
          setSource={setSourceLang} setTarget={setTargetLang} 
          onSwap={handleSwap} 
        />
        
        {/* Main Translator Area */}
        <div className="w-full relative animate-float">
          <InputCard text={transcript} isListening={isListening} langCode={sourceLang} />
          <MicButton isListening={isListening} onToggle={toggleListening} />
          <OutputCard translatedText={translatedText} langCode={targetLang} onSave={saveToVault} />
        </div>

        <VaultHistory history={history} />
      </div>
    </div>
  );
};

export default Home;