import Aplication from "./app"

const aplication = new Aplication()
const app = aplication.app

const port = 3000
app.listen(3000, () => console.log(`Server is running => ${port}`))