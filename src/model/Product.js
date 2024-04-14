import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
        lowercase: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    ativo: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false
});

const Product = mongoose.model('Product', productSchema, 'produto');

export default Product;