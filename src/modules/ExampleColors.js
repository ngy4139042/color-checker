import './ExampleColors.css';
import colorlist from '../data/colorlist';

export default function ExampleColors() {
  return <ul className='example-colors'>
    {colorlist.map((color) => {
      return <div>
        <li className='example-color'>
        <div className='preview' style={{backgroundColor: color.hex}}></div>
          <div>
            <span>{`[${color.name}]`}</span>
            <span className='example-color-hex'>{color.hex}</span>
          </div>
        </li>
    </div>
    })}
  </ul>
}