const Register = async(req,res)=>{
    res.send("This register routr");

}
const Login = async(req,res)=>{
    res.send("This login routr");
}
const Logout = async(req,res)=>{
    res.send("This logout routr");
}

module.exports ={
    Register,
    Login,
    Logout,
}