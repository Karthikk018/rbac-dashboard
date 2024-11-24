import { User, Role, Permission } from '../types';

export const mockPermissions: Permission[] = [
  { id: '1', name: 'read:users', description: 'View users', module: 'users' },
  { id: '2', name: 'write:users', description: 'Create/Edit users', module: 'users' },
  { id: '3', name: 'delete:users', description: 'Delete users', module: 'users' },
  { id: '4', name: 'read:roles', description: 'View roles', module: 'roles' },
  { id: '5', name: 'write:roles', description: 'Create/Edit roles', module: 'roles' },
  { id: '6', name: 'read:content', description: 'View content', module: 'content' },
  { id: '7', name: 'write:content', description: 'Create/Edit content', module: 'content' },
  { id: '8', name: 'manage:settings', description: 'Manage settings', module: 'settings' },
];

export const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: mockPermissions,
  },
  {
    id: '2',
    name: 'Editor',
    description: 'Content management',
    permissions: mockPermissions.filter(p => p.module === 'content'),
  },
  {
    id: '3',
    name: 'Viewer',
    description: 'Read-only access',
    permissions: mockPermissions.filter(p => p.name.startsWith('read')),
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-03-10T10:30:00Z',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'Editor',
    status: 'active',
    lastLogin: '2024-03-09T15:45:00Z',
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike@example.com',
    role: 'Viewer',
    status: 'inactive',
    lastLogin: '2024-03-01T08:20:00Z',
  },
];