import React from "react";
import { BsHouseDoor, BsFillPersonFill } from "react-icons/bs";
import { RiPlantFill, RiAuctionFill, RiMoneyEuroBoxFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col pt-16 bg-gray-900 text-white shadow-lg">
      <Link href="/">
        <a className="sidebar-icon group">
          <BsHouseDoor size="20" />
          <span className="sidebar-tooltip group-hover:scale-100">Home</span>
        </a>
      </Link>

      <Link href="/education">
        <a className="sidebar-icon group">
          <RiPlantFill size="20" />
          <span className="sidebar-tooltip group-hover:scale-100">Edukasi</span>
        </a>
      </Link>

      <Link href="/auction">
        <a className="sidebar-icon group">
          <RiAuctionFill size="20" />
          <span className="sidebar-tooltip group-hover:scale-100">Lelang</span>
        </a>
      </Link>

      <Link href="/aquascaper">
        <a className="sidebar-icon group">
          <MdManageAccounts size="20" />
          <span className="sidebar-tooltip group-hover:scale-100">
            Aquascaper
          </span>
        </a>
      </Link>

      <Link href="/profile">
        <a className="sidebar-icon group">
          <BsFillPersonFill size="20" />
          <span className="sidebar-tooltip group-hover:scale-100">Profil</span>
        </a>
      </Link>

      <Link href="/payment">
        <a className="sidebar-icon group">
          <RiMoneyEuroBoxFill size="20" />
          <span className="sidebar-tooltip group-hover:scale-100">
            Pembayaran
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
