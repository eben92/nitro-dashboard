import "./creditCard.css";
import { AiOutlinePlus } from "react-icons/ai";

const CreditCard = () => {
  return (
    <div className='credit-card-container bg-zinc-900 rounded-2xl shadow-2xl '>
      <div className='flex items-center justify-between'>
        <h1 className='title'>Cards</h1>
        <AiOutlinePlus className='icon' />
      </div>
      <div className='card mt-5 shadow-xl'>
        <p>Balance</p>
        <p className='amount'>
          &#8373; 22,000.<small>00</small>{" "}
        </p>
        <p className='cardNumber'>**** **** **** 1234</p>

        <div className='flex items-center justify-between'>
          <div className='expire'>
            <p>Expires</p>
            <p>12/22</p>
          </div>

          <div>
            <img
              src='https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png'
              alt='mastercard logo'
              className='logo'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
