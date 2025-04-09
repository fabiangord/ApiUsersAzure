import express from 'express'
import { HandlerUserRouter } from './routes/handler-user.router';

class Server {
    private app: express.Application;
    private port: number;

    constructor(){
        this.app = express();
        this.port = 3000;
        this.config();
        this.routes();
        this.start();
    }

    private config(): void {
        this.app.use(express.json());
    }
      
    private routes(): express.Router[] {
       return [
        new HandlerUserRouter().route
       ]
    }
     
    public start(): void {
        this.app.listen(this.port, () => {
          console.log(`Server on ${this.port}`);
        });
    }
}

void new Server();