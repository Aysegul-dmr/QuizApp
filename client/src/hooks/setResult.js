import { pushResultAction, updateResultAction } from "../redux/result_reducer"

export const pushAnswer=(result)=> async(dispatch)=>{
    try {
        await dispatch(pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult=(index)=>async(dispatch)=>{
    try {
        dispatch(updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}