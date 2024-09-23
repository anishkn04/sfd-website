document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://raw.githubusercontent.com/noskofficial/sfd-resources/refs/heads/main/nosk-sfd-2024/data/schedule.json",
  )
    .then((response) => response.json())
    .then((data) => {
      const scheduleSection = document.getElementById("schedule");
      scheduleSection.innerHTML = "";

      data.forEach((event, index) => {
        // Create HTML structure for each event
        let eventHTML = `
                <div class="relative p-4 my-6 card ${index % 2 === 0 ? "md:col-start-1 md:col-end-7 md:mr-auto" : "md:col-start-7 md:col-end-13 md:ml-auto"}">
                    <p class="text-blue-400 text-sm mb-2">${event.time}</p>
                    <h3 class="text-xl font-semibold lg:text-2xl">${event.title}</h3>
                    <div class="flex items-center mt-4">
                       <!-- <img src="${event.speaker.image}" alt="${event.speaker.name}" class="w-12 h-12 rounded-full mr-4"> -->
                        <div>
                            <p class="font-semibold">${event.speaker.name}</p>
                            <p class="text-gray-400 text-sm">${event.speaker.title}</p>
                        </div>
                    </div>
                    <span class="absolute text-sm font-bold text-[#DAA520] -top-5 left-2 whitespace-nowrap">${event.date}</span>
                </div>
            `;

        // Insert the timeline indicator with dark yellow color
        let timelineHTML = `
                <div class="relative col-start-6 col-end-7 mx-auto">
                    <div class="flex items-center justify-center w-6 h-full">
                        <div class="w-1 h-full bg-[#DAA520]"></div>
                    </div>
                    <div class="absolute w-6 h-6 -mt-3 bg-[#DAA520] border-4 border-[#DAA520] rounded-full top-1/2"></div>
                </div>
            `;

        // Combine and insert into the schedule section
        scheduleSection.innerHTML += `
                <div class="flex md:contents ${index % 2 === 0 ? "flex-row-reverse" : ""}">
                    ${index % 2 === 0 ? eventHTML : timelineHTML}
                    ${index % 2 === 0 ? timelineHTML : eventHTML}
                </div>
            `;
      });
    })
    .catch((error) => console.error("Error fetching the events:", error));
});
