import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <div>
      <header>
        <nav className='nav'>
        <img className='nav-logo' src={logo}></img>
        <ul className='nav-item'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </nav>
    </header>
    </div>
  )
}

function MainContent() {
  return(
    <div>
       <h1>Reasons I'm excited to learn React</h1>
       <ol>
        <li>It's a popular library, so I'l be able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
       </ol>
    </div>
  )
}

function Footer() {
  return(
    <div>
      <footer>
        <small>© 2021 Issei dev.</small> 
       </footer>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
       <Footer />
    </div>
   
  );
}

export default App;

//navはページ内リンク
//olは番号の箇条書き
//関数は<App / >のようにhmtlタグでやるとrenderされる