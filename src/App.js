
import logo from './logo.svg';
import './App.css';
import {useRoutes} from "react-router-dom";
import routes from "./routes"
// import MyLayout from './MyLayout';

function App() {
  //根据路由表创建路由
  const element = useRoutes(routes)
  return (
      <div >
          {element}
      </div>
     
  );
}
export default App;
