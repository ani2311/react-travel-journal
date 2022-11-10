import logo from './logo.svg';
import './App.css';
import Head from './components/Head.js';
import ArticleList from './components/ArticleList.js';

function App() {
  return (
    <div className="App">
      <Head />
      <ArticleList />
    </div>
  );
}

export default App;
