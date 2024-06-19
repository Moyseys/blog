import express, { Express } from 'express';

class Aplication{
  private readonly _app = express()

  constructor(){
    
  }

  middleware(){
    this._app.use(express.json())
    this._app.use(express.urlencoded({extended: true}))
  }

  get app(): Express{
    return this._app
  }
}

export default Aplication