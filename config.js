const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923264274230" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923243157605";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923264274230";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_30_01_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDAsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA2LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQkRZTk5hSExQM1ZWRFJVTUlqenY5Y0JuczRFQ0FNeU5BMDZoN0hhWFY2WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNjQyNzQyMzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZCMTE4MDBDMTMzRTI3QzhDNjc5ODUzRUM4MTA4QzFCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNzA0NDk5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI2NDI3NDIzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTY0NkI2MEUzMEQxRUIzMDkyQTMyQTYxNjFCODA2NDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM3MDQ1MDAyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZ3dmZ3MGdMUXRlUTJrcWd0eWg5UHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTI4NDMxNmItZTBjNC00YTk0LThlMGMtNjNiZThmOTU2MTExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDUxLFxuICAgICAgMTIzLFxuICAgICAgMTIzLFxuICAgICAgMTA0LFxuICAgICAgMTY5LFxuICAgICAgMjA4LFxuICAgICAgNTksXG4gICAgICA5NixcbiAgICAgIDE5NixcbiAgICAgIDc3LFxuICAgICAgMTIwLFxuICAgICAgMTA1LFxuICAgICAgMTU5LFxuICAgICAgMTM3LFxuICAgICAgNixcbiAgICAgIDUzLFxuICAgICAgNzQsXG4gICAgICA1OCxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAyNDYsXG4gICAgICAyMDEsXG4gICAgICAzMyxcbiAgICAgIDE5OSxcbiAgICAgIDEwOCxcbiAgICAgIDY1LFxuICAgICAgMTc3LFxuICAgICAgNDksXG4gICAgICAyMjksXG4gICAgICAyNDMsXG4gICAgICAyMSxcbiAgICAgIDIsXG4gICAgICAxMzgsXG4gICAgICAxMzYsXG4gICAgICAxOTUsXG4gICAgICAyMjksXG4gICAgICA5NCxcbiAgICAgIDE1MCxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBIRllXTTNYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNjQyNzQyMzA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzIxMDAxODY0ODA4NTY6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNci4gU2FhZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ051Tmc1OEZFSURvcEx3R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSk95UGFnMTBXd25SQUNsbHM2Y0dSMmpmSmRIN3JTSVU0K05yMGJ0WGtSMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlZ1hiV1h4NEdaNlU2eUthSCtiYk0yVXFDZ1ljQW1tdEJBMXNrNmgzQWEyU0M3d0MxTE55elVCY2ZmUmZnZjkyYUM3S2xhUy9vVjZQU1d6ZkdyYlZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIWUU2Y1RFRXlXbGx2c0NQdnd5WUUvQS9kcnhyZGdZb1Q1UlI1WHRMcE5KcGI5bFJ3alRrS09JZzUwcjFCODgxSUFlNFcvUmQvaFFMRkpuVGFXRXNoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNjQyNzQyMzA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM3MDQ0OTk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXdPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNd08uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtaWJqdzhSMFJVR21GaFFMZmVodThWYnViL3UzZGNlOXR3bjArc09tR2lJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MDcyMzk4OTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNzA0NDk5NjQ0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
