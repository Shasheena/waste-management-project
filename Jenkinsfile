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

        // <-- Override agent only for React build
        stage('Build React App') {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                dir("${FRONTEND_DIR}") {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Spring Boot App') {
            steps {
                dir("${BACKEND_DIR}") {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker build -t my-frontend:latest ./frontend'
                    sh 'docker build -t my-backend:latest ./backend'
                }
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker compose up -d'
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
