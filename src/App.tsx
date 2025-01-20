import { useContext } from 'react'
import { TVSProvider } from './context/TVScontext';
import { TVSContext } from './context/TVScontext';
import Menu from './components/Menu';
import PreBattle from './components/PreBattle';
import Battle from './components/Battle';
import AfterBattle from './components/AferBattle';

const App: React.FC = (): React.ReactElement => {

  const {
    view
  } = useContext(TVSContext);

  return (
    <>
      <TVSProvider>
        {
          (view === 'menu')
            ? <Menu/>
            : <></>
        }
        {
          (view === 'preBattle')
            ? <PreBattle/>
            : <></>
        }
        {
          (view === 'battle')
            ? <Battle/>
            : <></>
        }
        {
          (view === 'afterBattle')
            ? <AfterBattle    />
            : <></>
        }
      </TVSProvider>
    </>
  )
}

export default App
