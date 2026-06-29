# AfriWaid Studio - Complete Backend Requirements Plan

## Overview
This document outlines all backend requirements for the AfriWaid Studio portal system.

---

## 1. AUTHENTICATION & USER MANAGEMENT

### 1.1 Core Authentication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login |
| `/api/auth/logout` | POST | User logout |
| `/api/auth/logout-all` | POST | Logout from all devices |
| `/api/auth/me` | GET | Get current user |
| `/api/auth/forgot-password` | POST | Forgot password |
| `/api/auth/reset-password` | POST | Reset password |
| `/api/auth/verify-email` | POST | Verify email |
| `/api/auth/resend-verification` | POST | Resend verification |
| `/api/auth/update-password` | PUT | Update password |
| `/api/auth/profile` | PUT | Update profile |
| `/api/auth/sessions` | GET | Get sessions |
| `/api/auth/sessions/:id` | DELETE | Revoke session |
| `/api/auth/google-login` | POST | Google OAuth login |

### 1.2 User Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/users` | GET | List users |
| `/api/admin/users` | POST | Create user |
| `/api/admin/users/:id` | PUT | Update user |
| `/api/admin/users/:id` | DELETE | Delete user |
| `/api/admin/roles` | GET | List roles |
| `/api/admin/roles/:id` | PUT | Update role permissions |
| `/api/admin/permissions` | GET | List permissions |

---

## 2. CLIENT PORTAL FEATURES

### 2.1 Dashboard
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/client/dashboard/stats` | GET | Client dashboard statistics |
| `/api/client/projects` | GET | Client's projects list |
| `/api/client/deliverables` | GET | Client's deliverables |
| `/api/client/invoices` | GET | Client's invoices |
| `/api/client/messages/unread` | GET | Unread message count |

### 2.2 Projects
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/projects` | GET | List projects (with client filter) |
| `/api/projects/:id` | GET | Get project details |
| `/api/projects/:id/workspace` | GET | Get project workspace |
| `/api/projects/:id/milestones` | GET | List milestones |
| `/api/projects/:id/tasks` | GET | List tasks |
| `/api/milestones/:id` | PUT | Update milestone |
| `/api/milestones/:id/approve` | POST | Approve milestone |
| `/api/tasks/:id` | PUT | Update task |

### 2.3 Deliverables
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/deliverables` | GET | List deliverables |
| `/api/deliverables/:id/review` | PUT | Review deliverable |

### 2.4 Approvals
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/approvals` | GET | List approvals |
| `/api/approvals/:id` | PUT | Update approval status |

### 2.5 Invoices
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/invoices` | GET | List invoices |
| `/api/invoices` | POST | Create invoice |
| `/api/invoices/:id/pay` | POST | Mark invoice as paid |

### 2.6 Meetings
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/meetings` | GET | List meetings |
| `/api/meetings` | POST | Schedule meeting |
| `/api/meetings/:id` | PUT | Update meeting |
| `/api/meetings/:id/cancel` | POST | Cancel meeting |

### 2.7 Messages
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/conversations` | GET | List conversations |
| `/api/conversations` | POST | Create conversation |
| `/api/conversations/:convId/messages` | GET | Get messages |
| `/api/messages` | POST | Send message |
| `/api/messages/:id` | PUT | Update message |

### 2.8 Files
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/files` | GET | List files |
| `/api/files/upload` | POST | Upload file |
| `/api/files/:id` | DELETE | Delete file |

### 2.9 Team
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/team` | GET | Team information |
| `/api/team/members` | GET | Team members |

### 2.10 Reports
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/reports` | GET | Generate reports |
| `/api/reports/download/:id` | GET | Download report |

### 2.11 Settings
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/settings/profile` | GET/PUT | Profile settings |
| `/api/settings/notifications` | GET/PUT | Notification settings |
| `/api/settings/security` | GET/PUT | Security settings |
| `/api/settings/appearance` | GET/PUT | Appearance settings |

---

## 3. ADMIN WORKSPACE FEATURES

### 3.1 Dashboard
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/dashboard/stats` | GET | Admin dashboard stats |
| `/api/analytics` | GET | Analytics data |
| `/api/analytics/ai-report` | POST | AI generated report |

### 3.2 User Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/users` | GET | List all users |
| `/api/admin/users` | POST | Create user |
| `/api/admin/users/:id` | PUT | Update user |
| `/api/admin/users/:id` | DELETE | Delete user |
| `/api/admin/users/:id/status` | PUT | Update user status |

### 3.3 Role Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/roles` | GET | List roles |
| `/api/admin/roles` | POST | Create role |
| `/api/admin/roles/:id` | PUT | Update role |
| `/api/admin/roles/:id` | DELETE | Delete role |
| `/api/admin/roles/:id/permissions` | GET | Get role permissions |

### 3.4 Permission Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/permissions` | GET | List permissions |
| `/api/admin/permissions` | POST | Create permission |

### 3.5 Project Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/projects` | GET | List all projects |
| `/api/projects` | POST | Create project |
| `/api/projects/:id` | PUT | Update project |
| `/api/projects/:id` | DELETE | Delete project |
| `/api/projects/:id/status` | PUT | Update status |

