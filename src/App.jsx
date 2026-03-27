import './App.css';

const activities = [
    'Go for a walk in the park',
    'Visit a coffee shop',
    'Watch a movie at home',
    'Try a new recipe',
    'Go to a museum',
];

function App() {
    return (
        <div className="app">
            <h1>Weekend Activity Suggester</h1>
            <p>Here are some possible weekend activities:</p>

            <ul>
                {activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;