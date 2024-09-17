require('dotenv').config(); 
const express = require('express');  
const app = express();   
const cors = require('cors');    
const PORT = process.env.PORT || 5000; 

app.use(cors());    
app.use(express.json());    

const url = 'https://newsapi.org/v2/everything?q='; 
const API_KEY = process.env.API_KEY;     


app.post('/news', async function (req,res) {

    const {topic} = req.body;    
    const response = await fetch(`${url}${topic}&apiKey=${API_KEY}`); 

    const data = await response.json();  

    const final = data.articles.filter(article => article.title !== "[Removed]").map(article => ({

        source : article.source.name, 
        title : article.title,
        description: article.description,
        imageurl : article.urlToImage,   
    }));

    res.json({

      article : final,   
    }); 
   

})

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});  


