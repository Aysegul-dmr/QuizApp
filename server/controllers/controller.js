import Questions from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import questions,{ answers } from "../database/data.js";

export const getQuestions=async(req,res)=>{
   try {
    const q = await Questions.find();
    res.json(q)
   } catch (error) {
        res.json({error})
   }
}

export const insertQuestions=async(req,res)=>{
    
        Questions.insertMany({ questions, answers })
            .then((err,data)=>{
                res.json({ msg: "Data Saved Successfully...!"})
            })
            .catch(err=>{res.json({err})})
    
}
export const dropQuestions=async(req,res)=>{
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

export const getResult=async(req,res)=>{
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export const storeResult=async(req,res)=>{
    const { username, result, attempts, points, achived } = req.body;
    if(!username && !result) throw new Error('Data Not Provided...!');

    Results.create({ username, result, attempts, points, achived })
        .then((err,data)=>{
            res.json({ msg : "Result Saved Successfully...!"})
        })
        .catch(err=>{res.json({err})})  
}

export const dropResult=async(req,res)=>{
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}