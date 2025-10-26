// Functional component named "Header" with logo and navigation icons
import logoIcon from '../images/Logo_nav_icon.svg';
import searchIcon from '../images/Search_nav_icon.svg';
import heartIcon from '../images/Heart_nav_icon.svg';
import cartIcon from '../images/Cart_nav_icon.svg';
import menuIcon from '../images/Menu_nav_icon.svg';

const Header = () => {
  // Array of navigation icons with their sources and alt text
  const icons = [
    { src: searchIcon, alt: 'Search', label: 'Search' },
    { src: heartIcon, alt: 'Favorites', label: 'Favorites' },
    { src: cartIcon, alt: 'Cart', label: 'Cart' },
    { src: menuIcon, alt: 'Menu', label: 'Menu' },
  ];

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '24px',
        paddingBottom: '28px',
        paddingLeft: '39.5px',
        paddingRight: '39.5px',
        maxWidth: '352px',
        margin: '0 auto',
        background: '#FFFFFB',
        borderBottom: '1px solid #195530',
      }}
    >
      {/* logo section */}
      <a href="/" style={{ display: 'inline-block' }}>
        <img
          src={logoIcon}
          alt="Broccoli Logo"
          style={{ width: '117px', height: '31px' }}
        />
      </a>

      {/* navigation section */}
      <nav style={{ display: 'flex', gap: '8px', color: '#2D2C2D' }}>
        {icons.map((icon, i) => (
          <button
            key={i}
            aria-label={icon.label}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
          >
            <img src={icon.src} alt={icon.alt} />
          </button>
        ))}
      </nav>
    </header>
  );
};

// Make the Header component available for import
export default Header;