## Practical Implementation of Github Action Continous Integration (CI)
### Setting Up the Project:

1. ### Initialize a Github Repository

   - Created this [repository](https://github.com/isaac-adebayo/github-actions) on Github
     
   - Created a project directory in the development environment and initialized git in the repository
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
     git pull origin main
     ```
2. ### Created a Simple Node.js Application
   - Initialized a Node.js project (Node.js, npm and Expressjs installed)
     ```
     npm init -y
     ```
   - Created a '**[app.js](https://github.com/isaac-adebayo/github-actions/blob/main/app.js)**' file in the directory
   - Tested the code at 'http://localhost:3000' and ensured the projet worked properly
     ```
     npm start
     ```
   - Commited the code changes and push the code this Github [repository](https://github.com/isaac-adebayo/github-actions)
     ```
     git add .
     git commit -m "modified app.js file"
     git push -u origin main
     ```
3. ### Created a Github Action Workflow

   - Created a '**.github/workflows**' directory in the local repository
     ```
     mkdir ./.github/workflows -p
     ```
   - Added a workflow file '[**build.yml**](https://github.com/isaac-adebayo/github-actions/blob/main/.github/workflows/build.yml)' file in '**.github/workflow**' directory

4. ### Testing and Deployment
   - Installed jest
     ```
     npm install --save-dev jest
     ```
   - Created a **'tests/'** directory in the repository
     ```
     mkdir tests/
     ```
   - Created [**app.test.js**](https://github.com/isaac-adebayo/github-actions/blob/main/tests/app.test.js) file in the **'tests/'** directory
   - Ran test command
     ```
     npm test
     ```
   - Logded in to Docker Hub and pushed the application to [Docker Hub](https://hub.docker.com/repository/docker/isaacreg/ga-nodejs/general), used "**docker/login-action@v3**" action
      
     




    










   
