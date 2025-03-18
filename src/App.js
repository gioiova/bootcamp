import "./App.css";
import Header from "./Header";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
