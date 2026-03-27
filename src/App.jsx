import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ActivityList from './components/ActivityList';
import SuggestionCard from './components/SuggestionCard';
import { activities } from './data/activities';

function App() {
    const [suggestion, setSuggestion] = useState('');

    function handleSuggestActivity() {
        const randomIndex = Math.floor(Math.random() * activities.length);
        setSuggestion(activities[randomIndex].name);
    }

    return (
        <div className="app">
            <Header
                title="Weekend Activity Suggester"
                subtitle="A small React app to help you find a fun weekend idea."
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