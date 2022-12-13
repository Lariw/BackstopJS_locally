# BackstopJS locally
BackstopJS automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.

More information and configuration options can be found at [garris/BackstopJS](https://github.com/garris/BackstopJS)

## Installation BackstopJS.

1. You must have node.js installed. To install node.js, go to [Node page](https://nodejs.org/en/download/) and click download latest version.

![image](https://user-images.githubusercontent.com/98982966/207054626-99b4a7b5-866e-41cf-97a8-149e83591681.png)

<hr>

2. After installation, you can check if your node is properly installed by typing "node -v" in cmd.

![image](https://user-images.githubusercontent.com/98982966/207055948-0350d6ca-b63c-4a22-9477-42f737b72404.png)
> <p> If the version is returned, it means that the node is installed correctly.</p>

<hr>

3.Then create a new folder, and open the new folder with visual studio code.

![image](https://user-images.githubusercontent.com/98982966/207054039-baeff9e5-8b18-4029-ab66-d9aa9356e9b7.png)

<hr>

4.Click on "Terminal" and then "New Terminal" or special keyboard shortcut ctr + ~ .

![image](https://user-images.githubusercontent.com/98982966/207055066-88261ad0-8c12-4b62-a270-bcf8b91361bf.png)

<hr>

5. Type "npm init -y" in the console.

![image](https://user-images.githubusercontent.com/98982966/207052447-54f31473-be0b-41b5-b0a5-51557f051fd9.png)

<hr>

6. Then type "npm i backstopjs".

![image](https://user-images.githubusercontent.com/98982966/207052584-aa5ebcca-b715-4114-8ba9-d1287569689b.png)


7. The last step of installing backstopJS is to initialize the backstop project, so write another "backstop init" command in the console.

![image](https://user-images.githubusercontent.com/98982966/207052781-55950f56-461f-415d-9dd3-356bbe1613ce.png)

<hr>

8. In our working directory there should be files: 

![image](https://user-images.githubusercontent.com/98982966/207053190-4c8031c7-ef84-428c-ae93-a02f48a07e0c.png)

9. If your folder contains all the files, download run.js and paste it into your working directory.

![image](https://user-images.githubusercontent.com/98982966/207065713-d053044c-8b5f-4203-90d5-e22e817a4628.png)

10. Then click on run.js end edit this file to your needs.

# Configuration run.js to final test.

## File structure overview.

<p>1. Enter the page slug into this variable, the data must be formatted in the appropriate way, e.g </p>

```
"/contact/",
"/home/",
"/video/",
"/about us/",
"/more-info/",
```

![image](https://user-images.githubusercontent.com/98982966/207070278-35adf029-ce45-43ea-89d7-b7bcb4f396df.png)

> <p>1.1 To add such formatting to multiple slugs, use this option</p>

> ![image](https://user-images.githubusercontent.com/98982966/207071898-15804b1f-2702-48b9-8336-521fb2a5a77b.png)

<hr>

<p>2. In this variable you can remove class or id. </p>

![image](https://user-images.githubusercontent.com/98982966/207073313-47a03a26-22af-461a-9798-caaee84df29f.png)

<hr>

<p>3.With this, add reference url and comparison url</p>

![image](https://user-images.githubusercontent.com/98982966/207074586-82be4497-d859-40b4-8d05-144f0a74e523.png)

<p>like that:</p>


`let referenceUrl = "https://www.google-stg.com";`

`let comparisonUrl = "https://www.google.com"; `
 
<hr>

<p>4. Delay -> Wait for x milliseconds between screenshots.</p>

![image](https://user-images.githubusercontent.com/98982966/207075473-4b9313db-d58d-4f9e-8e20-bae8eee42ce0.png)

<hr>

<p>5. Edit the name of the screenshots test</p>

![image](https://user-images.githubusercontent.com/98982966/207076459-331594c1-b0e9-400d-8d81-a3550a361c47.png)

`let testName = "exampleTitleFile";`

<hr>

# First screenshots comparison

<p>1. After configuring the run.js file, you need to make changes to the backstop.json file, so enter the command "node run" in the console to run the file</p>

![image](https://user-images.githubusercontent.com/98982966/207078247-b9002dd7-fc7e-48f8-8cd7-9a97ccb7f28e.png)

> If no error occurred, you should get message "Backstop.json edited".

<hr>

<p>2. To make a reference, enter "backstop reference" in the console.</p>

![image](https://user-images.githubusercontent.com/98982966/207253352-df27aa6b-3fab-443e-90e3-abdf74e871ee.png)

> <p>After making the references, you can view the screenshots in the file</p>

> ![image](https://user-images.githubusercontent.com/98982966/207253825-db72a8a4-25a2-4435-ac52-dd88d0b180ee.png)

<hr>

<p>3. After checking the references screenshots you can run the comparison by typing "backstop test"</p>

![image](https://user-images.githubusercontent.com/98982966/207254639-3dd6ab63-e32e-4440-af09-bb7c6d68d19c.png)

<p>4. After the test is finished, the html report will automatically open in the browser</p>

![image](https://user-images.githubusercontent.com/98982966/207254980-50b35660-65b1-4dc8-bb5d-b0536d6af64f.png)

<p>5. You can also run the report by typing in the console backstop openReport</p>

![image](https://user-images.githubusercontent.com/98982966/207257089-6702ae36-48a1-4489-9216-4a1427a10194.png)

# The most important console commands in backstopJS
##### `npm install bacstopjs` - backstopJS installation
##### `backstop init` - initializing the backstopJS project
##### `backstop reference` - creating reference screenshots
##### `backstop test` - creating comparison screenshots
##### `backstop openReport` - opening the backstopjs report
##### `backstop approve` - committing backstopjs changes

