// PromoBanner component — displays a promotional card with text and image
const PromoBanner = () => {

  return (

  // Outer container for the banner
  <div
      className="promotion-item"
      style={{backgroundColor: '#FFFFFB', margin: 'auto', padding:'32px', maxWidth: '431px', boxSizing: 'border-box', height: '245px'}}>
    <div
      style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #007E23', 
      borderRadius: '8px', height: '181px', boxSizing: 'border-box', gap: '35px', maxWidth: '352px', margin: 'auto', backgroundColor: '#F0F7F1'}}>
      
      {/* Left side: text and button */}
      <div
        style={{width: '205px', padding: '0', height: '100%', marginLeft: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h2
          style={{fontFamily: 'Poppins', fontSize: '19px', fontStyle: 'normal', fontWeight: '500', lineHeight: '100%', margin: '0'}}>
          Get 10% OFF all vegetables
        </h2>
        <p
          style={{fontFamily: 'Poppins', fontSize: '13px', fontWeight: 400, lineHeight: '110%', color: '#333333', marginBottom: '14px'}}>
          Only until the end of the month!
        </p>
        <button
          style={{width: '135px', height: '45px', backgroundColor:'#195530', color: '#ffffff', border: 'none', padding: '11px 19.5px', fontSize: '19px', fontWeight: 500,
          lineHeight: '100%', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease', transform : 'none'}}>
          Shop Now
        </button>
      </div>

      {/* Right side: promo image */}
      <div
        style={{width: '352px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
        <img
          src="/images/VegetablesPromo.jpg"
          alt="Promo"
          style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '8px'}}/>
      </div>
    </div>
  </div>
  );
};

// Export the component for use in other parts of the app
export default PromoBanner;