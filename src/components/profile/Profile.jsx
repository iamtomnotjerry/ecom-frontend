import { useSelector } from "react-redux";
import { FaUserCircle, FaEnvelope, FaMapMarkerAlt, FaUserShield } from "react-icons/fa";

const Profile = () => {
  const { user } = useSelector((state) => state.auth) || {};

  // Ensure roles and addresses are always arrays to prevent `.length` errors
  const { username = "Guest", email = "Not available", roles = [], addresses = [] } = user || {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-gray-500 text-7xl" />
          <h2 className="text-2xl font-bold mt-4">{username}</h2>
          <p className="text-gray-500">@{email}</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-gray-600 text-lg" />
            <p className="text-gray-700">{email}</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaUserShield className="text-gray-600 text-lg" />
            <p className="text-gray-700">
              Roles: {roles.length > 0 ? roles.map((role) => role.name).join(", ") : "No roles assigned"}
            </p>
          </div>

          <div className="border-t my-4"></div>

          <h3 className="text-xl font-semibold">Addresses</h3>
          {addresses.length > 0 ? (
            addresses.map((address, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-700">
                <FaMapMarkerAlt className="text-gray-600 text-lg" />
                <p>{address.street}, {address.city}, {address.state}, {address.zipCode}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No addresses added</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
