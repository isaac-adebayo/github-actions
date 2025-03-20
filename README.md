### Practical Implementation of Github Action Continous Integration (CI)
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
     git pull origin main
     ```
2. #### Created a Simple Node.js Application
   - Initialized a Node.js project (Node.js, npm and Expressjs installed)
   ```
   npm init -y
   ```
   - Created a 'app.js' file containing below code:
   ```
   const express = require('express');
   const app = express();

   const PORT = 8080;

   // Define a route for the root URL "/"
   app.get('/', (req, res) => {
    res.send('<h3>Hello World</h3><p>This test page tests Github Action CI');
   });

   // Start the server
   app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
   });
   ```
   - Tested the code at 'http://localhost:8080' and ensured the projet was working porperly
  ```
  node app.js
  ```
   - Commited the code changes and push the code this Github [repository](https://github.com/isaac-adebayo/github-actions)
  ```
  git add .
  git commit -m "modified app.js file"
  git push -u origin main
  ```
3. #### Created a Github Action Workflow

   - Created a '**.github/workflow**' directory in the local repository
     ```
     mkdir ./.github/workflow -p
     ```
   - Added a workflow file '[**build.yml**](https://github.com/isaac-adebayo/github-actions/blob/main/.github/workflows/build.yml)' file in '**.github/workflow**' directory
     




    










   
