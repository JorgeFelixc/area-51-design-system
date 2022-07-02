import type { Component } from 'solid-js';
import Comp from './Comp';
import Button from './components/Button';

const App: Component = () => {
  return (
    <>
      <h1>Hello world!!!!</h1>
      <Comp />
      <Button>Hola</Button>
    </>
  );
};

export default App;
