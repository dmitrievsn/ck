function fetchCarData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log("Car Data:", data);
                alert(JSON.stringify(data, null, 2));
            } catch (error) {
                console.error("Error parsing JSON:", error);
                alert("Ошибка при обработке данных.");
            }
        } else {
            console.error("Error fetching data:", xhr.statusText);
            alert("Ошибка при получении данных: " + xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error("Request failed");
        alert("Ошибка сети.");
    };
    xhr.send();
}
fetchCarData();