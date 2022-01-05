

const CategoryItem = ({category}) => {
    return (
        <div
      className="rounded-md before:pt-[100%] before:block relative"
      style={{ backgroundColor: category.color }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="px-4 text-2xl tracking-tighter font-semibold">
          {category.title}
          <img
            src={category.cover}
            alt=""
            className="shadow-spotify w-[100px] h-[100px] rotate-[25deg] absolute right-0 bottom-0 translate-x-[18%] translate-y-[-2%]"
          />
        </h3>
      </div>
    </div>
    )
}

export default CategoryItem
