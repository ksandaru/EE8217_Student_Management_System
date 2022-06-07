import logo from './logo.svg';
import './App.css';
import Person from "./Person";

const App = ()=> {
    const name = 'Kanishka';
    const isLoggedIn = true;
  return (
      <>
          <div className="App">
              <header className="App-header">
                  <>
                      <h4>My name is {name}</h4>
                      {isLoggedIn ? (
                          <>
                              <h4>He logged in</h4>
                          </>
                      ) : (
                          <>
                              <h4>No loggedin user</h4>
                          </>
                      )}
                      <Person/>
                  </>

              </header>
          </div>
      </>

  );
}

export default App;
