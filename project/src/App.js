import './App.css';
import PropsValidation from './Day 6/PropsValidation'
import ClickCount from './Day 6/ClickCount'
import HoverCounter from './Day 6/HoverCounter'
import SpreadPassingUnkown from './Day 6/SpreadPassingUnkown';
import './Sample/Fr.css';
import RefEc from './Day 6/RefEc';
import UseState from './Day 6/UseState';
import Loginpage from './Login/LoginPage';
function App() {
  return (
    <div className='App'>
      <Loginpage />
      {/* <ClickCount />
      <HoverCounter />
      <PropsValidation student={"12"} />
      <SpreadPassingUnkown title1="SKCET" type="password" placeholder="Enter Password" id="i" />
      <RefEc />
      <UseState /> */}
      {/* <ErrorBoundary>
        <Name name={"Harish"}/>
        <Name name={"Akash"}/>
      </ErrorBoundary> */}
      {/* <TryCatch name="Harish"/>
      <TryCatch name="Akash"/>
      <ComponentUpdate /> */}
    </div>
  );
}
export default App;
