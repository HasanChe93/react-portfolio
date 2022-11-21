import './App.css';
import Content from './content';
import Footer from './footer';



import Navbar from './navbar';


function App() {
  return (
    <div className="App">

<Navbar/>

<Content test="Prop-Test" color="blue"/>
<Footer/>
</div>
    );
}

export default App;
