import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import ActivityList from './components/ActivityList';
import SuggestionCard from './components/SuggestionCard';
import { activities } from './data/activities';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [suggestion, setSuggestion] = useState('');

    const filteredActivities =
        selectedCategory === 'all'
            ? activities
            : activities.filter((activity) => activity.category === selectedCategory);

    function handleSuggestActivity() {
        if (filteredActivities.length === 0) {
            setSuggestion('No activities found for this category.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * filteredActivities.length);
        setSuggestion(filteredActivities[randomIndex].name);
    }

    useEffect(() => {
        setSuggestion('');
    }, [selectedCategory]);

    return (
        <div className="app">
            <Header
                title="Weekend Activity Suggester"
                subtitle="Choose a category and get a random weekend idea."
            />

            <Filters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            <SuggestionCard
                suggestion={suggestion}
                onSuggest={handleSuggestActivity}
            />

            <ActivityList activities={filteredActivities} />
        </div>
    );
}

export default App;