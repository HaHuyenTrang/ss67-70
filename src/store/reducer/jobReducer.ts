// khởi tạo state
import { JobTodo} from "../../interface";
// let stateJob:JobTodo[]=[
//     {
//         id:1,
//         name:"học hành",
//         status:false,
//         level:"9",
//     },
//     {
//         id:2,
//         name:"học tập",
//         status:false,
//         level:"1",
//     },
//     {
//         id:3,
//         name:"học văn",
//         status:false,
//         level:"5",
//     }
// ];
let stateJob:JobTodo[]=JSON.parse(localStorage.getItem("jobs")||"[]");
// tạo hàm tính toán
const jobReducer=(state=stateJob,action:any)=>{
    switch(action.type){
        case "ADD_TODO":
            localStorage.setItem(
                "jobs",
                JSON.stringify([...state,action.payload])
            )
            return [...state,action.payload];
        case "UPDATE_TODO":
            // return [...state];
            return state.map(job => {
                if (job.id === action.payload.id) {
                    return {
                        ...job,
                        status: !job.status
                    };
                }
                return job;
            });
        case "DELETE":
            return [...state];
        default:
            return state
    }
}
export default jobReducer;