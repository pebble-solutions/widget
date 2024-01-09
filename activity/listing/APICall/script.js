const ApiTargetContainer = document.getElementById("ApiTargetContainer");

function formatActivityTime(startDateTime, endDateTime) {
    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);

    const startFormated = startDate.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    let formatedTime = ` ${startFormated}`;

    if (endDateTime) {
        const endFormated = endDate.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        const isSameDay = startDate.toDateString() === endDate.toDateString();
        
        if (isSameDay) {
            formatedTime += `  > ${endDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
        } else {
            formatedTime += `  > ${endFormated}`;
        }
    } else {
        formatedTime += " En cours ";
    }

    return formatedTime;
}

function ApiCall() {
    fetch("https://activity-utuvyi37ea-ew.a.run.app/v5/activity/")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erreur : " + response.status);
            }
            return response.json();
        })
        .then((data) => {
            data.forEach((activity) => {
                const activityDiv = document.createElement("div");
                const label = document.createElement("h2");
                const details = document.createElement("p");
                const description = document.createElement("p");

                if (activity.label !== null) {
                    label.textContent = activity.label;
                    activityDiv.appendChild(label);
                }

                if (activity.start !== null && activity.end !== null) {
                    const formatedTime = formatActivityTime(activity.start, activity.end);
                    details.textContent = formatedTime;
                    activityDiv.appendChild(details);
                }

                if (activity.description !== null) {
                    description.textContent = `${activity.description}`;
                    activityDiv.appendChild(description);
                }

                if (activity.label !== null || (activity.start !== null && activity.end !== null) || activity.description !== null) {
                    ApiTargetContainer.appendChild(activityDiv);

                    const line = document.createElement("hr");
                    ApiTargetContainer.appendChild(line);
                }
            });
        })
        .catch((error) => {
            console.error("Erreur lors de la requête", error);
        });
}

if (ApiTargetContainer) {
  ApiCall();
} else {
  console.info("INFO : ce script fonctionne via l'ID 'ApiTargetContainer'et il n'a pas été trouvé dans le document HTML.");
}
