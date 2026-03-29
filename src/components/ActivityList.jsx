function ActivityList({activities}) {
    return (
        <section className="activity-list">
            <h2>Matching ideas</h2>

            {activities.length === 0 ? (
                <p>No activities match these filters yet.</p>
            ) : (
                <div className="activity-grid">
                    {activities.map((activity) => (
                        <article key={activity.id} className="activity-item">
                            <div className="activity-top-row">
                                <span className="activity-emoji">{activity.emoji}</span>
                                <h3>{activity.title}</h3>
                            </div>

                            <p>{activity.description}</p>

                            <div className="activity-meta">
                                <span>{activity.mood}</span>
                                <span>{activity.time} min</span>
                                <span>{activity.location}</span>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default ActivityList;