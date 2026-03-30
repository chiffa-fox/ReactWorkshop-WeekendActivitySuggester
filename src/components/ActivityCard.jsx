function ActivityCard({ activity }) {
    const {id, title, description,emoji, mood, time, location} = activity;
    return (
        <article key={id} className="activity-item">
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