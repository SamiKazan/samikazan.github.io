export function AboutMePage() {
  
    return (
        <div id="about" className="-mt-50">
            <h1>Sami Kazan</h1>
            <h3 className="mt-6">  Currently completing my Masters degree in Data science at the University of Helsinki, 
                with a strong passion for data analysis, full-stack development and technology.</h3>

            <ul className="mt-6">
                <li className="mt-2">
                    <a 
                        href="/CV_ENG.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    > Resume
                    </a>
                </li>
                <li className="mt-1"><a href="https://www.linkedin.com/in/kazansami/">Linkedin</a></li>
                <li className="mt-1"><a href="https://github.com/SamiKazan">Github</a></li>
                <li className="mt-1"><a href="mailto:samihkazan@gmail.com" target="_blank" rel="noopener noreferrer" role="link">Email</a></li>
            </ul>
        </div>
    )
}