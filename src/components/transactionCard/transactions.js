import "./transactions.css";
import { AiOutlinePlus } from "react-icons/ai";

const image1 =
  "https://assets2.rockpapershotgun.com/apex-legends_C7972ZW.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/apex-legends_C7972ZW.jpg";
const image2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglNPCoQQA6vqN8FiWyUL8DOH3vXARaBaiag&usqp=CAU";
const image3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlw1aettzRlhDlI3b_aCgHQjHQCg79Uap3g&usqp=CAU";
const TransactionCard = () => {
  return (
    <div className='card-container bg-zinc-900 rounded-2xl shadow-2xl '>
      <div className='flex items-center justify-between'>
        <h1 className='title'>All Transactions</h1>
        <AiOutlinePlus className='icon plus-icon' />
      </div>
      <div className=' mt-5'>
        <div className='flex items-center justify-between'>
          <div className=' flex items-center '>
            <img src={image1} alt='mastercard logo' className='dp mr-3' />
            <div>
              <p className='payments'>Seer</p>
              <small className='small-text text-neutral-400'>1/12/21</small>
            </div>
          </div>

          <div className='amount-paid text-red-400'>
            <span className='text-red-400'>
              GH&#8373; 21.<small>00</small>
            </span>
          </div>
        </div>
      </div>
      <div className=' mt-2'>
        <div className='flex items-center justify-between'>
          <div className=' flex items-center '>
            <img src={image2} alt='mastercard logo' className='dp mr-3' />
            <div>
              <p className='payments'>Octane</p>
              <small className='small-text text-neutral-400'>1/1/22</small>
            </div>
          </div>

          <div className='amount-paid text-red-400'>
            <span className='text-red-400'>
              GH&#8373; 34.<small>43</small>
            </span>
          </div>
        </div>
      </div>
      <div className=' mt-2 '>
        <div className='flex items-center justify-between'>
          <div className=' flex items-center '>
            <img src={image3} alt='mastercard logo' className='dp mr-3' />
            <div>
              <p className='payments'>LifeLine</p>
              <small className='small-text text-neutral-400'>1/12/21</small>
            </div>
          </div>

          <div className='amount-paid '>
            <span className='text-green-500'>
              GH&#8373; 83.<small>00</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
