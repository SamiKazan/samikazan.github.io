
export function ProjectsPage() {
  
    return (
        <div id="projects" className="-mt-50">
        <h1>Projects</h1>
        <div className="mt-6">
            <h2>Blogsite</h2>
            <p>Simple blogsite made using Python Flask, postgreSQL and docker</p>
            <a href="https://blogisite-l151.onrender.com">https://blogisite-l151.onrender.com</a>
        </div>
        <div className="mt-4">
            <h2>Wine recommender (pocket sommelier)</h2>
            <p>Data science group project taht recommends 5 wines based on input tastes. More details about the project can be found <a href="https://github.com/Ruokavalitys/rv-management-update-frontend">here.</a></p>
            <a href="https://pocket-sommellier.onrender.com">https://pocket-sommellier.onrender.com</a>
        </div>
        <div className="mt-4">
            <h2>ImageScraper</h2>
            <p>Webscraping tool for getting clusters of MRI images from <a href="https://radiopaedia.org/">https://radiopaedia.org/</a>.
             More details can be found <a href="https://github.com/SamiKazan/ImageScraper">here.</a></p>
        </div>
        <div className="mt-4">
            <h2>Software engineering project</h2>
            <p>Created frontend for student organisation snack kiosk management as a group project using Typescript, nextjs and docker. More details can be found <a href="https://github.com/Ruokavalitys/rv-management-update-frontend">here.</a></p>
        </div>
        </div>
    )
}