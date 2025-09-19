import react from 'react';
import '../../assets/dashboard.css';
import Card from './card';
import List from './list';
import MaterialCharts from './MaterialCharts';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Dashboard = () => (
  <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
    {/* Main content */}
    <div className="h-screen flex-grow-1 overflow-y-lg-auto">
      {/* Header */}
      <header className="bg-surface-primary border-bottom" style={{ padding: '5px 10px 12px' }}>
        <div className="container-fluid">
          <div className="mb-npx">
            <div className="row align-items-center justify-content-start text-start">
              <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                {/* Title */}
                <h1 className="h2 mb-0 ls-tight">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main */}
      <main className="py-6 bg-surface-secondary">
        <div className="container-fluid">
          {/* Card stats */}
          <Card />  
          {/* Charts */}
          <MaterialCharts />      
          {/* Table */}
          <List />

        </div>
      </main>
    </div>
  </div>
);

export default Dashboard;