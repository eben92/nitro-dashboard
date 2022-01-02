import "./subscriptions.css";
import { AiOutlinePlus } from "react-icons/ai";

const SubscriptionsCard = () => {
  return (
    <div className='card-container bg-zinc-900 rounded-2xl shadow-2xl '>
      <div className='flex items-center justify-between'>
        <h1 className='title'>All Transactions</h1>
        <AiOutlinePlus className='icon plus-icon' />
      </div>
      <div className=' mt-5'>
        <div className='flex items-center justify-between'>
          <div className=' flex items-center '>
            <div>
              <p className='payments'>Seer</p>
              <small className='small-text text-red-400'>Due: 1/12/21</small>
            </div>
          </div>

          <div className='amount-paid'>
            <span>GH&#8373; </span>21.<small>00</small>
          </div>
        </div>
      </div>
      <div className=' mt-2'>
        <div className='flex items-center justify-between'>
          <div className=' flex items-center '>
            <div>
              <p className='payments'>Octane</p>
              <small className='small-text  text-red-400'>Due: 1/1/22</small>
            </div>
          </div>

          <div className='amount-paid'>
            <span>GH&#8373; </span>200.<small>00</small>
          </div>
        </div>
      </div>
      <div className=' mt-2 '>
        <div className='flex items-center justify-between'>
          <div className=' flex items-center '>
            <div>
              <p className='payments mb-0'>LifeLine</p>
              <span className='small-text text-red-400'>Due: 1/12/21</span>
            </div>
          </div>

          <div className='amount-paid'>
            <span>GH&#8373; </span>44.<small>20</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsCard;
