import {BiCloudDownload} from 'react-icons/bi'

const Download = () => {
    return (
        <a href='#' className='flex flex-shrink-0 items-center gap-x-4 px-3 cursor-pointer font-semibold text-sm text-link hover:text-white'>
            <BiCloudDownload className='text-3xl ' />
            <span>Uyqulamayı Yüklə</span>
        </a>
    )
}

export default Download
