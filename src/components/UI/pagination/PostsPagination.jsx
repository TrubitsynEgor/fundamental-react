import { getPagesArray } from "../../../utils/pages"



const PostsPagination = ({ totalPages, page, changePage }) => {

	let pagesArray = getPagesArray(totalPages)

	return (
		<div className="pagination">
			{pagesArray.map(btn =>
				<button
					onClick={() => changePage(btn)}
					key={btn}
					className={page === btn ? 'pagination__btn current' : 'pagination__btn'}>
					{btn}
				</button>
			)}
		</div>
	)
}

export default PostsPagination