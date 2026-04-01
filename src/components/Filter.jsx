export default function Filter({name, value, label, options, onChange}) {
    return (
        <div className="filter-group">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                value={value}
                onChange={(event) => onChange(name, event.target.value)}
            >
                {options?.map(option => (<option value={option.value}>{option.label}</option>))}
            </select>
        </div>)
}