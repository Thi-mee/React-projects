import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoApp from '../pages/TodoApp';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator'
import Blog from '../pages/Blog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
