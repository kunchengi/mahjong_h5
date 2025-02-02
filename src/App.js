import { useRoutes } from 'react-router-dom'
import router from '@/router'
import '@/App.scss';

function App() {
  const elements = useRoutes(router);
  return (
    <div className="App">
      {/* 渲染路由 */}
      {elements}
    </div>
  );
}

export default App;
