import MyInput from "./UI/inputs/MyInput"
import SortSelect from "./UI/selects/SortSelect"



const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				placeholder='Search...'
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>

			<SortSelect
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				value={filter.sort}
				defaultValue='Sort by'
				disabled
				options={[
					{ value: 'title', name: 'Title' },
					{ value: 'body', name: 'Description' }
				]} />



		</div>
	)
}

export default PostFilter