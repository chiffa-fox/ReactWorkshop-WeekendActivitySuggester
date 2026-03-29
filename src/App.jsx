import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ActivityList from './components/ActivityList';
import SuggestionCard from './components/SuggestionCard';
import { activities } from './data/activities';

function App() {
    const [suggestion, setSuggestion] = useState(null);

    function handleSuggestActivity() {
        const randomIndex = Math.floor(Math.random() * activities.length);
        setSuggestion(activities[randomIndex]);
    }

    return (
        <div className="app">
            <Header
                title="Weekend Activity Suggester"
                subtitle="A tiny React app that helps you choose what to do this weekend."
            />

            <SuggestionCard
                suggestion={suggestion}
                onSuggest={handleSuggestActivity}
            />

            <ActivityList activities={activities} />
        </div>
    );
}

export default App;