const NavBar = () => {
  return (
    <div className="mr-4">
      <div className="flex space-x-12 font-semibold">
        <div className="hover:cursor-pointer hover:text-blue-200">About me</div>
        <div className="hover:cursor-pointer hover:text-blue-200">Skills</div>
        <div className="hover:cursor-pointer hover:text-blue-200">
          Portfolio
        </div>
        <div className="rounded-3xl bg-white px-2  text-black hover:cursor-pointer hover:text-blue-200">
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default NavBar;
