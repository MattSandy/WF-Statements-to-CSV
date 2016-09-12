# Wells Fargo Statements to CSV

This command line tool was created to scan through my Wells Fargo PDF statements to look for transactions over a specified dollar amount and write them to a seperate CSV file.

## Usage

1. Save PDF statements to ./tax inside the app.js folder.
2. Edit the minimum dollar amount for transactions to be included (set to 70 currently)
3. node app.js {integer}

##Output

| Date   | Description               | Amount               |
|----------|---------------------------|
| 5/5/15   | 272 - Check               | 970               |
| 4/17/15   | ...               | 521               |
| 3/26/15   | ...               | 500               |
