import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from './themes/default.theme';
import AutoCompleteWrapper from './components/AutoCompleteWrapper';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <AutoCompleteWrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;
