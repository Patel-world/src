import logo from './logo.svg';
import './App.css';
import './static/spline.css';
import Spline from '@splinetool/react-spline';
import Header from './components/Header';
import Main from './components/Main';



function App() {
  return (
    <>
    <Header/>
        
    <Spline scene="https://prod.spline.design/AxDVJGdNbKqLlVbe/scene.splinecode" />

    <Main/>
    </>
  );
}

export default App;
//<Spline scene="https://prod.spline.design/GY5N9MrvNiEkEH9H/scene.splinecode" />

//this one
//