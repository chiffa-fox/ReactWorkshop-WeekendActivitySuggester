function Filters({ filters, onFilterChange }) {
    return (
        <section className="filters">
            <h2>Filters</h2>

            <div className="filters-grid">
                <div className="filter-group">
                    <label htmlFor="mood">Mood</label>
                    <select
                        id="mood"
                        value={filters.mood}
                        onChange={(event) => onFilterChange('mood', event.target.value)}
                    >
                        <option value="all">All moods</option>
                        <option value="chill">Chill</option>
                        <option value="active">Active</option>
                        <option value="lazy">Lazy</option>
                        <option value="curious">Curious</option>
                        <option value="creative">Creative</option>
                        <option value="social">Social</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="time">Time</label>
                    <select
                        id="time"
                        value={filters.time}
                        onChange={(event) => onFilterChange('time', event.target.value)}
                    >
                        <option value="all">Any time</option>
                        <option value="15">15 min</option>
                        <option value="30">30 min</option>
                        <option value="60">60 min</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="location">Location</label>
                    <select
                        id="location"
                        value={filters.location}
                        onChange={(event) => onFilterChange('location', event.target.value)}
                    >
                        <option value="all">Anywhere</option>
                        <option value="inside">Inside</option>
                        <option value="outside">Outside</option>
                    </select>
                </div>
            </div>
        </section>
    );
}

export default Filters;