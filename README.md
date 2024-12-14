
# **Group 14- SENG8071 - Final Assignment**

## **Project Title:** Road Freight Transportation System

---

## **Project Description**
This project is a system designed for a Road Freight Transportation company to manage trucks, employees, repairs, shipments, and trips. It includes:
1. A **working database** with all the required tables and columns.
2. **CRUD operations** implemented for each table.
3. **Unit and integration tests** to verify the CRUD operations.
4. A **migration script** to seed at least three rows of data in each table.
5. An **Entity Relationship Diagram (ERD)** to depict the database design.

---

## **Setup and Execution Instructions**

### **1. Prerequisites**
- **Node.js**: Ensure Node.js (v16 or later) is installed.
- **Docker**: Install Docker and Docker Compose.
- **Postman**: Recommended for testing API endpoints.

---

### **2. Install Dependencies**
Install all required Node.js dependencies:
```bash
npm install
```

This will install the following key packages:
- **express**: For building RESTful API endpoints.
- **sequelize**: For managing database models and queries.
- **sequelize-cli**: For migrations, seeders, and database configuration.
- **pg**: PostgreSQL driver for Sequelize.
- **pg-hstore**: A dependency for PostgreSQL's HStore data type.
- **dotenv**: To manage environment variables.
- **body-parser**: To parse incoming request bodies.

---

### **3. Setup Environment**
Before running the application, ensure the environment variables are set up correctly. Create a `.env` file in the root directory:

```bash
touch .env
```

Add the following content to the `.env` file:
```
# Database Configuration
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=road_freight

# Application Configuration
NODE_ENV=development
PORT=3000
```

The `DB_HOST` value must match the name of the database service (`db`) defined in the `docker-compose.yml` file.

---

### **4. Testing the Application**

#### **Run Unit and Integration Tests**
To verify that all CRUD operations and API endpoints are functioning correctly, run the tests using:
```bash
npm test
```

The test suite includes:
- **Unit Tests**: Validate CRUD operations for each table.
- **Integration Tests**: Verify that API endpoints work correctly with the database.

---

#### **Test API Endpoints Using Postman**
You can use Postman to manually test the API endpoints.

**Examples**:
- **GET all trucks**:
  ```http
  GET http://localhost:3000/trucks
  ```
- **POST a new truck**:
  ```http
  POST http://localhost:3000/trucks
  Content-Type: application/json

  {
    "brand": "Volvo",
    "load_capacity": 20,
    "year": 2020,
    "num_repairs": 2
  }
  ```

---

### **5. Run the Project**
Start the Docker containers:
```bash
docker-compose up --build
```

This will:
- Launch the API server on `http://localhost:3000`
- Launch pgAdmin on `http://localhost:8080` (Login: `admin@admin.com`, Password: `admin`).

To check container statuses, run:
```bash
docker-compose ps
```

---

### **6. Database Migrations**
Apply the migrations to create database tables:
```bash
npx sequelize-cli db:migrate
```

This will create the following tables in the PostgreSQL database:
- `Trucks`
- `Employees`
- `Repairs`
- `Customers`
- `Shipments`
- `Trips`

---

### **7. Seed the Database**
Populate the tables with sample data:
```bash
npx sequelize-cli db:seed:all
```

Each table will be populated with at least three rows of sample data.

---

### **8. API Endpoints**

#### **Trucks**
- **GET** `/trucks` - Get all trucks.
- **GET** `/trucks/:id` - Get a truck by ID.
- **POST** `/trucks` - Add a new truck.
- **PUT** `/trucks/:id` - Update a truck.
- **DELETE** `/trucks/:id` - Delete a truck.

#### **Employees**
- **GET** `/employees` - Get all employees.
- **GET** `/employees/:id` - Get an employee by ID.
- **POST** `/employees` - Add a new employee.
- **PUT** `/employees/:id` - Update an employee.
- **DELETE** `/employees/:id` - Delete an employee.

#### **Repairs**
- **GET** `/repairs` - Get all repairs.
- **POST** `/repairs` - Add a repair record.

#### **Shipments**
- **GET** `/shipments` - Get all shipments.
- **POST** `/shipments` - Add a new shipment.

#### **Trips**
- **GET** `/trips` - Get all trips.
- **POST** `/trips` - Add a new trip.

---

### **9. Commands Reference**

#### **Sequelize CLI**
- Initialize Sequelize:
  ```bash
  npx sequelize-cli init
  ```
- Generate a new migration:
  ```bash
  npx sequelize-cli migration:generate --name create-<table-name>
  ```
- Run migrations:
  ```bash
  npx sequelize-cli db:migrate
  ```
- Generate a new seeder:
  ```bash
  npx sequelize-cli seed:generate --name seed-<table-name>
  ```
- Run all seeders:
  ```bash
  npx sequelize-cli db:seed:all
  ```

#### **Docker Commands**
- Start containers:
  ```bash
  docker-compose up --build
  ```
- Stop containers:
  ```bash
  docker-compose down
  ```

---

### **10. Lessons Learned**
1. Designing normalized database schemas ensures data consistency and reduces redundancy.
2. Migrations and seeders help maintain reproducible database states during development and testing.
3. Unit and integration testing improves code quality.

---
