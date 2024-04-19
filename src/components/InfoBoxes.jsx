import { FaPhone, FaClock, FaAddressBook, FaEnvelope } from 'react-icons/fa'

export default function InfoBoxes() {
    return (
        <div className='flex sm:flex-row sm:justify-center sm:w-auto sm:items-center flex-col gap-10'>
            <div className="flex flex-col gap-10">
                <a href='tel:7506806734' className="info-box">
                    <FaPhone className='text-white text-4xl' />
                    <h3>Call Me</h3>
                    <p>+91 75068 06734</p>
                </a>
                <a href='mailto:alstonsoares17@gmail.com' className="info-box">
                    <FaEnvelope className='text-white text-4xl' />
                    <h3>Email Me</h3>
                    <p>alstonsoares17@gmail.com</p>
                </a>
            </div>
        </div>
    )
}