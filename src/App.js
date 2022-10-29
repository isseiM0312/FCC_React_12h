import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
        <img src={logo} width = "400px"></img>
        </nav>
      </header>
       <h1>Reasons I'm excited to learn React</h1>
       <ol>
        <li>It's a popular library, so I'l be able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
       </ol>
       <footer>
        <small>© 2021 Issei dev.</small> 
       </footer>
    </div>
   
  );
}

export default App;

//navはページ内リンク
//olは番号の箇条書き