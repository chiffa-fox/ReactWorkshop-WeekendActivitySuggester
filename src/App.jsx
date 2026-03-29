import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import ActivityList from './components/ActivityList';
import SuggestionCard from './components/SuggestionCard';
import { activities } from './data/activities';

function App() {
    const [filters, setFilters] = useState({
        mood: 'all',
        time: 'all',
        location: 'all',
    });

    const [suggestion, setSuggestion] = useState(null);

    function handleFilterChange(name, value) {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    }

    const filteredActivities = activities.filter((activity) => {
        const matchesMood =
            filters.mood === 'all' || activity.mood === filters.mood;

        const matchesTime =
            filters.time === 'all' || activity.time === filters.time;

        const matchesLocation =
            filters.location === 'all' || activity.location === filters.location;

        return matchesMood && matchesTime && matchesLocation;
    });

    function handleSuggestActivity() {
        if (filteredActivities.length === 0) {
            setSuggestion(null);
            return;
        }

        const randomIndex = Math.floor(Math.random() * filteredActivities.length);
        setSuggestion(filteredActivities[randomIndex]);
    }

    useEffect(() => {
        setSuggestion(null);
    }, [filters]);

    return (
        <div className="app">
            <Header
                title="Weekend Activity Suggester"
                subtitle="Pick your mood, available time, and location."
            />

            <Filters filters={filters} onFilterChange={handleFilterChange} />

            <SuggestionCard
                suggestion={suggestion}
                onSuggest={handleSuggestActivity}
            />

            <ActivityList activities={filteredActivities} />
        </div>
    );
}

export default App;