import DataGrid from "./components/DataGrid.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <DataGrid
        columns={[
          {label: 'Name', key: 'name', type: 'string'},
          {label: 'Date', key: 'date', type: 'date'},
          {label: 'Category', key: 'category', type: 'string'},
          {label: 'Amount', key: 'amount', type: 'number'},
          {label: 'Created At', key: 'created_at', type: 'date'}
        ]}
        dataAPI="https://us-central1-fir-apps-services.cloudfunctions.net/transactions"
      />
    </div>
  );
}

export default App;
