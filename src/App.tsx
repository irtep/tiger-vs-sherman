import { useEffect } from 'react'
import { useTVSContext } from './context/TVScontext';
import Menu from './components/Menu';
import PreBattle from './components/PreBattle';
import Battle from './components/Battle';
import AfterBattle from './components/AfterBattle';
import battleImage from './assets/sultanAldildo.png';

const App: React.FC = (): React.ReactElement => {

  const {
    view
  } = useTVSContext();

  useEffect( () => {
    console.log('view: ', view);
  });

  return (
    <>
        <div
          style={{
            backgroundImage: `url(${battleImage})`,
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
  )
}

export default App
