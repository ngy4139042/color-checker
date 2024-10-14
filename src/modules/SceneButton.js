import './SceneButton.css';

export default function SceneButton({children, changeTo, setScene}) {
  const changeScene = (e) => {
    setScene(changeTo);
  }
  
  return <button onClick={changeScene}>{children}</button>
}