import "./profile.css";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const Profile = () => {
  return (
    <div className='profile-container'>
      {/* pic */}

      <div className='flex items-center'>
        <img
          src='https://pbs.twimg.com/profile_images/1259888848110342151/nAIZNTYK_400x400.jpg'
          alt='profile'
          className='mr-2'
        />
        <p>eBen</p>
      </div>
      <div className='flex items-center icons'>
        <div>
          <FaSearch className='search-icon ' />
        </div>

        <IoMdNotifications />
      </div>
    </div>
  );
};

export default Profile;
