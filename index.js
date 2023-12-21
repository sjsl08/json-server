const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const dotenv = require("dotenv").config


const app = express()

app.use(cors())

app.use(morgan("dev"))


const data = {
    "imports": {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
      "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js",
      "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js",
      "@app/root-config": "https://cdn.jsdelivr.net/gh/sjsl08/MicroFrontend-Container@gh-pages/app-root-config.js",
      "@app/react": "https://cdn.jsdelivr.net/gh/sjsl08/Microfrontend-react@gh-pages/app-react.js"
    }
  }

  app.get("*",(req,res)=>{
    res.json(data)
  })

app.listen(process.env.PORT|5000,()=>{
    console.log(`server on ${process.env.PORT | 5000}`);
})