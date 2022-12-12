# BackstopJS locally
BackstopJS automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.


# Installation BackstopJS.

<hr>

<p>1. You must have node.js installed. To install node.js, go to https://nodejs.org/en/download/, and click download latest version.</p>

![image](https://user-images.githubusercontent.com/98982966/207054626-99b4a7b5-866e-41cf-97a8-149e83591681.png)

<hr>

<p>2. After installation, you can check if your node is properly installed by typing "node -v" in cmd.</p>

<hr>

![image](https://user-images.githubusercontent.com/98982966/207055948-0350d6ca-b63c-4a22-9477-42f737b72404.png)

<hr>

<p>3. If the version is returned, it means that the node is installed correctly.</p>

<hr>

<p>4.Then create a new folder, and open the new folder with visual studio code.</p>

<hr>

![image](https://user-images.githubusercontent.com/98982966/207054039-baeff9e5-8b18-4029-ab66-d9aa9356e9b7.png)

<hr>

<p>5.Click on "Terminal" and then "New Terminal" or special keyboard shortcut ctr + ~ .</p>

<hr>

![image](https://user-images.githubusercontent.com/98982966/207055066-88261ad0-8c12-4b62-a270-bcf8b91361bf.png)

<hr>

<p>6. Type "npm init -y" in the console.</p>

<hr>

![image](https://user-images.githubusercontent.com/98982966/207052447-54f31473-be0b-41b5-b0a5-51557f051fd9.png)


<hr>

<p>7. Then type "npm i backstopjs".</p>

![image](https://user-images.githubusercontent.com/98982966/207052584-aa5ebcca-b715-4114-8ba9-d1287569689b.png)


<p>8. The last step to install backstopJS is to initialize the backstop project, so we write another command "backstop init" in the console.</p>

![image](https://user-images.githubusercontent.com/98982966/207052781-55950f56-461f-415d-9dd3-356bbe1613ce.png)

<hr>

<p>9. In our working directory there should be files: </p>

![image](https://user-images.githubusercontent.com/98982966/207053190-4c8031c7-ef84-428c-ae93-a02f48a07e0c.png)

<p>10. If your folder contains all the files, download run.js and paste it into your working directory.</p>

![image](https://user-images.githubusercontent.com/98982966/207065713-d053044c-8b5f-4203-90d5-e22e817a4628.png)

<p>11. Then click on run.js end edit this file to your needs.</p>

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

<hr>

<p>1.1 To add such formatting to multiple slugs, use this option</p>

> ![image](https://user-images.githubusercontent.com/98982966/207071898-15804b1f-2702-48b9-8336-521fb2a5a77b.png)

<hr>

<p>2. In this variable you can remove class or id. </p>

![image](https://user-images.githubusercontent.com/98982966/207073313-47a03a26-22af-461a-9798-caaee84df29f.png)

<hr>

<p>3.With this, add reference url and comparison url</p>

![image](https://user-images.githubusercontent.com/98982966/207074586-82be4497-d859-40b4-8d05-144f0a74e523.png)

<p>like that:</p>

```
let referenceUrl = "https://www.google-stg.com";

let comparisonUrl = "https://www.google.com"; 
  
```
<hr>

<p>4. Delay -> Wait for x milliseconds between screenshots.</p>

![image](https://user-images.githubusercontent.com/98982966/207075473-4b9313db-d58d-4f9e-8e20-bae8eee42ce0.png)

<hr>

<p>5. Edit the name of the screenshots test</p>

![image](https://user-images.githubusercontent.com/98982966/207076459-331594c1-b0e9-400d-8d81-a3550a361c47.png)

```
let testName = "exampleTitleFile"; 
```
<hr>

# First screenshots comparison

<p>1. After configuring the run.js file, you need to make changes to the backstop.json file, so enter the command "node run" in the console to run the file</p>

![image](https://user-images.githubusercontent.com/98982966/207078247-b9002dd7-fc7e-48f8-8cd7-9a97ccb7f28e.png)

> If no error occurred, you should get message "Backstop.json edited".

<hr>

<p>To make a reference, enter "backstop reference" in the console.</p>
> 
