import React from 'react';
import { Clock, TrendingUp } from 'react-feather';

const Searchbar: React.FC = () => {
  return (
    

        <div className='mb-4'>
<div className='flex flex-col gap-4 items-center mt-6 w-full'>
    <form className="flex flex-col sm:flex-row gap-2 items-center max-w-[600px] w-full mx-auto px-4 sm:px-0">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
          r/
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subreddit" required/>
      </div>
      <button type="submit" className="p-2.5 text-sm font-medium text-white bg-brand-red-100 rounded-lg border border-brand-red-100 hover:bg-brand-red-200 focus:outline-none w-full sm:w-auto">
        <p className="mx-auto">Analyze</p>
        <span className="sr-only">Analyze</span>
      </button>
    </form>
<div className="flex gap-4 text-center text-xs">
            <div className="flex rounded-full px-3 py-2 bg-gray-100">              
              <Clock size={16} color="#101828" className="mr-1 align-text-bottom" aria-hidden="true"/>
              Updated hourly
            </div>

            <div className="flex rounded-full px-3 py-2 bg-gray-100">
              <TrendingUp size={16} color="#101828" className="mr-1 align-text-bottom" aria-hidden="true"/>
              <i className="fa-light fa-up mr-1 align-text-bottom" aria-hidden="true"></i>
              Get more upvotes
            </div>
		</div>
</div>
</div>
)}
export default Searchbar;