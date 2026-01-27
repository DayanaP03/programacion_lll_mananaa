import { BrowserRouter } from 'react-router-dom' 
import BsNavbar from './components/bs/BsNavbar'
import BsFeatures from './components/bs/BsFeatures'
import BsHero from './components/bs/BsHero'
import BsFooter from './components/bs/BsFooter'
import BsNewsletter from './components/bs/BsNewsletter'



export default function App()
{
  return (
    <BrowserRouter>
      <BsNavbar />
      <BsFeatures/>
      <BsHero/>
      <BsFooter />
      <BsNewsletter/>

    </BrowserRouter>
  );
}


