# Hypixel SkyBlock Solo Dungeons Bot

__**DISCLAIMER**__: __I am not responsible for any of your accounts in case they get banned!__

### Features

- Works with both ~~Mojang (including legacy) and~~ **Update**: This seems to no longer be the case seeing the Mojang auth servers no longer allow you to log in with mojang accounts but just Microsoft accounts
- Only whitelisted people can use your bot
- Automatically accepts parties

### What does this do

This bot allows you to play solo dungeons on Hypixel SkyBlock

### How to Install and Run

0. Download and Install [NodeJS](https://nodejs.org/)
1. Download the latest release [[zip](https://github.com/McMelonTV/hypixel-skyblock-solo-dungeons-bot/archive/refs/tags/1.0.3.zip)] [[tar.gz](https://github.com/McMelonTV/hypixel-skyblock-solo-dungeons-bot/archive/refs/tags/1.0.3.tar.gz)]
2. Extract the download file to a folder
3. Put your bot account details and allowed users into config.json
4. Run ```npm install``` inside the extracted folder
5. Run ```node .``` inside the extracted folder
6. Have fun!

### How to use

First set up the bot by following the steps above and then send a party request to the bot account - `/p <username>`, then join a dungeon and you will be able to play solo

### Known Bugs

- The Bot will not party you if it is currently in a party with someone else `Will be fixed in v1.1.0`
- The Bot will not party you if you have a rank on hypixel due to it trying to party the whole name with the rank `Will be fixed in v1.1.0`
