"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../components";

interface FormData {
	name: string;
	email: string;
	message: string;
}

export const ContactMe: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div className="min-h-screen bg-gray-900 flex items-stretch justify-center relative overflow-hidden">
			{/* Enhanced starry background effect */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(400)].map((_, i) => (
					<div
						key={i}
						className="absolute bg-white rounded-full animate-twinkle"
						style={{
							width: Math.random() * 3 + "px",
							height: Math.random() * 3 + "px",
							top: Math.random() * 100 + "%",
							left: Math.random() * 100 + "%",
							animationDelay: `${Math.random() * 5}s`,
						}}></div>
				))}
			</div>

			<div className="w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-2xl z-10 flex flex-col md:flex-row">
				<div className="md:w-1/2 p-12 flex flex-col justify-center items-center md:items-start">
					<h1 className="text-5xl font-bold text-white mb-8 text-center md:text-left">
						Contact Us
					</h1>
					<p className="text-xl text-gray-300 mb-12 max-w-2xl text-center md:text-left">
						Have questions or want to collaborate? Reach out to me and
						let&apos;s explore the cosmic possibilities together. I always ready
						for the next big adventure!
					</p>
					<div className="flex space-x-8 mb-12">
						<div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
							<svg
								className="w-8 h-8 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
							<svg
								className="w-8 h-8 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
							<svg
								className="w-8 h-8 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className="md:w-1/2 p-12 bg-white bg-opacity-10 flex items-center justify-center">
					<form onSubmit={handleSubmit} className="space-y-8 w-full max-w-2xl">
						<div>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Name"
								required
								className="w-full px-6 py-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
							/>
						</div>
						<div>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email"
								required
								className="w-full px-6 py-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
							/>
						</div>
						<div>
							<textarea
								id="message"
								name="message"
								rows={8}
								value={formData.message}
								onChange={handleChange}
								placeholder="Message"
								required
								className="w-full px-6 py-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"></textarea>
						</div>
						<div>
							<Button
								type="submit"
								className="w-full py-4 px-8"
								// className="w-full bg-purple-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
							>
								Send Message
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
