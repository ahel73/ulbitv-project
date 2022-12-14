import './style/index.scss';
import { classNames } from '../shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';



const App = () => {

    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [ theme ])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>toggle</button>
        </div>
    )
}
export default App;