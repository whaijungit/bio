import { Advantage, CloudCarousel, Cooperation, Hot } from './components'
import { Achievement } from './components/achievement'

const Home: React.FC = () => {
    return (
        <>
            <CloudCarousel />
            <Advantage />
            <Hot />
            <Achievement />
            <Cooperation />
        </>
    )
}

export default Home