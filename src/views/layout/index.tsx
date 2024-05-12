import './index.less'
import Section from './section';
import Navbar from './navbar';

const Layout: React.FC = () => {
    return (
        <>
            <header className='header'>
                <Navbar />
            </header>
            <Section></Section>
        </>
    )
}

export default Layout;
