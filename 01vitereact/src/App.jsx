import Test from "./example"


function App() {
  
const username = 'Bobby'  // to use this variable we have to use {} in html
  return (
    // <Test/> 
    // <h1></h1>   //JSX must return only ONE parent element

    //or

  //    <div>  // here div is single element
  //   <h1>Hello</h1>
  //   <p>Welcome</p>
  // </div>


  // <div>
  //   <Test/>
  //   <h1>Hello</h1>
  //   <p>Welcome</p>
  // </div>

  <>  
    <Test/>
    <h1>Hello {username}</h1>   
    <p>Welcome</p>
  </>
  // this is called fragment
  )
}

export default App


// The tag <test> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
// file name should be .jsx