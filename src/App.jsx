import { TextLinkExample } from "./components/TestLinkExample"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
/**
 * The main App component, which renders a TextLinkExample component
 */
function App() {

  const [user] = useAuthState(auth);

  
  return (
    <>
    <TextLinkExample />
    {user ?  <> Welcom </> :<></>  }
    </>
  )
}

export default App
