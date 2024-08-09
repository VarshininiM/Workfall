import RouterCompo from './Components/Routing/RouterCompo';
import { LoaderProvider } from './Components/LoaderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
   <>
   <LoaderProvider>
    <RouterCompo />
    <ToastContainer />
   </LoaderProvider>
   
   </>
  );
}
export default App;

