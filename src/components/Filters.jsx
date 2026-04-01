import Filter from "./Filter.jsx";

function Filters({filters, onFilterChange}) {
    const moodOptions = [
        {value: 'all', label: 'All moods'},
        {value: 'chill', label: 'Chill'},
        {value: 'active', label: 'Active'},
        {value: 'lazy', label: 'Lazy'},
        {value: 'curious', label: 'Curious'},
        {value: 'creative', label: 'Creative'},
        {value: 'social', label: 'Social'}];

    const timeOptions = [
        {value: 'all', label: 'Any time'},
        {value: '15', label: '15 min'},
        {value: '30', label: '30 min'},
        {value: '60', label: 'An hour'}];

    const locationOptions = [
        {value: 'all', label: 'Anywhere'},
        {value: 'inside', label: 'Inside'},
        {value: 'outside', label: 'Outside'}
    ];
    return (
        <section className="filters">
            <h2>Filters</h2>

            <div className="filters-grid">
                <Filter name="mood" value={filters.mood} label="Mood" options={moodOptions} onChange={onFilterChange}/>
                <Filter name="time" value={filters.time} label="Time" options={timeOptions} onChange={onFilterChange}/>
                <Filter name="location" value={filters.location} label="Location" options={locationOptions}
                        onChange={onFilterChange}/>
            </div>
        </section>
    );
}

export default Filters;