import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { UserList } from './components/UserList';
import { RoleList } from './components/RoleList';
import { mockUsers, mockRoles } from './data/mockData';
import { User, Role } from './types';

function App() {
  const handleEditUser = (user: User) => {
    console.log('Edit user:', user);
  };

  const handleDeleteUser = (userId: string) => {
    console.log('Delete user:', userId);
  };

  const handleEditRole = (role: Role) => {
    console.log('Edit role:', role);
  };

  const handleDeleteRole = (roleId: string) => {
    console.log('Delete role:', roleId);
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/users" replace />} />
            <Route
              path="/users"
              element={
                <UserList
                  users={mockUsers}
                  onEdit={handleEditUser}
                  onDelete={handleDeleteUser}
                />
              }
            />
            <Route
              path="/roles"
              element={
                <RoleList
                  roles={mockRoles}
                  onEdit={handleEditRole}
                  onDelete={handleDeleteRole}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">Settings</h2>
                  <p className="text-gray-600">Settings page content goes here.</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;