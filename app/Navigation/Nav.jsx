import "./Nav.css";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";


export default function Nav({query, handleInputChange}) {
  return (
    <nav>
      <div className="nav-container">
      <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container flex">
        <Link href="#">
          <FiHeart className="nav-icons" />
        </Link>
        <Link href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
        <Link href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
}
