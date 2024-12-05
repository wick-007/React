import chef_logo from "../../../public/chef-logo.jpg";
export default function Header() {
  return (
    <div className="">
      <div className="flex border-b-4 justify-center items-center bg-white">
        <img src={chef_logo} alt="chef logo" className="w-28" />
        <h1 className="text-3xl ml-4">Chef Claude</h1>
      </div>
    </div>
  );
}
