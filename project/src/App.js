import './App.css';
import Axiosget from './Day 8/Axiosget';
import DeleteAxios from './Day 8/DeleteAxios';
import AxiosPost from './Day 8/PostAxios';
function App() {
  return (
    <div className='App'>
      <Axiosget />
      <AxiosPost />
      <DeleteAxios />
      {/* <BrowserRouter>
     <ul>
         <li>
             <Link to='/Home'>home</Link>
         </li>
     </ul>
     <ul>
      <li>
        <Link to='/About'>About</Link>
      </li>
     </ul>
     <Navbar/>
     <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
     </Routes>
     </BrowserRouter> */}
      {/* <Front />
      <Footer />
      <Loginpage /> */}
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
