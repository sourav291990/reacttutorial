import logo from './logo.svg';
import './App.css';
import Card from './components/common/Card';
import AddContent from './components/AddContent/AddContent';
import Login from './components/login/login';

function App() {
  const item1 = {
    header: "header 1",
    body: "This is a bodyy content for card 1",
  };
  const item2 = {
    header: "header 2",
    body: 'This is a bodyy content for card 2',
  };
  const item3 = {
    header: "header 3",
    body: 'This is a bodyy content for card 3',
  };
  return (
    <div className="App">
      <Login></Login>
      {/* <div className='row'>
        <AddContent></AddContent>
      </div>
      <div className='row'>
        <Card item={item1}></Card>
        <Card item={item2}></Card>
        <Card item={item3}></Card>
      </div> */}
    </div>
  );
}

export default App;
