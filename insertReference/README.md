"Insert Reference" script for TeXworks

Description
===========

This script shows a list of known labels. The user can select one to quickly
insert it.



Prerequisites
=============

- [TeXworks](http://www.tug.org/texworks/)



Installation
============

Simply put the script file into the "scripts" folder (or one of its subfolders).
You can find the "scripts" folder most easily by using the "Scripts > Scripting
TeXworks > Show Scripts Folder" menu item in TeXworks itself.
Afterwards, you need to click on "Scripts > Scripting TeXworks > Reload Script
List" or restart TeXworks.



Usage
=====

Click on the "Scripts > Insert reference" menu item. A dialog should pop up with
a list of known labels to select from. Pick one an press "Ok" to insert it.

Note: The script uses the main .aux file to obtain the list of labels, so make
sure you have saved and TeX'ed your source file at least once. This also implies
that labels created since the last TeX run will not show up in the list.
