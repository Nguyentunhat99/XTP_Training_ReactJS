//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  <div className='container'>
    <div>
        <h2>Todos</h2>
    </div>
      <div className='part_1'>
          <div className='title_addTask'>
              <h3>Add a task</h3>
          </div>
          <div className='add_Task'>
              <div className='item'>
                  <label>Item</label>
              </div>
              <div>
                  <input className='content' type='text' placeholder='What do you want to do?'></input>
              </div>
              <div id='note'>
                  <span>Enter what you want to procastinat</span>
              </div>
              <div className='submit'>
                  <button type='submit'>Submit</button>
              </div>
          </div>
      </div>
      <div className='part_2'>
          <div className='title_List'>
              <h3>Tasks</h3>
          </div>
          <div className='list'>
          <div className='thead'>
              <thead>
                  <th id='item'><label>Item</label></th>
                  <th id='status'><label>Status</label></th>
                  <th id='action'><label>Action</label></th>
              </thead>
              </div>
              <div className='tbody'>
              <tbody>
              <div className='todo_list'>
                <tr>
                  <th><label>Buy Benz</label></th>
                  <th><label>Not Complete</label></th>
                  <th>
                      <button id='complete'>Complete</button>
                      <button id='delete'>Delete</button>
                  </th>
                </tr>
                </div> 
                <div className='todo_list'>
                <tr>
                  <th><label>Buy Benz</label></th>
                  <th><label>Not Complete</label></th>
                  <th>
                      <button id='complete'>Complete</button>
                      <button id='delete'>Delete</button>
                  </th>
                </tr>
                </div> 
              </tbody>
              </div>
          </div>
      </div>
  </div>  
  );
}

export default App;
