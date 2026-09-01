# ☁️ Smart Cloud-Based Resource Monitoring & Auto-Scaling System

A full-stack cloud resource monitoring and auto-scaling system that monitors CPU and memory utilization, visualizes infrastructure performance, and dynamically scales compute instances based on workload conditions.

## 📌 Overview

Cloud applications experience constantly changing workloads. Using a fixed number of servers can cause either over-provisioning and unnecessary cost or under-provisioning and poor performance.

This project demonstrates a cloud resource monitoring and auto-scaling solution that continuously evaluates resource utilization and makes scaling decisions based on configurable thresholds.

## 🚀 Key Features

- 📊 CPU utilization monitoring
- 🧠 Memory utilization monitoring
- 🖥️ Active instance monitoring
- ⚡ Automatic scale-out
- 🔽 Automatic scale-in
- 📈 Resource activity visualization
- 📊 Instance scaling trend
- 🚨 Scaling event notifications
- 🔔 Toast alerts
- ⚡ Traffic load simulation
- 🖥️ Individual instance workload monitoring
- 🗄️ MySQL database integration
- 🔌 REST API
- ☁️ Cloud-ready architecture
- 📦 Modular frontend and backend structure

## 🏗️ System Architecture

                    ┌─────────────────────────┐
                    │   Application Traffic   │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │ Resource Monitoring     │
                    │                         │
                    │ CPU Usage               │
                    │ Memory Usage            │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │ Scaling Decision Engine │
                    │                         │
                    │ CPU > 70% OR            │
                    │ Memory > 75%             │
                    │        ↓                │
                    │     SCALE OUT           │
                    │                         │
                    │ CPU < 30% AND           │
                    │ Memory < 40%             │
                    │        ↓                │
                    │      SCALE IN           │
                    └────────────┬────────────┘
                                 │
                         ┌───────┴───────┐
                         ▼               ▼
                  ┌────────────┐  ┌────────────┐
                  │ Scale Out  │  │  Scale In  │
                  │ New Node   │  │ Terminate  │
                  └────────────┘  └────────────┘
                         │               │
                         └───────┬───────┘
                                 ▼
                    ┌─────────────────────────┐
                    │ CloudOps Control Center │
                    │                         │
                    │ Charts • Metrics        │
                    │ Events • Instances      │
                    └─────────────────────────┘

## ⚡ Auto-Scaling Logic

The system uses threshold-based scaling.

### Scale Out

A new instance is created when:

    CPU > 70%
    OR
    Memory > 75%

Example:

    CPU: 78%
    Memory: 82%

            ↓

        SCALE OUT

            ↓

    New Instance Created

### Scale In

An instance is removed when:

    CPU < 30%
    AND
    Memory < 40%

Example:

    CPU: 24%
    Memory: 35%

            ↓

        SCALE IN

            ↓

    Instance Terminated

## 🖥️ CloudOps Control Center

The React dashboard provides a centralized view of the cloud environment.

The dashboard contains:

- CPU Usage
- Memory Usage
- Active Instances
- Scaling Decision
- Simulate Traffic Load button
- Resource Activity Chart
- Instance Scaling Trend
- Recent Scaling Events
- Instance Workload Monitor
- Toast Notifications

Example:

    ┌──────────────┬──────────────┬────────────────┬─────────────────┐
    │ CPU Usage    │ Memory Usage │ Active         │ Scaling         │
    │              │              │ Instances      │ Decision        │
    ├──────────────┼──────────────┼────────────────┼─────────────────┤
    │     72%      │      81%     │       2        │   Scaling Up    │
    └──────────────┴──────────────┴────────────────┴─────────────────┘

## 🔄 System Workflow

1. Workload is generated or simulated.
2. CPU and memory utilization are calculated.
3. Resource metrics are monitored.
4. Metrics are compared against scaling thresholds.
5. The scaling engine decides whether to scale in or scale out.
6. New instances can be created when demand increases.
7. Instances can be terminated when demand decreases.
8. Scaling events are recorded.
9. The React dashboard displays the updated metrics and instance state.

## 📡 Backend API

The backend exposes a metrics endpoint:

    GET /metrics

Example response:

    {
      "cpu": 72,
      "memory": 81,
      "instances": 2,
      "status": "Scaling Out"
    }

