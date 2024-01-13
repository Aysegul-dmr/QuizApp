

export const getQuestions=async(req,res)=>{
    res.json("questions api get request")
}

export const insertQuestions=async(req,res)=>{
    res.json("questions api post request")
}

export const dropQuestions=async(req,res)=>{
    res.json("questions api delete request")
}

export const getResult=async(req,res)=>{
    res.json("result api get request")
}

export const storeResult=async(req,res)=>{
    res.json("result api post request")
}

export const dropResult=async(req,res)=>{
    res.json("result api delete request")
}