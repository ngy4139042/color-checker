import { useState } from 'react';
import './App.css';
import Checker from "./modules/Checker";
import ExampleColors from "./modules/ExampleColors";
import SceneButton from './modules/SceneButton';

export default function App() {
  const [scene, setScene] = useState('Checker');

  if (scene === 'ExampleColors') {
    return (
      <div>
        <SceneButton changeTo={'Checker'} setScene={setScene}>색 확인하러 가기</SceneButton>
        <ExampleColors></ExampleColors>
      </div>
    );
  } else if (scene === 'Checker') {
    return (
      <div>
        <SceneButton changeTo={'ExampleColors'} setScene={setScene}>색 예시 보기</SceneButton>
        <Checker></Checker>
      </div>
    );
  }

  
}
