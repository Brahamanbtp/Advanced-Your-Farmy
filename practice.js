function openTutorial(topic) {
    const content = {
        cropRotation: `
            <h3>Crop Rotation Techniques</h3>
            <p>Crop rotation is a vital practice to maintain soil health and optimize yield. This tutorial covers various rotation strategies, including:</p>
            <ul>
                <li>Legume-Grain Rotation</li>
                <li>Vegetable-Fallow Rotation</li>
                <li>Cover Crops</li>
            </ul>
            <p>Proper rotation prevents soil depletion and controls pests and diseases naturally.</p>
        `,
        waterManagement: `
            <h3>Efficient Water Management</h3>
            <p>Water management is essential for sustainable farming. Learn about:</p>
            <ul>
                <li>Drip Irrigation Techniques</li>
                <li>Rainwater Harvesting</li>
                <li>Soil Moisture Monitoring</li>
            </ul>
            <p>Optimizing water usage can reduce costs and enhance crop production.</p>
        `,
        pestControl: `
            <h3>Pest Control Strategies</h3>
            <p>Protect your crops with effective pest control strategies. Topics include:</p>
            <ul>
                <li>Natural Pest Predators</li>
                <li>Organic Pesticides</li>
                <li>Integrated Pest Management (IPM)</li>
            </ul>
            <p>These methods help minimize chemical use while keeping crops healthy.</p>
        `
    };

    document.getElementById("tutorialContent").innerHTML = content[topic];
    document.getElementById("tutorialModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("tutorialModal").style.display = "none";
}
