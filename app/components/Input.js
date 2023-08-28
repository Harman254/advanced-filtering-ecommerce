

export default function Input({ handleChange, value, title, name, color}) {
  return (
    <label className="sidebar-label-container">
        <input onChange={handleChange} value={value} name={name} type="radio" />
        <span style={{backgroundColor: color}} className="checkmark"></span>{title}
      </label>
  )
}
