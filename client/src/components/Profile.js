// src/components/Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-6">Profile</h2>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <form>
        <input
          type="password"
          placeholder="New Password"
          className="input-field mt-4"
        />
        <button type="submit" className="btn-primary mt-4">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Profile;
