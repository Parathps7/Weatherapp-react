import './App.css';
import Weather from './Components/Weather/Weather';
import Time_date from './Components/Time_date/Time_date'


function App() {
  return (
    <>
		<div className='main-container'>
			<Weather />
			<Time_date />
		</div>
    </>
  );
}

export default App;
