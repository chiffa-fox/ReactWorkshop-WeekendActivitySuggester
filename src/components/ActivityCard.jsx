function ActivityCard({ activity }) {
    const { title, description,emoji, mood, time, location} = activity;
    return (
        <article className="activity-item">
            <div className="activity-top-row">
                <span className="activity-emoji">{emoji}</span>
                <h3>{title}</h3>
            </div>

            <p>{description}</p>

            <div className="activity-meta">
                <span>{mood}</span>
                <span>{time} min</span>
                <span>{location}</span>
            </div>
        </article>);
}

export default ActivityCard;