import { HEADER_ITEMS, HeaderProps } from './type.d';
import './style.css';

const Navbar = ({ title }: HeaderProps) => {
  return (
    <nav>
      <div>{title}</div>
      <ul>
        {HEADER_ITEMS.map((item) => (
          <li>{item.label}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
