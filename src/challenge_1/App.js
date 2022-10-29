import logo from './logo.svg';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

//cssは impoort 'パス'でうめこむ

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