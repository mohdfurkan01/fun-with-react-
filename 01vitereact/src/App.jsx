import Coffee from "./coffee";

function App() {
  const username = "Talha Anjum";

  return (
    <>
      <Coffee />
      <h1>Vite basic project!</h1>
      <h3>Sigma Rapper {username} </h3>

      {/* Expression vs Evaluated Expression
      Expression: The code itself ({username}).

      Evaluated Expression: The result of the code after execution ("Talha Anjum").

      It's like writing a math problem:

      Expression: 2 + 2.
      Evaluated Expression: 4.  
      
      */}
    </>
  );
}

export default App;
