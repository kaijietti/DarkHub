# This is the backend of 'DarkHub' project.

## language: Node.js
## default listening port: 8080
# How to build the environment? (please view in VSCode)
  1. ensure node.js is added in your 'path'  
    + detected: run 'node -v' in your terminal.  
  2. ensure mysql is in your 'path'  
    + detected: run 'mysql' in your terminal.  
    + download and install: please view 'http://www.runoob.com/mysql/mysql-install.html'  
  3. init:  
    + create a new user of your mysql,  
    + my default user is 'root', password is'OPENtextfile+123'(see ./backend.js)  
    + if not, please change your local file : './backend.js' near line 14 and 16  
    + After that, open your terminal and run 'mysql -u username -p' and input your password(hide).  
  4. create a new database called 'test':(use this script)  
    + create database test;  
    + use test;  
  5. create a new table called 'main':  
    + create table main(  
        id int unsigned auto_increment,  
        username varchar(100) not null,  
        password varchar(100) not null,  
        name varchar(100),  
        phone varchar(100),  
        email varchar(100),  
        address varchar(2000),  
        primary key(id)  
    )engine=innodb default charset=utf8;  
  6. create a new table called 'contact':  
    + create table contact(  
        id int unsigned auto_increment,  
        name varchar(100),  
        email varchar(100),  
        phone varchar(100),  
        message varchar(2000)  
        primary key(id)  
    )engine=innodb default charset=utf8;  
  7. in folder 'BackEnd',open your terminal here and:  
    + node backend.js  
  8. finish.  