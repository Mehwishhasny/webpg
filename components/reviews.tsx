
import Image from 'next/image';

export function Reviews() {
    return (
        <div className="relative flex flex-col items-center gap-4 sm:h-screen min-h-screen w-full mb-14">
            <h2 className="sm:text-3xl text-2xl font-bold text-blue-800 text-center">TESTIMONIALS</h2>

            <div className="flex w-full sm:mt-20 mt-10 flex-col sm:flex-row">
                <div className="sm:w-1/2 w-full flex sm:justify-start justify-center">
                    <Image 
                        src="/images/review.png" 
                        alt="reviews" 
                        height={700} 
                        width={700} 
                        className="object-contain max-w-full h-auto"
                    />
                </div>

                <div className="sm:w-1/2 w-full grid sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center">

                    <div className="flex flex-col items-center mb-6">
                        <Image
                            src="/images/client2.jpg"
                            alt="client"
                            height={200}
                            width={200}
                            className="rounded-full object-cover"
                        />
                        <p className="font-lg text-center mt-4 text-black"> Best performance! <br /> Had a great experience with the team. </p>
                    </div>

                    <div className="flex flex-col items-center mb-6">
                        <Image
                            src="/images/client4.jpg"
                            alt="client"
                            height={200}
                            width={200}
                            className="rounded-full object-cover"
                        />
                        <p className="font-lg text-center mt-4 text-black"> Superior design! <br /> Had a great experience with the team. </p>
                    </div>

                    <div className="flex flex-col items-center mt-8">
                        <Image
                            src="/images/client1.jpg"
                            alt="client"
                            height={200}
                            width={200}
                            className="rounded-full object-cover"
                        />
                        <p className="font-lg text-center mt-4 text-black"> Great support! <br /> Had a great experience with the team. </p>
                    </div>

                    <div className="flex flex-col items-center mt-8">
                        <Image
                            src="/images/client3.jpg"
                            alt="client"
                            height={200}
                            width={200}
                            className="rounded-full object-cover"
                        />
                        <p className="font-lg text-center mt-4 text-black"> Fantastic service! <br /> Had a great experience with the team. </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
