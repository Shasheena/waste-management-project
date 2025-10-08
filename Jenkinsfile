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
                    echo '💻 Installing Node dependencies...'
                    sh 'npm install'
                    echo '📦 Building React app...'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Spring Boot App') {
            steps {
                dir("${BACKEND_DIR}") {
                    echo '🔨 Building Spring Boot app...'
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    echo '🐳 Building Docker images...'
                    sh 'docker build -t my-frontend:latest ./frontend'
                    sh 'docker build -t my-backend:latest ./backend'
                }
            }
        }

        stage('Run Containers') {
            steps {
                echo '🚀 Starting containers with Docker Compose...'
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
