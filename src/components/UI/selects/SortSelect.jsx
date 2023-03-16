


import classes from './SortSelect.module.css'

const SortSelect = ({ options, defaultValue, value, onChange }) => {
	return (
		<div>
			<select value={value} onChange={e => onChange(e.target.value)} className={classes.mySelect}>
				<option disabled >{defaultValue}</option>
				{options.map(option =>
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				)}
			</select>
		</div>
	)
}

export default SortSelect