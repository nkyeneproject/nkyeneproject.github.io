import { SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";
import { HiEnvelope } from "react-icons/hi2";

export default function Footer() {
	return (
		<footer className="bg-teal-3 text-white py-6">
			<div className="flex justify-center gap-6">
				<a href="https://www.instagram.com/nkyene_project/" target="_blank">
					<SiInstagram className="w-6 h-6 hover:opacity-80" />
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=61578812706898#"
					target="_blank">
					<SiFacebook className="w-6 h-6 hover:opacity-80" />
				</a>
				<a
					href="https://www.linkedin.com/company/the-nkyene-project"
					target="_blank">
					<SiLinkedin className="w-6 h-6 hover:opacity-80" />
				</a>
				<a href="mailto:info@nkyeneproject.org">
					<HiEnvelope className="w-6 h-6 hover:opacity-80" />
				</a>
			</div>
		</footer>
	);
}
