pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling from GitHub'
                git branch: 'main',
                    url: 'https://github.com/sh-himanshi-sharma/DevOps.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'echo Build complete'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'echo Tests passed'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                bat 'echo Deployed successfully'
            }
        }
    }

    post {
        success {
            echo "Build ${env.BUILD_NUMBER} succeeded"
        }
        failure {
            echo "Build ${env.BUILD_NUMBER} failed"
        }
    }
}
