import React,{Component} from 'react';
import SHOP_DATA from './shopdata';
import Collectionpreview from '../../components/collectionpreview/collectionpreview'


export class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections}= this.state;
        return(
            <div className='shoppage'>
                {
                collections.map(({id, ...otherCollectionprops})=>(
                    <Collectionpreview key={id} {...otherCollectionprops}/>
                ))
                }     
            </div>
        )
    }
}


