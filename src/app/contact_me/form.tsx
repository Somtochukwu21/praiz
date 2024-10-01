// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../components";

interface FormData {
	name: string;
	email: string;
	message: string;
}
export const Form = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");

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

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitMessage("");
		try {
			const result = await emailjs.send(
				"service_wy3jmfd",
				"template_8eyi98f",
				{
					from_name: formData.name,
					from_email: formData.email,
					message: formData.message,
				},
				"EIjoH4eYO1yQseyCR"
			);

			console.log(result.text);
			setSubmitMessage("Message sent successfully!");

			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Error sending email:", error);
			setSubmitMessage("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
		console.log("Form submitted:", formData);
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
					disabled={isSubmitting}
					className="w-full py-4 px-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ">
					{isSubmitting ? "Sending..." : "Send Message"}
				</Button>
			</div>

			{submitMessage && (
				<p
					className={`mt-4 text-center ${
						submitMessage.includes("successfully")
							? "text-green-600"
							: "text-red-600"
					}`}>
					{submitMessage}
				</p>
			)}
		</form>
	);
};

 