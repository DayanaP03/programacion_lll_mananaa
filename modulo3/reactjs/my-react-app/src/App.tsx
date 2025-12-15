/*
import HelloWorld from './components/HelloWorld';
import WelcomeUser from './components/WelcomeUser';
import ButtonCounter from './components/ButtonCounter';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import ShowDate from './components/ShowDate';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <>
      <HelloWorld />
      <WelcomeUser />
      <ButtonCounter />
      <TextInput />
      <ToggleMessage />
      <ShowDate />
      <ColorBox />
      <ConditionalText />
      <EmojiList />
      <SimpleForm />
    </>
  );
}

export default App; */

/*
import Greeting from './Props/Greeting';
import UserCard from './Props/UseCard';
import PromedioTresNotasForm from './components/PromedioTresNotasForm';

function App() {

  const userData = { name: 'Alexander', age: 30, address: 'Calle Falsa 123', phone: '1234567890' };
  return (
    <>
      <Greeting name="Alexander" />
      <Greeting name="Axel" />
      <PromedioTresNotasForm />
      <UserCard user={userData} />
    </>
  );
}

export default App;
*/

/*
import ParentButtonOne from './Props/ParentButtonOne';

function App() {
  return (
    <>
      <ParentButtonOne />
    </>
  );
}
export default App;
*/

/*
import ParentIncrementButton from './Props/ParentIncrementButton';

function App() {
  return (
    <>
      <ParentIncrementButton />
    </>
  );
}
export default App;
*/

/*import ParentInputNotifier from './Props/ParentInputNotifier';
import ParentUserList from './Props/ParentUserList';

import ParentLoginForm from './Props/ParentLoginForm';

function App() {
  return (
    <>
      <ParentInputNotifier />
      <ParentUserList />
      <ParentLoginForm />
    </>
  );
}
export default App;*/



import AccessWithLimit from './useState/AccessWithLimit';
import HoverFont from './useState/HoverFont';
import LoginWithLimit from './useState/LoginWithLimit';
import PostLikes from './useState/PostLikes';
import LanguageSwitcher from './useState/LanguageSwitcher';
import MultiSwitch from './useState/MultiSwitch';
import DinamicColor from './useState/DynamicColor';
import ClickHistory from './useState/ClickHistory';
import LogEffect from './useEffect/LogEffect';
import FetchUser from './useEffect/FetchUser';
import Clock from './useEffect/Clock';
import ScrollLogger from './useEffect/ScrollLogger';
import DynamicTitle from './useEffect/DynamicTitle';


function App() {
  return (
    <>
    <HoverFont/>
    <AccessWithLimit/>
    <LoginWithLimit/>
    <PostLikes/>
    <LanguageSwitcher/>
    <MultiSwitch/>
    <DinamicColor/>
    <ClickHistory/>
    <LogEffect/>
    <FetchUser/>
    <Clock/>
    <ScrollLogger/>
    <DynamicTitle/>


    </>
  );
}


export default App;


