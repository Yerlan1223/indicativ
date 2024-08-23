document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display research articles
    fetch('/api/articles')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('article-container');
            data.forEach(article => {
                const div = document.createElement('div');
                div.classList.add('article');
                div.innerHTML = `
                    <h3>${article.title}</h3>
                    <p><strong>Authors:</strong> ${article.authors}</p>
                    <p><strong>Journal:</strong> ${article.journalTitle}</p>
                    <p><strong>Publication Date:</strong> ${new Date(article.dateOfPublication).toLocaleDateString()}</p>
                    <p><strong>Scopus Link:</strong> <a href="${article.scopusLink}" target="_blank">${article.scopusLink}</a></p>
                    <p><strong>PDF:</strong> <a href="${article.pdfUrl}" target="_blank">Download PDF</a></p>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching article data:', error));

    // Fetch and display KPIs
    fetch('/api/kpis')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('kpi-container');
            data.forEach(kpi => {
                const div = document.createElement('div');
                div.classList.add('kpi');
                div.innerHTML = `
                    <h3>${kpi.indicatorTitle}</h3>
                    <p><strong>Measuring Unit:</strong> ${kpi.measuringUnit}</p>
                    <p><strong>Score:</strong> ${kpi.score}</p>
                    <p><strong>Planning Value:</strong> ${kpi.planningValue}</p>
                    <p><strong>Factual Value:</strong> ${kpi.factualValue}</p>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching KPI data:', error));
});