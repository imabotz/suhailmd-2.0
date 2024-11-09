const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="imaxzofc@gmail.com"
global.location="Colombo,Srilanka."


global.mongodb= process.env.MONGODB_URI || "true" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©SUHAIL-MD" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94784924900";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94784924900";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_42_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpR2Z6YVpRUXhTa0ZJN3JJVGNDTzJTV3FLZk1lcXRjTUl3cDBDbnlBTHpJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg0OTI0OTAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NzFFOTI1OTkwQjc0MjQzNTZFQUVDNDFEOTAwMjA1QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzExNTYxMjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4NDkyNDkwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0QwNTZBNzM4RjAzQjE5RTNGNUU5ODlCMjM2MkM3NUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMTU2MTI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNGTWk0cFJnVG4ydF9JdW1zY2dObGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODBkN2Q0NDEtZGM1ZC00NmNkLTliMjctMmQ3ZTVkYTk0N2M3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDQ2LFxuICAgICAgMTAzLFxuICAgICAgMTgyLFxuICAgICAgMTUwLFxuICAgICAgMTQwLFxuICAgICAgMTEzLFxuICAgICAgMTg5LFxuICAgICAgNDcsXG4gICAgICAxMzAsXG4gICAgICAyMTcsXG4gICAgICAxODMsXG4gICAgICAyMDMsXG4gICAgICAyMjcsXG4gICAgICAyMjAsXG4gICAgICAzOSxcbiAgICAgIDIzNCxcbiAgICAgIDI1MSxcbiAgICAgIDIsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMzksXG4gICAgICAyOCxcbiAgICAgIDI1MyxcbiAgICAgIDY2LFxuICAgICAgMjEwLFxuICAgICAgMTA5LFxuICAgICAgMTE2LFxuICAgICAgMjA4LFxuICAgICAgMzcsXG4gICAgICAxODQsXG4gICAgICA5OSxcbiAgICAgIDEyMCxcbiAgICAgIDk5LFxuICAgICAgMTgwLFxuICAgICAgMjI5LFxuICAgICAgNzYsXG4gICAgICAxMjUsXG4gICAgICAxOTIsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEMzQzZZSEhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg0OTI0OTAwOjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSeG0jUFfQuG0j+G0m1rhtKJ6XCIsXG4gICAgXCJsaWRcIjogXCIxNzg3NjEzMzcxODQyNTg6NTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZSeVlNQkVKYXh2YmtHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXUC8zNUJEZkJqYllSRXhTbGJnS3RzS0pzUDVib3ppUzNaaHRSTnFzejNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIks3QmNhY2dIMUdMd1ZKKzdmRTlJVGQyZzdHK0FHODJCM21ZYjBSSms0bVNCU0libFN0NlJFWFpDandKUFY0MmN4T2RpK0RnWnNMMWtpNVFtL3JEb0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZqN3IwYnNGN1JnT0JYK2ZqRmVlWXRLS3FkbFUvWS8rclQxREhKdE1ZekhIVHJ6RDZ1ZFJ1U2pFMkhXZ0ZxVGJmSzFVYzJCSlR4RmdPZ2l6NEx1NGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg0OTI0OTAwOjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTU2MTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFpRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEWlEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhR29GTmFsVnhzK1VxOUU2QUZkVTlQRzhGejZWWVU1ZEZVN2lhaUpLT09NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3NTkzMzMxNyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "@Ima_Xzz_OFC",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "`@Ima_OFFICIAL`",


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
