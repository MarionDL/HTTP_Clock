# HTTP_Clock
 
Author : Marion Dutu Launay

Date : May 19th

## About

This docker app contains a clock server and a client who can ask for the current time or change the server's time, with different formats : html, json or xml. The server will answer with the choosen format.

## Usage

After building the images with the script, you can either ask for the current time or change the server's time.

To ask :

`docker run clock-client <format>`

To change :

`docker run clock-client <format> <hh:mm>`
