// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    
     
    <header className="body-font mt-6 mx-auto rounded-lg shadow text-gray-600 w-4/5">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='test.com' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
          <span className="text-xl sm:ml-3">ReddiStats</span>

        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-gray-900">Privacy Policy</a>
          <a className="mr-5 hover:text-gray-900"></a>
          <a className="mr-5 hover:text-gray-900">Terms & Conditions</a> */}
        </nav>
        <button type="button" className="inline-flex items-center bg-gray-100 hover:bg-gray-200 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center sm:me-0 sm:mb-0">Contact Us
</button>

      </div>
    </header>
     
  );
};

export default Header;
