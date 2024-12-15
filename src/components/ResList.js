import { useDispatch } from 'react-redux';
import {RES_LOGO} from '../utils/constants'
import { addItem } from '../utils/cartSlice';

const ResList = (props) => {
    const {data, cart} = props;
    const dispatch = useDispatch();

    const handleAddClick = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div>
            {data.map((item) => (
                <div className="border-b-2 border-b-gray-200 my-2 p-4 flex justify-between"
                    key = {item.card.info.id}
                    data-testid = "reslist">
                    <div className='w-9/12'>
                        <div className="text-start font-bold">{item.card.info.name}</div>
                        <div className="text-start font-medium">₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</div>
                        <p className='text-start text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='w-3/12 p-2'>
                        <img className="rounded-lg" src={RES_LOGO + item.card.info.imageId}></img>
                        {!cart && <button 
                            className='absolute bg-white shadow-md p-2 -my-6 -mx-6 w-20 text-center text-sm 
                            font-bold rounded-md text-green-600'
                            onClick = {()=>handleAddClick(item)}
                        >
                            Add+
                        </button>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ResList;