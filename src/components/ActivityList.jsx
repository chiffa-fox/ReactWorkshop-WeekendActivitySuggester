function ActivityList({ activities }) {
    return (
        <section className="activity-list">
            <h2>Available activities</h2>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>
                        {activity.name} <span>({activity.category})</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ActivityList;