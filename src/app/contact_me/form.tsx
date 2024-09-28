import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../components";

interface FormData {
	name: string;
	email: string;
	message: string;
}
export const Form = () => {
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
					className="input"
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
					className="input"
				/>
			</div>
			<div>
				<textarea
					id="message"
					name="message"
					rows={8}
					className="input"
					value={formData.message}
					onChange={handleChange}
					placeholder="Message"
					required></textarea>
			</div>
			<div>
				<Button
					type="submit"
					className="w-full py-4 px-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ">
					Send Message
				</Button>
			</div>
		</form>
	);
};
