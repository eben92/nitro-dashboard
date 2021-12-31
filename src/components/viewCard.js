import CreditCard from "./creditCard/creditCard";
import Profile from "./profile/profile";
import Sidebar from "./sidebar/sidebar";
import "./styles/viewcards.css";

const ViewCard = () => {
  return (
    <div className='overviewCard flex bg-gradient-to-r from-zinc-800 rounded-2xl shadow-xl'>
      <Sidebar />
      <div className='overviewItems'>
        <Profile />
        <CreditCard />
      </div>
    </div>
  );
};

export default ViewCard;
