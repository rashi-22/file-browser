import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import FileBrowser from "./components/FileBrowser";
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>  
        <Route exact path={'/'} element={<FileBrowser />}>
          <Route path={'/*'} element= {<Content />} />
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
