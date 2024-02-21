
function PageSidebar () {
    return (
      <div className="sidebar flex">
          <div className="bg-[#0E2F59] text-white h-screen p-12 pt-9 rounded-lg my-8 mx-2 before:w-3">
       <ul>
          <li className='p-8 white text-xl font-bold white'><button>Dashboard</button></li>
          <li><button className="p-2 ps-12 pe-12 rounded-lg mt-2 mb-2 text-black bg-[#D9D9D9]">Students</button></li>
          <li><button className="p-2 ps-12 pe-12 rounded-lg mt-2 mb-2 text-black bg-[#D9D9D9]">Parents</button></li>
          <li><button className="p-2 ps-12 pe-12 rounded-lg mt-2 mb-2 text-black bg-[#D9D9D9]">Classes</button></li>
          <li><button className="p-2 ps-12 pe-12 rounded-lg mt-2 mb-2 text-black bg-[#D9D9D9]">Subjects</button></li>
          <li><button className="p-2 ps-12 pe-12 rounded-lg mt-2 mb-2 text-black bg-[#D9D9D9]">Devices</button></li>
          <li><button className="p-2 ps-12 pe-12 rounded-lg mt-2 mb-2 text-black bg-[#D9D9D9]">Exams</button></li>
          <li><button className="p-2 ps-12 pe-12 rounded-lg mt-2 mb-2 text-black bg-[#D9D9D9]">Roles</button></li>
          <div>
            <ul>
            <li><button className="p-2 ps-12 pe-12 rounded-lg mt-2 mb-2 text-black bg-[#D9D9D9]">School</button></li>
            </ul>
          </div>
          <div>
            <ul>
            <li><button className="p-2 ps-12 pe-12 rounded-lg mt-2 mb-2 text-black bg-[#D9D9D9]">Log out</button></li>
            </ul>
          </div>
        </ul>  
          </div>
      </div>
    );
  }
  
  export default PageSidebar;
  