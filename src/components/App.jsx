
import './App.css';
import TextArea from './TextArea';
import Navbar from './Navbar';
import Buttons from './Buttons'
import NewPost from './NewPost'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewPost />
      <TextArea />
      <hr/>
      <Buttons />
      <p>Some stuff</p>

    </div>
  );
}

export default App;
