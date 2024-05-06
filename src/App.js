
import "./App.css";
import Counter from "./features/counter/Counter";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <>
      <div className=" bg-green-700 flex justify-center font-bold text-3xl">
        {/* <Counter /> */}
      </div>
      <div>
        <PostList/>
      </div>
    </>
  );
}

export default App;
