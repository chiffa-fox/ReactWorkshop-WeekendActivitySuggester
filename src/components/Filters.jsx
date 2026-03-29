function Filters({ selectedCategory, onCategoryChange }) {
    return (
        <section className="filters">
            <label htmlFor="category">Choose a category:</label>

            <select
                id="category"
                value={selectedCategory}
                onChange={(event) => onCategoryChange(event.target.value)}
            >
                <option value="all">All</option>
                <option value="outdoor">Outdoor</option>
                <option value="relaxing">Relaxing</option>
                <option value="indoor">Indoor</option>
                <option value="creative">Creative</option>
                <option value="culture">Culture</option>
            </select>
        </section>
    );
}

export default Filters;