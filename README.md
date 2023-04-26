# project-documentation

<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://user-images.githubusercontent.com/89438683/234467013-8bb3bbd6-4941-49e5-8668-f24a859434b1.png" alt="Project logo"></a>
</p>

<h3 align="center">EmployeeCentral</h3>

<div align="center">

  

</div>

---

<p align="center"> EmployeeCentral is a project designed to streamline employee management by allowing users to easily add, update, and delete employee personal details. For new employees, users can input all necessary personal information, while existing employee details can be updated as needed. The system also allows for the deletion of employee personal details when necessary. With EmployeeCentral, employee management is made simple and efficient, saving time and resources for businesses.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
The purpose of EmployeeCentral is to provide a user-friendly and efficient solution for managing employee personal details. By allowing users to easily add, update, and delete employee information, the system aims to simplify the process of managing employee data for businesses. This can help save time and resources, as well as reduce errors and ensure accuracy of employee information.

Additionally, the ability to quickly update employee information can ensure that businesses remain compliant with any relevant regulations or requirements. Overall, EmployeeCentral aims to improve the management of employee data, making it a valuable tool for businesses of all sizes.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them.

```
IDE: Visual Studio
```
```
Extensions: 
1. React JS code snippets
2. ESLint
3. Prettier
4. Java Extension Pack
5. Debugger for Java
6. Tailwind CSS IntelliSense
7. Next.js Extension Pack
```

### Installing
A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Go to the VS Code Site and Download the current version of the (Visual Studio)VS code
```

```
Install the Node.JS if Not Installed already from the site.
```
```
Go to the VS code and add the following Extensions :-
1. React JS code snippets
2. ESLint
3. Prettier
4. Java Extension Pack
5. Debugger for Java
6. Tailwind CSS IntelliSense
7. Next.js Extension Pack
```

<b>This is for react application</b>

```
Create Application using the following commands 

npx create-react-app application-name

this will install the node module requied for the project.
```
```
For back end install Java current version 
```
```
Also install Spring boot
```
```
Afet running the first command it will show the following

You can now view client in the browser.

  Local:            http://localhost:3000
  
  AND 
  
  webpack compiled successfully 
```

<b>This is for Next js application</b>

```
Create Application using the following commands 

npx create-next-app [project-name]

this will install the node module requied for the project.
```

```
Afet running the first command it will show the following

ready - started server on 0.0.0.0:3000, url: http://localhost:3000

wait  - compiling...
event - compiled successfully in 186 ms (172 modules)
```

## 🎈 Usage <a name="usage"></a>

```
1. Header:
 The header is created same in both UI with the help of tailwind 
CSS which allows to write minimum code without creating css page
and to make it more aesthetic.
```
<img width=1100px height=100px src="https://user-images.githubusercontent.com/89438683/234478224-024743e2-64a4-497a-ba9f-01ab5a3da733.png" alt="Project logo">

```
2. Add Employee:
 As the page start after header the next Element is Button which 
used to add the personal data of the employee as such button indicates 
“Add Employee” on it when it is clicked it will take us to input form 
where we add employee details with respect to given input boxes as 
shown in below image.
 In case of Next Js UI when the button is clicked it shows the small 
input box which is created using headless UI which allows it to appear
on existing page as shown below.

```
<img width=1000px height=700px src="https://user-images.githubusercontent.com/89438683/234481808-8f960eea-9a77-451d-ad02-e6fbbba97e37.png" alt="Project logo">
<img width=1000px height=700px src="https://user-images.githubusercontent.com/89438683/234481877-4bc446eb-825a-4aac-ab9a-f8b1329aa868.png" alt="Project logo">

```
3. Employee List:
 Employee list is similar in both react Js and Next Js it is created 
using hooks, API’s which are essential in displaying the data which 
is fetched from backend as SQL database to java from java to local 
host directory.
```
<img width=1000px height=700px src="https://user-images.githubusercontent.com/89438683/234481366-7179599c-5beb-4771-b6cc-bcceba33f1b7.png" alt="Project logo">

```
4. Edit and Update:
 The edit function is given to in the employee list to edit the data of 
each employee if necessary after clicking on the edit button it take us 
to view the input boxes where the data can be changed.
 For Next Js it shows the input boxes which is displayed over the 
employee list.
```
<img width=600px height=450px src="https://user-images.githubusercontent.com/89438683/234481216-f8f67045-9359-4744-b2a3-0f1ae745a3b9.png" alt="Project logo">
<img width=1000px height=700px src="https://user-images.githubusercontent.com/89438683/234481137-b81544a5-6c3f-453e-88a1-61f76eb95cfa.png" alt="Project logo">

```
5. Delete: 
 Delete is displayed right next to the edit button as name suggest it 
deletes the data from database 

```
<img width=100px height=70px src="https://user-images.githubusercontent.com/89438683/234480878-9bb4155d-4fd1-46da-9584-b5371269bc30.png" alt="Project logo">

```
6. Login with Authentication:
 In next Js we have used the next auth dependency to keep the 
employee data safe form unauthorized user. To authenticate we 
have used Facebook app which asks the user to log in using 
Facebook ID and Password
```
<img width=600px height=400px src="https://user-images.githubusercontent.com/89438683/234480283-087492dc-6150-42f8-9678-e5fb0a54aa3c.png" alt="Project logo">
<img width=500px height=200px src="https://user-images.githubusercontent.com/89438683/234480321-c28e7f6d-9d52-469a-9a78-06467a026124.png" alt="Project logo">
<img width=900px height=70px src="https://user-images.githubusercontent.com/89438683/234480363-2694f7cf-a324-4f28-b349-679aad6c8f30.png" alt="Project logo">

## 🚀 Deployment <a name = "deployment"></a>
<b>1.React Js</b>
```
To star the Application

npm start (this will start the react app)

for running back end to fetch the data

Click on Run icon in vs code 
```
<b>2. Next Js</b>
```
To star the Application

npm run dev (this will start the next app)
which asks for Authentication

for running back end to fetch the data

Click on Run icon in vs code 
```

## ⛏️ Built Using <a name = "built_using"></a>
- [SQL](https://www.mongodb.com/) - Database
- [NEXT JS](https://nextjs.org/) - Web Framework
- [REACT JS](https://reactjs.org/) - Web Framework
- [JAVA](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>
- [@PatilNikhiS](https://github.com/PatilNikhilS) - Idea & Initial work


## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Hat tip to anyone whose code was used
- [@JunieSkillync](https://github.com/JunieSkillync) - Guide

