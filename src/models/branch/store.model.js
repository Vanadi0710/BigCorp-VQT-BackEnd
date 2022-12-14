import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const schema = new mongoose.Schema(
  {
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch"
    },
    storeName: String,
    isTempStore: {
      type: Boolean,
      default: false
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductInstance",
      },
    ],
  },
  {
    timestamps: true,
  }
);

schema.plugin(paginate);
const StoreModel = mongoose.model("Store", schema);

module.exports = StoreModel;
