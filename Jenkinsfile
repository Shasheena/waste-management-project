pipeline {
    agent any

    environment {
        FRONTEND_DIR = "frontend"
        BACKEND_DIR = "backend"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'integration', url: 'https://github.com/Shasheena/waste-management-project.git'
            }
        }

        stage('Build React App') {
            steps {
                dir("${FRONTEND_DIR}") {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Spring Boot App') {
            steps {
                dir("${BACKEND_DIR}") {
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    bat 'docker build -t my-frontend:latest ./frontend'
                    bat 'docker build -t my-backend:latest ./backend'
                }
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo '✅ Build and Dockerization successful!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
