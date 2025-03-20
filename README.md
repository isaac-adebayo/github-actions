# Practical Implementation of Github Action Continous Integration (CI)
### Setting Up the Project:

1. #### Initialize a Github Repository

   - Created this [repository](https://github.com/isaac-adebayo/github-actions) on Github
     
   - Created a project directory in the development environment and initialized git in the directory
   ```
   mkdir github-action && cd github-action
   git init -b main
   ```
   - Added this [repository](https://github.com/isaac-adebayo/github-actions) on Github as the remote repository used for Fetch and Pull in the local repository.
   ```
   git remote add origin git@github.com:isaac-adebayo/github-actions.git
   git remote -v
   ```
   - Synced the remote repository with the local repository
     ```
     git pull
     ```
