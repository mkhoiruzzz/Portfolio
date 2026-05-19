import { resumeData } from "@/lib/data";

export default function About() {
    return (
        <div className="section pattern">
            <div className="container">
                <div className="modal-wrapper">
                    <div className="modal-header">
                        <div className="button-circles-wrap">
                            <div className="button-circle"></div>
                            <div className="button-circle"></div>
                        </div>
                        <div>about-me.txt</div>
                    </div>
                    <div className="modal-body">
                        <div className="container-width-medium">
                            <h1>Hi, I'm {resumeData.profile.name}!</h1>
                            <div className="rich-text-block w-richtext">
                                <p className="text-lg mb-6">{resumeData.profile.bio}</p>

                                <h2>Education</h2>
                                {resumeData.education.map((edu, idx) => (
                                    <div key={idx} className="mb-6 border-l-4 border-black pl-4">
                                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                                        <p className="font-medium">{edu.degree}</p>
                                        <p className="text-gray-600">{edu.year} | CGPA: {edu.cgpa}</p>
                                        <p className="text-sm mt-2"><strong>Coursework:</strong> {edu.coursework}</p>
                                    </div>
                                ))}

                                <h2>Contact</h2>
                                <p>
                                    Email: <a href={`mailto:${resumeData.profile.email}`}>{resumeData.profile.email}</a><br />
                                    Sort of Phone: {resumeData.profile.phone}<br />
                                    Location: {resumeData.profile.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
