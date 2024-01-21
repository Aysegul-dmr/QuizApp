import { postServerData } from "../helper/helper"
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

export const usePublishResult = (resultData) => {

    const { result, username } = resultData;
    (async () => {
        try {
            if(result != [] && !username) throw new Error("Couldn't get Result");
            await postServerData(`${import.meta.env.VITE_SERVER_HOST}/api/result`, resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}