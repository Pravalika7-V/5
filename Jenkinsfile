pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from Git repository
                git 'https://github.com/Pravalika7-V/5.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install NPM dependencies (Windows command)
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests using Mocha (Windows command)
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Add build commands here if needed
                echo 'Building the project'
            }
        }

        stage('Deploy') {
            steps {
                // Optional: Add your deployment steps (e.g., upload to server, Docker, etc.)
                echo 'Deploying the application'
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
