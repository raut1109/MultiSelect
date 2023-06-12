import React from 'react';
import MultiSelect from './Components/MultiSelect';

function App() {
  const selectedValues = [1, 2, 3];
  const isReadOnly = false;

  return (
    <div>
      <h1>MultiSelect Component Example</h1>
      <MultiSelect value={selectedValues} readonly={isReadOnly} />
  
      
    </div>
  );
}

export default App;
