import React, { useState } from 'react';
import MainSection from './components/MainSection';
import SuccessOverlay from './components/SuccessOverlay';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleYes = () => {
    setShowSuccess(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#E1280B]">
      <MainSection onYes={handleYes} />
      
      {showSuccess && <SuccessOverlay onClose={() => setShowSuccess(false)} />}
    </div>
  );
}

export default App;
