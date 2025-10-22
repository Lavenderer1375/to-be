import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full">
      <div className="items-center justify-center gap-6">
        <ul className="flex items-center gap-6">
          <li>
            <Image src="/logo.svg" alt="logo" width={114} height={48} />
          </li>
          <li>Blog</li>
          <li>Support</li>
          <li>Spot</li>
          <li>Market</li>
        </ul>
      </div>
      <div className="items-center justify-center gap-6">
        <ul className="flex items-center justify-between gap-6">
          <li>
            <Image src="/search.svg" alt="search" width={24} height={24} />
          </li>
          <li>
            <Image src="/globe.svg" alt="globe" width={24} height={24} />
          </li>
          <li>
            <Image src="/wallet.svg" alt="wallet" width={24} height={24} />
          </li>
          <li>
            <Image src="/notif.svg" alt="notification" width={24} height={24} />
          </li>
          {/* <li><Image src="/logo.svg" alt="logo" width={90} height={90} /></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
