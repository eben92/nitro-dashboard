import "./budget.css";
import { AiOutlinePlus } from "react-icons/ai";

const BudgetCard = () => {
  return (
    <div className='card-container bg-zinc-900 rounded-2xl shadow-2xl budget '>
      <div className='flex items-center justify-between'>
        <h1 className='title'>Budget</h1>
        <AiOutlinePlus className='icon plus-icon' />
      </div>
      <div className=' mt-7 mb-3'>
        <div className='flex items-center justify-between mb-4'>
          <p>Cash</p>
          <p className='amount'>
            GH&#8373; 1,200.<small>00</small>{" "}
          </p>
        </div>
        <hr className=' text-orange-500' />

        {/* subscriptions */}
        <div className='flex items-center justify-between mt-7 mb-5'>
          <div className='payments '>
            <input type='checkbox' />

            <label for='checkbox' className='ml-2'>
              Subscriptions
              <br />
              <span className='ml-5 automated text-neutral-400'>Automated</span>
            </label>
          </div>
          <div>
            <p className='amount-paid'>
              GH&#8373; 150.<small>00</small>{" "}
            </p>
          </div>
        </div>

        {/* Loan Payment */}
        <div className='flex items-center justify-between mt-3 mb-5'>
          <div className='payments '>
            <input type='checkbox' checked />
            <label className='ml-2'>
              Loan Payment
              <br />
              <span className='ml-5 automated text-neutral-400'>Automated</span>
            </label>
          </div>
          <div>
            <p className='amount-paid'>
              GH&#8373; 230.<small>00</small>{" "}
            </p>
          </div>
        </div>

        {/* Savings */}
        <div className='flex items-center justify-between mt-3 mb-5'>
          <div className='payments '>
            <input type='checkbox' />
            <label for='checkbox' className='ml-2'>
              Savings
            </label>
          </div>
          <div>
            <p className='amount-paid'>
              GH&#8373; 100.<small>00</small>{" "}
            </p>
          </div>
        </div>
        {/* FoodStuffs */}
        <div className='flex items-center justify-between mt-3 mb-5'>
          <div className='payments '>
            <input type='checkbox' checked />
            <label for='checkbox' className='ml-2'>
              Foodstuff
            </label>
          </div>
          <div>
            <p className='amount-paid'>
              GH&#8373; 100.<small>00</small>{" "}
            </p>
          </div>
        </div>
        {/* Fuel */}
        <div className='flex items-center justify-between mt-3'>
          <div className='payments '>
            <input type='checkbox' />
            <label for='checkbox' className='ml-2'>
              Fuel
            </label>
          </div>
          <div>
            <p className='amount-paid'>
              GH&#8373; 210.<small>00</small>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
