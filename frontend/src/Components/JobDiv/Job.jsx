import { BiTimeFive } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

// Sample data to replace job listings with access permissions
const Data = [
    {
        id: 1,
        title: "View Access",
        time: "10 mins ago",
        location: "Ethereum Mainnet",
        desc: "Grant read-only access to the specified user.",
        organization: "AWS S3",
    },
    {
        id: 2,
        title: "Upload Permission",
        time: "Just now",
        location: "Polygon Network",
        desc: "Grant permission to upload files to the cloud storage.",
        organization: "Decentralized S3",
    },
    {
        id: 3,
        title: "Admin Access",
        time: "1 hr ago",
        location: "Testnet",
        desc: "Admin access to manage permissions and view logs.",
        organization: "Cloud Management",
    },
];

const Permissions = () => {
    return (
        <div className="w-full min-h-screen bg-black text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-10">Gist Permissions</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Data.map(({ id, title, time, location, desc, organization }) => (
                        <div
                            key={id}
                            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold flex items-center">
                                    <FaBriefcase className="mr-2 text-green-500" />
                                    {title}
                                </h2>
                                <span className="flex items-center text-gray-400 text-sm">
                                    <BiTimeFive className="mr-1" />
                                    {time}
                                </span>
                            </div>
                            <h6 className="text-gray-400 flex items-center mb-3">
                                <MdLocationOn className="mr-2 text-gray-500" />
                                {location}
                            </h6>
                            <p className="text-gray-300 mb-4">{desc}</p>
                            <div className="flex items-center gap-2 mb-4">
                                <AiOutlineShop className="text-green-500" />
                                <span className="text-gray-400">{organization}</span>
                            </div>
                            <button className="w-full bg-green-600 py-2 rounded-lg text-white font-semibold hover:bg-green-700 transition">
                                Deploy
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Permissions;
