import ActivityCard from "./ActivityCard.jsx";

function ActivityList({ activities }) {
    return (
        <section className="activity-list">
            <h2>All weekend ideas</h2>

            <div className="activity-grid">
                {activities.map((activity) => (
                    <ActivityCard activity={activity} />
                ))}
            </div>
        </section>
    );
}

export default ActivityList;