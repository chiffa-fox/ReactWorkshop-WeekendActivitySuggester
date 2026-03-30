import ActivityCard from "./ActivityCard.jsx";

function ActivityList({activities}) {
    return (
        <section className="activity-list">
            <h2>Available ideas</h2>

            {activities.length === 0 ? (
                <p>No activities match these filters yet.</p>
            ) : (
                <div className="activity-grid">
                    {activities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ActivityList;