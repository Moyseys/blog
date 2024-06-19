import express, { Express } from 'express';

class Aplication{
  private readonly _app = express()

  constructor(){
    
  }

  get app(): Express{
    return this._app
  }
}

export default Aplication