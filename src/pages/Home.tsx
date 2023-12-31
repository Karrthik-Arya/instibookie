import React, {type FC} from 'react';
import ActiveBetsBlock from '../components/Home/ActiveBetsBlock';
import CreatedBetsBlock from '../components/Home/CreatedBetsBlock';
import TrendingBetsBlock from '../components/Home/TrendingBetsBlock';

const Home: FC = () => {
	const myList = Array.from(Array(10).keys());
	return (
		<>
			<div className='flex w-full items-center justify-center space-y-10 px-4 mt-10 mb-[5rem] flex-col mx-auto'>
				<ActiveBetsBlock />
				<CreatedBetsBlock />
				<TrendingBetsBlock />
				{/* <div className='w-3/4'>
					<div className='flex justify-between'>
						<p className='text-white text-2xl text-left'>Ongoing Bets</p>
					</div>
					<div className='flex flex-wrap'>
						{myList.map((el) => (
							<div
								key={el}
								className='m-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
							>
								<a href='#'>
									<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Bet #{el}
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
						))}
					</div>
				</div> */}
			</div>
		</>
	);
};

export default Home;
