function ActivityList({ activities }) {
    return (
        <section className="activity-list">
            <h2>Available activities</h2>

            {activities.length === 0 ? (
                <p>No activities in this category yet.</p>
            ) : (
                <ul>
                    {activities.map((activity) => (
                        <li key={activity.id}>
                            {activity.name} <span>({activity.category})</span>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default ActivityList;