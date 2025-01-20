import { useContext } from 'react'
import { TVSProvider } from './context/TVScontext';
import { TVSContext } from './context/TVScontext';
import Menu from './components/Menu';
import PreBattle from './components/PreBattle';
import Battle from './components/Battle';
import AfterBattle from './components/AferBattle';
import battleImage from './assets/sultanAldildo.png';

const App: React.FC = (): React.ReactElement => {

  const {
    view
  } = useContext(TVSContext);

  return (
    <>
      <TVSProvider>
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
      </TVSProvider >
    </>
  )
}

export default App
