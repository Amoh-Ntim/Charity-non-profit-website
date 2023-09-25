const Navbar = () => {
  return (
    <div className="flex justify-between">
        <img src="/VGF Logo File  (1) 1.png"/>
    {/* links */}
    <div className=" flex gap-12 ">
      <a href="#" className=" hover:text-green-600">Home</a>
      <a href="#" className=" hover:text-green-600">Gallery</a>
      <a href="#" className=" hover:text-green-600">About us</a>
      <a href="#" className=" hover:text-green-600">How we help</a>
    </div>

    {/* green button */}
    <div>
    <button className="bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
     Contact Us
    </button>

    </div>
    </div>
  )
}

export default Navbar