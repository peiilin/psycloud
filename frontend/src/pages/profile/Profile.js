import { useState, useRef, useEffect } from 'react';
import {
  FaRegUser,
  FaCalendarCheck,
  FaShoppingBag,
  FaTasks,
  FaUserMd,
} from 'react-icons/fa';
import './profile.css';
import Personal from './Personal.js';
import Orders from './Orders';
import Test from './Test';
import Psychologist from './Psychologist';
import Avatar from './tempImg/avatar.jpg';

// popup modals
import OrderModal from './OrderModal';

const Profile = () => {
  const [currentView, setCurrentView] = useState('profile');
  const [showOrderModal, setShowOrderModal] = useState(false);

  const profileRef = useRef();
  const consultationRef = useRef();
  const ordersRef = useRef();
  const testRef = useRef();
  const psychologistRef = useRef();

  function handleClick(e) {
    let id = e.currentTarget.getAttribute('data-id');
    setCurrentView(id);

    profileRef.current.classList.remove('active');
    consultationRef.current.classList.remove('active');
    ordersRef.current.classList.remove('active');
    testRef.current.classList.remove('active');
    psychologistRef.current.classList.remove('active');
    e.currentTarget.classList.add('active');
  }

  const openOrderModal = () => {
    setShowOrderModal(true);
  };

  const closeOrderModal = () => {
    setShowOrderModal(false);
  };

  const switchView = () => {
    switch (currentView) {
      case 'profile':
        return <Personal />;
      case 'consultation':
        return 'not yet';
      case 'orders':
        return <Orders openModal={openOrderModal} />;
      case 'test':
        return <Test />;
      case 'psychologist':
        return <Psychologist />;
      default:
        return <Personal />;
    }
  };

  console.log(currentView);
  return (
    <>
      {showOrderModal === true && <OrderModal closeModal={closeOrderModal} />}
      <div className="container pt-4">
        <h2 className="text-center mb-3">會員專區</h2>
        <div className="profile-template">
          <div>
            <div className="navigation">
              <div className="avatar">
                <img src={Avatar} alt="" />
              </div>
              <ul>
                <li
                  data-id="profile"
                  className="list active"
                  ref={profileRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaRegUser className="icon" />
                    </span>
                    <span className="title">個人資訊</span>
                  </div>
                </li>
                <li
                  data-id="consultation"
                  className="list"
                  ref={consultationRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaCalendarCheck className="icon" />
                    </span>
                    <span className="title">我的預約</span>
                  </div>
                </li>
                <li
                  data-id="orders"
                  className="list"
                  ref={ordersRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaShoppingBag className="icon" />
                    </span>
                    <span className="title">我的訂單</span>
                  </div>
                </li>
                <li
                  data-id="test"
                  className="list"
                  ref={testRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaTasks className="icon" />
                    </span>
                    <span className="title">檢測結果</span>
                  </div>
                </li>
                <li
                  data-id="psychologist"
                  className="list"
                  ref={psychologistRef}
                  onClick={handleClick}
                >
                  <div className="listItem">
                    <span className="iconBx">
                      <FaUserMd className="icon" />
                    </span>
                    <span className="title">心理師專區</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="contentBox">{switchView()}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
