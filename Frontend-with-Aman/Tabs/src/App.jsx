import './App.css'
import Tabs from './components/Tabs';

const tabsData = [
  {
    label: "Profile",
    content: <div>Profile Info Content</div>,
  },
  {
    label: "Dashboard",
    content: <div>Dashboard Content</div>,
  },
  {
    label: "Settings",
    content: <div>Settings Content</div>,
  },
  {
    label: "Invoice",
    content: <div>Invoice Content</div>,
  },
]

function App() {

  const onTabChangeHandler = (index) => {
    console.log("Tab Changer");
  };

  return (
    <>

    <Tabs tabsData={tabsData} onChange={onTabChangeHandler} />
    </>
  )
}

export default App;
