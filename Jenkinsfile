pipeline {
    agent any

    // environment {
    //     NODE_HOME = tool name: 'Node 14.x', type: 'NodeJS'
    //     PATH = "${NODE_HOME}/bin:${env.PATH}"
    // }

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from Git repository
                git 'https://github.com/Pravalika7-V/5.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install NPM dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests using Mocha
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // You can add build commands here if needed
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
