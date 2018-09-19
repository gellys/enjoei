const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('/produto/0044/checkout/8800')
})

app.get('/produto/:produtoId/checkou/:checkoutId', (req,res) => {
    res.sendFile('index.html')
})

const produto = {
    id: 0044,
    descricao : 'camiseta adidas feminina',
    valor: 100,
    img: 'https://res-5.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/ckvqkjzfq2pxhusqzvla.jpg'
}

const cupom = {
    id : 0012,
    descricao : 'black friday',
    valor : 12
}

const checkout = {
    id: 8800,
    produtoId: 0044,
    frete: 20,
    cupomUsado: [cupom]
}



app.listen(3001, () => {
    console.log('Servidor em http://localhost:3001')
    console.log('Pra desligar o nosso servidor : crtl + c')
});