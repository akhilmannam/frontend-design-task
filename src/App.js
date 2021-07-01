import "./App.css";
import News from "./components/News";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import CourseInfo from "./components/CourseInfo";
import Steps from "./components/Steps";
import Cards from "./components/Cards";
import Reasons from "./components/Reasons";
import Header from "./components/Header";
import TestYourself from "./components/TestYourself";

function App() {
	return (
		<>
			<Header></Header>
            <TestYourself></TestYourself>
			<Cards></Cards>
			<Reasons></Reasons>
			<Steps></Steps>
			<CourseInfo></CourseInfo>
			<Courses></Courses>
			<News></News>
			<Testimonial></Testimonial>
			<Footer></Footer>
		</>
	);
}

export default App;
