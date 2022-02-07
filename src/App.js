import Wrapper from './components/Wrapper/index.tsx';
import { Provider } from 'react-redux';
import store from '../src/Redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App" style={{ height: '100vh', width: '100vw' }}>
				<Wrapper />
			</div>
		</Provider>
	);
}

export default App;
