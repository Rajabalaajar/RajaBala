Download all the files mentioned in the URL(Except Website1 folder).
1. Extract "Inventory.zip"
1a. Open "Script.sql.txt" and Run the script in a MSSQL Database server
2. Copy the extracted folders "Inventory API", "Inventory UI" into some directory.
3. Open IIS and Add two new sites "Inventory API" and "Inventory UI" and map the physical path mentioned step 2 respectively.
4. Use any port number to host the site
5. After the site configuration, Select "Inventory API" and then click "Browse"
6. The site will be opened in the default browser in the computer(ex Chrome), Copy the URL and goto "Inventory UI" site's physical location.
7. Open "Config.js" file and assign the URL to the variable "BaseURL".
8. Goto to "Inventory API" physical location and open "web.config" file.
9. Locate the key "ConString" and verify the database details mentioned in Setp 1a.
10. Click on "Inventory UI" site and then click browse.
