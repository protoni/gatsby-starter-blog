---
title: Notes
date: "2020-08-01T21:08:03.284Z"
description: "Combined my notes here."
tags: ["misc"]
---

I can never find anything from my notes because they have been scattered around github, gitlab, different PCs and cloud services, 
so I decided to add some of them here. Some of these are very old and might not be very useful information at the moment and others might be a bit 
carelessly worded.

### Categories
- [Android](#android)
- [Cryptocurrency](#cryptocurrency)
- [Databases](#databases)
- [Electronics](#electronics)
- [Linux](#linux)
- [Random](#random)
- [Web development](#web-development)
- [Windows](#windows)

&nbsp

---

### Android
- [Setup android development environment](#setup-android-development-environment)

##### Setup android development environment
````bash
# Setting up android development environment

# Download the installer from the official site and install
https://developer.android.com/studio/

# Create new project
File -> New -> New Project

# Configure the project
- Add name
- Select Java from the Language drop-down menu

# Setup phone
- Connect USB cable to the phone
- Enable developer mode
-- Settings -> System -> About phone -> Tap Build number 7 times
- Enable USB debugging
-- Settings -> System -> Developer options -> USB debugging

# Run hello world on the phone
- Run -> Select device -> YOUR_PHONE
- If the phone is not showing up:
-- Re-attach cable to the phone and make sure to enable USB debugging
-- Run -> Select device -> Open AVD manager -> Rescan
-- Click Run

````

&nbsp

---

### Cryptocurrency
- [Bitcoin questions and answers](#bitcoin-questions-and-answers)
- [Eclair close uncooporative channel](#eclair-close-uncooporative-channel)
- [Setup lightning network node](#setup-lightning-network-node)

##### Bitcoin questions and answers
````
# Transaction questions:

Question:
I was checking transactions in blockchain.info. I have some questions about transaction information about input and output addresses.

block address: https://blockchain.info/address/1NHv6qBxu6haWj8rqeLqw9eyJqm4JT26R6

    1. why some of transactions have one input and one output? They don't have any change transaction?
    2. If any transaction has two output, the second one is change transaction?
    3. can we see fee transactions in output address?
    4. Are multiple addresses in input part related to each address in wallet that has bitcoin?


Answer:

Q) why some of transactions have one input and one output?
A) A bitcoin transaction can have many inputs and many outputs. Bitcoin has a transaction oriented logic, where amounts are transferred from previous transactions. As an example (neglecting the fees): to be able to spend 1 bitcoin, when the wallet has 2 previous tx with amounts of 0.5 BTC, then a new tx is created with two inputs. Same logic would apply, if 4 previous tx existed, each @0.25 BTC. Then a tx with 4 inputs would be created. For the outputs: you can create tx with one or more outputs. E.g. faucets pay to many outputs, instead of creating single transactions - this saves on the fees.

Q) They don't have any change transaction?
A) If you are not the owner of a wallet, you cannot know, which is the "change". Normally you have an output address, and a return address (for the change, like in the second example of the screen shot). The transactions move from one pubkey to another pubkey address, and there we cannot see, which addresses belongs to the user's wallet, and which might be the change address. With this said, there are some activities to try to link addresses to real users. They create diagrams, and try to see the flow of tx, and derive the information. But when using addresses only once, you wouldn't loose your privacy...

Q) If any transaction has two output, the second one is change transaction?
A) not necessarily. I can send a transaction with 0.5 BTC to my brother, and 0.5 BTC to my sister. So there would be no change address.

Q) can we see fee transactions in output address?
A) hmm, no... Transaction fee is the difference between summary of input values and summary of output values. A usual case: you have one BTC, you send 0.5 to your brother, you send to your change address 0.4995, and the diff is the fees, which go to the miners.

Q) Are multiple addresses in input part related to each address in wallet that has bitcoin?
A) Not necessarily. The bitcoin network doesn't know about wallets, and its belonging addresses - this is a layer to make it more comfortable for the endusers. The bitcoin network works with transactions, moving funds from address(es) to address(es). No wallet information is included. So multiple input parts can belong to different wallets.

A good overview of transactions is here: 
https://en.bitcoin.it/wiki/Transaction
and of course in Andreas' book "Mastering Bitcoin", which is also online available:
http://shop.oreilly.com/product/0636920049524.do


From:
https://bitcoin.stackexchange.com/questions/74003/multiple-input-and-output-addresses-in-bitcoin-transactions
````

&nbsp

##### Eclair close uncooporative channel
````
1. Download DnsChanger from play store
2. run DnsChanger on mobile
3. configure DnsChanger:
    DNS1: 54.227.38.238
    DNS2: 8.8.4.4
4. activate DnsChanger
5. open browser and go to http://eclair.dns ( not https )
6. restart eclair
7. funds should appear soon
8. if funds appeared as on chain transaction, DnsChanger can be closed

# If funds are not appearing yet. Wait another 144 blocks and redo 
previous steps
````

&nbsp

##### Setup lightning network node
````bash
# Good guide on how to setup lightning network node
https://github.com/Stadicus/guides/blob/master/raspibolt/README.md
````

&nbsp

---

### Databases
- [MongoDB notes](#mongodb-notes)
- [MySQL remote server setup](#mysql-remote-server-setup)
- [MySQLdump](#mysqldump)

##### MongoDB notes
````bash
use newdatabase                                  # Creates a database
db.mycollection.insert({"name":"toni","age":26}) # A row must be added before the table can be seen in the database
show dbs                                         # Table exists now
db.mycollection.find().pretty()                  # Show the table

# Mongodb scheme
npm install --save mongoose

# Show collections
show collections

# This is how indexing works in MongoDB:
db.users.createIndex({lastname:1})

# Multiple indexes created at the same time:
db.users.createIndex({firstname:1,lastname:1})

# Get the row count of a table
db.customerdata.count({custId:{$gte:1}})

# MongoDB usage with javascript
// var conn = new Mongo();
// var db = conn.getDB("customerdb");
// db.customerdata.insert(data);

load("C:/Program Files/MongoDB/Server/4.0/scripts/mapreduce.js")
````

&nbsp

##### MySQL remote server setup
````bash
# If c libraries can't access the server:

# 1. Edit config
sudo nano /etc/mysql/my.cnf

# 2. Comment out:
    skip-external-locking
    bind-address

# 3. Restart MySQL
sudo service mysql restart
````

&nbsp

##### MySQLdump
````bash
# Backup database:
mysqldump -uroot -pmysql DATABASE_NAME > DATABASE.sql

# Restore database:
C:\> mysql -u root -p
mysql> create database mydb;
mysql> use mydb;
mysql> source DATABASE_NAME.sql;


# Backup a table:
mysqldump -uroot -pmysql DATABASE_NAME TABLE_NAME > DATABASE_NAME_TABLE_NAME.sql

# Restore a table:
mysql -uroot -pmysql DATABASE_NAME < DATABASE_NAME_TABLE_NAME.sql

````

&nbsp

---

### Electronics

- [Beaglebone](#beaglebone)
- [EAGLE notes](#eagle-notes)

##### Beaglebone
````bash
# Default login user
user: debian
pw:   temppwd

## Powering on/off
# Boot linux from the eMMC
Remove SD card and boot

# Boot linux from the SD card
Add SD card, hold USER button down and apply power

# Flash eMMC with SD card
Insert SD card
Hold USER button and connect power
Hold for 5-7seconds

# User LEDs
- USR0 is configured at boot to blink in a heartbeat pattern
- USR1 is configured at boot to light during microSD card accesses
- USR2 is configured at boot to light during CPU activity
- USR3 is configured at boot to light during eMMC accesses
USR0 is on the edge of the board


# Setup beaglebone
http://beagleboard.org/getting-started


# Resolve error 'the current language is not supported by the device driver installation wizard beaglebone'
when trying to install beaglebone drivers

1. Download and setup 7zip
2. Right click BONE_D64.exe -> 7zip -> Extract to BONE_D64\
3. Edit dpinst.xml
4. Add below first <\language> tag:
  <!-- English (Finland) -->
  <language code="0x1000"></language>
5. Run dpinst.exe

This adds the current OS language to the supported languages list.
See all the language codes here:
https://www.ryadel.com/en/microsoft-windows-lcid-list-decimal-and-hex-all-locale-codes-ids/
````

&nbsp

##### EAGLE notes
````bash
#### Control panel ####

# Take custom librarys into use
Create custom_libraries folder under EAGLE projects dir and add .lbr file under it, for example:
OSD3358_BAS_RefDesignParts.lbr
Also in the control panel click the gray dot next to the library name, it should change to green


#### General board layout notes ####
# Routing high speed traces
For example USB data lines should be the same length, or max. 1% difference in trace lengths. Measure the trace
lengths and if the other one is too short, a length matching bends can be created to the end of the trace. Width
betweend the bend should be greater than 3x the trace width and the angles should be at least 135 degrees.


#### Schematic view ####

# Create bill of material
Select schematic view -> ULP -> bom.ulp Bill Of Material -> Save...

# Things to check before sending gerber files to manufacturer
- Run ERC check ( Electrical Rule Check )
- Make sure the components are available
- Check that every label connects to the right place
- Check that components have values.
- Add comments and circuit names


#### Board layout ####

# Creating Gerber files
Layout view -> File -> CAM Processor -> Load Job File (next to save disk-image) -> Local CAM Jobs -> examples
-> Third Party -> OSH Park -> OSH Park 4 layer -> Check that everything is OK -> Process Job -> Save

# Force routing through pins
Select route airwave tool and select 'Ignore obstacles' from the top toolbar

# Measure trace lengths. ( Other information also available here, for example max current based on trace length )
Paste this command in the command line:
run length-freq-ri

# Skip thermal gaps when doing copper pour
Select 'Thermals off' from the polygon menu in the top toolbar after selecting polygon tool. This needs to be selected
before doing the polygon.

# Create board borders ( dimensions ).
Ensure that the board starts from the white dottex cross mark on the view.
Click dimensions tool and go through the edges of the board. Make sure that outside of the board is gray colored and
the board itself is black. Check from Manufacturing previw windows that the board layout is ok.

# Create ground and power planes ( layers )
Ensure that there is enough layers to do this. With bottom and top signal layers already used, more layers is needed.
Then create a copper pour over the whole board

# Add more layers
DRC -> Layers -> dropdown 2 - 16 layers.

# Connect via's to specific layer
Right click via and set the name. For examle to place via's to ground set the name to GND, or to power source, change the name
to for example SYS_3V3

# Add copper pours
Click polygon in the toolbar and create a full loop with it to create the borders of the pour, then click ratsnest to pour the copper.

# Remove golden circle around via when previewing
DRC -> Masks -> Limit. Set to for example 25mil.

# Switch layers while routing
Click Scroll wheel and select another layer to continue on another layer, this will place a via.

# Check for board layout errors
DRC -> check

# Good font size for component value on silkscreen:
32 with 8% ratio

# Things to check before sending gerber files to board manufacturer
- All the component designators are placed appropriately next to their corresponding components.
- Pin 1 is marked for necessary components. This includes all ICs, connectors and polarized capacitors.
- There is no silkscreen over any component pads. This can lead to bad solder joints.
- The font size of the component designators is as large as possible given the space constraints of the board so that the text is readable.
- Try to not place silkscreen over vias. Silkscreen has a hard time adhering to the annular ring of a via which can make the text difficult to read.
````

&nbsp

---

### Linux
- [CUPS commands](#cups-commands)
- [Change GRUB order](#change-grub-order)
- [Setup compact flash](#setup-compact-flash)
- [Linux backup command](#linux-backup-command)
- [Linux chmod](#linux-chmod)
- [Linux commandline welcome text](#linux-commandline-welcome-text)
- [Linux commands](#linux-commands)
- [Linux GRUB](#linux-grub)
- [Linux get process ID on port](#linux-get-process-id-on-port)
- [Linux run script on boot](#linux-run-script-on-boot)
- [Linux shell](#linux-shell)
- [Linux unsupported distro mirrors](#linux-unsupported-distro-mirrors)
- [Linux setup private internet access VPN](#linux-setup-private-internet-access-vpn)
- [Linux setup git SSH keys](#linux-setup-git-ssh-keys)
- [Linux create ssh keypair between machines](#linux-create-ssh-keypair-between-machines)
- [Linux vim](#linux-vim)
- [Linux wipeout disk](#linux-wipeout-disk)

##### CUPS commands
````bash
# Command line print:
lpr -o scaling=99 image.jp

# Print A3 sheet:
lp -d <printername> -o media=a3 -o landscape <filename> 

# Fit to page:
lp -d Pro100S-TurboPrint -o media=a3 -o fit-to-page -o landscape Downloads/00001.pdf
````

&nbsp

##### Change GRUB order
````bash
# Changes the order of the operating systems in GRUB window.
# Sets Windows as the first one to boot


sudo mv /etc/grub.d/30_os-prober /etc/grub.d/09_os-prober   # change windows index number
sudo grub-mkconfig -o /boot/grub/grub.cfg                   # create grub config file
````

&nbsp

##### Setup compact flash
````bash
# Check if the disk is connected:
dmesg | grep sdb

# Partitioning:
sudo mkfs.ext4 /dev/sdb1

# Mount:
sudo mount -t ext4 /dev/sdb1 /mnt

# Auto mount:
add row to /etc/fstab:
    /dev/sdb1       /mnt    ext4    defaults        0       1


# Other commands:
sudo parted /dev/sdb mklabel msdos
sudo parted -a opt /dev/sdb mkpart primary ext4 0% 100%
mount -a

````

&nbsp

##### Linux backup command
````bash
# Example backing up firefox user configs ( .mozilla folder )

tar zcPf ~/mozilla-backup-$($date + %s).tar.gz ~/.mozilla
````

&nbsp

##### Linux chmod
````bash
# SETUID:
chmod +s /path/to/file
````

&nbsp

##### Linux commandline welcome text
````bash
$ sudo apt-get install jq
$ cd /home/admin/download/
$ wget https://raw.githubusercontent.com/Stadicus/guides/master/raspibolt/resources/20-raspibolt-welcome
  
# check script & exit
$ nano 20-raspibolt-welcome

# delete existing welcome scripts and install
$ sudo mv /etc/update-motd.d /etc/update-motd.d.bak
$ sudo mkdir /etc/update-motd.d
$ sudo cp 20-raspibolt-welcome /etc/update-motd.d/
$ sudo chmod +x /etc/update-motd.d/20-raspibolt-welcome
$ sudo ln -s /etc/update-motd.d/20-raspibolt-welcome /usr/local/bin/raspibolt

In case the script runs into problems, it could theoretically prevent you from logging in. We therefore disable all motd execution for the "root" user, so you will always be able to login as "root" to disable it.

$ sudo su 
$ touch /root/.hushlogin
$ exit

You can now start the script with raspibolt and it is shown every time you log in.
````

&nbsp

##### Linux commands
````bash
# 1. redo last command but as root
sudo !!

# 2. open an editor to run a command
ctrl+x+e

# 3. create a super fast ram disk
mkdir -p /mnt/ram
mount -t tmpfs tmpfs /mnt/ram -o size=8192M

# 4. don't add command to history (note the leading space)
 ls -l

# 5. fix a really long command that you messed up
fc

# 6. tunnel with ssh (local port 3337 -> remote host's 127.0.0.1 on port 6379)
ssh -L 3337:127.0.0.1:6379 root@emkc.org -N

# 7. quickly create folders
mkdir -p folder/{sub1,sub2}/{sub1,sub2,sub3} creates 2 folders and 3 sub folders inside those ( 2 x 6 folders total)
mkdir -p folder/{1..100}/{1..100} # creates 100 x 100 folders

# 8. intercept stdout and log to file
cat file | tee -a log | cat > /dev/null

# bonus: exit terminal but leave all processes running
disown -a && exit
````

&nbsp

##### Linux GRUB
````bash
# Open GRUB command line in the bootloader menu
Press: 'c'

# To get back to bootloader menu from GRUB command line
Type in: normal

# Edit kernel boot parameters
Press: 'e'
````

&nbsp

##### Linux get process ID on port
````bash
# Which PID is using the port:
§ fuser 80/tcp
644

# Find the process name:
§ ls -l /proc/644/exe
````

&nbsp

##### Linux run script on boot
````bash
##################### Deprecated ########################
# How to create and run script on startup on Linux

1. sudo nano /etc/init.d/superscript, save and exit
2. sudo chmod 755 /etc/init.d/superscript
3. sudo update-rc.d superscript defaults

#########################################################

# Updated way of starting scripts on boot:

1. Create a script to run on startup. Example:
# startupScript.sh
###############################################

#!/bin/bash

for i in {1..10}
do
  # A way to exit the loop when CTRL + C is pressed.
  trap "echo Exited!; exit;" SIGINT SIGTERM
  
  echo "Starting the test $i"
  python /home/pi/gwtest/tester2.py -d /home/pi/gwtest/configs/TestLongPatter.txt
  echo "Ended the test $i"
done
  
###############################################

2. Create a service file:

# /etc/systemd/system/startupIOtest.service
###############################################

[Unit]
Description="StartIOtest"

[Service]
Type=forking
ExecStart=/bin/bash /home/pi/gwtest/startupScript.sh
TimeoutSec=0

[Install]
WantedBy=default.target

###############################################

3. Reload the daemon state
sudo systemctl daemon-reload

4. Enable the service startup on boot
sudo systemctl enable startIOtest.conf

Notes!
# To start the service immediately:
sudo systemctl start startIOtest

# Check the service status:
sudo systemctl status startIOtest

Not working:
# init file:
# startIOtest.conf
###############################################

start on runlevel [2345]
stop on runlevel [!2345]

exec bash /home/pi/gwtest/startupScript.sh

###############################################
````

&nbsp

##### Linux shell
````bash
--------------------------------------------------------------------------------------------

# Compare two different mysqldump files.
if [[ $(ls -A | diff TEST3.sql TEST4.sql | grep 'INSERT') ]]; then echo 1; else echo 0; fi

--------------------------------------------------------------------------------------------

# Search for a phrase in text file and get the tailing and heading lines aswell


# get line number
$ cat /var/log/messages | grep -n "text_to_search" | cut -f1 -d:
1533

# get +-10 lines near "text_to_search"
$ sed -n '1523,1543p' /var/log/messages

--------------------------------------------------------------------------------------------
````

&nbsp

##### Linux unsupported distro mirrors
````bash
# 1. modify /etc/apt/sources.list and change ubuntu.com -> old-releases.ubuntu.com

# Or automatically:
    sudo sed -i -e 's/archive.ubuntu.com/old-releases.ubuntu.com/g' /etc/apt/sources.list

# 2. Update distro:
    sudo apt-get update && sudo apt-get dist-upgrade
````

&nbsp

##### Linux setup private internet access VPN
````bash

# Install OpenVPN
sudo apt-get install openvpn

# Download PIA VPN settings
sudo wget https://www.privateinternetaccess.com/openvpn/openvpn.zip

# Unzip
unzip openvpn.zip

# Run VPN
sudo openvpn Finland.ovpn


## Enable on boot:

# Create auth file
touch /etc/openvpn/auth.txt

# Edit auth.txt:
    add username to the first line
    password to the second line

# Set permissions
sudo chmod 600 auth.txt

# Copy PIA settings to OpenVPN folder
cp Finland.ovpn /etc/openvpn/

# Rename PIA settings
mv Findland.ovpn Finlanad.conf

# Edit PIA settings
change 'auth-user-pass' -> 'auth-user-pass auth.txt'

# Start VPN
sudo systemctl start openvpn@Finland.

# Make sure it works:
Check ip -> wget http://ipinfo.io/ip -qO -

# Set autostart on
edit /etc/default/openvpn and uncomment line: AUTOSTART="all"
````

&nbsp

##### Linux setup git SSH keys
````bash
# Create keys:
ssh-keygen -t rsa

# Create config:
nano ~/.ssh/config
    paste in file:
        Host gitserv
        Hostname gitlab.com
        IdentityFile ~/.ssh/id_rsa
        IdentitiesOnly yes
        

# GitLab settings
paste ~/.ssh/id_rsa.pub content to gitlab settings
````

&nbsp

##### Linux create ssh keypair between machines
````bash

# Create keys
ssh-keygen -t rsa -b 2048

# Set the public key to ssh server
cat ~/.ssh/id_rsa.pub | ssh root@192.168.1.35 "mkdir -p ~/.ssh \ && cat >> ~/.ssh/authorized_keys"

# To skip password prompt:
scp tai ssh -o BatchMode=yes
````

&nbsp

##### Linux vim
````bash
# Create vim config file
1. vim ~/.vimrc
2. write some basic settings in:
    set ruler laststatus=2 number title hlsearch
    syntax on
3. ESC -> :wq
````

&nbsp

##### Linux wipeout disk
````bash
# Wipe out an hard drive on Linux.

1. List disks:
sudo fdisk -l

2. Pick a disk to clean

3. Wipe out

# less privacy way
sudo dd if=/dev/zero of=/dev/sda

# more privacy way
sudo dd if=/dev/urandom of=/dev/sda
````

&nbsp

---

### Random

- [How to create skip links in Atlassian confluence wiki pages](#how-to-create-skip-links-in-atlassian-confluence-wiki-pages)
- [Docker notes](#docker-notes)
- [Electron building](#electron-building)
- [GIT notes](#git-notes)
- [MuroBBS notes](#murobbs-notes)
- [Notepad++ notes](#notepadpp-notes)
- [Trello notes](#trello-notes)
- [Vulkan notes](#vulkan-notes)

##### How to create skip links in Atlassian confluence wiki pages
````
# How to create skip links in Atlassian confluence wiki pages

1. Create headline, for example:
Test Headline 1

2. Click to the top of page and from the edit tools click Link ( Ctrl + K )

3. Paste the page URL to here, if not published yet, publish it first and then edit to get the proper URL

4. add /#Test-Headline-1 to the end of the URL ( Notice the - (dash) sign to replace white spaces )

5. Press enter

6. Edit the link again.

7. Set the 'Text to display'-text

8. Press enter.
````

&nbsp

##### Docker notes
````bash
# List running images
sudo docker ps

# Stop docker container
sudo docker stop 119cbb3f26f2 (container id)

#(-it runs docker in interactive mode, so you can stop it witch CTRL + c)
sudo docker run -it myexpressapp

# Show ip:
docker exec -it [CONTAINER_ID] ip addr show eth0

# On browser:
http://172.17.0.2:3000/
````

&nbsp

##### Electron building
````bash

# 1
npm install electron-packager -g
electron-packager <sourcedir> <appname> --platform=win32 --arch=x64

# 2
electron-builder -p --win

# Preferred way of building electron apps:
Use the #1 method and then create a portable .exe from the output build folder
````

&nbsp

##### GIT notes
````bash
Configs:
git config --global user.name "Firstname Lastname"
git config --global user.email "your_email@example.com"
mkdir git
git init

# Ssh-keys:
ssh-keygen -t rsa -C "your_email@example.com"
githubista -> settings -> SSH and GPG keys -> new key -> tonne public key

# Ssh testi:
ssh -T git@github.com

# Push test:
touch test.txt
git add .
git commit -m "First commit"

#Connect to github repo:
git remote add origin git@github.com:user/repo_name.git
git push origin master 
(if it doesn't work, then):
git pull --rebase origin master
git push origin master

# Remove git init (master branch):
 rm -rf .git
````

&nbsp


##### MuroBBS notes
````bash
# Add embedded imgur image to muroBBS forum:
[MEDIA=imgur]kaD578M[/MEDIA]

# Add embedded imgur image gallery to muroBBS forum:
[MEDIA=imgur]a/kaD578M[/MEDIA]
````

&nbsp

##### Notepadpp notes
````bash
# Replace tabs with spaces
Settings -> Language -> Tab Settings -> Replace by space and Tab size: 4

# Show hidden characters ( spaces and tabs )
View -> Show Symbol -> show White Space and TAB
````

&nbsp

##### Trello notes
````bash
# Trello power-ups creation

# Getting started:
https://developers.trello.com/docs/get-started
https://developers.trello.com/docs/your-first-power-up

# Step 1
https://trello.com/power-ups/admin/
-> create new


# Trello REST API Docs
https://developers.trello.com/reference#introduction


# Example project video:
https://www.youtube.com/watch?v=dLCkcQnwAQk

# API calls:
https://developers.trello.com/reference/#introduction



# Get board id ( or card id):
- For example if your board URL is:
https://trello.com/b/c0xTyrUZ/ddd

- Add .json at the end and paste it to browser url field:
https://trello.com/b/c0xTyrUZ/ddd.json

- id: 5d9884e2e0766d67efe2e199
````

&nbsp

##### Vulkan notes
````
Vulkan



# Instance
The very first thing you need to do is initialize the Vulkan library by creating an instance. 
The instance is the connection between your application and the Vulkan library and creating 
it involves specifying some details about your application to the driver.


# Extensions
Vulkan is a platform agnostic API, which means that you need an extension to interface with the window system.
Vulkan extensions are simply additional features that Vulkan implementations may provide if they so choose to.
They add new functions, structs, and valid enumerators to the API, and they can change some of the behavior of existing functions.

# Validation layers
Different layers needed for code validation, e.g. error handling. "All-round"-global validation layer can be turned on
to provide error handling for all functionaliy.


# Queue
A queue is something you submit command buffers to, and command buffers submitted to a queue are executed in order relative to each other.
Command buffers submitted to different queues are unordered relative to each other unless you explicitly synchronize them with VkSemaphore. 
You can only submit work to a queue from one thread at a time, but different threads can submit work to different queues simultaneously.

Each queue can only perform certain kinds of operations:
- Graphics queues can run graphics pipelines started by vkCmdDraw* commands. 
- Compute queues can run compute pipelines started by vkCmdDispatch*. 
- Transfer queues can perform transfer (copy) operations from vkCmdCopy*.
- Sparse binding queues can change the binding of sparse resources to memory with vkQueueBindSparse
(note this is an operation submitted directly to a queue, not a command in a command buffer)
- Some queues can perform multiple kinds of operations.
- In the spec, every command that can be submitted to a queue have a "Command Properties" table that lists what queue types can execute the command.

# Queue family
A queue family just describes a set of queues with identical properties.
For example, the device supports three kinds of queues:
- One kind can do graphics, compute, transfer, and sparse binding operations, and you can create up to 16 queues of that type.
- Another kind can only do transfer operations, and you can only create one queue of this kind. 
Usually this is for asynchronously DMAing data between host and device memory on discrete GPUs, so transfers can be done concurrently with independent graphics/compute operations.
- Finally, you can create up to 8 queues that are only capable of compute operations.
````

&nbsp

---

### Web development

- [Angular setup](#angular-setup)
- [Tutorials and links](#tutorials-and-links)
- [Firefox allow fullscreen mode](#firefox-allow-fullscreen-mode)
- [Internet explorer problems](#internet-explorer-problems)
- [NodeJS notes](#nodejs-notes)
- [React notes](#react-notes)
- [Gatsby notes](#gatsby-notes)
- [Wordpress notes](#wordpress-notes)

##### Angular setup
````bash
# Get started:
https://cli.angular.io/

npm install -g @angular/cli
ng new HelloWorld
cd HelloWorld
ng serve
````

&nbsp

##### Tutorials and links
````bash
# IDEs:
https://code.visualstudio.com/ Visual Studio Code
https://www.sublimetext.com/ Sublime Text


# HTML tutorial:
https://www.w3schools.com/html/default.asp

# CSS tutorial:
https://www.w3schools.com/css/default.asp

# JS tutorial:
https://www.w3schools.com/js/default.asp

#Mozilla Web APIs:
https://developer.mozilla.org/en-US/docs/Web/API

#NodeJS:
https://nodejs.org/en/

#GIT:
https://try.github.io/

# Invocation patterns:
http://blog.taylormcgann.com/2014/01/15/invocation-patterns-javascript/

# Prototype inheritance:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the…

# Rangle Book on Angular:
https://angular-2-training-book.rangle.io/

# Angular:
https://angular.io/

# Angular CLI:
https://cli.angular.io/

# TypeScript:
https://www.typescriptlang.org/

# John Resig advanced javascript:
https://johnresig.com/apps/learn/

# Learn SQL in 21 Days:
http://www.dmc.fmph.uniba.sk/public_html/doc/sql/index.htm

# SQL fiddle:
http://sqlfiddle.com

# GenerateData:
http://generatedata.com/

# W3Schools SQL tutorial
https://www.w3schools.com/sql/default.asp

# MongoDB manual:
https://docs.mongodb.com/manual/

# MongoDB tutorial:
https://www.tutorialspoint.com/mongodb/
````

&nbsp

##### Firefox allow fullscreen mode
````
go to about:config

full-screen-api.allow-trusted-requests-only:
true -> false
````

&nbsp

##### Internet explorer problems
````
# If nothing seems to work properly, check that doctype is in the top of the page:
<!DOCTYPE html>

-> Otherwise the code is meant to be run on old IE versions



# HttpRequests doesnt change; data returned by the server doesn't change after the first time it was received
# Use cache buster in HTTP requests:
Example:
    var CB = Math.random()*10000000000000000;
    var snd = "programControl=stop&CB=" + CB;

-> Random data is added to the end of the HttpRequest because IE caches HttpRequest responses.
-> Doing this trick we can make sure that IE won't fetch the cached data because the HttpRequest has changed

````

&nbsp

##### NodeJS notes
````bash
# Setting up NodeJS

# Create a directory for NodeJS app
create folder named for example 'html_events'

# Move to that directory
cd html_events

# Initialize npm
npm init

# For reference:
  "name": "html_events",
  "version": "1.0.0",
  "description": "html events",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "html",
    "events"
  ],
  "author": "toni",
  "license": "ISC"
  

# Install node modules
npm install express --save


# Create app.js file to the same folder where package.json is:
    const express = require("express");
    
    let app = express();
    
    app.use(express.static(__dirname+"/public_www"));
    app.listen(8080);
    
    console.log("Running in port 8080");

# Start NodeJS server:
node app

# Create web pages:
create public_www-folder
    index.html
    style.css
    script.js

# Check browser
localhost:8080
````

&nbsp

##### React notes
````bash
# Get and install React
1. Visit https://nodejs.org/en/
2. Download the latest LTS nodejs + npm packet
3. Install

# Take React into use by creating a simple app
1. Open nodejs command prompt
2. npx create-react-app my-app
3. cd my-app
4. npm start

# Deployment example:
https://www.reddit.com/r/reactjs/comments/d81gjb/how_to_deploy_your_app_setup_a_free_ssl/

# Cheat sheet:
https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/react.js

# Clean barebones project example for learning purposes:
https://www.reddit.com/r/reactjs/comments/arox51/i_made_a_barebones_fullstack_reddit_clone_to/

# Icons:
https://iconscout.com/unicons
https://github.com/Iconscout/react-unicons
https://github.com/react-icons/react-icons

# Good React practices.
https://www.reddit.com/r/reactjs/comments/cgxg7o/a_beginners_guide_to_writing_good_react_code/
https://arvind.io/posts/writing-good-react-code/
````

&nbsp

##### Gatsby notes
````bash

# Add video as inline HTML
Add video to /static/ folder
<dl>
  <video width="640" height="480" controls>
    <source src="../bandicam.mp4" type="video/mp4">
  </video>
</dl>

# Bold formatting 
To be able to use '_' in **bolded** text, it needs to be escaped with '\'-character infront of it
For example: io_scene_godot needs to be written like **io\_scene\_godot**
````

&nbsp

##### Wordpress notes
````bash



## Add borders to images ( adds borders to all images on the website )

# 1. Go to customize page
Dashboard -> Appearance -> Customize

# 2. Go to CSS settings
'Additional CSS'

# 3. Add custom CSS to the edit box
.post .entry-content img {border: 1px solid #000000;}

# 4. Click publish



## Install SiteLock-trust shield

# Get the shield

# 1. Go to SiteLock dashboard
https://secure.sitelock.com/dashboard

# 2. On the top of the page:
Click Deploy 'SiteLock Trust Seal' button

# 3. Fill out the settings

# 4. Copy the html code on the last settings page.



## Install the SiteLock logo to the website footer
# 1. Edit the page
Dashboard -> Appearance -> Customize

# 2. Make sure you have footer bar.
Layout -> Footer

# 3. Add the logo to footer
Widgets -> Footer bar -> Add a widget -> paste the html here.

# 4. Publish.



## Collapse content ( collapse text with a button click )

# 1. Install collapse pugin.
Show-Hide / Collapse-Expand

# 2. Add to a new post and wrap bg_collapse and /bg_collapse around brackets []:

bg_collapse view="link" color="#4286f4" icon="arrow" expand_text="Show More" collapse_text="Show Less"

your_content_here

/bg_collapse


## Collapse a whole block with a button click

# 1. Install Atomic Blocks plugin.

# 2. Add new AB container.

# 3. Add a code block inside the AB container.

# 4. Add to a new post:
bg_collapse view="link" color="#4286f4" icon="arrow" expand_text="Show More" collapse_text="Show Less"
<div class="wp-block-atomic-blocks-ab-container ab-block-container">
<div class="ab-container-inside">
<div class="ab-container-content" style="max-width:1600px">
Content1
</div>
</div>
</div>
/bg_collapse

# 5. Edit html:
add the bg_collapse and /bg_collapse tags wrapped around brackets [] around the div



## Add skip links

# 1. Add a new headline and edit the HTML.
- Hover over the headline and click the 3 dots ( more settings )
- Click 'Edit as HTML'

# 2. Add id="skipToHere" id for the tag
<h2 id="skipTo4">4. Add skip links<br></h2>

# 3. Write the link name to the top of the page.

# 4. Paint the link name with your mouse.

# 5. Click the 'paper clip' button and set the link to #skipToHere





````

&nbsp

---

### Windows
- [Setup FTP connection on Visual studio code](#setup-ftp-connection-on-visual-studio-code)
- [Check checksum](#check-checksum)
- [Check signatures](#check-signatures)
- [Setup CURL for MinGW](#setup-curl-for-mingw)
- [Setup dotnet](#setup-dotnet)
- [Powershell run linux commands](#powershell-run-linux-commands)
- [Setup SSH key loading with KeePASS](#setup-ssh-key-loading-with-keepass)
- [Setup SSH keys PUTTY](#setup-ssh-keys-putty)
- [Setup vnc](#setup-vnc)
- [Webassemply setup](#webassemply-setup)
- [Create portable .exe](#create-portable-exe)
- [Miscellaneous](#miscellaneous)
- [Windows mysql-nodejs setup](#windows-mysql-nodejs-setup)

##### Setup FTP connection on Visual studio code
````
# Setup FTP connection.
1. Install FTP-simple
2. modify config-file ( press F1 -> ftp-simple: config - FTP settings )
[
    {
        "name": "raspberry pi",
        "host": "192.168.1.35",
        "port": 22,
        "type": "sftp",
        "username": "USERNAME_HERE",
        "password": "",
        "promptForPass": false,
        "path": "/home/USERNAME_HERE/",
        "autosave": true,
        "confirm": false,
        "readyTimeout": 99999,
        "privateKey": "C:\\path\\to\\ssh\\private_key.ppk",
        "passphrase": "SSH_KEY_PASSWORD_HERE"
    }
]

3. Usage: Press F1 -> ftp-simple: Remote - remote directory open to workspace

# Show white spaces:
View -> Render Whitespace
````

&nbsp

##### Check checksum
````
# SHA256
CertUtil -hashfile file_to_check.exe SHA256

# MD5
CertUtil -hashfile file_to_check.exe MD5
````

&nbsp

##### Check signatures
````
# Setup on Windows

1. Download gpg4win

2. Check gpg4win signature
 certutil -hashfile gpg4win-3.1.7.exe SHA256
 certutil -hashfile gpg4win-3.1.7.exe MD5

3. Install gpg4win

4. Refresh environment variables of the command prompt 
 refreshenv
 
5. Download the file which we are checking the signatures from:
curl -o https://some_file

6. Download the signature creators public key and import to gpg4win
 curl -o some_file.pub
 gpg --import some_file.pub

7. Download signature
curl -o some_file.sig

8. Finally check the signature
 gpg --verify file_to_check.zip.sig file_to_check.zip
 
9. Verify the output:
gpg: Signature made 09/06/18 00:01:57 FLE Summer Time
gpg:                using RSA key F48B339EE7ADC266
gpg: Good signature from "Göran Krampe (getcanoe.io) <goran.krampe@gmail.com>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: DEEA 6E35 887D 0F0D 1C6E  196E F48B 339E E7AD C266


####### Example: verifying electrum signature ########

# 1. Download electrum:
curl -o electrum-3.3.8-setup.exe https://download.electrum.org/3.3.8/electrum-3.3.8-setup.exe

# 2. Download Thomas's public key:
curl -o electrum-3.3.8-setup.exe.pub https://raw.githubusercontent.com/spesmilo/electrum/master/pubkeys/ThomasV.asc

# 3. Download electrum signature:
curl -o electrum-3.3.8-setup.exe.sig https://download.electrum.org/3.3.8/electrum-3.3.8-setup.exe.asc

# 4. Import the public key to gpg:
gpg --import electrum-3.3.8-setup.exe.pub

# 5. Verify the application:
gpg --verify electrum-3.3.8-setup.exe.sig electrum-3.3.8-setup.exe
````

&nbsp

##### Setup CURL for MinGW
````
# Setup CURL libraries for MinGW

- Install msys2
- Open msys2 shell
- cd curl-x.xx.x folder (cd C:/ ...)
- run configuration command:
    ./configure --prefix=/usr/local --with-ssl--build=x86_64-w64-mingw32 CPPFLAGS="-I/usr/local/include" LDFLAGS="-L/usr/local/lib"
- build curl:
    make install-strip

# gcc example:
    gcc curl_test.c -o curl_test -DCURL_STATICLIB -lcurl -I"C:\MinGW\include" -L"C:\MinGW\lib"
````

&nbsp

##### Setup dotnet
````bash
# Download and install: 
https://www.microsoft.com/net/download

# List available project types:
dotnet new

# Create new project:
dotnet new webapi -o AspNetCoreWebTest

# Build
dotnet build

# Run
dotnet .\bin\Debug\netcoreapp2.1\AspNetCoreWebTest.dll
````

&nbsp

##### Powershell run linux commands
````bash
# Download plink.exe
https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

# Run commands on linux machine
.\plink root@192.168.1.35 cat /home/root/testfile.txt

# Give a command list to execute on linux machine
# With -m parameter you can give the the ssh server a list of commands, instead of opening a new shell.
# Create command.txt and put linux commands to it
# Run command
.\plink root@192.168.1.35 -i ..\ssh\private.ppk -m "command.txt" -t

# -x enable X11 forwarding
# -X disable X11 forwarding
# -v verbose output
````

&nbsp

##### Setup SSH key loading with KeePASS
````bash
# Setup KeePass to serve SSH keys for GIT

# Setup KeePass
1. Download and install KeePass
2. Download KeeAgent plugin for KeePass
3. Unzip plugin to KeePass plugin folder ( C:\Program Files (x86)\KeePass Password Safe 2\Plugins\ )
4. Restart KeePass

# Create key pair
1. Download PuttyGen
2. Create key pair
3. Set a password for it
4. Save

# Setup keys
1. Add the public key to GitLab Settings -> SSH keys
- Add 'ssh-rsa' infront of the key
- Example:
    ssh-rsa AAAAB3NzaC1yc2EAA...
2. Add key

# Setup Keys to KeePass
1. Add new entry to KeePass
2. 'Entry' tab: Add GitLab username
3. 'Entry' tab: Add SSH private key password
4. 'Advanced' tab: Add public and private key to File Attachments
5. 'KeeAgent' tab: Tick 'Allow KeeAgent to use this entry'
6. Open Tools -> KeeAgent and add the key here
7. Restart KeePass
8. Right click the gitlab key entry and press Load SSH Key

# Setup GitBash
1. From KeePass open Tools -> Options -> KeeAgent
2. Add msys files
Cygwin compatible socket file:
- C:\Temp\cyglockfile
msysGit compatible socket file:
- C:\Temp\syslockfile
3. Create bash_profile file:
Create C:\Users\User\.bash_profile
4. add to bash_profile:
export SSH_AUTH_SOCK="C:\Temp\cyglockfile"
5. Restart git bash
6. Test connection:
ssh -T git@gitlab.compatible
7. should work now
````

&nbsp

##### Setup SSH keys PUTTY
````bash
# Setup SSH keys between Windows and Linux

# 1. Download PuttyGen
https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

# 2. Create new key pair with PuttyGen
Generate -> Save private key
Generate -> Save public key

# 3. In PUTTY save a new session
Set Saved Sessions name and click Save

# 4. Load the saved putty session

# 5. Set username
Connection > Data > login username

# 6. Set private key
Connection > SSH > Auth > browse private key

# 7. Log on to the Linux machine and create ~/.ssh folder if it doesn't existed
mkdir -p ~/.ssh

# 8. Create authorized_keys file
touch authorized_keys

# 9. Edit authorized_keys and add:
    ssh-rsa PUBLIC_KEY_HERE

# Note! Public key has to be on one line
````

&nbsp

##### Setup vnc
````bash

# New putty connection:
hostname 192.168.10.38
Connection -> Data -> Auto-login username -> root
Connection -> SSH  -> Auth -> Private-key -> PUTTYGEN_GENERATED_KEY_HERE
Connection -> SSH  -> X11 -> tick 'Enable X11 forwarding'
Sessions -> save

-> Open new ssh connection with Putty

## On linux:
# Install tightvncserver
sudo apt-get install tightvncserver

# Run vncserver ( take a not on what is the vncserver number, it should show up when the command is run)
vncserver

# Set password

# To kill the server
vncserver -kill :# ( #- number is shown when vncserver is started )


## In PUTTY:
# Setup tunneling
Connection -> SSH  -> tunnels -> Source port: 5900
Connection -> SSH  -> tunnels -> Destination port: localhost:5901 ( last number should be the same number that vncserver showed up when starting it )
Add
Sessions -> save

# Open x11 connection from PUTTY

# Install tightvnc viewer

# Open new vnc connection
-> server: localhost

# This will be on as long as x11 Putty window is open

````

&nbsp

##### Webassemply setup
````bash
# Install emscripten on Windows ( Rust )

# 1) Download
https://win.rustup.rs/

# 2) Install Rust
.\rustup-init.exe

# 3) Create a project folder

# 4) Open Git Bash

# 5) Install wasm pack
cargo install wasm-pack

# 6) Create Rust crate
cargo init

# 7) Modify Cargo.toml file
[package]
name = "hello-world"
version = "0.1.0"
authors = ["Toni Kamula <protoni91@gmail.com>"]
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"

# 8) Rename src/main.rs -> src/lib.rs

# 9) Modify lib.rs
// The wasm-pack uses wasm-bindgen to build and generate JavaScript binding file.
// Import the wasm-bindgen crate.
use wasm_bindgen::prelude::*;

// Our Add function
// wasm-pack requires "exported" functions
// to include #[wasm_bindgen]
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b;
}

# 10) Compile
wasm-pack build --target web

---------------------------------------------------------------------------

# Install emscripten on Windows ( C++ )

# 1) Open admin powershell
Win + R -> type powershell -> Ctrl + Shift + Enter ( to run as a admin )

# 2) Clone the emscriptenn repo
git clone https://github.com/emscripten-core/emsdk.git

# 3) Move to the project directory
cd emsdk

# 4) Allow scripts
Set-ExecutionPolicy RemoteSigned

# 5) Download and install the latest SDK tools.
./emsdk install latest

# 6) Make the "latest" SDK "active" for the current user. (writes ~/.emscripten file)
./emsdk activate latest --global

# 7) Activate PATH and other environment variables in the current terminal
.\emsdk_env.bat

# Install CMake

# Install MinGW

# 1) Download installer from https://sourceforge.net/projects/mingw/files/latest/download

# 2) Start the installer

# 3) In installation manager makesure these are included:
Basic Setup ->   
                 mingw-developer-toolkit
                 mingw32-base
                 mingw32-gcc-g++
                 msys-base

All Packages ->  MinGW -> MinGW Base System ->
                 mingw32-libpthreadgc dev
                 mingw32-libpthreadgc dll
                 mingw32-libpthreadgce dev
                 mingw32-libpthreadgce dll

# 4) Apply changes
Installation -> Apply Changes

# Create a project

# 1) Create a .c file hello.c

# 2) Add some code
#include <stdio.h>

int main(int argc, char ** argv) {
    printf("Hello World\n");
}

# 3) Compile
emcc hello.c -O3 -o hello.html

# 4) Run
python -m SimpleHTTPServer 8000

# 5) See results
http://localhost:8000/hello.html
````

&nbsp

##### Create portable .exe
````bash
# Create a portable .exe on Windows

# Needed: 
- WinRAR
- A project folder containing the needed .dlls and other dependencies along with
the .exe.
- A .ico file for the .exe ( OPTIONAL )

1. Select all the files in a folder where the .exe is located.
2. Right click -> Add to archive.
3. General -> Browse -> set output location ( for example /Desktop )
4. General -> check 'Create SFX archive'
5. General -> Compression method -> Best
6. Advanced -> SFX options... -> Setup -> copy the .exe name to 
"Run after extraction"-field.
7. Modes -> check 'Unpack to temporary folder'
8. Modes -> select 'Hide all'
9. Update -> select 'Overwrite all files'
10. Text and icon -> Browse the lower of the 'Load XFS icon from file' fields ->
select icon for the .exe.
11. Click OK for the 'Advanced SFX options'
12. Click OK for the 'Archive name and parameters'


# There should now be a single .exe on the /Desktop ( Or the location you selected )

# Sources:
https://www.youtube.com/watch?v=EB-itJKvN5M
````

&nbsp

##### Miscellaneous
````bash
# Record all the steps taken to produce an error
Win + R -> psr
````

&nbsp

##### Windows mysql-nodejs setup
````bash
# Install MySQL server:
1. Download the installer.
2. Run
3. On the mysql installer, choose legacy authentication if you want to connect from NodeJS

# Setup test table:
1 Open mysql shell
2. \connect root2@localhost?connect-timeout=2000
3. \sql
4. create database test:
5. use test;
6. CREATE TABLE example ( id smallint unsigned not null auto_increment, name varchar(20) not null, constraint pk_example primary key (id) );
7. INSERT INTO example ( id, name ) VALUES ( null, 'Sample data' );
8. select * from example;
9. (OPTIONAL) if nodejs authentication fails:
ALTER USER 'root2'@'localhost' IDENTIFIED BY 'password';
ALTER USER 'root2'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';


# NodeJS:
1. npm install mysql --save

############## app.js ##############
const express = require("express");
var mysql = require('mysql'); 

let app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(express.static(__dirname+"/public_www"));
app.listen(8080);

console.log("Running in port 8080");
####################################
````

&nbsp

---






