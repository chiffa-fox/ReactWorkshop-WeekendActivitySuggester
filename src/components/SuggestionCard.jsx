function SuggestionCard({ suggestion, onSuggest }) {
    return (
        <section className="suggestion-card">
            <button onClick={onSuggest}>Suggest an activity</button>

            {suggestion ? (
                <h2>{suggestion}</h2>
            ) : (
                <p>Click the button to get a random activity.</p>
            )}
        </section>
    );
}

export default SuggestionCard;