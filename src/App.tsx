import './App.css';
import Router from "./routes/Router.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

function App() {
  return (
    <>
        <Provider store={store}>
            <AuthProvider>
                <Router/>
            </AuthProvider>
        </Provider>
    </>
  )
}

export default App
