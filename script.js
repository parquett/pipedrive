    document.getElementById('submitBtn').addEventListener('click', async function(e) {
        e.preventDefault();

        const data = {
            title: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
            person_id: {
                name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
                phone: [{ value: document.getElementById('phone').value }],
                email: [{ value: document.getElementById('email').value }]
            },
            org_id: {
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zip_code: document.getElementById('zipCode').value,
                area: document.getElementById('area').value
            },
            job_type: document.getElementById('jobType').value,
            job_source: document.getElementById('jobSource').value,
            job_description: document.getElementById('jobDescription').value,
            start_date: document.getElementById('startDate').value,
            start_time: document.getElementById('startTime').value,
            end_time: document.getElementById('endTime').value,
        };

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                alert('Deal saved successfully!');
            } else {
                alert('Failed to save deal: ' + result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving the deal.');
        }
    });
