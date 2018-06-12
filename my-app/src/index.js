import React from 'react';
import ReactDOM from 'react-dom';
import Game from './tictac';
import './index.css';
// import { Button, Card, Row, Col } from 'react-materialize';



class App extends React.Component{
  render() {
    return (
      
      <div >
        <nav >
          <div class="nav-wrapper blue lighten-2">
            <a href="" class="brand-logo left">Tic-Tac-Toe</a>
          </div>
        </nav>
          <div class="container">
            <div class="card-panel">
              <div class="row">
                {/* <div class="col s2"></div> */}
            
                <div class="col s12 ">
                <Game />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

} 

  // ========================================
 

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
 
  