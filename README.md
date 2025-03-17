# email-sender-npm node js

## How to use this package
 - ***first you are install this package***
 - ***secand create a dotenv file on your root folder***
 - ***third inside dotenv you will create two variable like*** 
  *EMAIL="enter your email"
  PASSWORD="enter your email password*
  
- ***forth create a file emailSend.js***
- ***five import this package top of your file***

|the process are :|  
|---------------|--|

 1. create a .env file on your root project

      

**PASSWORD
EMAIL**
     
    PASSWORD="your email password"
    EMAIL="enter your email"
     

 2. next step create a emailSend.js file
 
***code:***
    emailService.sendEmail("from", "to", "your otp",    "otp is 7890", "write some html code")

***code:***

    const { EmailSend } =  require('email-sender-npm')
    require('dotenv').config()
    const  emailService  =  new  EmailSend()
    emailService.sendEmail("from@gmail.com", "to@gmail.com", "email send test", "nice", "<h1>hello world<h1/>")

 

  

