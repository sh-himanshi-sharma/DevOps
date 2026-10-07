pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling from GitHub'
                git branch: 'main', url: 'https://github.com/sh-himanshi-sharma/DevOps.git'
            }
        }
        stage('Build')   { steps { sh 'echo "Building..."' } }
        stage('Test')    { steps { sh 'echo "Tests passed"' } }
        stage('Deploy')  { steps { sh 'echo "Deployed"' } }
    }
    post {
        success { echo "Build ${env.BUILD_NUMBER} succeeded" }
        failure { echo "Build ${env.BUILD_NUMBER} failed" }
    }
}
