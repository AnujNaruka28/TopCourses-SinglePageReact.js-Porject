import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const CourseCard = (props) => {
    let c=props.c;
    let liked=props.liked;
    let setLike=props.setLike;
    if(!c) return null;

    function clickHandler() {
        if(liked.includes(c.id)){
            setLike(liked.filter((cid) => cid !== c.id));
            toast.warning(`Like Removed.`)
        }else{
            if(liked.length === 0){
                liked.push([c.id]);
            }else{
                setLike([...liked,c.id]);
                toast.success(`Liked Successfully.`);
            }
        }
    }
    return (

        <div 
        className="w-[300px] bg-bgDark rounded-md 
        overflow-hidden bg-opacity-80"> 

            <div className="relative">

                <img src={c.image.url} alt={c.image.alt} />

                <div>

                    <button className="w-[40px] h-[40px] bg-white rounded-full 
                    absolute right-2 -bottom-4 grid place-items-center"
                    onClick={clickHandler}>

                    {
                        (liked.includes(c.id)) ? ( <FcLike fontSize={'1.75rem'}/> ) : ( <FcLikePlaceholder fontSize={'1.75rem'}/> )
                    } 
                    
                    </button>

                </div>

            </div>

            <div
            className="p-4">

                <p className="text-white font-semibold
                text-lg leading-6">

                    {c.title}

                </p>

                <p
                className="mt-2 text-white">

                    {
                        ( c.description.length > 100 ) ? ( `${c.description.substr(0,100)}...` ) : ( c.description )
                    }

                </p>

            </div>

        </div>

    ); 
};

export default CourseCard;