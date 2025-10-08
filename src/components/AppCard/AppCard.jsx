
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AppCard = ({app}) => {
    console.log(app);
    const {image, title, downloads, ratingAvg} = app;
    return (
        <div className='flex flex-col border-2 p-2'>
            <img className='w-full h-86 object-cover' src={image} alt="" />
            <h3 className='text-xl font-bold my-2 flex-1'>{title}</h3>
            <div className='flex justify-between'>
                <span className='flex items-center gap-1 text-green-500 rounded-sm bg-[#F1F5E8] px-2'>
                    <FontAwesomeIcon icon={faDownload} className='text-sm' />
                    <p>{downloads}</p>
                </span>
                <span className='flex items-center gap-1 text-orange-500 bg-[#FFF0E1] px-2 rounded-sm' >
                    <FontAwesomeIcon icon={faStar} className='text-sm'/>
                <p>{ratingAvg}</p>
                </span>
            </div>
        </div>
    );
};

export default AppCard;