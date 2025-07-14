import './HomeElements.css';
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";

const ProjectsCard = ({isDarkMode}) => {
    return (
        <Card styles={[`home-card section-card ${isDarkMode ? 'dark' : 'light'}`]}>
            <h2>Projects</h2>
            <p>
                Here are some of the projects I have worked on. You can find more details and the source code on my GitHub.
            </p>
            <Row>
                <Column>
                </Column>
            </Row>
            <Line />
        </Card>
    );
}

export default ProjectsCard;