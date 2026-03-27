import './App.css';
import Header from './components/Header';
import ActivityList from './components/ActivityList';
import { activities } from './data/activities';

function App() {
    return (
        <div className="app">
            <Header
                title="Weekend Activity Suggester"
                subtitle="A small React app to help you find a fun weekend idea."
            />

            <ActivityList activities={activities} />
        </div>
    );
}

export default App;