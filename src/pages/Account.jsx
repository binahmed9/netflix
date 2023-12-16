import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
    return (
        <>
            <div className=' w-full text-white '>
                <img
                    className="w-full h-[400px] object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/a0da1d7a-b7fb-4807-b084-ebba6eddd671/SA-ar-20231211-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="/"
                />
                <div className=' bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                <div className=' absolute top-[20%] p-4 md:p-8'>
                    <h1 className=' text-3xl md:text-5xl font-bold'>My Shows</h1>
                </div>
            </div>
            <SavedShows />
        </>
    )
}

export default Account