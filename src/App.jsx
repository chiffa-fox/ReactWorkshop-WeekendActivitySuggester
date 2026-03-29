import './App.css';
import Header from './components/Header';
import ActivityList from './components/ActivityList';
import { activities } from './data/activities';

function App() {
    return (
        <div className="app">
            <Header
                title="Weekend Activity Suggester"
                subtitle="A tiny React app that helps you choose what to do this weekend."
            />

            <ActivityList activities={activities} />
        </div>
    );
}

export default App;