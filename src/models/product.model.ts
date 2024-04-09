import { Schema, model } from "mongoose";
import { Product } from "../interfaces/product.interface";

const ItemSchema = new Schema<Product>(
{
    title: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    }, 
    images: {
        type: String,
        require: true
    }   
},
{
    timestamps: true,
    versionKey: false
}
);

const ItemModel = model('productos', ItemSchema);
export default ItemModel;
