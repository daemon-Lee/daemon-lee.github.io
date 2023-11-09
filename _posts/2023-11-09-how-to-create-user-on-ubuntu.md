---
title: "How to create user on ubuntu"
categories:
  - ubuntu-setup
tags:
  - bash
  - shell-script
---

# Steps to Add User on Ubuntu

## Step 1: Create New User
1. Log into the system with a root user or an account with sudo privileges.

2. Open a terminal window and add a new user with the command:
```
adduser newuser
```
The `adduser` command creates a new user, plus a group and home directory for that user.

You may get an error message that you have insufficient privileges. (This typically only happens for non-root users.) Get around it by entering:
```
sudo adduser newuser
```


3. You can replace `newuser` with any username you wish. The system will add the new user; then prompt you to enter a password. Enter a great secure password, then retype it to confirm.

4. The system will prompt you to enter additional information about the user. This includes a name, phone numbers, etc. – these fields are optional, and can be skipped by pressing Enter.

## Step 2: Add User to group
Most Linux systems, including Ubuntu, have a user group for sudo users. To grant the new user elevated privileges, add them to the sudo group.

In a terminal, enter the command:
```
usermod -aG sudo newuser
```
Replace `newuser` with the username that you entered in Step 1.

Again, if you get an error, run the command with sudo as follows:
```
sudo usermod -aG sudo newuser
```
The `-aG` option tells the system to `append` the user to the specified `group`. (The `-a` option is only used with `G`.)

## Step 3: Verify User Belongs to Sudo Group
Enter the following to view the groups a user belongs to:
```
groups newuser
```
The system will respond by listing the username and all groups it belongs to, for example: `newuser : newuser sudo`

## Step 4: Verify Sudo Access
Switch users by entering:
```
su - newuser
```
Replace `newuser` with the username you entered in Step 1. Enter your password when prompted. You can run commands as normal, just by typing them.

For example:
```
ls /home
```
However, some commands or locations require elevated privileges. If you try to list the contents of the `/root` directory, you’ll get an access denied error: `ls /root`

The command can be executed with:
```
sudo ls /root
```
The system will prompt for your password. Use the same password you set in Step 1. You should now see the contents of the `/root` directory.