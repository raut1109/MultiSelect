import './App.css';
 
import MultiSelect from './Components/MultiSelect';

function App() {

  return (
    <div className="flex justify-center ">
 
      <MultiSelect value={[1, 2, 3]} readonly={true} />
    </div>
  );
}

export default App;