The instance-aware backend can return detailed instance information:

    {
      "cpu": 72,
      "memory": 81,
      "instances": [
        {
          "id": 101,
          "status": "Running"
        },
        {
          "id": 102,
          "status": "Running"
        }
      ],
      "status": "Scaling Out"
    }

## 🧩 Technology Stack

### Frontend

- React
- JavaScript
- Vite
- Recharts
- CSS

### Backend

- Node.js
- Express.js
- JavaScript
- CORS
- REST API

### Database

- MySQL

### Cloud & DevOps

- AWS EC2
- AWS Auto Scaling
- AWS CloudWatch
- AWS Load Balancer
- AWS VPC
- Docker
- Jenkins
- Terraform

Note: The current project is primarily a functional local simulation. AWS services represent the planned cloud deployment and integration architecture.

## 📁 Project Structure

    Smart-cloud-based-Resource-monitoring-and-autoscaling-system/
    │
    ├── backend/
    │   ├── package.json
    │   ├── package-lock.json
    │   └── server.js
    │
    ├── cloudops-backend/
    │   ├── db.js
    │   ├── package.json
    │   ├── package-lock.json
    │   └── server.js
    │
    ├── cloudops-control-center/
    │   ├── public/
    │   ├── src/
    │   │   ├── assets/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── styles/
    │   │   ├── App.jsx
    │   │   ├── index.css
    │   │   └── main.jsx
    │   ├── .gitignore
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── README.md
    │   └── vite.config.js
    │
    ├── .gitignore
    └── README.md

## 🚀 Getting Started

### Prerequisites

Install the following:

- Node.js
- npm
- MySQL
- Git
- VS Code

Check Node.js:

    node --version

Check npm:

    npm --version

## 📥 Clone the Repository

    git clone https://github.com/Manideep-06/Smart-cloud-based-Resource-monitoring-and-autoscaling-system.git

    cd Smart-cloud-based-Resource-monitoring-and-autoscaling-system

## 🎨 Run the Frontend

Navigate to the frontend:

    cd cloudops-control-center

Install dependencies:

    npm install

Start the Vite development server:

    npm run dev

The frontend normally runs at:

    http://localhost:5173

## 🔧 Run the Backend

Open another terminal at the project root.

Navigate to the backend:

    cd backend

Install dependencies:

    npm install

Start the backend:

    node server.js

The backend runs at:

    http://localhost:5000

Metrics API:

    http://localhost:5000/metrics

## 🗄️ Database Backend

The cloudops-backend directory contains the MySQL-enabled backend.

Navigate to:

    cd cloudops-backend

Install dependencies:

    npm install

Create a .env file with your database configuration.

Example:

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=cloudops_db
    DB_PORT=3306

Start the backend:

    node server.js

## 🔐 Environment Variables

Never upload real credentials to GitHub.

Recommended .env configuration:

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=cloudops_db
    DB_PORT=3306

Create a .env.example file for the repository:

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=cloudops_db
    DB_PORT=3306

Make sure .env is included in .gitignore.

Recommended .gitignore:

    node_modules/
    .env
    .env.*
    !.env.example

    dist/
    build/

    .vscode/
    .idea/

    *.log
    coverage/

## 🧠 Scaling Implementation

The prototype uses threshold-based scaling.

Scale-Out condition:

    if (cpu > 70 || memory > 75) {
        // Create new instance
    }

Scale-In condition:

    if (cpu < 30 && memory < 40) {
        // Remove an instance
    }

Instances contain information such as:

    {
        id: "i-101",
        status: "Running",
        work: "Handling API",
        load: 20,
        memory: 40
    }

## 📊 Monitoring and Visualization

The dashboard provides visual monitoring of infrastructure performance.

It tracks:

- CPU history
- Memory history
- Instance count
- Scaling state
- Scaling events
- Instance workload
- Instance CPU share
- Instance memory usage

The Activity Chart displays historical resource utilization, while the Instance Scaling Trend visualizes changes in workload and scaling behavior.

## 🚨 Scaling Events

When a high workload is detected, the dashboard can display:

    High resource usage detected.
    Scaling Up triggered.

Example event:

    10:32:14 — i-102 launched successfully

When workload decreases:

    Low resource usage detected.
    Scaling Down triggered.

Example event:

    10:35:20 — i-101 terminated to reduce cost

