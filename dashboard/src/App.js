import Table from './components/Table';
import './App.css';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
        <Grid container>
          <Grid xs={4}>
            <Table />
          </Grid>
          <Grid xs={8}>
            <p>Graph</p>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
