

import '../App.css'; 

function Subscription() {
  return (
    <div className="subscription-container">
      <div className="subscription-box silver">
        <h2>Silver Subscription</h2>
        <ul>
          <li>Basic features</li>
          <li>Limited access</li>
          <li>$10/month</li>
        </ul>
        <button>Subscribe</button>
      </div>
      <div className="subscription-box gold">
        <h2>Gold Subscription</h2>
        <ul>
          <li>Advanced features</li>
          <li>Full access</li>
          <li>$20/month</li>
        </ul>
        <button>Subscribe</button>
      </div>
      <div className="subscription-box platinum">
        <h2>Platinum Subscription</h2>
        <ul>
          <li>Premium features</li>
          <li>Unlimited access</li>
          <li>$30/month</li>
        </ul>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscription;