## ☁️ AWS Deployment Architecture

The planned cloud deployment architecture is:

                         AWS CLOUD
                             │
                             ▼
                 ┌─────────────────────┐
                 │ Application Load     │
                 │ Balancer             │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │ EC2 Auto Scaling    │
                 │ Group               │
                 └──────────┬──────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
          ┌───────┐     ┌───────┐     ┌───────┐
          │ EC2-1 │     │ EC2-2 │     │ EC2-3 │
          └───┬───┘     └───┬───┘     └───┬───┘
              │             │             │
              └─────────────┼─────────────┘
                            ▼
                   ┌────────────────┐
                   │ AWS CloudWatch │
                   │ Metrics        │
                   └───────┬────────┘
                           │
                           ▼
                   ┌────────────────┐
                   │ Node.js        │
                   │ Monitoring API │
                   └───────┬────────┘
                           │
                           ▼
                   ┌────────────────┐
                   │ React          │
                   │ Control Center │
                   └────────────────┘

## ☁️ Planned AWS Services

The system can be extended using:

- Amazon EC2
- EC2 Auto Scaling Groups
- Amazon CloudWatch
- Elastic Load Balancing
- Amazon VPC
- IAM
- Amazon RDS
- S3

These services can replace the current local simulation with real cloud infrastructure monitoring and scaling.

## 🎯 Project Objectives

The main objectives of this project are:

1. Monitor cloud resource utilization.
2. Track CPU and memory usage.
3. Detect workload changes automatically.
4. Dynamically scale compute resources.
5. Reduce unnecessary infrastructure cost.
6. Improve application availability.
7. Visualize infrastructure performance.
8. Maintain scaling event history.
9. Provide a centralized cloud operations dashboard.
10. Create a foundation for predictive auto-scaling.

## 🧪 Example Scenario

### High Workload

    CPU Usage:    78%
    Memory Usage: 84%

The scaling engine evaluates:

    78% > 70%
    84% > 75%

Decision:

        SCALE OUT
            ↓
    Create New Instance
            ↓
         i-103
            ↓
         Running

### Low Workload

    CPU Usage:    24%
    Memory Usage: 35%

The scaling engine evaluates:

    24% < 30%
    35% < 40%

Decision:

         SCALE IN
            ↓
    Terminate Instance
            ↓
       Reduce Cost

## 🔮 Future Enhancements

- [ ] Real AWS EC2 monitoring
- [ ] AWS Auto Scaling Group integration
- [ ] Amazon CloudWatch integration
- [ ] Application Load Balancer integration
- [ ] Real-time WebSocket monitoring
- [ ] Persistent metric history
- [ ] Advanced MySQL analytics
- [ ] CPU usage forecasting
- [ ] Memory usage forecasting
- [ ] Machine-learning-based scaling
- [ ] Predictive auto-scaling
- [ ] Cloud cost estimation
- [ ] User authentication
- [ ] Role-based access control
- [ ] Docker deployment
- [ ] Jenkins CI/CD pipeline
- [ ] Terraform infrastructure provisioning
- [ ] Email and notification alerts
- [ ] Production deployment

## 🛡️ Security

Never commit sensitive information to GitHub.

Do not store the following in source code:

- AWS Access Keys
- AWS Secret Keys
- Database passwords
- API keys
- Authentication tokens
- Private credentials

Always use environment variables for sensitive configuration.

Make sure .env is ignored by Git.

## 🤝 Contributing

Create a feature branch:

    git checkout -b feature/my-feature

Make your changes and add them:

    git add .

Commit your changes:

    git commit -m "Add new feature"

Push your branch:

    git push origin feature/my-feature

## 📌 Git Workflow

After making changes to the project:

    git status

    git add .

    git commit -m "Describe your changes"

    git push

Example:

    git add .
    git commit -m "Improve autoscaling dashboard"
    git push

## 👨‍💻 Author

AMRUTHAM VENKAT MANIDEEP

B.Tech — Computer Science & Engineering
Specialization: Cloud Infrastructure Design and Engineering
KL University
Hyderabad, Telangana

GitHub:
https://github.com/Manideep-06

## 📜 License

This project is intended for educational, academic, and portfolio purposes.

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

Built to explore cloud monitoring, intelligent resource management, automatic scaling, and cloud infrastructure engineering.