### 3.6 Content Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/articles` | GET/POST/PUT/DELETE | Articles CRUD |
| `/api/journal` | GET/POST/PUT/DELETE | Journal CRUD |
| `/api/cvs` | GET/POST/PUT/DELETE | CV management |
| `/api/media` | GET/POST/DELETE | Media library |
| `/api/services` | GET/POST/PUT/DELETE | Services CRUD |
| `/api/testimonials` | GET/POST/PUT/DELETE | Testimonials CRUD |
| `/api/team` | GET/POST/PUT/DELETE | Team members |

### 3.7 Client Management
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/clients` | GET | List clients |
| `/api/clients` | POST | Create client |
| `/api/clients/:id` | PUT | Update client |
| `/api/clients/:id` | DELETE | Archive client |

### 3.8 Audit & Logs
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/audit-logs` | GET | System audit logs |
| `/api/admin/logs` | GET | Server logs |

### 3.9 Settings
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/settings` | GET/PUT | Site settings |
| `/api/settings/customization` | GET/PUT | Customization |

### 3.10 Notifications
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/notifications` | GET | List notifications |
| `/api/notifications/broadcast` | POST | Broadcast notification |
| `/api/notifications/:id/read` | PUT | Mark read |
| `/api/notifications/read-all` | PUT | Mark all read |

---

## 4. MODERATOR WORKSPACE FEATURES

### 4.1 Content Review
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/moderation/content` | GET | Content queue |
| `/api/moderation/content/:id` | PUT | Moderate content |

### 4.2 Support Review
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/moderation/support` | GET | Support tickets |
| `/api/moderation/support/:id` | PUT | Moderate ticket |

### 4.3 Reports
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/moderation/reports` | GET | Moderation reports |

---

## 5. AUDITOR WORKSPACE FEATURES

### 5.1 Audit Logs
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/audit/logs` | GET | Audit trail |
| `/api/audit/compliance` | GET | Compliance report |

### 5.2 Reports
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auditor/reports` | GET | Audit reports |

---

## 6. DEVELOPER WORKSPACE FEATURES

### 6.1 API Integration
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/developer/endpoints` | GET | API endpoints list |
| `/api/developer/logs` | GET | Integration logs |
| `/api/developer/status` | GET | Integration status |

---

## 7. OPERATOR WORKSPACE FEATURES

### 7.1 Deployments
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/operator/deployments` | GET | Deployment list |
| `/api/operator/deploy` | POST | Deploy project |

### 7.2 Milestones
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/operator/milestones` | GET | Milestone dispatch |
| `/api/operator/milestones` | POST | Create milestone |

---

## 8. REAL-TIME FEATURES

### 8.1 WebSocket Events
- `message_received` - New message
- `notification_received` - New notification
- `project_updated` - Project status change
- `milestone_updated` - Milestone update
- `deliverable_updated` - Deliverable update
- `invoice_paid` - Payment confirmation

---

## 9. PERMISSIONS MATRIX

| Role | Users | Projects | Content | Chat | Invoices | Audit | Settings |
|------|-------|----------|---------|------|----------|-------|----------|
| Super Admin | Full | Full | Full | Full | Full | Full | Full |
| Admin | CRUD | CRUD | CRUD | CRUD | CRUD | View | CRUD |
| Operator | View | Deploy | - | - | View | - | - |
| Moderator | View | - | Review | Manage | - | - | - |
| Auditor | View | View | View | View | View | View | View |
| Developer | View | View | View | - | - | View | View |
| Client | Limited | Limited | - | Chat | View/Pay | - | Settings |
| User | View | View | - | Chat | - | - | Settings |
| Guest | View | View | - | - | - | - | - |

---

## 10. DATABASE SCHEMA

### Core Tables
1. **users** - User accounts
2. **roles** - Role definitions
3. **permissions** - Permission definitions
4. **user_roles** - User role assignments
5. **role_permissions** - Role-permission mappings
6. **sessions** - Active sessions
7. **clients** - Client profiles
8. **projects** - Project records
9. **project_members** - Project team
10. **milestones** - Project milestones
11. **tasks** - Project tasks
12. **deliverables** - Deliverable records
13. **invoices** - Invoice records
14. **conversations** - Chat conversations
15. **messages** - Chat messages
16. **notifications** - System notifications
17. **audit_logs** - System audit trail
18. **settings** - Site settings

---

## 11. FILE STORAGE

### Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/files/upload` | POST | Upload file |
| `/api/files/:id` | GET | Download file |
| `/api/files/:id` | DELETE | Delete file |
| `/api/files/:id/version` | POST | Upload new version |

---

## 12. BACKGROUND JOBS

1. **Email Queue** - Verification, notifications
2. **Cleanup Job** - Expired sessions, old logs
3. **Analytics Aggregation** - Daily/weekly stats
4. **Report Generation** - PDF exports
5. **Backup Job** - Database backups

---

## 13. SECURITY

1. **Rate Limiting** - API throttling
2. **CSRF Protection** - Token validation
3. **Input Validation** - Sanitize all inputs
4. **Audit Logging** - All actions logged
5. **Session Management** - Secure tokens
6. **File Upload Security** - Type/size limits

---

## Total Endpoints: ~150+

This represents the complete backend requirements for the AfriWaid Studio portal system.