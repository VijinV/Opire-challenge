
import ReactDOM from 'react-dom';
import ProfileCard from '../component/card';
import { sampleProfile } from '../data';
import '../index.css'

// Function to render the card into a specified DOM node
function renderCard(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
        console.error(`No element found with id "${targetId}"`);
        return;
    }
    ReactDOM.render(<ProfileCard {...sampleProfile}/>, targetElement);
}

// Automatically render the card in the div with id="profile" if present
document.addEventListener('DOMContentLoaded', () => {
    const defaultTargetId = 'opire-dev-card';
    const defaultTarget = document.getElementById(defaultTargetId);
    if (defaultTarget) {
        renderCard(defaultTargetId);
    }
});

// Export for manual usage if needed
export { renderCard };
