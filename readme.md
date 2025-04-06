# 🌐 Social Network Project

Welcome to the **Social Network App**, a full-stack project built with **React** on the frontend and **Spring Boot** on the backend. This application enables users to register, create posts, interact in groups, and chat with each other in real time. The goal of this project is to simulate the core functionalities of a modern social media platform with clear modularity, scalable architecture, and clean API documentation.

This project also includes:
- An **Entity Relationship Diagram** to visualize the database design.
- A full set of **RESTful APIs** documented using **Swagger**.
- A **report** detailing the development process, decisions, and architecture.

---

## ✅ Project Task Tracker

Use this checklist to track the project's progress across different domains.

### 🛠️ Build & Setup

- [X] Initialize Git repository
- [X] Setup backend (Spring Boot)
- [X] Setup frontend (React)
- [ ] Setup database schema
- [X] Install and configure required Java dependencies:
  - [X] JDBC
  - [X] Spring Boot
  - [X] Spring Dev Tools
  - [X] Swagger (for API documentation) -> springdoc-openapi-starter-webmvc-ui
  - [X] Server runs in -> ```http://localhost:6262/```
- [X] Install and configure React dependencies:
  - [X] React Router
  - [X] Axios
  - [X] Bulma CSS
  - [X] Server runs in -> ```http://localhost:6161/```
- [ ] Set up environment configuration files

---

### 📦 Backend

#### ✅ Models & Entities
- [X] Create `User` model
- [X] Create `Group` model
- [X] Create `Post` model

#### 🔗 Relationships
- [ ] Create `GroupMember` relation
- [ ] Create `GroupAdmin` relation
- [ ] Create `UserPost` relation
- [ ] Create `GroupPost` relation
- [ ] Create `UserChat` relation
- [ ] Create `UserFriends` relation
- [ ] Define relationships between Users, Posts, and Groups
- [ ] Setup many-to-many relationships for group members and friends
- [ ] Setup one-to-many and many-to-one relations as needed

#### 💡 Repositories
- [ ] Create JPA Repositories for each model

#### 🔧 Services
- [ ] Implement Services for Users
- [ ] Implement Services for Groups
- [ ] Implement Services for Posts
- [ ] Implement Services for Chats
- [ ] Implement Services for Friendships

#### 🌐 Controllers
- [ ] Build RESTful APIs for Users
- [ ] Build RESTful APIs for Groups
- [ ] Build RESTful APIs for Posts
- [ ] Build RESTful APIs for Chats
- [ ] Build RESTful APIs for Friendships

#### 🔐 Authentication
- [ ] Setup login system with token-based authentication (JWT or session)
- [ ] Register and login APIs
- [ ] Middleware/auth filter for protected routes

---

### 🎨 Frontend

#### 📄 Pages & Views
- [ ] Front page (Landing)
- [ ] Register page
- [ ] Login modal
- [ ] Home page
- [ ] Group page

#### 🔁 Components
- [ ] Spinner (loading)
- [ ] Post creation modal
- [ ] Group creation modal
- [ ] Chat modal
- [ ] Friends list component
- [ ] Post feed (latest posts from friends)
- [ ] Group posts feed
- [ ] Group members display
- [ ] Navbar

#### 🔗 Routing
- [X] Configure React Router for navigation
- [ ] Private/protected routes after login

#### 📡 API Integration
- [ ] Connect frontend to user APIs
- [ ] Connect frontend to post APIs
- [ ] Connect frontend to group APIs
- [ ] Connect frontend to chat APIs
- [ ] Connect frontend to friend APIs

---

### 📑 Documentation & Deliverables

- [ ] Create Entity Relationship Diagram (ERD)
- [ ] Document all APIs using Swagger
- [ ] Write project report (design decisions, challenges, tools used, etc.)
- [ ] Prepare README documentation

---

## 🧩 ERD Relationships Overview

Here's a quick summary of the relationships:
- **Users** can:
  - Create posts, groups, and chats
  - Be part of groups (GroupMembers)
  - Admin groups (GroupAdmins)
  - Be friends (UserFriends)
- **Groups** have:
  - Members and admins
  - Group-specific posts (GroupPosts)
- **Posts** can be:
  - User posts (UserPosts)
  - Group posts (GroupPosts)
- **Chats** are between two users (UserChat)

---

