Register into github

----

Install GIT

https://git-scm.com/downloads

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
and save key into C:/User/<username>/.ssh/id_rsa

or linux

It shoud be done automatically by ssh-keygen. Check it!

/home/<username>/.ssh/id_rsa 

----

copy something like this:
`ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAqmOXRUErvlKGjO70pIm+T113EOc8FKi7xb9QhSSK0KUQehDF1J50cRpOBlkdBvqldeJQ7ojOp/jyb+rMo5VCDXsvH47qrxkI3PfW5IL/9E+zapikU7+mgElXoWYaFQu6XQJ0P2uJsFOX6pMNIZi2NuXVuNIIYtgNa8BKu2OKUGScds2P`
and put it into github SSH and GPG keys in account options

----
DONE! Clone this repository

git clone git@github.com:myappin/P-Introduction-into-git.git