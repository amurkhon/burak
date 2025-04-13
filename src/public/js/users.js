console.log("Users frontend javascript file");

$(function () {
    $(".member-status").on("change", async function (e) {
        const id = e.target.id,
         memberStatus = $(`#${id}.member-status`).val();

        try {
            const response = await axios.post('/admin/user/edit', {_id:id, memberStatus:memberStatus});
            const result = response.data;
            if(result.data) {
                console.log("User updated!");
                $(".member-status").blur();
            } else alert("User updated failed!");
        } catch(err) {
            console.log("Error, memberStatus: ", err);
        }

    })
}); 