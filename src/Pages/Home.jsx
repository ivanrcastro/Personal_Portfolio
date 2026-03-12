import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HomeSection } from "../components/HomeSection";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle className="fixed hidden sm:block top-5 right-5 z-50"/>
            {/* Navbar */}
            <Navbar/>
            {/* Main content */}
            <main>
                <HomeSection/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    ) 
};

export default Home;