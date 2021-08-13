/*

#3 Task - Design the API

[Description]
  - Create API endpoints: 
    - GET  /asset: Retrieves all of the assetIds stored
    - GET  /asset/{id]: Retrieves asset details by id (secured with token)
    - POST /asset/{id}/token: Generates token that is valid for that specific asset only for 15 minutes.

[Prerequisites]
  - If asset is fetched with valid token - asset object & specific code should be returned
  - If asset is fetched with wrong or expired token - specific code should be returned
  - Feel free to use any web framework you want

*/

const LIST_OF_ASSETS = [
    { id: 1, name: 'Asset number 1 - name', description: 'Asset number 1 - description' },
    { id: 2, name: 'Asset number 2 - name', description: 'Asset number 2 - description' },
    { id: 3, name: 'Asset number 3 - name', description: 'Asset number 3 - description' },
    { id: 4, name: 'Asset number 4 - name', description: 'Asset number 4 - description' },
    { id: 5, name: 'Asset number 5 - name', description: 'Asset number 5 - description' },
    { id: 6, name: 'Asset number 6 - name', description: 'Asset number 6 - description' },
    { id: 7, name: 'Asset number 7 - name', description: 'Asset number 7 - description' },
    { id: 8, name: 'Asset number 8 - name', description: 'Asset number 8 - description' },
    { id: 9, name: 'Asset number 9 - name', description: 'Asset number 9 - description' },
];
