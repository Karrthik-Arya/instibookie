import React, {type FC} from 'react';

const ActiveBetsBlock: FC = () => (
	<div className="block  shadow-lg shadow-amber-700/50 border-amber-700/10 border-t rounded-lg  bg-gray-900 w-full py-3 px-4">
		<h3 className="text-white text-lg font-bold font-mono">
            Active Bets
		</h3>
		<div
			className='m-3 p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
		>
			<a href='#'>
				<h5 className='mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                    Bet #1
				</h5>
			</a>
			<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Kya Sakaar Kal Nahaayega?
			</p>
			<a
				href='#'
				className='inline-flex items-center py-2 px-3 mr-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
			>
                  Yes
				<svg
					aria-hidden='true'
					className='ml-2 mr-1 w-4 h-4'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
						clipRule='evenodd'
					></path>
				</svg>
			</a>

			<a
				href='#'
				className='inline-flex ml-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
			>
                  No
				<svg
					aria-hidden='true'
					className='ml-2 -mr-1 w-4 h-4'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
						clipRule='evenodd'
					></path>
				</svg>
			</a>
		</div>

		<div
			className='m-3 p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
		>
			<a href='#'>
				<h5 className='mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                    Bet #2
				</h5>
			</a>
			<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Kya Sakaar Kal Nahaayega?
			</p>
			<a
				href='#'
				className='inline-flex items-center py-2 px-3 mr-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
			>
                  Yes
				<svg
					aria-hidden='true'
					className='ml-2 mr-1 w-4 h-4'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
						clipRule='evenodd'
					></path>
				</svg>
			</a>

			<a
				href='#'
				className='inline-flex ml-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
			>
                  No
				<svg
					aria-hidden='true'
					className='ml-2 -mr-1 w-4 h-4'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
						clipRule='evenodd'
					></path>
				</svg>
			</a>
		</div>
	</div> 
);

export default ActiveBetsBlock;