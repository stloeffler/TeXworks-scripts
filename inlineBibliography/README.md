"Inline Bibliography" script for TeXworks

Description
===========

This script allows inline a bibliography from a .bbl file to remove the
dependency of the .tex file on external bilibography resources. This is often
required by scientific journals.



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

Click on the "Scripts > Inline bibliography" menu item. If a .bbl file with the
same name as your .tex file is found, its content is inserted at the current
cursor position. If not, a dialog is opened for you to pick a suitable file (for
this to work, you may need to enable the "Allow scripts to read all files"
option in the preferences).

Note: Don't forget to remove/comment any "\bibliography" line(s) afterwards!
