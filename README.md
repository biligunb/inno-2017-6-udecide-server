# udecide-server

Requirements
  - Node.js  
  - Loopback  
  - mysql-connector  
  - loopback-component-passport  
  - passport-facebook  

Run
  - node .

API
  - localhost:80/explorer
  - localhost/auth/facebook

AWS RDS
  - Host:     mysql-udecide.clw5mcf9dstb.ap-northeast-1.rds.amazonaws.com  
  - PublicIP: 103.57.93.242/32 - security group: sg-3c56015a  
  - Port:     3306  
  - User:     root  
  - Password: Iverson3  
  - Schema:   udecide  

Social login  
- Facebook  
  - AppID:      155430168374674  
  - AppSecret:  62c4b4a51e6b77ed2772ddd9d4dbaeba  

- Google  
  -  
  -  

- Twitter  
  -  
  -  


EC2 setup  
  - sudo apt-get update  
  - curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -  
  - sudo apt-get install npm  
  - sudo apt-get install nodejs  
In udecide-server directory  
  - sudo npm install loopback  
  - sudo npm install loopback-component-passport  
