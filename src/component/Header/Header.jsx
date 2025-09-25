import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-white shadow-sm flex justify-between">
        <div className="">
          <a className="text-black font-semibold text-xl">Bookmarked Blogs</a>
        </div>
        <div className="">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
