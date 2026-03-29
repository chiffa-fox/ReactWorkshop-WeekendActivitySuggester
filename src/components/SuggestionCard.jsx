function SuggestionCard({ suggestion, onSuggest, hasMatches }) {
    return (
        <section className="suggestion-card">
            <button onClick={onSuggest} disabled={!hasMatches}>
                Suggest me something
            </button>

            {!hasMatches ? (
                <p className="suggestion-placeholder">
                    No activities match your filters right now.
                </p>
            ) : suggestion ? (
                <article className="suggestion-result">
                    <div className="activity-top-row">
                        <span className="activity-emoji">{suggestion.emoji}</span>
                        <h2>{suggestion.title}</h2>
                    </div>

                    <p>{suggestion.description}</p>

                    <div className="activity-meta">
                        <span>{suggestion.mood}</span>
                        <span>{suggestion.time} min</span>
                        <span>{suggestion.location}</span>
                    </div>
                </article>
            ) : (
                <p className="suggestion-placeholder">
                    Click the button to get a random weekend idea.
                </p>
            )}
        </section>
    );
}

export default SuggestionCard;