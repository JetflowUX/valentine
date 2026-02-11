import React, { useEffect, useMemo, useState } from 'react';
import MainSection from './components/MainSection';
import SuccessOverlay from './components/SuccessOverlay';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [recipientName, setRecipientName] = useState('');
  const [inputName, setInputName] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const handleYes = () => {
    setShowSuccess(true);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get('name');

    if (nameParam && nameParam.trim()) {
      const decodedName = nameParam.trim();
      setRecipientName(decodedName);
      setShowMain(true);
    } else {
      setShowMain(false);
    }
  }, []);

  const shareUrl = useMemo(() => {
    const trimmedName = inputName.trim();
    if (!trimmedName) {
      return '';
    }
    return `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(trimmedName)}`;
  }, [inputName]);

  const handleCopyLink = async () => {
    if (!shareUrl) {
      return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus('Copied!');
    } catch (error) {
      setCopyStatus('Copy failed.');
    }

    setTimeout(() => setCopyStatus(''), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#E1280B]">
      {showMain ? (
        <MainSection name={recipientName} onYes={handleYes} />
      ) : (
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-xl text-center">
            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Create your Valentine link
              </h1>
              <p className="text-white/80 text-sm sm:text-base mb-6">
                Enter their name and share the link so the page opens with it personalized.
              </p>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={inputName}
                  onChange={(event) => setInputName(event.target.value)}
                  placeholder="Their name"
                  className="w-full rounded-full px-5 py-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />

                <div className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-left">
                  <p className="text-xs text-white/70 mb-1">Share link</p>
                  <p className="text-sm text-white break-all">
                    {shareUrl || 'Add a name to generate a link'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    disabled={!shareUrl}
                    className="flex-1 px-6 py-3 rounded-full bg-white text-[#E1280B] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all"
                  >
                    Copy link
                  </button>
                  <a
                    href={shareUrl || '#'}
                    className={`flex-1 px-6 py-3 rounded-full border border-white text-white font-semibold text-center transition-all ${
                      shareUrl ? 'hover:bg-white/10' : 'opacity-50 pointer-events-none'
                    }`}
                  >
                    Open preview
                  </a>
                </div>

                {copyStatus && (
                  <p className="text-xs text-white/80">{copyStatus}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {showSuccess && <SuccessOverlay onClose={() => setShowSuccess(false)} />}
    </div>
  );
}

export default App;
