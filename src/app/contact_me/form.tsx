import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "../../components";

interface FormData {
	name: string;
	email: string;
	message: string;
}

const initialFormData: FormData = { name: "", email: "", message: "" };

export const Form = () => {
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await emailjs.send(
				"service_wy3jmfd",
				"template_8eyi98f",
				{
					from_name: formData.name,
					from_email: formData.email,
					message: formData.message,
				},
				"EIjoH4eYO1yQseyCR"
			);

			toast.success("Message sent successfully!", {
				className: "text-green-600",
			});
			setFormData(initialFormData);
		} catch (error) {
			console.error("Error sending email:", error);
			toast.error("Failed to send message. Please try again.", {
				className: "text-red-600",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-8 w-full max-w-2xl">
			{["name", "email"].map((field) => (
				<input
					key={field}
					type={field === "email" ? "email" : "text"}
					id={field}
					name={field}
					value={formData[field as keyof FormData]}
					onChange={handleChange}
					placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
					required
					className="input w-full"
				/>
			))}
			<textarea
				id="message"
				name="message"
				rows={8}
				value={formData.message}
				onChange={handleChange}
				placeholder="Message"
				required
				className="input w-full"
			/>
			<Button
				type="submit"
				disabled={isSubmitting}
				className="w-full py-4 px-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
				{isSubmitting ? "Sending..." : "Send Message"}
			</Button>
		</form>
	);
};
