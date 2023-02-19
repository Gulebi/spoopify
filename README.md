# Spoopify

### To run the application you need to:

1. Open 2 terminals in the project folder.
2. In the first terminal run the command `cd front`, then run the command `npm install`.
3. In the second terminal run the command `cd server`, then run the command `npm install`.
4. Add a file `.env` to the `front` folder, and in it write:

```
VITE_API_URL="http://localhost:3000"
```

5. Add file `.env` to `server` folder, and in it write:

```
PORT=3000
MONGODB_URI="Your MongoDB URI"
```

6. Run in both terminals the command "npm run dev"
