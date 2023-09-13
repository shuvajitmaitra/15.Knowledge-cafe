import Profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="container mx-auto flex justify-between border-b-2 border-gray-400 py-3">
      <h1 className=" text-4xl font-bold">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
