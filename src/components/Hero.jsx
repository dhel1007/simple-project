import React from "react";
import heroImage from "../assets/lot-status-hero.png";

const Hero = () => {


    return (
        <section id="#" className="relative overflow-hidden bg-linear-to-br from-white via-blue-50 to-sky-100">

            {/* Background decoration */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

            <div className="relative mx-auto grid min-h-175 max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">

                {/* LEFT CONTENT */}
                <div className="z-10">

                    {/* Accent line */}
                    <div className="mb-6 h-1.5 w-16 rounded-full bg-blue-600" />

                    {/* Heading */}
                    <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Online
                        <span className="block text-blue-600">
                            Verification of
                        </span>
                        
                        <span className="block text-gray-600">
                            Lot Status
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                        Easily verify the status of your lot
                        anytime, anywhere.
                    </p>

                    {/* Features */}
                    <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">

                        {/* Feature 1 */}
                        <div className="flex flex-col gap-2">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 7v5l3 2" />
                                </svg>
                            </div>

                            <span className="text-sm font-medium text-slate-700">
                                Fast & Convenient
                            </span>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col gap-2">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </div>

                            <span className="text-sm font-medium text-slate-700">
                                Secure Access
                            </span>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col gap-2">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 3h9l4 4v14H6z" />
                                    <path d="M14 3v5h5" />
                                    <path d="M9 13h6M9 17h4" />
                                </svg>
                            </div>

                            <span className="text-sm font-medium text-slate-700">
                                Real-Time Updates
                            </span>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-10">
                        <button
                            onClick={() => {
                                // Navigate to lot status page
                            }}
                            className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
                        >
                            Check Your Lot Status

                            <svg
                                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14" />
                                <path d="M13 6l6 6-6 6" />
                            </svg>
                        </button>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex items-center justify-center lg:justify-end">

                    {/* Glow */}
                    <div className="absolute h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

                    <img
                        src={heroImage}
                        alt="Online Lot Status Application"
                        className="relative w-full max-w-2xl object-contain drop-shadow-2xl"
                    />

                </div>

            </div>
        </section>
    );
};

export default Hero;