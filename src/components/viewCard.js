import Card from "./creditCard/card";
import Sidebar from "./sidebar/sidebar";
import "./styles/viewcards.css";

const ViewCard = () => {
  return (
    <div className='overviewCard flex bg-gradient-to-r from-zinc-800 rounded-2xl shadow-xl'>
      <Sidebar />
      <div className='overviewItems'>
        <Card />
      </div>
    </div>
  );
};

export default ViewCard;
