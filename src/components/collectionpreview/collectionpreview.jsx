import React from 'react';
import './collectionpreview.scss';
import '../../pages/shoppage/shop'
import Collectionitems from '../collectionitems/collection-items';

export const Collectionpreview=({id,items,title})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,idx)=>idx<4)
                .map(({id,...otherprops})=>(
                    <Collectionitems key={id} {...otherprops}/>
                ))
            }
        </div>
    </div>
)

export default Collectionpreview;
