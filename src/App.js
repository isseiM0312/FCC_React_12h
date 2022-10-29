import logo from './logo.svg';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css';



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