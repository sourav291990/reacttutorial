import logo from './logo.svg';
import './App.css';
import Card from './components/common/Card';
import AddContent from './components/AddContent/AddContent';

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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
      <div className='row'>
        <AddContent></AddContent>
      </div>
      <div className='row'>
        <Card item={item1}></Card>
        <Card item={item2}></Card>
        <Card item={item3}></Card>
      </div>
    </div>
  );
}

export default App;
