import CourseCard from "./CourseCard";
import Loader from "./Loader";
import { useEffect,useState } from "react";
import { toast } from "react-toastify";

const Courses = (props) => {

    const [courses,setCourses] = useState({});
    const [loader, setLoader] = useState(true);
    const [like, setLike] = useState([]);
    const [errorValue,setErrorValue] = useState(false);

    useEffect(() => {
        const fetchCourses=async() => {
            setLoader(true);
            try {
                const response=await fetch(props.courseUrl);
                const coursesData=await response.json();
                setCourses(coursesData.data);
            } catch (error) {
                setErrorValue(true);
                toast.error(`Something went wrong.`);
            }
            setLoader(false);
        }
        fetchCourses();
    },[props.courseUrl]);

    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        if(props.categoryValue === "All"){
            let combinedCourses=[];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => combinedCourses.push(course))
            })
            setAllCourses(combinedCourses);
        }else{
            (Object.keys(courses).length === 0) ? setErrorValue(true) : setAllCourses(courses[props.categoryValue]);
        }
        
    },[courses,props.categoryValue])
    
    return (

        <div
        className="w-11/12 max-w-[1200px] mx-auto flex
            justify-center items-center min-h-[50vh] flex-wrap">
            
            <div
            className="flex flex-wrap justify-center gap-4 mb-4">
                
                {
                    (loader) ? 
                    (
                        <Loader/>
                    ) 
                    : 
                    ( 
                        (allCourses.length === 0 || errorValue) ? 
                        ( 
                        <div
                        className="text-white font-bold text-3xl"> 
                            No Data Found
                        </div>
                        ) 
                        :
                        (
                            allCourses.map((course) => <CourseCard c={course} key={course.id}
                            liked={like} setLike={setLike}/>)
                        )
                    )
                }

            </div>
            
        </div>

    );
};

export default Courses;