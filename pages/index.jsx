import Main from '../components/layout/main';
import Hero from '../components/landing/hero';
import Feature from '../components/landing/feature';
import About from '../components/landing/about';
import pjson from '../package.json';

export default function Home() {

    return (
        <Main title={pjson.displayName}>
            <Hero />
            <Feature />
            <About />
        </Main>
    );
}
