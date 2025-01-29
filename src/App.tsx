import { useEffect, useState } from 'react'
import { useTVSContext } from './context/TVScontext';
import Menu from './components/Menu';
import PreBattle from './components/PreBattle';
import Battle from './components/Battle';
import AfterBattle from './components/AfterBattle';
import battleImage from './assets/sultanAldildo.png';

const App: React.FC = (): React.ReactElement => {
  const [bgImage, setBgImage] = useState<string>(`url(${battleImage})`);
  const [bgColor, setBgColor] = useState<string>('');

  const { view } = useTVSContext();

  useEffect(() => {
    console.log('view: ', view);
    if (view === 'battle') {
      setBgColor('rgb(16, 81, 22)');
      setBgImage(''); // Clear the background image
    } else {
      setBgColor('');
      setBgImage(`url(${battleImage})`); // Set the background image
    }
  }, [view]);

  return (
    <>
      <div
        style={{
          backgroundImage: bgImage,
          backgroundColor: bgColor,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }}
      >
        {
          (view === 'menu')
            ? <Menu />
            : <></>
        }
        {
          (view === 'preBattle')
            ? <PreBattle />
            : <></>
        }
        {
          (view === 'battle')
            ? <Battle />
            : <></>
        }
        {
          (view === 'afterBattle')
            ? <AfterBattle />
            : <></>
        }
      </div>
    </>
  );
}

export default App;