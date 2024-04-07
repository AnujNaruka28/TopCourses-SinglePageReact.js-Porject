
const Filter = (props) => {

    const filterHandler = (categoryTitle) => props.setCategoryValue(categoryTitle) ;

    return (
        <div 
        className="w-11/12 flex flex-wrap max-w-max 
        space-x-4 gap-y-4 mx-auto py-4 justify-center">

            {
                props.data.map( (item) => 
                <button 
                key={item.id}
                onClick={() => filterHandler(item.title)}
                className={`text-lg px-2 py-1 rounded-md font-medium
                text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                ${(props.categoryValue === item.title) ? 
                    "bg-opacity-60 border-white" 
                    : "bg-opacity-40 border-transparent" 
                }`}>
                    {item.title}
                </button> 
                )
            }

        </div>
    );
};

export default Filter;