import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import ActivityList from './components/ActivityList';
import { activities } from './data/activities';

function App() {
    const [filters, setFilters] = useState(() => {
        const savedFilters = localStorage.getItem("filters");

        return savedFilters
            ? JSON.parse(savedFilters)
            : {
                mood: "all",
                time: "all",
                location: "all"
            };
    });

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

    useEffect(() => {
        localStorage.setItem("filters", JSON.stringify(filters));
    }, [filters]);

    return (
        <div className="app">
            <Header
                title="Weekend Activity Suggester"
                subtitle="Pick your mood, available time, and location."
            />

            <Filters filters={filters} onFilterChange={handleFilterChange} />

            <ActivityList activities={filteredActivities} />
        </div>
    );
}

export default App;