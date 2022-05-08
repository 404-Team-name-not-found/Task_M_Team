import "./App.css";

import CommentsSection from "./components/comments/CommentsSection";
function App() {
  return (
    <div className="App">
      <CommentsSection currentUserId="1" />
    </div>
  );
}

export default App;
