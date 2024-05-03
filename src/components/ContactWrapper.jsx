import InfoBoxes from './InfoBoxes'
import EmailForm from './EmailForm'

export default function ContactWrapper() {
    return (
        <div>
            <section id="contact" className="px-4 sm:px-8 contact flex justify-center">

                <div className="container">
                    <div className='flex lg:flex-row lg:justify-center items-center flex-col gap-10'>
                        <InfoBoxes />
                        <EmailForm />
                    </div>

                </div>

            </section>
        </div>
    )
}