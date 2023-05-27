import './App.css';

import Modal  from "./lib";

function App() {
  return (
    <Modal isVisible={false} header="Modal Header" body="myModal" displayButton={true} />
  );
}

export default App;
