import './App.css'
import FileUpload from './fileUpload'

function App() {
  

  return (
    <>
      <div className="main-header">
        <h2>BG-REMOVE</h2>
        <button className="main-cta"><a>Login</a></button>
      </div>

      <div className="main-text">
        <h2>Free Background Remover</h2>
        <p>Free simple background remover. 
            Try it Today</p>
      </div>

     <div className='drag-drop-container'>
     <div className='drag-drop-box'>
        <div className="dotted-border">
          <FileUpload/ >
          </div>
        
      </div>
     </div>
    </>
  )
}

export default App;
