// import componentsImg from "./assets/components.png" => inutile maintenant que l'on importe le fichier data.js

import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx"
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx"


function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
