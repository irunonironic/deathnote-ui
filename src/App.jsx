import React from 'react';
import Black from './Components/Black'
import White from './Components/White';
import Ryuk from './Components/Ryuk';
const App = () => {
  return (
    <div className="relative flex h-screen w-screen overflow-hidden">
      <Black />
      <Ryuk />
      <White />
    </div>
  );
};

export default App;
