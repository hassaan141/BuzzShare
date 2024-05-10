const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://hassaanfarooqi2000:buzzshare@cluster0.rrbcqpc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

const userSchema = mongoose.Schema({
  username: String, 
  name: String,
  email: String, 
  password: String, 
  age: Number,
  profilepic:{
    type:String,
    default: "default.jpg"
  },
  posts : [{type: mongoose.Schema.Types.ObjectId, ref:'post'}]
})

module.exports = mongoose.model("user", userSchema)