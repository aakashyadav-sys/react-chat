import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { GoogleAuthProvider , signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from 'react-bootstrap';

export const TextLinkExample =() => {
  const [user] =  useAuthState(auth); 
  console.log(user);


  const googleSign = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    console.log('hello')

  };

  const signOut = () => {
    console.log('hello')
    auth.signOut();
  }

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
         {user ?
          <Button onClick={() =>signOut()}>
          Sign Out
          </Button>
         
         :  <Button onClick={() =>googleSign()}>
          Sign In
          </Button>  }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
