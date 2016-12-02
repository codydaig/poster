# poster

Simple API that allows a user to post and get messages. API uses mySQL for a data base.

## List of functionality

1. General/POST - adds user (if needed), and message
  * Accepts an object -
  * {
    userName: "SomeCoolAssName",
    firstName: "Dude",
    lastName: "Cool",
    userPost: "123 Tie my shoe."
  *}

2. General/GET - gets all messages
  * Sends back an array of JSON data.

3. FilterMessagesByUsername/GET - gets all messages posted by a passed in userName.
  * takes parameters in the url - /filterMessagesByUsername?userName='daUserName'

4. FilterMessagesById/GET - gets a single message based on it's id
  * takes parameters in the url - /filterMessageById?id='1'

5. Update/PUT - updates a message based on its id
  * Accepts an object -
  * {
  * id: '1',
  * userPost: 'this replaces the original'
  * }

6. Update/DELETE - deletes and entire message based on its id.
  * Accepts and object -
  * {
  * id: '1',
  * }
