import React from 'react';

const Search = ({searchCheange, searchField}) => {
	return (
		<div className='pa2'>
			<input onChange={searchCheange} className='w-50 input-reset pa2 ba bw1 bg-white b--green' type="search" placeholder='Search for a robofriend' />
		</div>
	);
};

export default Search;
