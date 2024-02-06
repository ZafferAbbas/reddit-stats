import React from 'react';


const SearchResult: React.FC = () => {
  return (
<div className="container mx-auto mt-6">
          <div className='flex flex-col justify-center items-center gap-4'>
              <div className="border flex flex-col gap-4 items-center mx-auto p-5 rounded-lg sm:flex-row w-fit">
                <div id="icon_img" className="md:w-24 w-20 flex-none">
                  <div className="loadable rounded-full">
                    <img className="md:size-24 size-20 rounded-full" src="https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png" alt="Subreddit Profile"/>
                  </div>
                </div>
                <div>
                  <div className="font-bold loadable rounded-lg mb-1 w-fit" id="title">funny</div>
                  <div className="text-gray-600 loadable rounded-lg mb-4" id="public_description">Reddit's largest humor depository</div>
                  <div className="flex gap-16">
                    <div>
                      <p className="font-bold loadable rounded-lg" id="subscribers">57M</p>
                      <p className="text-sm text-gray-600">
                        Subscribers
                      </p>
                    </div>
                    <div>
                      <p className="font-bold loadable rounded-lg" id="created">January 25, 2008</p>
                      <p className="text-sm text-gray-600">
                        Created at
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
  )}
export default SearchResult;