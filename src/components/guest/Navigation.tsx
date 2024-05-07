const NavigationItem = ({
  children,
}: {
  children: React.ReactNode | string;
}) => {
  return (
    <li>
      <a href="#">
        <span className="text-sm font-semibold">{children}</span>
      </a>
    </li>
  );
};

export default function Navigation() {
  const HandleShowNavigation = () => {
    let navigationMobile = document.getElementById("navigation-mobile");
    let navigationMobileClassList = navigationMobile?.classList;
    if (!navigationMobileClassList) return;

    if (navigationMobileClassList.contains("active")) {
      navigationMobileClassList.remove("active");
    } else {
      navigationMobileClassList.add("active");
    }
  };

  return (
    <>
      <div className="w-full h-[15px] bg-cyan-800" />
      <div className="flex p-3 pl-8 pr-8 justify-between items-center text-white bg-black dark:bg-black">
        <div className="flex flex-col text-center items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[30px] h-auto mb-2"
          />
          <span className="block font-bold text-lg">PETOLOGY</span>
        </div>
        <div className="block lg:hidden">
          <button onClick={HandleShowNavigation}>
            <span className="material-icons !text-4xl">menu</span>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10">
            <NavigationItem>HOME</NavigationItem>
            <NavigationItem>SERVICE</NavigationItem>
            <NavigationItem>PETS{"'"} GALLERY</NavigationItem>
            <NavigationItem>CLINIC</NavigationItem>
            <NavigationItem>CONTACT US</NavigationItem>
            <NavigationItem>BUY NOW</NavigationItem>
          </ul>
        </div>
        <div className="hidden lg:block">
          <span>CALL: 1234-123-4124</span>
        </div>
      </div>
      <div id="navigation-mobile" className="navigation-mobile">
        <ul className="flex flex-col gap-10">
          <NavigationItem>HOME</NavigationItem>
          <NavigationItem>SERVICE</NavigationItem>
          <NavigationItem>PETS{"'"} GALLERY</NavigationItem>
          <NavigationItem>CLINIC</NavigationItem>
          <NavigationItem>CONTACT US</NavigationItem>
          <NavigationItem>BUY NOW</NavigationItem>
        </ul>
      </div>
    </>
  );
}
