const app = express();
let listenPort = process.env.PORT || 3000;

app.listen(listenPort, ()=> {
  console.log("server running on port "+ listenPort);
})