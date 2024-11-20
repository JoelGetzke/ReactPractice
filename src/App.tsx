import Alert from "./components/alert";
import Button from "./components/button";

function App() {
  return (
    <div>
   <Alert>
   Hello <span>World</span>
   </Alert>
   <Button onClick={() => console.log('Clicked')}>Click me</Button>
    </div>
    
  );
}

export default App;
