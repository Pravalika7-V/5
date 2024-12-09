pipeline {
    agent any

    stages {
     

        stage('Build') {
            steps {
                // Add build commands here if needed
                echo 'Building the project'
            }
        }
         stage('Run Tests') {
            steps {
                // Run tests using Mocha (Windows command)
                echo "testing"
            }
        }

        stage('Deploy') {
            steps {
                // Optional: Add your deployment steps (e.g., upload to server, Docker, etc.)
                echo 'Deploying the application'
            }
        }
    }

   
}
