# BenderBot - A discord bot

A JS bot for [Discord](https://discordapp.com/) using the [node.js module that allows you to interact with the Discord API](https://discord.js.org/#/).

If you'd like to run your own version of this project check the [installation part](#run-the-bot-yourself)

You can play/test it on discord 
[![Discord](https://discordapp.com/api/guilds/365760529899192322/widget.png)](https://discordapp.com/oauth2/authorize?client_id="NTM0MzIwMjc1NzEwNDEwNzY2.Dx344g.i-pQZFo7Dx93XVjjQ9rcZsyCi5k&scope=bot)


### Commands

Commands are prefixed with a " " 
For a list of commands in discord the **help** command can be used.


Current list of all available commands. See below for a more detailed list

Commands | | | | |
--- | --- | ---| ---| ---
[meme](#meme) | [ban](#ban) |[D4](#D4) | [D6](#D6) | [D20](#D20) | [help](#help)  | 



## Run the bot yourself


Continue with the following steps.

<p>To run Javascript code outside of a webpage, you need <a href="https://nodejs.org/en/">Node</a>.
Download it, install it, and make sure it works in a terminal (or Command Prompt, as all of this should work 
on Windows systems). The default command is “node.”</p>

<p>We also recommend installing the&nbsp;nodemon tool. It’s a command line app that monitors your bot’s code and restarts automatically on changes. You can install it by running the following command:</p>

<pre>npm i -g nodemon</pre>

<p>You’ll need a text editor. You could just use notepad, but we recommend either <a href="http://atom.io">Atom</a> or <a href="https://code.visualstudio.com/">VSC</a>.</p>

<p>Head over to your terminal, and run the following command: </p>

<p> This starts up the script, and also fires up the Chrome debugger, which you can access by
typing chrome://inspect/  into Chrome’s Omnibar and then opening “dedicated devtools for Node.” </p>

Now just add the bot to your discord server.

<pre>nodemon --inspect index.js</pre>


## Command details

### meme

Display a pic of a meme

Aliases: meme

### D4

roll a dice of 4

Aliases: D4

#### D6

roll a dice of 4

Aliases: D4

#### D20

roll a dice of D20

Aliases: D20

### help

An attempt to help out

Aliases: help


