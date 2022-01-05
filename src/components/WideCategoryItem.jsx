

const WideCategoryItem = ({category}) => {
    return (
        <div
        className="rounded-lg relative w-[27.375rem] h-[13.75rem] flex-shrink-0"
        style={{ backgroundColor: category.color }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <h3 className="px-4 text-[2.5rem] tracking-tighter font-semibold">
            {category.title}
            <img
              src={category.cover}
              alt=""
              className="shadow-spotify w-32 h-32 rotate-[25deg] absolute right-0 bottom-0 translate-x-[18%] translate-y-[-2%]"
            />
          </h3>
        </div>
      </div>
    )
}

export default WideCategoryItem
