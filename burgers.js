document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const changeStatusBtn = document.querySelectorAll('.change-devoured');


    if (changeStatusBtn) {
        changeStatusBtn.forEach((button) => {
            button.addEventListener('click',(e) => {
            const id = e.target.getAttibute("data-id");
            console.log(id);
            const newState =
            {
                devoured: 1,
            };

            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(newState),
            }).then((response) => {
                if (response.ok) {
                    console.log(`changed devoured to: 1`);
                    location.reload('/');
                } else {
                    alert("ERROR! something went wrong.");

                }
            });
        });
    });
}
});