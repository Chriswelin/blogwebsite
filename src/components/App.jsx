
import './App.css';
import TextArea from './TextArea';
import Navbar from './Navbar';
import Buttons from './Buttons';
import NewPost from './NewPost';
import Posts from './Posts';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewPost />
      <ul className="list-group">
      {Posts.map( (post) => {
        return <Post key={post.id} text={post.text} />
      })}
       </ul>
      <Buttons />


    </div>
  );
}

export default App;
