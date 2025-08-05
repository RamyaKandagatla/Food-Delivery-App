import { useDispatch } from 'react-redux';
import { RES_LOGO } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const ResList = ({ data, cart }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4">
      {data.map((item) => {
        const { id, name, description, imageId, price, defaultPrice } = item.card.info;
        const itemPrice = price || defaultPrice;

        return (
          <div
            key={id}
            className="border-b border-gray-300 pb-4 flex justify-between items-start gap-4"
            data-testid="reslist"
          >
            {/* Text section */}
            <div className="w-8/12 sm:w-9/12">
              <h3 className="text-base font-semibold text-gray-800">{name}</h3>
              <p className="text-sm text-gray-600 font-medium">₹ {itemPrice / 100}</p>
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            </div>

            {/* Image & button section */}
            <div className="w-4/12 sm:w-3/12 relative flex flex-col items-center">
              {imageId && (
                <img
                  src={RES_LOGO + imageId}
                  alt={name}
                  className="rounded-lg object-cover w-full h-24"
                />
              )}

              {!cart && (
                <button
                  onClick={() => handleAddClick(item)}
                  className="mt-2 bg-white border border-green-500 text-green-600 font-semibold text-sm px-3 py-1 rounded shadow-sm hover:bg-green-50 transition"
                >
                  Add +
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResList;
