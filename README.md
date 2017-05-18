Register into github

----

Install GIT

https://git-scm.com/downloads

or linux

yum install git

or

apt-get install git

----

Generate your prive key:

https://the.earth.li/~sgtatham/putty/latest/w32/puttygen.exe

generate SSH-2 RSA 2048

insert Key passphrase in puttygen

or linux for linux

ssh-keygen --help
ssh-keygen -b 2048 -t rsa -C "WHAT IS THIS? WRITE IT HERE"

----

Convertions menu > export OpenSSH
and save key into C:/User/\<username\>/.ssh/id_rsa

or linux

It shoud be done automatically by ssh-keygen. Check it!

/home/\<username\>/.ssh/id_rsa 

----

copy something like this:
`ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAqmOXRUErvlKGjO70pIm+T113EOc8FKi7xb9QhSSK0KUQehDF1J50cRpOBlkdBvqldeJQ7ojOp/jyb+rMo5VCDXsvH47qrxkI3PfW5IL/9E+zapikU7+mgElXoWYaFQu6XQJ0P2uJsFOX6pMNIZi2NuXVuNIIYtgNa8BKu2OKUGScds2P`
and put it into github SSH and GPG keys in account options

----
DONE! Clone this repository

git clone git@github.com:myappin/P-Introduction-into-git.git

----
Install nodejs

https://nodejs.org/en/download/

or linux

yum install nodejs

or 

apt-get install nodejs

----
Install packages from package.json by running this command in cmd or shell

npm install

result should be something like this:

```
$ npm install
introduction-into-git@0.0.0 C:\Users\User\Documents\AppIn\Presentation\NG-Community\Introduction into GIT
+-- ejs@2.5.6
`-- express@4.15.3
  +-- accepts@1.3.3
  | +-- mime-types@2.1.15
  | | `-- mime-db@1.27.0
  | `-- negotiator@0.6.1
  +-- array-flatten@1.1.1
  +-- content-disposition@0.5.2
  +-- content-type@1.0.2
  +-- cookie@0.3.1
  +-- cookie-signature@1.0.6
  +-- debug@2.6.7
  | `-- ms@2.0.0
  +-- depd@1.1.0
  +-- encodeurl@1.0.1
  +-- escape-html@1.0.3
  +-- etag@1.8.0
  +-- finalhandler@1.0.3
  | `-- unpipe@1.0.0
  +-- fresh@0.5.0
  +-- merge-descriptors@1.0.1
  +-- methods@1.1.2
  +-- on-finished@2.3.0
  | `-- ee-first@1.1.1
  +-- parseurl@1.3.1
  +-- path-to-regexp@0.1.7
  +-- proxy-addr@1.1.4
  | +-- forwarded@0.1.0
  | `-- ipaddr.js@1.3.0
  +-- qs@6.4.0
  +-- range-parser@1.2.0
  +-- send@0.15.3
  | +-- destroy@1.0.4
  | +-- http-errors@1.6.1
  | | `-- inherits@2.0.3
  | `-- mime@1.3.4
  +-- serve-static@1.12.3
  +-- setprototypeof@1.0.3
  +-- statuses@1.3.1
  +-- type-is@1.6.15
  | `-- media-typer@0.3.0
  +-- utils-merge@1.0.0
  `-- vary@1.1.1
```