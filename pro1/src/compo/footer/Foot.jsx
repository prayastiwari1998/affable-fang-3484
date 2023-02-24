import { Link } from 'react-router-dom';
import "./foot.css"
function Footer() {
  return (
    <footer>
      <nav>
        <div className='foot_div'>
          <div><Link to="/help">Help center</Link></div>
          <div><Link to="/about">About us</Link></div>
          <div><Link to="/shipping">Shipping podivcy</Link></div>
          <div><Link to="/returns">Returns podivcy</Link></div>
          <div><Link to="/payments">Payments</Link></div>
          <div><Link to="/developers">Developers</Link></div>
          <div><Link to="/careers">Careers</Link></div>
          <div><Link to="/contact">Contact</Link></div>
          <div><Link to="/terms">Terms &amp; conditions</Link></div>
          <div><Link to="/privacy">Privacy &amp; cookie podivcy</Link></div>
          <div><Link to="/ip">Intellectual property</Link></div>
          <div><Link to="/categories">Categories</Link></div>
          <div><Link to="/partner">Become a partner</Link></div>
          <div><Link to="/insights">Lyst Insights</Link></div>
          <div><Link to="/news">Lyst News</Link></div>
        </div>  
      </nav>
    </footer>
  );
}

export default Footer;