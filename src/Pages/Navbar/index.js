import Profile from '../Profile';
import ChatList from '../ChatList';
import Options from '../Options';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-top">
        <h1>Chatter</h1>
        <h1>logo here</h1>
      </div>
      <Profile />
      <ChatList />
      <Options />
    </div>
  );
}

export default Navbar;
